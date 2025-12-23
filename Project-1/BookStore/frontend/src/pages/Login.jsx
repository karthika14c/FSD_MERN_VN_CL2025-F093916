import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      if (res.data.role === "admin") navigate("/admin/dashboard");
      else if (res.data.role === "seller") navigate("/seller/dashboard");
      else navigate("/");
    } catch {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Log In</h2>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div style={styles.row}>
            <div>
              <input type="checkbox" /> Remember me
            </div>
          </div>

          <button style={styles.button}>Log In</button>
        </form>

        <div className="text-center mt-3">
          <span>Don’t have an account? </span>
          <span
            style={{
              color: "#3b5cff",
              fontWeight: "600",
              cursor: "pointer"
            }}
            onClick={() => navigate("/register")}
          >
            Sign up
          </span>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    width: "420px",
    padding: "35px",
    borderRadius: "12px",
    background: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { marginBottom: "25px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#4f8a3f",
    color: "white",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  link: {
    color: "green",
    cursor: "pointer",
  },
  signupLink: {
    fontWeight: "bold",
    textDecoration: "none",
    background: "#3f51b5",
    padding: "6px 10px",
    borderRadius: "6px",
    color: "white",
  },
};
