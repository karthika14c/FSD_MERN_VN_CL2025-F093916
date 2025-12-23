import { Link } from "react-router-dom";

export default function Header() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">StoryShelf</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          {/* -------- COMMON HOME -------- */}
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>


          {/* -------- USER HEADER -------- */}
          {role === "user" && token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">Wishlist</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/orders">My Orders</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </>
          )}


          {/* -------- SELLER HEADER -------- */}
          {role === "seller" && token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/seller/dashboard">
                  Seller Dashboard
                </Link>
              </li>
            </>
          )}


          {/* -------- ADMIN HEADER -------- */}
          {role === "admin" && token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
            </>
          )}


          {/* -------- NOT LOGGED IN -------- */}
          {!token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}

          {/* -------- LOGOUT -------- */}
          {token && (
            <li className="nav-item">
              <button className="btn btn-danger ms-3" onClick={logout}>
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}
