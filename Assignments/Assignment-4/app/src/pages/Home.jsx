import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="bg-primary text-white text-center p-5 rounded mb-4">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Our College</h1>
          <p className="lead">Excellence in Education Since 1995</p>
          <Link to="/about" className="btn btn-light btn-lg mt-3">Learn More</Link>
        </div>
      </section>

      <section className="mb-5">
        <h2>Why This College?</h2>
        <p>
          Our college is dedicated to providing high-quality education with modern infrastructure and experienced faculty. We focus on practical learning, industry exposure, and skill development to prepare students for successful careers. With strong placement support, vibrant campus life, and opportunities for innovation, we help students grow academically and personally in a supportive environment.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Top Departments</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Computer Science Engineering</h5>
                <p className="card-text">Leading the way in computing, algorithms, AI and software.</p>
                <div className="mt-auto">
                  <Link to="/departments/cse" className="btn btn-outline-primary btn-sm ">Explore CSE</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Electronics & Communication</h5>
                <p className="card-text">Innovation in circuits, communication systems, and embedded tech.</p>
                <div className="mt-auto">
                  <Link to="/departments/ece" className="btn btn-outline-primary">Explore ECE</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Mechanical Engineering</h5>
                <p className="card-text">Excellence in machines, manufacturing and automotive technologies.</p>
                <div className="mt-auto">
                  <Link to="/departments/mech" className="btn btn-outline-primary">Explore Mechanical</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="text-center mb-5">
        <Link to="/departments" className="btn btn-outline-dark btn-lg mx-2">View All Departments</Link>
        <Link to="/contact" className="btn btn-outline-dark btn-lg mx-2">Contact Us</Link>
      </section>
    </div>
  );
}
