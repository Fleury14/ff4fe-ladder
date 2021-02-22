import React from 'react';
import { Table } from 'antd';
import { 
  mockTopTen,
  mockTopTenColumns,
  mockScheduledRaces,
  mockScheduledRacesColumns
} from '../../data/mock';
import { topTenColumns } from '../../data/table-columns';
import styles from './main.module.scss';

const Main = (props) => {
  console.log('props', props);
  const { rankings } = props;
  if (rankings.length > 10) rankings = rankings.slice(0, 10);
  rankings.forEach((rank, index) => rank.key = index + 1);
  return (
    <>
      <div className={`main ${styles.mainContainer}`}>
        <div className={styles.tableRow}>
          <Table
            columns={topTenColumns}
            dataSource={rankings}
            title={() => <span className={`${styles.tableHeader}`}>Current Season Zero Rankings (Top 10)</span>}
            footer={() => <span className={`${styles.tableHeader}`}>Show All Rankings</span>}
            showHeader={false}
            className={styles.mainTable}
            pagination={false}
            size="small"
            
          />
          <Table
            columns={mockScheduledRacesColumns}
            dataSource={mockScheduledRaces}
            title={() => <span className={styles.tableHeader}>Next schedule races (all times eastern)</span>}
            footer={() => <span className={`${styles.tableHeader}`}>View Schedule</span>}
            showHeader={false}
            pagination={false}
            className={styles.mainTable}
            size="small"
          />
        </div>
      </div>
    </>
    
  )
}

export default Main;