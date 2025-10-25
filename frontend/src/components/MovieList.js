import React, { useEffect, useState } from "react";
import API from "../api";
export default function MovieList() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{API.get("/user/movies").then(res=>setMovies(res.data));},[]);
  return(<div><h2>Recommended Movies</h2><ul>{movies.map(m=><li key={m._id}>{m.title} ({m.genre})</li>)}</ul></div>);
}