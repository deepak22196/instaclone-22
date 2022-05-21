import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [PostImage, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("PostImage", PostImage);
    data.append("name", name);
    data.append("location", location);
    data.append("description", description);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API + "/create",
        data
      );
      navigate("/postview");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container" style={{ width: "50vw" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="PostImage"
          id="PostImage"
          style={{ display: "block" }}
          placeholder="no file"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
          }}
        />

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Author"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="location"
          name="location"
          id="location"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit" className="post">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
