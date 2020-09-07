import { Table, Tag, Space, Card, Button } from 'antd';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import dbConnect from '../../utils/dbConnect'
import { UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';

import SiderDemo from "../../layouts/SiderDemo"


const { Column } = Table;

// const data = [
//     {
//         key: "{stanar._id}",
//         firstName: `{stanar.stanar}`,
//         lastName: 'Hajnalka Balaž',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],

//     },
//     {
//         key: '1',
//         firstName: 'Energo Balaž d.o.o.',
//         lastName: 'Hajnalka Balaž',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],

//     }
// ]

const Stanari = ({ stanari }) => {

    return (
        <SiderDemo>
            {/* <div>
                <h1 color="red">Stanari</h1>
                <div>
                    <Card><h1>Broj stanara: {stanari.length}</h1></Card>

                    {stanari.map(stanar => {
                        return (

                            <Card key={stanar._id} style={{
                                width: 300,
                                display: "inline-flex"
                            }}>
                                <Link href={`/${stanar._id}`}>
                                    <a>{stanar.stanar}</a>
                                </Link>
                                <p>{stanar.direktor}</p>
                                <Link href={`/${stanar._id}`}>
                                    <Button>View</Button>
                                </Link>
                            </Card>

                        )
                    })}
                </div>
            </div> */}

            <Button ><UserOutlined /> Broj stanara: {stanari.length}</Button>
            <Link href="stanari/new">
                <Button type="primary"> <UsergroupAddOutlined />Dodaj novog stanara</Button>
            </Link>
            <Table dataSource={stanari}>
                <Column title="Stanar" dataIndex="stanar" key="stanar" />
                <Column className="m-hide" title="Direktor" dataIndex="direktor" key="direktor" />
                <Column className="m-hide" title="Address" dataIndex="address" key="address" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Link href={`/${record._id}`}>
                                <a>View</a>
                            </Link>
                            <Link href={`/${record._id}/edit`}>
                                <a>Edit</a>
                            </Link>

                        </Space>
                    )}
                />
            </Table>






            {/* <Table dataSource={data}>
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
            </Table> */}
        </SiderDemo>
    )

}

Stanari.getInitialProps = async () => {
    const res = await fetch('https://bis-beta.vercel.app/api/stanari');
    const { data } = await res.json();

    return { stanari: data }
}


export default Stanari;

