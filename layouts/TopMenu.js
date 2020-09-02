import { Menu, Avatar, Badge } from 'antd';
import {
  BellOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const TopMenu = () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
      {/* <Menu.Item key="3"><SearchOutlined /></Menu.Item> */}
      <Menu.Item key="1"><QuestionCircleOutlined style={{ fontSize: '18px' }}  /> <Link href="/progress"><a></a></Link></Menu.Item>
      {/* <Menu.Item key="1"><BellOutlined />
        <Badge count={99} overflowCount={10}>
          <a href="#" className="head-example" />
        </Badge>
      </Menu.Item> */}
      <Menu.Item key="2">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        /> Ime Stanara
      </Menu.Item>
    </Menu>

  )
}
export default TopMenu;