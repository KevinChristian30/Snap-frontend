'use client'

import { GoogleOutlined, KeyOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd'
import React from 'react'

const page = () => {
  const [form] = Form.useForm();

  return (
    <div className='flex items-center h-screen'>
      <div className='w-1/2'>

      </div>
      <div className='w-1/2'>
        <Typography.Title>Welcome to Snap!</Typography.Title>
        <Typography.Text>Enter your email and password in order to login.</Typography.Text>
        <Form
          form={form}
          layout='vertical'
          className='flex flex-col items-center'
        >
          <Form.Item label='Email' className='w-full'>
            <Input 
              placeholder='Email' 
              size='large' 
              prefix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item label='Password' className='w-full'>
            <Input.Password 
              placeholder='Password' 
              size='large' 
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            block 
            size='large'>
              Login
          </Button>
          <Button type='link'>Forgot Password</Button>
          <Typography.Text>Or</Typography.Text>
          <Button 
            type='default'
            block
            size='large'
            icon={<GoogleOutlined />}
          >
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default page