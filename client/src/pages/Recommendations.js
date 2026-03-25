import React, { useEffect, useState } from "react";
import API from "../api";

export default function Recommendations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await API.get("/recommend", {
        headers: { Authorization: localStorage.getItem("token") }
      });
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Recommendations</h2>
      {data.map((item, i) => (
        <div key={i}>
          <h3>{item.item}</h3>
          <p>Score: {item.score}</p>
        </div>
      ))}
    </div>
  );
}