import React from 'react';
import { Table } from 'antd';
import { makeMockRankings, mockRankingsColumns } from '../../data/mock';
import { bigRankingsColumns } from '../../data/table-columns'


const Rankings = ({ rankings }) => {
  const mockData = makeMockRankings();
  
  return (
    <>
      <Table columns={bigRankingsColumns} dataSource={rankings} />
    </>
  );
}

export default Rankings;
