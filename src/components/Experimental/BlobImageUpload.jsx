"use client";
import React, { useState, useCallback } from "react";

export default function BlobUpload() {
  const [data, setData] = useState({
    image: null,
  });
  const [file, setFile] = useState(null);

  const onChangePicture = useCallback(
    (event) => {
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (file) {
        if (file.size / 1024 / 1024 > 50) {
          toast.error("File size too big (max 50MB)");
        } else {
          setFile(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setData((prev) => ({ ...prev, image: e.target?.result }));
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [setData]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(file);
    fetch("/api/check_blob_upload", {
      method: "POST",
      headers: {
        "content-type": file ? file.type : "application/octet-stream",
      },
      body: file,
    }).then(async (res) => {
      if (res.status === 200) {
        const blob = await res.json();
        console.log(blob.blob);
      }
    });
  }

  return (
    <div>
      <input type="file" onChange={onChangePicture} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}
