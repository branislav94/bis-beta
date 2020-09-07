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
      <Menu.Item key="1"><QuestionCircleOutlined 
      style={{ 
        fontSize: '25px',
        verticalAlign: '-0.270em'
        }}  /> <Link href="/progress"><a></a></Link></Menu.Item>
      {/* <Menu.Item key="1"><BellOutlined />
        <Badge count={99} overflowCount={10}>
          <a href="#" className="head-example" />
        </Badge>
      </Menu.Item> */}
      <Menu.Item key="2">
      Ime Stanara <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Menu.Item>
    </Menu>

  )
}
export default TopMenu;