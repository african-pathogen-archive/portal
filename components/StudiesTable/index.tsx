import { Button, Space, Typography, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { authorizedApiRequest } from '@/global/utils/api';
import { API_ROUTES_PATHS, HttpMethods, INTERNAL_PATHS } from '@/global/utils/constants';

import AddStudy from '../AddStudy';

const { Title, Text } = Typography;

type Props = {
	isGroupMember: boolean;
};

interface Study {
	key: string;
	id: string;
	description?: string;
	numberOfSamples: number;
}

function convertToTableData(responseData: []): Study[] {
	return responseData.map((element: any) => {
		return {
			key: element.id,
			id: element?.study,
			description: element?.description,
			numberOfSamples: element?.number_of_samples,
		};
	});
}

const Studies: FC<Props> = ({ isGroupMember }) => {
	const [studies, setStudies] = useState<Study[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const router = useRouter().query;
	const projectId = router['project-id'];

	useEffect(() => {
		getStudies();
	}, []);

	const getStudies = () => {
		if (projectId) {
			authorizedApiRequest(HttpMethods.GET, `${API_ROUTES_PATHS.PROJECTS}/${projectId}/studies`)
				.then((data) => {
					setLoading(false);
					setStudies(convertToTableData(data));
				})
				.catch((error) => {
					setLoading(false);
					console.log(error);
				});
		}
	};

	const truncateDescription = (value?: string): string => {
		if (!value) {
			return '';
		}
		return value?.length > 50 ? value?.split('').slice(0, 50).join('').concat('...') : value;
	};

	const columns: ColumnsType<Study> = [
		{
			title: 'Study ID',
			dataIndex: 'id',
			key: 'study ID',
		},
		{
			title: 'Description',
			key: 'description',
			render: (_, record) => <Text>{truncateDescription(record?.description)}</Text>,
		},
		{
			title: 'No. of samples',
			key: 'numberOfSampled',
			dataIndex: 'numberOfSamples',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Link href={INTERNAL_PATHS.SUBMISSION}>Upload</Link>
				</Space>
			),
		},
	];
	return (
		<>
			<div style={{ width: '100%' }}>
				<Table
					columns={columns}
					dataSource={studies}
					style={{ width: '100%' }}
					loading={loading}
					bordered
					title={() => (
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<Title level={5}>Studies</Title>
							{isGroupMember && <AddStudy refetchStudies={getStudies} />}
						</div>
					)}
				/>
			</div>
		</>
	);
};

export default Studies;
