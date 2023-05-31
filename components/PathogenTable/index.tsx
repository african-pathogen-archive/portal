import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
 
  {
    title: 'Pathogen',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'No. of samples',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = 'blue';
          
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    address: 'SARS-cov-2',
    tags: ['50 new'],
  },
  {
    key: '2',
    address: 'Malaria',
    tags: ['2 new'],
  },
  {
    key: '3',
    address: 'HIV',
    tags: [],
  },
  {
    key: '3',
    address: 'Avery flu',
    tags: [],
  },
];

const PathogenTable: React.FC = () => <Table columns={columns} dataSource={data} style={{width: '80%'}}/>;

export default PathogenTable;