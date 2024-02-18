import React, { useState } from 'react'
import { Button, Input, Form } from 'antd'

const Login = () => {
  const [form, setForm] = useState("login")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const switchFormHandler = activeForm => {
    if (activeForm === "login") {
      setForm("login")
    } else {
      setForm("signup")
    }
  }

  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex justify-center items-end w-full' id='user-form'>
        <span className={`flex w-1/4 justify-center p-5 text-2xl ${form === "login" ? "border-b-4 border-b-primary" : ""}`} onClick={() => switchFormHandler("login")}>Login</span>
        <span className={`flex w-1/4 justify-center p-5 text-2xl ${form === "signup" ? "border-b-4 border-b-primary" : ""}`} onClick={() => switchFormHandler("singup")}>Sign up</span>
      </div>

      {form === "login" ?
        <Form layout='vertical' className="flex flex-col items-center w-full mt-28">
          <img src='./img/logo.png' alt='Logo' className='w-2/3' />
          <div className='flex flex-col items-center w-full'>
            <Form.Item label="Email Address" className='w-4/6 mt-12 text-center' name="email" rules={[
              {
                required: true,
                message: 'Please input your Email Address!',
              },
            ]}>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full text-2xl" />
            </Form.Item>

            <Form.Item label="Password" className='w-4/6 text-center' name="password" rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
              <Input.Password type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full text-2xl" />
            </Form.Item>


            <a href='./' className='flex w-4/6 justify-start no-underline mb-5 text-primary'>Forgot password?</a>
          </div>

          <Button htmlType='submit' type='primary' size='large' className="w-4/6 mt-5 text-white bg-primary" >Login</Button>
        </Form> :
        <Form layout='vertical' className="flex flex-col items-center w-full mt-28">
          <img src='./img/logo.png' alt='Logo' className='w-2/3' />
          <div className='flex flex-col items-center w-full'>
            <Form.Item label="Email Address" className='w-4/6 mt-12 text-center' name="email" rules={[
              {
                required: true,
                message: 'Please input your Email Address!',
              },
            ]}>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full text-2xl" />
            </Form.Item>

            <Form.Item label="Password" className='w-4/6 text-center' name="password" rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
              <Input.Password type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full text-2xl" />
            </Form.Item>

            <Form.Item label="Confirm Password" className='w-4/6 text-center' name="password" rules={[
              {
                required: true,
                message: 'Please confirm your Password!',
              },
            ]}>
              <Input.Password type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="w-full text-2xl" />
            </Form.Item>
          </div>

          <Button htmlType='submit' type='primary' size='large' className="w-4/6 mt-5 text-white bg-primary" >Sign up</Button>
        </Form>}
    </section>
  )
}

export default Login