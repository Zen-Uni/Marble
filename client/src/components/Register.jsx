/**
 * @description register page
 * @author Uni
 */

import React, { useRef } from 'react';

import { Form, Input, Button, Row, Col, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import style
import {
    loginLayout,
    loginButtonLayout
} from '../style/login'

import {
    useAuth,
    usePost,
    setReqToken,
    useUpdateRender
} from '../hooks'


const Login = () => {
  const inputEl = useRef(null)
  const getData = usePost()
  const auth = useAuth()
  const history = useUpdateRender()

  const handleSignin = config => {
    auth.signin(config)
    history()
  }

  const onFinish = async(values) => {
    const res = await getData('https://marble.isleslie.com/api/v1/user/register', values)
    const { data, msg, code } = res.data
    if (code === 1) {
        message.error(msg)
    } else {
        const token = data.bearer
        // const { username, email } = values
        window.localStorage.setItem('marble-config', token)
        setReqToken()
        message["success"](msg, 1).then(() => {
            handleSignin(values)
        })
    }
  };


  const getCaptcha = async () => {
    const email = inputEl.current.state.value
    console.log(email)
    if (email == null) {
        message.warning("请输入邮箱")
    } else {
        const res = await getData('https://marble.isleslie.com/api/v1/user/sendCaptcha',{
            email
        })
        const { code, msg, data } = res.data
        if (code === 1) {
            message.error(msg)
        } else {
            message.success(msg)
        }
    }
  }

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
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
         
          placeholder="Username"
        />
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
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" ref={inputEl} />
      </Form.Item>
      <Form.Item label="验证码" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button onClick={getCaptcha}>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item style={loginButtonLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{display: "inline-block", width: "160px"}}>
          注册
        </Button>
        <div style={{margin: "20px 0px"}}>
            <Link to="/login">去登陆</Link>
        </div>
      </Form.Item>
    </Form>
  );
};


export default Login
