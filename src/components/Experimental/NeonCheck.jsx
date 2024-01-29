"use client";

import { useState } from "react";

export default function Neon() {
  const [data, setData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/check_neon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.rows[0]);
        setData(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <button onClick={handleSubmit}>Fetch DATA</button>
    </div>
  );
}
