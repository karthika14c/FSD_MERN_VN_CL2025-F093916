import { useState, useEffect } from "react";

export default function Contact() {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", dept: "", message: "" });
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(() => setDepartments([]));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", dept: "", message: "" });
  }

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input className="form-control my-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input className="form-control my-2" name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />

        <select className="form-control my-2" name="dept" value={form.dept} onChange={handleChange} required>
          <option value="">Select Department</option>
          {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>

        <textarea className="form-control my-2" rows="5" name="message" placeholder="Message" value={form.message} onChange={handleChange} required />

        <button className="btn btn-primary">Submit</button>
      </form>

      {submitted && (
        <div className="card">
          <div className="card-body">
            <h5>Submitted Data</h5>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Department:</strong> {submitted.dept}</p>
            <p><strong>Message:</strong> {submitted.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
