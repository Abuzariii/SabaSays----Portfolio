"use client";

import { useState } from "react";

export default function Button() {
  const [id, setId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/check_vars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setId(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return <button onClick={handleSubmit}>SUBMIT ID :{id}</button>;
}
