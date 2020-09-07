import { Form, Select, Card, InputNumber, Switch, Slider, Button } from 'antd'

// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from '../components/DatePicker'
import SiderDemo from '../layouts/SiderDemo'
// import Layout from '../layouts/dashboard'
// import { Card} from '@ant-design/icons'

// import Link from 'next/link'

const FormItem = Form.Item
const Option = Select.Option

const content = {
  marginTop: '100px',
}

export default function Home() {
  return (
    <SiderDemo>
      <h1>Home</h1>
    </SiderDemo>

  )
}
