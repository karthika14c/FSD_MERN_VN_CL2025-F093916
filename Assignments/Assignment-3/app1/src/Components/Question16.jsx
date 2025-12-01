import React, { useState } from "react"
import axios from "axios"

const Question16 = () => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  })

  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      userId: 1 ,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post("https://dummyjson.com/posts/add", post)
      .then((res) => {
        console.log(res.data)
        setMessage("Post Added!")
        setIsSuccess(true)
        setPost({ title: "", body: "" })
      })
      .catch((err) => {
        console.log(err)
        setMessage("Failed to Add Post")
        setIsSuccess(false)
      })
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Add New Post</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            style={{ padding: "8px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Body:</label><br />
          <textarea
            name="body"
            value={post.body}
            onChange={handleChange}
            rows="4"
            style={{ padding: "8px", width: "300px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#56a4f7ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit Post
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            color: isSuccess ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Question16;
