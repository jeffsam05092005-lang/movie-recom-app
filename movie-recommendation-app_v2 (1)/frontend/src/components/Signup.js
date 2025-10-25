import React, { useState } from "react";
import API from "../api";
export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      setMessage("User registered successfully!");
    } catch (err) {
      setMessage("Error registering user");
    }
  };
  return (<div><h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input type="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Register</button>
    </form><p>{message}</p></div>);
}