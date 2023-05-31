import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface NumberOfSamplesType {
  count: number;
  new: number
}

interface DataType {
  key: string;
  pathogen: string;
  numberOfSamples: NumberOfSamplesType;
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
            <span style={{ marginRight: 10 }}>{numberOfSamples.count}</span>
            {(numberOfSamples.new > 0) && <Tag color={'blue'} key={numberOfSamples.new}>
              {`${numberOfSamples.new} new`}
            </Tag>}
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
    numberOfSamples: { count: 145, new: 50 },
  },
  {
    key: '2',
    pathogen: 'Malaria',
    numberOfSamples: { count: 540, new: 2 },
  },
  {
    key: '3',
    pathogen: 'HIV',
    numberOfSamples: { count: 245, new: 0 },
  },
  {
    key: '3',
    pathogen: 'Avery flu',
    numberOfSamples: { count: 78, new: 0 },
  },
];

const PathogenTable: React.FC = () => <Table columns={columns} dataSource={data} style={{width: '80%'}}/>;

export default PathogenTable;