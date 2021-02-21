import React from 'react';
import { Table } from 'antd';
import { makeMockRankings, mockRankingsColumns } from '../../data/mock';


const Rankings = (props) => {
  const mockData = makeMockRankings();
  
  return (
    <>
      <Table columns={mockRankingsColumns} dataSource={mockData} />
    </>
  );
}

export default Rankings;
