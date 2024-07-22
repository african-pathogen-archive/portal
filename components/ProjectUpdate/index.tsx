import { Button, Form, Input, InputNumber, InputNumberProps, Modal, Select, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import { apiRequest, authorizedApiRequest } from '@/global/utils/api';
import toast, { ToastType } from '@/global/utils/toast';

const { TextArea } = Input;

type Props = {
	id: string;
	refetchProject: Function;
};

type Pathogen = {
	value: string;
	label: string;
};

function convertToTableData(responseData: []): Pathogen[] {
	return responseData.map((element: any) => {
		return {
			value: element?.id,
			label: element?.common_name,
		};
	});
}

const UpdateProject: React.FC<Props> = ({ id, refetchProject }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [title, setTitle] = useState('');
	const [pid, setPid] = useState('');
	const [description, setDescription] = useState('');
	const [pathogenId, setPathogenId] = useState('');
	const [pathogens, setPathogens] = useState<any>([]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (id) {
			const url = `${API_ROUTES_PATHS.PROJECTS}/${id}`;
			apiRequest(HttpMethods.GET, url)
				.then((data) => {
					setTitle(data?.title);
					setPid(data?.pid);
					setDescription(data?.description);
					setPathogenId(data?.pathogen_id);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	useEffect(() => {
		apiRequest(HttpMethods.GET, API_ROUTES_PATHS.PATHOGENS)
			.then((data) => {
				setPathogens(convertToTableData(data));
			})
			.catch((error) => console.log(error));
	}, []);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const updateProject = async () => {
		setLoading(true);
		await authorizedApiRequest(HttpMethods.PUT, `${API_ROUTES_PATHS.PROJECTS}/${id}`, {
			title: title,
			pid: pid,
			description: description,
			pathogend_id: pathogenId,
		})
			.then((respo) => {
				toast(ToastType.SUCCESS, 'Project updated successfully');
				setLoading(false);
				setIsModalOpen(false);
				refetchProject();
			})
			.catch((error) => {
				console.error(error);
				toast(ToastType.ERROR, error?.message);
				setLoading(false);
			});
	};

	const handleChange = (value: { value: string; label: React.ReactNode }) => {
		setPathogenId(value?.value);
	};

	return (
		<div className="" style={{ width: '100%' }}>
			<Toaster />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<EditOutlined onClick={showModal} key="edit" />
				<span onClick={showModal} style={{ marginTop: '5px' }}>
					Edit
				</span>
			</div>

			<Modal
				title="Update Project"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={false}
			>
				<Form
					size="large"
					name="basic"
					style={{ minWidth: 400, margin: 'auto' }}
					onFinish={updateProject}
					layout="horizontal"
					autoComplete="off"
					labelCol={{ span: 7 }}
					initialValues={{
						title: title,
						pid: pid,
						description: description,
						pathogend_id: pathogenId,
					}}
				>
					<Form.Item
						label="Title"
						name="Title"
						initialValue={title}
						rules={[{ required: true, message: 'Title is required' }]}
					>
						<Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
					</Form.Item>
					<Form.Item
						label="Project ID"
						name="Project ID"
						rules={[{ required: true, message: 'Project ID is required' }]}
						initialValue={pid}
					>
						<Input value={pid} onChange={(e) => setPid(e.target.value)} placeholder="Project ID" />
					</Form.Item>
					<Form.Item
						initialValue={description}
						label="Description"
						name="Description"
						rules={[{ required: false }]}
					>
						<TextArea
							rows={4}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Description"
						/>
					</Form.Item>
					<Form.Item
						initialValue={pathogenId}
						label="Pathogen"
						name="Pathogen"
						rules={[{ required: true }]}
					>
						<Select
							labelInValue
							style={{ width: '100%' }}
							onChange={handleChange}
							options={pathogens}
						/>
					</Form.Item>
					<Form.Item style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
						<Button loading={loading} size="large" block type="primary" htmlType="submit">
							Update Project
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default UpdateProject;
