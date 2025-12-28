import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user"
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const temp = {};

    if (!form.name.trim()) temp.name = "Name is required";

    if (!form.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      temp.email = "Enter a valid email";

    if (!form.phone.trim()) temp.phone = "Phone number is required";
    else if (form.phone.length < 10)
      temp.phone = "Enter valid phone";

    if (!form.password.trim()) temp.password = "Password is required";
    else if (form.password.length < 6)
      temp.password = "Minimum 6 characters required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const submit = async () => {
    setServerError("");
    setSuccess("");

    if (!validate()) return;

    try {
      const res = await API.post("/auth/register", form);

      setSuccess(res.data.message || "Registered Successfully ✨");

      setTimeout(() => navigate("/login"), 1500);
    } 
    catch (err) {
      setServerError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h3>Signup</h3>

        {serverError && (
          <div className="alert alert-danger">{serverError}</div>
        )}

        {success && (
          <div className="alert alert-success">{success}</div>
        )}

        <input
          className="form-control auth-input"
          placeholder="Enter your name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <input
          className="form-control auth-input"
          placeholder="Enter email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          className="form-control auth-input"
          placeholder="Enter phone number"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        <input
          type="password"
          className="form-control auth-input"
          placeholder="Create password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        <select
          className="form-control auth-input"
          onChange={e => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-success auth-btn" onClick={submit}>
          Signup
        </button>

        <div className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
