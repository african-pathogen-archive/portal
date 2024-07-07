import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { apiRequest, authorizedApiRequest } from '@/global/utils/api';
import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';
import useAuthContext from '@/global/hooks/useAuthContext';

import CreatePathogen from '../CreatePathogen';

interface DataType {
	key: string;
	pathogen: string;
	numberOfProjects: number;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Pathogen',
		dataIndex: 'pathogen',
		key: 'pathogen',
	},
	{
		title: 'No. of projects',
		key: 'numberOfProjects',
		dataIndex: 'numberOfProjects',
	},
	{
		title: '',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				{record.key && <Link href={`/pathogens/${record.key}`}>View</Link>}
			</Space>
		),
	},
];

function convertToTableData(responseData: []): DataType[] {
	return responseData.map((element: any) => {
		return {
			key: element.id,
			pathogen: element.common_name,
			numberOfProjects: element.project_count,
		};
	});
}

const PathogenTable: React.FC = () => {
	const [data, setData] = useState<any[]>([]);
	const [tableDataLoading, setTableDataLoading] = useState<boolean>(true);

	const { userHasProjectWriteAccess } = useAuthContext();

	useEffect(() => {
		getPathogens();
		return () => {
			setData([]);
		};
	}, []);

	const getPathogens = () => {
		apiRequest(HttpMethods.GET, API_ROUTES_PATHS.PATHOGENS)
			.then((data) => {
				setData(convertToTableData(data));
				setTableDataLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setTableDataLoading(false);
			});
	};

	return (
		<div style={{ width: '80%' }}>
			{userHasProjectWriteAccess && <CreatePathogen refetchPathogens={getPathogens} />}
			<Table
				columns={columns}
				dataSource={data}
				style={{ width: '100%' }}
				loading={tableDataLoading}
			/>
			;
		</div>
	);
};

export default PathogenTable;
