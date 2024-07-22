import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Space, Table, Tag, Typography, Input, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

import { authorizedApiRequest } from '@/global/utils/api';
import { API_ROUTES_PATHS, HttpMethods } from '@/global/utils/constants';

import useAuthContext from '../../global/hooks/useAuthContext';
import CreateProject from '../CreateProject';

const { Title, Text } = Typography;

interface DataType {
	key: string;
	pid: string;
	title: string;
	pathogen: string;
	studyCount: number;
	dateCreated: string;
	description: string;
}

function convertToTableData(responseData: any[]): DataType[] {
	return responseData.map((element: any) => {
		return {
			key: element.id,
			pid: element.pid,
			title: element.title,
			pathogen: element.pathogen?.common_name,
			studyCount: element.study_count,
			dateCreated: element.created_at,
			description: element.description,
		};
	});
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Project ID',
		dataIndex: 'pid',
		key: 'pid',
		sorter: (a, b) => a.pid.localeCompare(b.pid),
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title={record?.description}>
					<Text>
						<Link href={`/projects/${record.key}`}>{record.pid}</Link>
					</Text>
				</Tooltip>
			</Space>
		),
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder="Search Project ID"
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => confirm()}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Button onClick={() => confirm()}>Filter</Button>
			</div>
		),
		onFilter: (value, record) => record.pid.toLowerCase().includes(value.toString().toLowerCase()),
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title={record?.description}>
					<Text>{record.title}</Text>
				</Tooltip>
			</Space>
		),
		sorter: (a, b) => a.title.localeCompare(b.title),
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder="Search Title"
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => confirm()}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Button onClick={() => confirm()}>Filter</Button>
			</div>
		),
		onFilter: (value, record) =>
			record.title.toLowerCase().includes(value.toString().toLowerCase()),
	},
	{
		title: 'Pathogen',
		dataIndex: 'pathogen',
		key: 'pathogen',
		sorter: (a, b) => (a.pathogen && b.pathogen ? a.pathogen.localeCompare(b.pathogen) : 0 - 0),
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder="Search Pathogen"
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => confirm()}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Button onClick={() => confirm()}>Filter</Button>
			</div>
		),
		onFilter: (value, record) =>
			record.pathogen != undefined
				? record.pathogen.toLowerCase().includes(value.toString().toLowerCase())
				: record.pathogen,
	},
	{
		title: 'No. of studies',
		dataIndex: 'studyCount',
		key: 'studyCount',
		sorter: (a, b) => a.studyCount - b.studyCount,
	},
	{
		title: 'Date Created',
		dataIndex: 'dateCreated',
		key: 'dateCreated',
		sorter: (a, b) => a.dateCreated.localeCompare(b.dateCreated),
		render: (_, record) => (
			<Space size="middle">{dayjs(record.dateCreated).format('YYYY-MM-DD')}</Space>
		),
	},
];

const ProjectsTable: React.FC = () => {
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { userHasProjectWriteAccess } = useAuthContext();

	useEffect(() => {
		authorizedApiRequest(HttpMethods.GET, API_ROUTES_PATHS.PROJECTS)
			.then((data) => {
				const projects: any[] = [...data].filter((project) => project.deleted_at == null);
				setData(convertToTableData(projects));
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div style={{ width: '80%', lineHeight: 0 }}>
				<Title level={4} style={{ width: '80%' }}>
					Projects
				</Title>
				<Space
					size={'small'}
					direction={'horizontal'}
					style={{ display: 'flex', justifyContent: 'end', lineHeight: '0', marginBottom: '1rem' }}
				>
					{userHasProjectWriteAccess && <CreateProject />}
				</Space>
			</div>
			<Table columns={columns} dataSource={data} loading={loading} style={{ width: '80%' }} />
		</>
	);
};

export default ProjectsTable;
