"use client";

export default function VercelPostgres() {
  const handlePostData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/check_vercel_postgres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 3,
          name: "piolaaa",
          description: "weuiryjndjsd from l'oreal paris jdafssdkfsd",
          image_url: "https://pweitpoeyz.com",
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleGetData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/check_vercel_postgres", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <button onClick={handlePostData}>CREATE DATA IN TABLE</button>

      <button onClick={handleGetData}>GET TABEL DATA</button>
    </div>
  );
}
