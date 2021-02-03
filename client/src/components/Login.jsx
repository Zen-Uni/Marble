/**
 * @description login page
 * @author Uni
 */

// TODO: 测试登录注册，优化逻辑

import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import style
import {
    loginLayout,
    loginButtonLayout
} from '../style/login'
import { setReqToken, useAuth, useGet, usePost, useUpdateRender } from '../hooks'


const Login = () => {
  const getData = usePost()
  const auth = useAuth()
  const history = useUpdateRender()
  const getConfig = useGet()

  useEffect(async () => {
      const token = window.localStorage.getItem('marble-config')
      console.log(token)
      if (token) {
        setReqToken()
        const res = await getConfig('https://marble.isleslie.com/api/v1/user/getUserInfo')
        const { code, msg, data } = res.data
        console.log(res.data)
        if (code === 0) {
            auth.signin(data)
            history()
        }
      } else {
          message.error('尚未登录')
      }
  }, [])

  const handleSignin = config => {
    auth.signin(config)
    history()
  }

  const onFinish = async (values) => {
        const res = await getData('https://marble.isleslie.com/api/v1/user/login', values)
        const { code, msg, data } = res.data
        if (code === 1) {
            message.error(msg)
        } else {
            const token = data.bearer
            const username = data.username
            const email = values.email
            const config = {
                username,
                email,
            }
        
            window.localStorage.setItem('marble-config', token)
            setReqToken()
            message['success'](msg, 1).then(() => {
                handleSignin(config)
            })
        }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={loginLayout}
    >
      <Form.Item
        name="email"
        rules={[
            {
                type: "email",
                message: '请输入正确的邮箱格式',
            },

            {
                required: true,
                message: '请输入用户邮箱',
            },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item style={loginButtonLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{display: "inline-block", width: "160px"}}>
            登录
        </Button>
        <div style={{margin: "20px 0px"}}>
            <Link to="/register">去注册</Link>
        </div>
      </Form.Item>
    </Form>
  );
};


export default Login

