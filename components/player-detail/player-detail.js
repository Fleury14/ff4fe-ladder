import { PresetColorTypes } from "antd/lib/_util/colors";
import React from "react";
import { Row, Col, Table } from 'antd';
import { mockPlayerRankingsColumns, mockPlayerLifeTimeRanking } from '../../data/mock';
import styles from './player-detail.module.scss';

const PlayerDetail = (props) => {
  if (!props || !props.id) return <h1>No Player Selected</h1>
  const { id } = props;
  return (
    <div className={styles.playerContainer}>
      <h1 className={styles.playerTitle}>Racer guy</h1>
      <Row className={styles.fullRow} gutter={[0, { sm: 16, xs: 16 }]}>
        <Col lg={{ span: 4, offset: 1 }} sm={{ span: 8, offset: 3 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Wins</span>
          <span className={`righteous ${styles.bigNumber}`}>39</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Losses</span>
          <span className={`righteous ${styles.bigNumber}`}>11</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 3 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Ties</span>
          <span className={`righteous ${styles.bigNumber}`}>0</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Win %</span>
          <span className={`righteous ${styles.bigNumber}`}>78%</span>
        </Col>
      </Row>
      <div className={styles.tableRow}>
        <div className={styles.tableCol}>
          <Table
            columns={mockPlayerRankingsColumns}
            dataSource={mockPlayerLifeTimeRanking}
            title={() => <span className={`${styles.tableHeader}`}>Lifetime Stats</span>}
          />
        </div>
        <div className={styles.tableCol}></div>
      </div>
    </div>
  )
}

export default PlayerDetail;