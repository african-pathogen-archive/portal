import { Button, Form, Input, InputNumber, InputNumberProps, Modal, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import { apiRequest, authorizedApiRequest } from '@/global/utils/api';
import toast, { ToastType } from '@/global/utils/toast';

type pathogenData = {
	id: string;
	common_name: string;
	schema: string;
	schema_version: number;
	scientific_name: string;
};

type PropsInterface = {
	id: string;
	refetchPathogens: Function;
};

const UpdatePathogen: React.FC<PropsInterface> = ({ id, refetchPathogens }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [commonName, setCommonName] = useState('');
	const [scientificName, setScientificName] = useState('');
	const [schema, setSchema] = useState('');
	const [schemaVersion, setSchemaVersion] = useState<number>(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		apiRequest(HttpMethods.GET, API_ROUTES_PATHS.PATHOGENS)
			.then((data) => {
				const dataArr: pathogenData[] = data;
				dataArr.forEach((patho) => {
					if (patho.id === id) {
						setCommonName(patho.common_name);
						setScientificName(patho.scientific_name);
						setSchema(patho.schema);
						setSchemaVersion(patho.schema_version);
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
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

	const onChange: InputNumberProps['onChange'] = (value) => {
		if (typeof value == 'number') {
			setSchemaVersion(value);
		}
	};

	const createPathogen = async () => {
		setLoading(true);
		await authorizedApiRequest(HttpMethods.PUT, `${API_ROUTES_PATHS.PATHOGENS}/${id}`, {
			common_name: commonName,
			scientific_name: scientificName,
			schema: schema,
			schema_version: schemaVersion?.toString(),
		})
			.then((respo) => {
				toast(ToastType.SUCCESS, 'Pathogen updated successfully');
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
		<div className="" style={{ width: '100%' }}>
			<Toaster />
			<Space
				size={'small'}
				direction={'horizontal'}
				style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0 }}
			>
				<Button type="default" shape="circle" icon={<EditOutlined />} onClick={showModal} />
				<Modal
					title="Update pathogen"
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
						initialValues={{
							commonName: commonName,
							schema: schema,
							schemaVersion: schemaVersion,
							scientificName: scientificName,
						}}
					>
						<Form.Item
							label="Common Name"
							name="Common name"
							initialValue={commonName}
							rules={[{ required: true, message: 'Common name is required' }]}
						>
							<Input
								value={commonName}
								onChange={(e) => setCommonName(e.target.value)}
								placeholder="Common name"
							/>
						</Form.Item>
						<Form.Item
							label="Scientific Name"
							name="Scientific name"
							rules={[{ required: true, message: 'Scientific name is required' }]}
							initialValue={scientificName}
						>
							<Input
								value={scientificName}
								onChange={(e) => setScientificName(e.target.value)}
								placeholder="Scientific name"
							/>
						</Form.Item>
						<Form.Item
							initialValue={schema}
							label="Schema"
							name="Schema"
							rules={[{ required: false }]}
						>
							<Input
								value={schema}
								onChange={(e) => setSchema(e.target.value)}
								placeholder="Schema"
							/>
						</Form.Item>
						<Form.Item
							initialValue={schemaVersion}
							label="Schema Version"
							name="Schema version"
							rules={[{ required: false }]}
						>
							<InputNumber
								style={{ width: '100%' }}
								value={schemaVersion}
								onChange={onChange}
								placeholder="Schema version"
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
								Update pathogen
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</Space>
		</div>
	);
};

export default UpdatePathogen;
