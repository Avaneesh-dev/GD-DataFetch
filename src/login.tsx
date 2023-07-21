import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function setCookie(name: any, value: any, days: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function login() {
    try {
      if (password === 'admin123') {
        setCookie('currentPassword', password, 1);
        window.location.href = '/';
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div>
            <a href="https://www.greendumbells.com" target="_blank">
              <img src='GDlogoHD.png' className="logo" alt="GD logo" />
            </a>
          </div>
          <div className="bs">
            <h1>GreenDumbells</h1>
            <h2>Login To Use This Panel</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary mt-3" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;