import React, { useEffect, useState } from "react";
import axios from "axios";

const Question17 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/1")
      .then((res) => {
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
        });
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("https://dummyjson.com/users/1", user)
      .then((res) => {
        console.log("Updated:", res.data);
        setMessage("User Updated Successfully!");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to Update User");
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Edit User Profile</h2>

      <form onSubmit={handleUpdate}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#007BFF",
            color: "white",
            border: "none",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Update User
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Question17;
