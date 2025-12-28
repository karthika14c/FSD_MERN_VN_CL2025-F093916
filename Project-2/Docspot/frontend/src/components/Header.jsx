import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const isLandingPage = location.pathname === "/";

  return (
    <nav className="navbar navbar-light bg-light px-4 shadow">
      <h3 className="fw-bold">MediCareBook</h3>

      {isLandingPage ? (
        <div>
          <Link className="btn btn-primary mx-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>
      ) : (

        <>
          {token && (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          )}
        </>
      )}
    </nav>
  );
}
