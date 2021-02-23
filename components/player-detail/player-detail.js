import { PresetColorTypes } from "antd/lib/_util/colors";
import React, { useState, useEffect } from "react";
import { getPlayerData } from '../../http'
import { Row, Col, Table } from 'antd';
import { mockPlayerRankingsColumns, mockPlayerLifeTimeRanking, mockPlayerHistory, mockPlayerHistoryColumns } from '../../data/mock';
import styles from './player-detail.module.scss';

const PlayerDetail = (props) => {
  if (!props || !props.id) return <h1>No Player Selected</h1>
  const { id, racerDetail } = props;

  console.log('racer', racerDetail);

  // TODO: this should be handled on the http side
  racerDetail.WinPercent = Math.round(racerDetail.Wins / (racerDetail.Wins + racerDetail.Losses + racerDetail.Ties) * 100)

  if (!racerDetail) return <h1>No racer data</h1>
  
  return (
    <div className={styles.playerContainer}>
      <h1 className={styles.playerTitle}>{racerDetail.RacerName}</h1>
      <Row className={styles.fullRow}>
        <Col lg={{ span: 4, offset: 1 }} sm={{ span: 8, offset: 3 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Wins</span>
          <span className={`righteous ${styles.bigNumber}`}>{racerDetail.Wins}</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Losses</span>
          <span className={`righteous ${styles.bigNumber}`}>{racerDetail.Losses}</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 3 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Ties</span>
          <span className={`righteous ${styles.bigNumber}`}>{racerDetail.Ties}</span>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 16, offset: 4 }} className={styles.topRowBox}>
          <span>Win %</span>
          <span className={`righteous ${styles.bigNumber}`}>{racerDetail.WinPercent}</span>
        </Col>
      </Row>
      <Row className={styles.fullRow}>
        <Col lg={{ span: 12 }} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>
          <div className={styles.tableWrapper}>
            <Table
              columns={mockPlayerRankingsColumns}
              dataSource={mockPlayerLifeTimeRanking}
              title={() => <p className={`${styles.tableHeader}`}>Lifetime Stats</p>}
              className="rank-table"
              pagination={false}
              size="small"
            />
            <Table
              columns={mockPlayerRankingsColumns}
              dataSource={mockPlayerLifeTimeRanking}
              title={() => <p className={`${styles.tableHeader}`}>Lifetime Stats</p>}
              className="rank-table"
              pagination={false}
              size="small"
            />
          </div>
        </Col>
        <Col lg={{ span: 12 }} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>
          <div className={styles.tableWrapper}>
            <Table
              columns={mockPlayerHistoryColumns}
              dataSource={mockPlayerHistory}
              title={() => <p className={`${styles.tableHeader}`}>Recent Matches</p>}
              className="rank-table"
              size="small"
              onRow={(record, rowIndex) => {
                return {
                  className: record.result === 'Win' ? styles.win : styles.loss
                };
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PlayerDetail;