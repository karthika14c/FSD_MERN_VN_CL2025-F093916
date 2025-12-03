import { Link } from "react-router-dom";

export default function DepartmentCard({ dept }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{dept.name}</h5>
        <p className="card-text">{dept.description}</p>
        <div className="mt-auto">
          <Link to={`/departments/${dept.id}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
