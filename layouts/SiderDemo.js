// import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  ControlOutlined,
  MessageOutlined,
  TeamOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import TopMenu from './TopMenu';
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };



  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={"1"}>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link href="/"><a>Početna</a></Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined/>}>
              <Link href="/stanari"><a>Stanari</a></Link>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link href="/about"><a>About</a></Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Header className="site-layout-background"
            style={{
              padding: 0,
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <TopMenu />

          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;