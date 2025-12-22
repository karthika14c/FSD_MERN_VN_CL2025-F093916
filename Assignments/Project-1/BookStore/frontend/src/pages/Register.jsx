import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create your account</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="form-control mb-3"
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="form-control mb-4"
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>

          <button style={styles.button}>Create account</button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span
            style={styles.loginLink}
            onClick={() => navigate("/login")}
          >
            Log in
          </span>{" "}
          here
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "500px",
    padding: "40px",
    borderRadius: "14px",
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    marginBottom: "25px"
  },
  input: {
    height: "45px",
    borderRadius: "8px"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#4f8a3f",
    color: "white",
    borderRadius: "8px",
    border: "none",
    fontSize: "18px"
  },
  loginText: {
    marginTop: "18px",
    fontSize: "16px"
  },
  loginLink: {
    color: "#3b5bde",
    fontWeight: "bold",
    cursor: "pointer"
  }
};
