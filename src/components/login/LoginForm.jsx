import React from 'react';
import './LoginCss.css'
import  facebook  from '../images/fb_icon.png';
import  twitter  from '../images/twitter_icon.png';
<link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Lemon&display=swap" rel="stylesheet"></link>

const LoginForm = () => {
    const handleformSubmit=(event)=>{
        event.preventDefault();
    }
  return (
    <div style={{height: "100vh", display: "flex ", justifyContent: "center" , alignItems: "center"}}>

    <div className='main-div'>
      <div className='section1'>
        <h1 className='page-heading'>Login</h1>
        <div>
        <img src={facebook} alt="Image Description" />
        <img src={twitter} alt="Image Description" />
        </div>
        
        <form onSubmit={handleformSubmit}>
            <label>or use your account"</label>
            <input type='email' name='email' placeholder='Email'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <label> Forgot your password?</label>
            <button type='submit' className='login_btn'>LOG IN</button>
        </form>
      </div>
      <div className='section2'>
        <h1>HTML CSS LOGIN FORM</h1>
        <p>This Login Form is created using pure HTML and CSS. For Social icons, FontAwesome is used.</p>
      </div>
      </div>
    </div>
  )
}

export default LoginForm;
