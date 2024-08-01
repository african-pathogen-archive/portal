/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import { useState, useEffect } from 'react';
import { Card, Divider, Modal, Typography } from 'antd';
import { useRouter } from 'next/router';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Toaster } from 'react-hot-toast';

import { authorizedApiRequest } from '@/global/utils/api';
import { API_ROUTES_PATHS, HttpMethods, INTERNAL_PATHS } from '@/global/utils/constants';
import toast, { ToastType } from '@/global/utils/toast';

import useAuthContext from '../../global/hooks/useAuthContext';
import UpdateProject from '../ProjectUpdate';
import ProjectInviteUsers from '../ProjectInviteUsers';
import Studies from '../StudiesTable';

const { Title } = Typography;

const CardDivColumn: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
};

type Project = {
	title?: string;
	projectId?: string;
	pathogen?: {
		commonName?: string;
		scientificName?: string;
	};
	description?: string;
	owner?: string;
	users?: [];
	studyCount?: number;
};

type User = {
	firstName: string;
	lastName: string;
};

function convertToTableData(responseData: any): Project {
	return {
		title: responseData?.title,
		projectId: responseData?.pid,
		pathogen: {
			commonName: responseData?.pathogen?.common_name,
			scientificName: '',
		},
		description: responseData?.description,
		owner: responseData?.owner,
		users: [],
		studyCount: responseData?.study_count,
	};
}

const ProjectDetails: React.FC = () => {
	const [origin, setOrigin] = useState('');
	const [loading, setLoading] = useState(true);
	const [project, setProject] = useState<Project>();
	const [id, setId] = useState('');
	const [isGroupMember, setIsGroupMember] = useState<boolean>(false);
	const [username, setUsername] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { user } = useAuthContext();

	useEffect(() => {
		window && setOrigin(window.location.origin);
	}, []);

	const router = useRouter().query;
	const projectId = router['project-id'];

	useEffect(() => {
		getProject();
		if (typeof projectId === 'string') {
			setId(projectId);
		}
	}, []);

	const userIsGroupMember = (group?: string[], id?: string) => {
		const response = group?.filter((proj) => proj === id).length != 0 ? true : false;
		if (response) {
			setIsGroupMember(true);
		}
	};

	const getProject = () => {
		const url = `${API_ROUTES_PATHS.PROJECTS}/${projectId}`;
		if (projectId) {
			authorizedApiRequest(HttpMethods.GET, url)
				.then((data) => {
					authorizedApiRequest(HttpMethods.GET, API_ROUTES_PATHS.USERS)
						.then((datas) => {
							const user: User = [...datas.users].filter((da) => da.id === data.owner)[0];
							if (user) {
								setUsername(`${user?.firstName.split('')[0]}. ${user?.lastName}`);
							}
						})
						.catch((error) => console.log(error));
					userIsGroupMember(user?.groups, data?.admin_group);
					setProject(convertToTableData(data));
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const actions: React.ReactNode[] = [
		<>
			<DeleteOutlined
				key="ellipsis"
				color="red"
				onClick={() => showDeleteModal()}
				style={{ color: 'red' }}
			/>
			<span onClick={() => showDeleteModal()} style={{ color: 'red' }}>
				Delete
			</span>
		</>,
	];

	if (isGroupMember) {
		actions.unshift(<UpdateProject id={id} refetchProject={getProject} />);
	} else {
		actions.unshift(
			<>
				<EditOutlined key="edit" />
				<span>Edit</span>
			</>,
		);
	}

	const showDeleteModal = () => {
		setIsModalOpen(true);
	};

	const handleDeleteConfirmation = () => {
		authorizedApiRequest(HttpMethods.DELETE, `${API_ROUTES_PATHS.PROJECTS}/${id}`)
			.then((data) => {
				toast(ToastType.SUCCESS, 'Project successfully deleted');
				setTimeout(() => {
					location.href = INTERNAL_PATHS.PROJECTS;
				}, 500);
			})
			.catch((error) => console.log(error));
	};

	const handleDeleteCancellation = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Toaster />
			<Modal
				title="Confirm Delete"
				open={isModalOpen}
				onOk={handleDeleteConfirmation}
				onCancel={handleDeleteCancellation}
			>
				<p>Are you sure you want to delete?</p>
			</Modal>
			<Card
				loading={loading}
				actions={actions}
				style={{ minWidth: 300, marginTop: '40px', width: '70%' }}
			>
				<Card.Meta
					title={<Title level={3}>{project?.title}</Title>}
					description={
						<>
							<div style={CardDivColumn}>
								<span>Project ID</span>
								<code>{project?.projectId}</code>
							</div>
							<div style={CardDivColumn}>
								<span>Pathogen</span>
								<code>{project?.pathogen?.commonName}</code>
							</div>
							<div style={CardDivColumn}>
								<span>Created by:</span>
								<span>{username}</span>
							</div>
							<div style={CardDivColumn}>
								<span>Description:</span>
								<span style={{ textAlign: 'right', maxWidth: 600 }}>{project?.description} </span>
							</div>
							<Divider />
							<ProjectInviteUsers />
							<Divider />
							<Studies isGroupMember={isGroupMember} />
						</>
					}
				/>
			</Card>
		</>
	);
};

export default ProjectDetails;
