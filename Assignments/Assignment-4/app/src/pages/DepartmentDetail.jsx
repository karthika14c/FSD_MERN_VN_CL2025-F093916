import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DepartmentDetails() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id === id);
        setDept(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!dept) return <div>
    <h3>Department not found</h3>
    <Link to="/departments" className="btn btn-secondary">Back to Departments</Link>
  </div>;

  return (
    <div>
      <h2>{dept.name}</h2>
      <p>{dept.fullDescription || dept.description}</p>

      <h4>Courses Offered</h4>
      <ul>
        {dept.courses.map((c, i) => <li key={i}>{c}</li>)}
      </ul>

      <h4>Faculty</h4>
      <ul>
        {dept.faculty.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <h4>Labs & Facilities</h4>
      <ul>
        {dept.labs.map((l, i) => <li key={i}>{l}</li>)}
      </ul>

      <Link to="/departments" className="btn btn-link mt-3">← Back to Departments</Link>
    </div>
  );
}
