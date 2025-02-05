import { useState, FC, ReactNode } from 'react';
import {
  CloseOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Drawer, Layout, Menu } from 'antd';
import CustomHeader from './Header';
import useDefaultLayout, { MenuItem } from './useDefaultLayout.ts';
import useMediaQuery from '../../hooks/useMediaQuery.ts';

const { Header, Content, Footer, Sider } = Layout;

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getItem } = useDefaultLayout();

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

  const isSmallDevice = useMediaQuery('max', 'width', 768);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        hidden={isSmallDevice}
        collapsible
        collapsed={isSidebarOpen}
        onCollapse={(value) => setIsSidebarOpen(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      {isSmallDevice ? (
        <Drawer
          closeIcon={<CloseOutlined style={{ color: 'white', fontSize: '16px' }} />}
          style={{ backgroundColor: '#001529' }}
          styles={{ body: { padding: 0 }, header: {} }}
          width={250}
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
        >
          <Menu style={{ minWidth: '250px' }} mode="inline" theme="dark" defaultSelectedKeys={['1']} items={items} />
        </Drawer>
      ) : null}

      <Layout>
        <Header style={{ padding: 0, background: 'white', justifyContent: 'space-between' }}>
          <CustomHeader setIsDrawerOpen={setIsDrawerOpen} />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="min-h-full p-6 bg-white rounded mt-4">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} Created by RUJA SOFT SRL</Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
