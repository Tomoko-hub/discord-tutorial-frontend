import React from 'react'
import "./Login.scss"
import {ButtonBase} from '@mui/material';

const Login = ()=> {
  return (
    <div className='login'>
        <div className="loginLogo">
            <img src="./logo192.png" alt="logo"></img>
        </div>
        <ButtonBase>Login</ButtonBase>
    </div>
  )
}

export default Login