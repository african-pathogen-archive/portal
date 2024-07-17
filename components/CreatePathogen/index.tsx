import { Button, Form, Input, InputNumber, InputNumberProps, Modal, Space } from 'antd';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import { authorizedApiRequest } from '@/global/utils/api';
import toast, { ToastType } from '@/global/utils/toast';

type FieldType = {
	commonName?: string;
	scientificName?: string;
	schema?: string;
	schemaVersion?: number;
};

type PropsInterface = {
	refetchPathogens: Function;
};

const CreatePathogen: React.FC<PropsInterface> = ({ refetchPathogens }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [commonName, setCommonName] = useState('');
	const [scientificName, setScientificName] = useState('');
	const [schema, setSchema] = useState('');
	const [schemaVersion, setSchemaVersion] = useState<number>(0);
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

	const onChange: InputNumberProps['onChange'] = (value) => {
		if (typeof value == 'number') {
			setSchemaVersion(value);
		}
	};

	const createPathogen = async (values: FieldType) => {
		setLoading(true);
		await authorizedApiRequest(HttpMethods.POST, API_ROUTES_PATHS.PATHOGENS, {
			common_name: commonName,
			scientific_name: scientificName,
			schema: schema,
			schema_version: schemaVersion?.toString(),
		})
			.then(() => {
				toast(ToastType.SUCCESS, 'Pathogen created successfully');
				setLoading(false);
				setIsModalOpen(false);
				refetchPathogens();
			})
			.catch((error) => {
				console.error(error);
				toast(ToastType.ERROR, error?.message);
				setLoading(false);
			});
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
					Add new pathogen
				</Button>

				<Modal
					title="Add new pathogen"
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
							label="Common name"
							name="Common name"
							rules={[{ required: true, message: 'Common name is required' }]}
						>
							<Input
								value={commonName}
								onChange={(e) => setCommonName(e.target.value)}
								placeholder="Common name"
							/>
						</Form.Item>
						<Form.Item
							label="Scientific name"
							name="Scientific name"
							rules={[{ required: true, message: 'Scientific name is required' }]}
						>
							<Input
								value={scientificName}
								onChange={(e) => setScientificName(e.target.value)}
								placeholder="Scientific name"
							/>
						</Form.Item>
						<Form.Item label="Schema" name="Schema" rules={[{ required: false }]}>
							<Input
								value={schema}
								onChange={(e) => setSchema(e.target.value)}
								placeholder="Schema"
							/>
						</Form.Item>
						<Form.Item label="Schema Version" name="Schema version" rules={[{ required: false }]}>
							<InputNumber
								style={{ width: '100%' }}
								value={schemaVersion}
								onChange={onChange}
								placeholder="Schema version"
							/>
						</Form.Item>
						<Form.Item style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
							<Button loading={loading} size="large" block type="primary" htmlType="submit">
								Add new pathogen
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</Space>
		</div>
	);
};

export default CreatePathogen;
