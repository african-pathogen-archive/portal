import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// import { apiRequest } from '@/global/utils/api';
import { dummyApiRequest } from '@/global/utils/dummy_apis';
import { HttpMethods } from '@/global/utils/constants';

// interface NumberOfSamplesType {
// 	count: number;
// 	new: number;
// }

// interface DataType {
// 	key: string;
// 	pathogen: string;
// 	numberOfSamples: NumberOfSamplesType;
// }

interface TeamDataType {
    key: string;
    name: string;
    email: string;
    institution: string;
    role: string;
    // edit: string;
}


const columns: ColumnsType<TeamDataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
    {
		title: 'Institution',
		dataIndex: 'institution',
		key: 'institution',
	},
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (_, { role }) => (
            <span className="ant-tag ant-tag-magenta">{ role }</span>
        )
    },    
	{
		title: '',
		key: 'action',
		render: (_, record) => (
			<Select>
                options={[
                    {
                        value: 'Uploader',
                        label: 'Uploader',
                    },
                    {
                        value: 'Downloader',
                        label: 'Downloader',
                    },
                    {
                        value: 'Collaborator',
                        label: 'Collaborator',
                    },
                    {
                        value: 'Administrator',
                        label: 'Administrator',
                    },
                    {
                        value: 'Remove from team',
                        label: 'Remove',
                    },
                ]}
            </Select>
		),
	},
];

function convertToTableData(responseData: any[]): TeamDataType[] {
	return responseData.map((element: any) => {
		return {
			key: element.id,
            name: element.item.name,
            email: element.item.email,
            institution: element.item.institution,
            role: element.item.role,			
		};
	});
}

const TeamTable: React.FC = () => {
	const [data, setData] = useState<any[]>([]);

    const team_data = [
        {
            id: "jameswatt",
            item: {
                name: "James Watt",
                email: "jameswatt@gmail.com",
                institution: "UWC",
                role: "uploader"
            }
        }
    ]

	useEffect(() => {

        const table_data = convertToTableData(team_data);

        console.log(table_data);
        setData(table_data);

        // dummyApiRequest(HttpMethods.GET, 'teamdata').then((res) => {
		// 	setData(convertToTableData(team_data));
		// });
	}, []);

	return <Table columns={columns} dataSource={data} style={{ width: '80%' }} />;
};

export default TeamTable;