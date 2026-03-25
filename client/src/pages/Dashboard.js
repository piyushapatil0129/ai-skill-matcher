import React, { useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [form, setForm] = useState({ skills: "", interests: "", goals: "" });

  const submit = async () => {
    await API.post("/profile", form, {
      headers: { Authorization: localStorage.getItem("token") }
    });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input placeholder="Skills" onChange={e=>setForm({...form,skills:e.target.value})}/>
      <input placeholder="Interests" onChange={e=>setForm({...form,interests:e.target.value})}/>
      <input placeholder="Goals" onChange={e=>setForm({...form,goals:e.target.value})}/>
      <button onClick={submit}>Save</button>
    </div>
  );
}