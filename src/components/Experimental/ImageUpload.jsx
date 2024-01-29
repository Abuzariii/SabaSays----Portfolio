"use client";
// import React, { useEffect, useState } from "react";

const ImageUpload = () => {
  // const [file, setFile] = useState("");

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleUpload = async (file) => {
  //   try {
  //     const response = await fetch("/api/check_upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     console.log("Image uploaded successfully:", data);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };
  const a = {
    name: "abuzar",
    gender: "male",
  };
  const postHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/check_upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "abuzar", gender: "male" }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Upload Your Img Here</h1>
      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}

      <button onClick={postHandler}> SEND POST REQ</button>
    </div>
  );
};

export default ImageUpload;
