import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import "./Login.scss"

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
    <section className='column column-xs-12'>
      <div className='row column-xs-12' id='user-form'>
        <span className={`row column-xs-4 ${form === "login" ? "active" : ""}`} onClick={() => switchFormHandler("login")}>Login</span>
        <span className={`row column-xs-4 ${form === "signup" ? "active" : ""}`} onClick={() => switchFormHandler("singup")}>Sign up</span>
      </div>

      {form === "login" ?
        <form className="column column-xs-12">
          <img src='./img/logo.png' alt='Logo' className='row column-xs-6' />
          <div className='column column-xs-12'>
            <fieldset className='row column-xs-8'>
              <legend>Email Address</legend>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="row column-xs-12" />
            </fieldset>

            <fieldset className='row column-xs-8'>
              <legend>Password</legend>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="row column-xs-12" />
              <a href='./' className='row column-xs-4'>Forgot password?</a>
            </fieldset>
          </div>

          <Button className="row column-xs-8 button-red round">Login</Button>
        </form> : <form className="column column-xs-12">
          <img src='./img/logo.png' alt='Logo' className='row column-xs-6' />
          <div className='column column-xs-12'>
            <fieldset className='row column-xs-8'>
              <legend>Email Address</legend>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="row column-xs-12" />
            </fieldset>

            <fieldset className='row column-xs-8'>
              <legend>Password</legend>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="row column-xs-12" />
            </fieldset>

            <fieldset className='row column-xs-8'>
              <legend>Confirm Password</legend>
              <Input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="row column-xs-12" />
            </fieldset>
          </div>

          <Button className="row column-xs-8 button-red round">Sign up</Button>
        </form>}
    </section>
  )
}

export default Login