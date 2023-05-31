import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  pathogen: string;
  numberOfSamples: string[];
}

const columns: ColumnsType<DataType> = [
 
  {
    title: 'Pathogen',
    dataIndex: 'pathogen',
    key: 'pathogen',
  },
  {
    title: 'No. of samples',
    key: 'numberOfSamples',
    dataIndex: 'numberOfSamples',
    render: (_, { numberOfSamples }) => (
      <>
        {numberOfSamples.map((sample) => {
          let color = 'blue';
          
          return (
            <Tag color={color} key={sample}>
              {sample}
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
    pathogen: 'SARS-cov-2',
    numberOfSamples: ['50 new'],
  },
  {
    key: '2',
    pathogen: 'Malaria',
    numberOfSamples: ['2 new'],
  },
  {
    key: '3',
    pathogen: 'HIV',
    numberOfSamples: [],
  },
  {
    key: '3',
    pathogen: 'Avery flu',
    numberOfSamples: [],
  },
];

const PathogenTable: React.FC = () => <Table columns={columns} dataSource={data} style={{width: '80%'}}/>;

export default PathogenTable;