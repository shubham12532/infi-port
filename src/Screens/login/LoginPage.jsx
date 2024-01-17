import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLoginPage = styled.div`
  background-color: #282c36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    background-color: #343a40;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 30vw;

    h1 {
      color: #61dafb;
      text-align: center;
      margin-bottom: 20px;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;

      label {
        margin-bottom: 8px;
        color: #61dafb;
        font-weight: bold;
      }

      input {
        padding: 12px;
        border: 1px solid #61dafb;
        border-radius: 4px;
        background-color: #282c36;
        color: #fff;
        width: 100%;
        box-sizing: border-box;

        &:focus {
          outline: none;
          border-color: #61dafb;
        }
      }

      .remember {
        display: flex;
        align-items: center;

        input {
          margin-right: 8px;
        }

        p {
          color: #fff;
        }
      }

      button {
        padding: 12px;
        background-color: #61dafb;
        color: #282c36;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        width: 100%;

        &:hover {
          background-color: #4fa3d1;
        }
      }
    }

    .bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;

      p {
        color: #fff;
      }

      a {
        color: #61dafb;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .create {
      text-align: center;
      color: #61dafb;
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function LoginPage({ onLoginSuccess }) {
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
    <StyledLoginPage>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={handleLogin}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" style={{marginTop: "19px"}}>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
}

export default LoginPage;
