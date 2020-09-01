import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import SiderDemo from '../layouts/SiderDemo'

const Progress = () => (
  <SiderDemo>
    <Timeline
      mode="alternate"
      reverse={true}
      style={{
        margin: '24px 16px',
      }}>
      <Timeline.Item>Kreirana Subdomen <strong>app.bis-su.rs</strong> | 31-03-2020</Timeline.Item>
      <Timeline.Item color="green"> Redizajn Dashborda | 05-04-2020</Timeline.Item>
      <Timeline.Item color="orange">Kreirana Web Aplikacija u React-u sa Ant Design-om | 13-04-2020</Timeline.Item>
      {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
    </Timeline.Item> */}
      <Timeline.Item color="green"> Završene Stranice za Login i Registraciju | 14-04-2020</Timeline.Item>
      <Timeline.Item color="green"> Kreirana Dashbord stranica za Admina i Stanare | 20-04-2020</Timeline.Item>
      <Timeline.Item color="green"> Kreirana Stranica Kalendar | 26-04-2020</Timeline.Item>
      <Timeline.Item color="green"> Kreirana Stranica Stanari | 27-04-2020</Timeline.Item>
      <Timeline.Item color="green"> Azuriran Dashboard (Tabele, Grafikoni) | 15-05-2020</Timeline.Item>
      <Timeline.Item color="red">Problem sa Grafikonima | 20-05-2020</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
       Prebacivanje na Nextjs Framework | 21-05-2020
    </Timeline.Item>
    <Timeline.Item color="green"> Prebačena Dashboard stranica | 21-05-2020</Timeline.Item>
    <Timeline.Item color="green"> Prebačene stranice Login i Registracija | 02-06-2020</Timeline.Item>
    <Timeline.Item color="green"> Prebačene stranice Login i Registracija | 02-06-2020</Timeline.Item>
    <Timeline.Item color="green"> Ažurirane stranice Login i Registracija | 05-06-2020</Timeline.Item>
    <Timeline.Item color="green"> Prebačena stranica Stanari | 16-06-2020</Timeline.Item>
    <Timeline.Item color="red"> Problem sa dizajnom na Dashbordu | 25-06-2020</Timeline.Item>
    <Timeline.Item color="green"> Kreirana stranica za pracenje rada | 07-07-2020</Timeline.Item>
    <Timeline.Item color="green"> Rešen problem sa dizajnom | 07-07-2020</Timeline.Item>
    <Timeline.Item color="green"> Kreirana tabela na stranici Stanari | 09-07-2020</Timeline.Item>
    <Timeline.Item color="green"> Kreirana tabela na stranici Stanari | 09-07-2020</Timeline.Item>
    <Timeline.Item color="red"> SideBarMenu problem with scrolling (not fixed) | 25-07-2020</Timeline.Item>
    <Timeline.Item color="green"> Ažuriran Header | 25-07-2020</Timeline.Item>
    <Timeline.Item color="green"> Povezan sa bazom podataka (MongoDB) | 01-08-2020</Timeline.Item>

      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        02-08-2020 | Tehničko testiranje Demo verzije
    </Timeline.Item>
    </Timeline>
  </SiderDemo>
)

export default Progress;