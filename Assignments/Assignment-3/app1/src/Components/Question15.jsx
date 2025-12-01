import React, { useState } from "react";

const Question15 = () => {
  const [profile, setProfile] = useState({
    name: "Arun",
    email: "arun@gmail.com",
    phone: "9876543210",
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({
      ...editProfile,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    setProfile(editProfile);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Edit Profile</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={editProfile.name}
          onChange={handleChange}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={editProfile.email}
          onChange={handleChange}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Phone:</label><br />
        <input
          type="text"
          name="phone"
          value={editProfile.phone}
          onChange={handleChange}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      <button
        onClick={handleUpdate}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Update Profile
      </button>

      <hr />

      <h3>Profile Details</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
};

export default Question15;
