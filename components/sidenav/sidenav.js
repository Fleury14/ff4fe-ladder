import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  EyeOutlined,
  UserOutlined,
  RiseOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './sidenav.module.scss';
import Rankings from '../rankings/rankings';
import QuoteGenerator from '../quote-generator/quote-generator';

const SideNav = (props) => {
  const { collapsed } = props;
  return (
    <div className={styles.sideNav}>
      <div className={`logo ${styles.logoQuote}`}>
        {!collapsed ? <QuoteGenerator /> : <p>&nbsp;</p>}
        
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/">
              Main
            </Link>
          </Menu.Item>
        
        <Menu.Item key="2" icon={<EyeOutlined />}>
          <a href="https://discord.gg/KN2pTAcYMC">
            Discord
          </a>
        </Menu.Item>
        <Menu.Item key="3" icon={<RiseOutlined />}>
          <Link href="/rankings">
            Rankings
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />}>
          <Link href="/schedule">
            Schedule
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
          <Link href="/faq">
            FAQ
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SideNav;
