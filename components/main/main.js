import React from 'react';
import { Table } from 'antd';
import { 
  mockTopTen,
  mockTopTenColumns,
  mockScheduledRaces,
  mockScheduledRacesColumns
} from '../../data/mock';
import styles from './main.module.scss';

const Main = (props) => {
  return (
    <>
      <div className={`main ${styles.mainContainer}`}>
        <div className={styles.tableRow}>
          <Table
            columns={mockTopTenColumns}
            dataSource={mockTopTen}
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
          />
        </div>
      </div>
    </>
    
  )
}

export default Main;