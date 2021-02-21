import React from 'react';
import styles from './race-detail.module.scss';
import { Badge } from 'antd';

const RaceDetail = (props) => {
  if (!props || !props.id) return <h1>No race selected</h1>
  const { id } = props;
  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.detailTitle}>Race #abcde</h1>
      <p>Flagset: Mystery</p>
      <p>Date of Race: 1/25/2021</p>
      <div className={styles.resultWrapper}>
        <div className={styles.resultContainer}>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>Fleury14</p>
              <Badge count={"+20"} style={{ backgroundColor: '#52c41a', marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>1:15:06</p>
          </div>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>pk4787</p>
              <Badge count={"-20"} style={{ marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>1:18:39</p>
          </div>
        </div>
        <div className={styles.downloadSeed}>
          <p>Download Seed</p>
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <div className={styles.resultContainer}>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>Asuka424</p>
              <Badge count={"+20"} style={{ backgroundColor: '#52c41a', marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>1:53:54</p>
          </div>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>BakaShinobi</p>
              <Badge count={"-20"} style={{ marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>2:06:24</p>
          </div>
        </div>
        <div className={styles.downloadSeed}>
          <p>Download Seed</p>
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <div className={styles.resultContainer}>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>SchalaKitty</p>
              <Badge count={"+18"} style={{ backgroundColor: '#52c41a', marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>1:28:17</p>
          </div>
          <div className={styles.resultRow}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.runnerName}>Invenerable</p>
              <Badge count={"-18"} style={{ marginLeft: 20}} />
            </div>
            
            <p className={styles.runnerTime}>1:34:00</p>
          </div>
        </div>
        <div className={styles.downloadSeed}>
          <p>Download Seed</p>
        </div>
      </div>
      
    </div>
  )
}

export default RaceDetail;