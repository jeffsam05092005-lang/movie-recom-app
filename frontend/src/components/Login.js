import React, { useState } from "react";
import API from "../api";
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/profile";
    } catch (err) {
      setMsg("Invalid credentials");
    }
  };
  return (<div><h2>Login</h2>
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Login</button>
    </form><p>{msg}</p></div>);
}