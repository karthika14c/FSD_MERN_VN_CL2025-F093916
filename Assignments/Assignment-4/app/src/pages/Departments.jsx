import { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then(res => res.json())
      .then(data => {
        setDepartments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load departments.json", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading departments...</p>;

  return (
    <div>
      <h2>Departments</h2>

      <div className="row g-3">
        {departments.map(dept => (
          <div key={dept.id} className="col-md-4">
            <DepartmentCard dept={dept} />
          </div>
        ))}
      </div>
    </div>
  );
}
