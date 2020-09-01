import SiderDemo from "../../layouts/SiderDemo"
import { Table, Tag, Space, Card } from 'antd';
const { Column } = Table;



const data = [
    {
        key: '1',
        firstName: 'Energo Balaž d.o.o.',
        lastName: 'Hajnalka Balaž',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '1',
        firstName: 'Energo Balaž d.o.o.',
        lastName: 'Hajnalka Balaž',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Stanari = () => (
    <SiderDemo>
        <Card style={{ width: 300 }}>
            <p>{data.length}</p>
            <p></p>

        </Card>

        <Table dataSource={data}>
            <Column title="Stanar" dataIndex="firstName" key="firstName" />
            <Column title="Direktor" dataIndex="lastName" key="lastName" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Uredi {record.firstName}</a>
                        <a>Obrisi</a>
                    </Space>
                )}
            />
        </Table>
    </SiderDemo>
)
export default Stanari;