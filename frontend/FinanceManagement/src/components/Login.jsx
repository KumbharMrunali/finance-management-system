import { useState } from "react";
import "./Auth.css";
import { loginUser } from "../api/authapi";

function Login({ setLoggedInUser, onSwitch }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(user);

    if (res && res.data) {
      setLoggedInUser(res.data);
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <div className="auth-actions">
          <button type="button" className="link-btn" onClick={() => onSwitch && onSwitch('signup')}>Create account</button>
          <button type="submit" className="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;