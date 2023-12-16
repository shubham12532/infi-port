import {React,useState} from 'react'
import '../login/login.css'


function LoginPage({onLoginSuccess}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (username === 'shubham@gmail.com' && password === 'pass123') {
      alert('Login successful!');
      onLoginSuccess();
    } else {
      alert('Invalid username or password');
      // Optionally, you can clear the input fields on failed login
      setUsername('');
      setPassword('');
    }
  };



  return (
    <div className="app" data-theme={'dark'}>
      <div className='login'>
        <h1> Login</h1>
        <div className='container'>
          <form onSubmit={handleLogin}>
            <label>E-mail</label>
            <input type='email'
              placeholder='Enter your email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button type='submit'>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
