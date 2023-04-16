
import { Link } from 'react-router-dom';
import './Style.css';

function Login() {
  return (
    <div className="App">
      <div className='loginform'>
      <h2>React Login Form</h2>
      <form>
        <label><i className='fa fa-user'></i> Email</label>
        <input type="text" name='email' id="inputFor"/>
        <label><i className='fa fa-lock'></i> Password</label>
        <input type="text" name='password' />
        <a href='#' className='forForgot'>Forgot Password</a>
        <button>
          <input type="submit" id="loginButton" value="Login"/>
        </button>
        <div className='signup'>
          Don't Have an Account? <a href=''>Register Now</a>
        </div>
      </form>
      </div>     
    </div>
  );
}

export default Login;
