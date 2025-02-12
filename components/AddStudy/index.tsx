import { Button, Form, Input, Modal, Select, Space } from 'antd';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import toast, { ToastType } from '@/global/utils/toast';
import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import { authorizedApiRequest } from '@/global/utils/api';

const { TextArea } = Input;

type Props = {
	refetchStudies: Function;
};

const AddStudy: FC<Props> = ({ refetchStudies }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState<boolean>(false);

	const router = useRouter().query;
	const projectId = router['project-id'];

	const handleOk = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const resetFormValues = () => {
		form.setFieldsValue({ Study: '' });
		form.setFieldsValue({ Description: '' });
	};

	const [form] = Form.useForm();

	const createStudy = () => {
		setLoading(true);
		if (!projectId) {
			setLoading(false);
			return;
		}
		authorizedApiRequest(HttpMethods.POST, API_ROUTES_PATHS.STUDIES, {
			name: name,
			project_id: projectId,
			description: description,
		})
			.then((data) => {
				setLoading(false);
				toast(ToastType.SUCCESS, 'Study was successfully created');
				handleCancel();
				resetFormValues();
				refetchStudies();
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				toast(ToastType.ERROR, 'Error creating a study');
			});
	};

	return (
		<div>
			<Toaster />
			<Space size={'small'} direction={'horizontal'} style={{ marginBottom: '1rem' }}>
				<Button type="primary" size="middle" onClick={handleOk}>
					Add study
				</Button>

				<Modal
					title="Add new study"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={false}
				>
					<Form
						size="large"
						name="basic"
						form={form}
						style={{ minWidth: 400, margin: 'auto' }}
						onFinish={createStudy}
						layout="horizontal"
						autoComplete="off"
						labelCol={{ span: 7 }}
					>
						<Form.Item
							label="Study ID"
							name="Study"
							rules={[{ required: true, message: 'Study ID is required' }]}
						>
							<Input
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Study ID"
							/>
						</Form.Item>
						<Form.Item
							label="Description"
							name="Description"
							rules={[{ required: true, message: 'Description is required' }]}
						>
							<TextArea
								rows={4}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"
							/>
						</Form.Item>
						<Form.Item style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
							<Button size="large" loading={loading} block type="primary" htmlType="submit">
								Add new study
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</Space>
		</div>
	);
};

export default AddStudy;
