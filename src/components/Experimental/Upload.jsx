"use client";

const ImageUpload = () => {
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
      <button onClick={postHandler}>SEND POST REQ</button>
    </div>
  );
};

export default ImageUpload;
