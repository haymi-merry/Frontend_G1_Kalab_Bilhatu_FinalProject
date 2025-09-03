import React,{useState} from 'react'
import './Login.css';
import logo from '../assets/ishublogo.jpg';
import googleIcon from '../assets/google-icon.png';
import microsoftIcon from '../assets/microsoft-icon.png';

function Login({onLogin}) {
  const [showPassword,setShowPassword]= useState(false);
  return (
    <div className="container">
      <div className="login-card">
        <img src={logo} alt="IS HUB logo" className='logo'/>
        <h2>IS HUB Frontend</h2>
      </div>

      <div className="submit-form">
        <h1>Student Login</h1>
        <p>Sign in to access your account</p>
        <p>Your effort is paying off — keep going!</p>

        <input type="email" placeholder="Email" />
        <input type={showPassword ? 'text':'password'} placeholder="Password" />

        <label>
          <input type="checkbox"  checked={showPassword}
          onChange={()=>setShowPassword(!showPassword)} />
          Show password
        </label>
        <br />

        <button className='login' onClick={onLogin} >Log in</button>
        <br />
        <span className='or'>or</span>
        <hr />
              <div className="buttons">
                <button className='google-login'>
                <img src={googleIcon} alt="Google logo" className='googleicon' />
                Sign in with Google
                </button>

                <button className='microsoft-login'>
                <img src={microsoftIcon} alt="Microsoft logo" className="microsofticon" />
                Sign in with Microsoft
                </button>
                </div>
      </div>
    </div>
  );
}

export default Login;
