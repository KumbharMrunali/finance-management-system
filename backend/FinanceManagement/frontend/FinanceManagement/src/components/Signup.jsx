import { useState } from "react";
import "./Auth.css";
import { registerUser } from "../api/authapi";

function Signup({ onSwitch }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(user);
    if (res && res.data) {
      alert("Registered Successfully!");
      onSwitch && onSwitch('login');
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Signup</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <div className="auth-actions">
          <button type="button" className="link-btn" onClick={() => onSwitch && onSwitch('login')}>Already have an account?</button>
          <button type="submit" className="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;