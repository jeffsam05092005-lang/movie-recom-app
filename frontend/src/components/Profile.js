import React, { useEffect, useState } from "react";
import API from "../api";
export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(()=>{API.get("/user/profile").then(res=>setUser(res.data)).catch(()=>window.location.href="/login");},[]);
  const logout=()=>{localStorage.removeItem("token");window.location.href="/login";};
  if(!user)return<p>Loading...</p>;
  return(<div><h2>Welcome {user.name}</h2><p>{user.email}</p><button onClick={logout}>Logout</button></div>);
}