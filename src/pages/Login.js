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
      {form === "login" ?
        <Form layout='vertical' className="flex flex-col items-center w-full">
          <img src='./img/logo.png' alt='Logo' className='w-2/3' />
          <div className='flex flex-col items-center w-full'>
            <Form.Item label="Email Address" className='w-4/6 mt-12 text-center' name="email" rules={[
              {
                required: true,
                message: 'Please input your Email Address!',
              },
            ]}>
              <Input type="email" variant='borderless' value={email} onChange={(event) => setEmail(event.target.value)} className="w-full text-2xl input-underline" />
            </Form.Item>

            <Form.Item label="Password" className='w-4/6 text-center' name="password" rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
              <Input.Password variant='borderless' value={password} onChange={(event) => setPassword(event.target.value)} className="w-full text-2xl input-underline" />
            </Form.Item>


            <a href='./' className='flex w-4/6 justify-start no-underline mb-5 text-primary'>Forgot password?</a>

            <span className="flex w-1/2 justify-center my-5 text-lg cursor-pointer text-gray hover:text-dark transition-all duration-300" onClick={() => switchFormHandler("singup")}>Do not have an account?</span>
          </div>

          <Button htmlType='submit' type='primary' size='large' className="w-4/6 mt-5 text-white bg-primary" >Login</Button>
        </Form> :
        <Form layout='vertical' className="flex flex-col items-center w-full">
          <img src='./img/logo.png' alt='Logo' className='w-2/3' />
          <div className='flex flex-col items-center w-full'>
            <Form.Item label="Email Address" className='w-4/6 mt-12 text-center' name="email" rules={[
              {
                required: true,
                message: 'Please input your Email Address!',
              },
            ]}>
              <Input type="email" variant='borderless' value={email} onChange={(event) => setEmail(event.target.value)} className="w-full text-2xl input-underline" />
            </Form.Item>

            <Form.Item label="Password" className='w-4/6 text-center' name="password" rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
              <Input.Password variant='borderless' value={password} onChange={(event) => setPassword(event.target.value)} className="w-full text-2xl input-underline" />
            </Form.Item>

            <Form.Item label="Confirm Password" className='w-4/6 text-center' name="repassword" rules={[
              {
                required: true,
                message: 'Please confirm your Password!',
              },
            ]}>
              <Input.Password variant='borderless' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="w-full text-2xl input-underline" />
            </Form.Item>

            <span className="flex w-1/2 justify-center my-5 text-lg cursor-pointer text-gray hover:text-dark transition-all duration-300" onClick={() => switchFormHandler("login")}>Have an account? Login</span>
          </div>

          <Button htmlType='submit' type='primary' size='large' className="w-4/6 mt-5 text-white bg-primary" >Sign up</Button>
        </Form>}
    </section>
  )
}

export default Login