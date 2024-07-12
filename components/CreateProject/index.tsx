import { Button, Form, Input, Modal, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { API_ROUTES_PATHS, HttpMethods, INTERNAL_PATHS } from '@/global/utils/constants';
import { apiRequest, authorizedApiRequest } from '@/global/utils/api';
import toast, { ToastType } from '@/global/utils/toast';

const { TextArea } = Input;

type FieldType = {
	pid?: string;
	title?: string;
	description?: string;
	pathogenId?: string;
};

type DataType = {
	value: string;
	label: string;
};

function convertToTableData(responseData: []): DataType[] {
	return responseData.map((element: any) => {
		return {
			value: element?.id,
			label: element?.common_name,
		};
	});
}

const CreateProject: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [pathogens, setPathogens] = useState<any>([]);

	const [pid, setPid] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [pathogenId, setPathogenId] = useState('');

	const [loading, setLoading] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		apiRequest(HttpMethods.GET, API_ROUTES_PATHS.PATHOGENS)
			.then((data) => {
				setPathogens(convertToTableData(data));
			})
			.catch((error) => console.log(error));
	}, []);

	const createPathogen = async (values: FieldType) => {
		setLoading(true);
		authorizedApiRequest(HttpMethods.POST, API_ROUTES_PATHS.PROJECTS, {
			title: title,
			pid: pid,
			description: description,
			pathogen_id: pathogenId,
		})
			.then((data) => {
				console.log(data);
				setLoading(false);
				window.location.href = `${INTERNAL_PATHS.PROJECTS}/${data?.id}`;
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				toast(ToastType.ERROR, 'Error creating a project');
			});
	};

	const handleChange = (value: { value: string; label: React.ReactNode }) => {
		setPathogenId(value?.value);
	};

	return (
		<div style={{ width: '100%' }}>
			<Toaster />
			<Space
				size={'small'}
				direction={'horizontal'}
				style={{ display: 'flex', justifyContent: 'end', lineHeight: '0', marginBottom: '1rem' }}
			>
				<Button type="primary" size="middle" onClick={showModal}>
					Create new project
				</Button>

				<Modal
					title="Create new project"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={false}
				>
					<Form
						size="large"
						name="basic"
						style={{ minWidth: 400, margin: 'auto' }}
						onFinish={createPathogen}
						layout="horizontal"
						autoComplete="off"
						labelCol={{ span: 7 }}
					>
						<Form.Item
							label="Project ID"
							name="Project ID"
							rules={[{ required: true, message: 'Project ID is required' }]}
						>
							<Input
								value={pid}
								onChange={(e) => setPid(e.target.value)}
								placeholder="Project ID"
							/>
						</Form.Item>
						<Form.Item
							label="Title"
							name="Title"
							rules={[{ required: true, message: 'Title name is required' }]}
						>
							<Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
						</Form.Item>
						<Form.Item label="Description" name="Description" rules={[{ required: true }]}>
							<TextArea
								rows={4}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"
							/>
						</Form.Item>
						<Form.Item
							label="Pathogen ID"
							name="Pathogen ID"
							rules={[{ required: true, message: 'Please select a pathogen' }]}
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
								Create project
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</Space>
		</div>
	);
};

export default CreateProject;
