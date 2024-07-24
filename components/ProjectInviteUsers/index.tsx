import { Button, Form, Modal, Select, SelectProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import { authorizedApiRequest } from '@/global/utils/api';
import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import toast, { ToastType } from '@/global/utils/toast';

type User = {
	value: string;
	label: string;
};

function convertToTableData(responseData: []): User[] {
	return responseData.map((element: any) => {
		return {
			value: element?.id,
			label: `${element?.firstName} ${element?.lastName}`,
		};
	});
}

const ProjectInviteUsers: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [users, setUsers] = useState<SelectProps['options']>([]);
	const [loading, setloading] = useState(false);
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

	useEffect(() => {
		authorizedApiRequest(HttpMethods.GET, API_ROUTES_PATHS.USERS)
			.then((data) => {
				setUsers(convertToTableData(data?.users));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const router = useRouter().query;
	const projectId = router['project-id'];

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setSelectedUsers([]);
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setSelectedUsers([]);
		setIsModalOpen(false);
	};

	const handleChange = (value: string[]) => {
		setSelectedUsers([...value]);
	};

	const handleClear = () => {
		setSelectedUsers([]);
	};

	const InviteUsers = () => {
		setloading(true);
		const uniqueUsers = new Set(selectedUsers);
		const users = [...uniqueUsers];
		Promise.all(
			users.map((user) =>
				authorizedApiRequest(
					HttpMethods.POST,
					`${API_ROUTES_PATHS.PROJECTS}/${projectId}/users/${user}`,
				)
					.then((data) => console.log())
					.catch((error) => {
						console.log(error);
						throw error;
					}),
			),
		)
			.then((data) => {
				toast(ToastType.SUCCESS, 'Users are invited successfully');
				setloading(false);
				handleOk();
			})
			.catch((error) => {
				console.log(error);
				setloading(false);
			});
	};

	return (
		<>
			<Button onClick={() => showModal()} type="primary" icon={<UserAddOutlined />} ghost>
				Invite users to project
			</Button>
			<Modal
				title="Invite users to the project"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={false}
			>
				<Form
					size="large"
					name="basic"
					style={{ minWidth: 400, margin: 'auto' }}
					onFinish={InviteUsers}
					layout="horizontal"
					autoComplete="off"
					labelCol={{ span: 7 }}
				>
					<Form.Item label="Users" rules={[{ required: true, message: 'Please select users' }]}>
						<Select
							mode="multiple"
							onClear={handleClear}
							value={selectedUsers}
							style={{ width: '100%' }}
							placeholder="Please select users to invite"
							onChange={handleChange}
							options={users}
							showSearch
							optionFilterProp="label"
						/>
					</Form.Item>
					<Form.Item style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
						<Button
							disabled={!selectedUsers.length}
							loading={loading}
							size="large"
							block
							type="primary"
							htmlType="submit"
						>
							Invite users
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default ProjectInviteUsers;
