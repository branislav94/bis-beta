import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Form, Input, Button, Spin } from 'antd';
import { useRouter } from 'next/router';
import SiderDemo from '../../layouts/SiderDemo'
import create from '@ant-design/icons/lib/components/IconFont';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const NewStanar = () => {
  const [form, setForm] = useState({ stanar: '', direktor: '' }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect (() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        // createStanar();
        alert('Success');
      }
      else {
        setIsSubmitting(false);
      }
    }
  }, [errors])

  const handleSubmit = (e) => { 
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  
  const handleChange = (e) => { 
    setForm({
      ...form,
        [e.target.name]: e.target.value
    })
  };

  const validate = () => {
    let err = {};

    if(!form.stanar) {
      err.stanar = 'Ime stanara je obavezno';
    }
    if(!form.direktor) {
      err.direktor = 'Polje Direktor je obavezno'
    }
    return err;
  }

  const onFinish = values => {
    console.log('Success:', values);
  };


  return (
    <SiderDemo>
      <h1>Dodaj novog stanara</h1>
      <div>
        {
          isSubmitting
            ? <Spin active inline='centered' />
            : <Form
              {...layout}
              onFinish={onFinish}
              on={handleSubmit}
            >

              <Form.Item
                fluid="true"
                error={errors.stanar ? { content: 'Please input your username!', pointing: 'below'} : null}
                label="Stanar"
                placeholder="Stanar"
                name="stanar"
                onChange={handleChange}
             
              >
                <Input />
              </Form.Item>

              <Form.Item
                fluid="true"
                label="Direktor"
                placeholder="Direktor"
                name="direktor"
                error={errors.stanar ? { content: 'Please input your username!', pointing: 'below'} : null}
                onChange={handleChange}
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your username!',
                //   },
                // ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout} type="submit">
                <Button type="submit" htmlType="submit">
                  Submit
               </Button>
              </Form.Item>
            </Form>
        }
      </div>
    </SiderDemo>
  )
}
export default NewStanar;


