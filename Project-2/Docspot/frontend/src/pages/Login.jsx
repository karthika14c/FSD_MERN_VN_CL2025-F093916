import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const navigate = useNavigate();

  const submit = async ()=>{

    setError("");
    setSuccess("");

    if(!email || !password){
      setError("Please enter email & password");
      return;
    }

    try{
      const res = await API.post("/auth/login",{email,password});

      if(!res.data.token){
        setError(res.data.message || "Login failed");
        return;
      }

      setSuccess("Login Successful ✨ Redirecting...");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      setTimeout(() => {
        if(res.data.role === "admin") navigate("/admin");
        else if(res.data.role === "doctor") navigate("/doctor");
        else navigate("/user");
      }, 1200);

    } catch(err){
      console.log(err);
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return(
    <div className="auth-page">
      <div className="auth-card">
        <h3>Login</h3>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <input
          className="form-control auth-input"
          placeholder="Enter email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control auth-input"
          placeholder="Enter password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button className="btn btn-success auth-btn" onClick={submit}>
          Login
        </button>

        <div className="auth-switch">
          Don’t have an account? <Link to="/register">Signup</Link>
        </div>
      </div>
    </div>
  )
}
