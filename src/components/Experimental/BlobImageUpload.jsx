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

  async function handleBlobList(e) {
    e.preventDefault();

    fetch("/api/check_blob_upload", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      if (res.status === 200) {
        const blobs = await res.json();
        console.log(blobs.blobs);
      }
    });
  }

  async function handleDeleteBlob(e) {
    e.preventDefault();

    fetch("/api/check_blob_upload", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        url: "https://cs4iqiq9bnopbxaa.public.blob.vercel-storage.com/1706614992927-tA0eVIJRyUMB4o2WGJJKSulWesCQkW.jpeg",
      },
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        console.log(data.message);
      }
    });
  }
  return (
    <div>
      <input type="file" onChange={onChangePicture} />
      <button onClick={handleSubmit}>Upload</button>

      <button onClick={handleBlobList}>GET ALL BLOBS</button>
      <button onClick={handleDeleteBlob}>DELETE A BLOB</button>
    </div>
  );
}
