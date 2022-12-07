import { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

function Login() {

  const { authState, loginUser } = useContext(AuthContext)
  const email = useRef(null);
  const password = useRef(null)
  const navigate = useNavigate()

  // *handling form submit
  const HandleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email.current.value,
      password: password.current.value
    }

    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.token) {
          loginUser(res.token);
          navigate('/dashboard')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={HandleSubmit} >
        <div>
          <label>
            Email
            <input data-testid="email-input" ref={email} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              ref={password}
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;