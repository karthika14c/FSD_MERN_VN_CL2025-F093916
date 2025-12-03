export default function About() {
  return (
    <div className="about-page">

      {/* ---------------- COLLEGE HISTORY ---------------- */}
      <section className="mb-5">
        <h2 className="fw-bold">College History</h2>
        <p className="mt-2">
          Established in 1995, our college has grown into a center of excellence 
          offering engineering, management, and research programs. Over the last 
          three decades, we have consistently achieved academic excellence, built 
          world-class infrastructure, partnered with industries, and produced 
          thousands of successful graduates contributing globally.
        </p>
      </section>

      {/* ---------------- MISSION & VISION ---------------- */}
      <section className="mb-5">
        <h2 className="fw-bold">Mission & Vision</h2>

        <h5 className="mt-3">Our Mission</h5>
        <p>
          To empower students with deep knowledge, strong technical skills, real-world 
          experience, and ethical values to excel in their careers and serve society.
        </p>

        <h5 className="mt-3">Our Vision</h5>
        <p>
          To become a globally recognized institution known for innovation-driven 
          education, cutting-edge research, industry collaboration, and student success.
        </p>
      </section>

      {/* ---------------- ACHIEVEMENTS (TIMELINE) ---------------- */}
      <section>
        <h2 className="fw-bold mb-4">Achievements</h2>

        <div className="timeline">

          <div className="timeline-item mb-4 d-flex">
            <div className="timeline-marker bg-primary me-3"></div>
            <div>
              <h5 className="fw-bold">2023</h5>
              <p>Won the Best Innovation Lab Award for outstanding contributions in AI & Robotics.</p>
            </div>
          </div>

          <div className="timeline-item mb-4 d-flex">
            <div className="timeline-marker bg-primary me-3"></div>
            <div>
              <h5 className="fw-bold">2021</h5>
              <p>Ranked #1 in the state for Academic Excellence and Research Output.</p>
            </div>
          </div>

          <div className="timeline-item mb-4 d-flex">
            <div className="timeline-marker bg-primary me-3"></div>
            <div>
              <h5 className="fw-bold">2018</h5>
              <p>Established advanced R&D centers in Computer Science, Electronics, and Mechanical Engineering.</p>
            </div>
          </div>

          <div className="timeline-item mb-4 d-flex">
            <div className="timeline-marker bg-primary me-3"></div>
            <div>
              <h5 className="fw-bold">2015</h5>
              <p>Achieved 95% placement rate across engineering departments.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
