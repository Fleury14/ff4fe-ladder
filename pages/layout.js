import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import SideNav from '../components/sidenav/sidenav';

const PageLayout = (props) => {

  const { Sider, Content, Header, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideNav />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <h1 className={styles.title}>FF4FE Ladder</h1>
        </Header>
        <Content>
          {props.children}
        </Content>
        <Footer>
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
      </Footer>
      </Layout>
    </Layout>
    
  )
}

export default PageLayout;