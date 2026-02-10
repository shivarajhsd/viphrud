function Projects() {
  return (
    <section className="projects-section fade-in">
      <div className="container">
        <h2 className="section-title">Featured Case Studies</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>Microservices-based scalable commerce system.</p>
            <button className="project-btn">View Case Study →</button>
          </div>

          <div className="project-card">
            <h3>Healthcare System</h3>
            <p>Cloud-native patient data management system.</p>
            <button className="project-btn">View Case Study →</button>
          </div>

          <div className="project-card">
            <h3>FinTech Dashboard</h3>
            <p>Real-time transaction monitoring analytics platform.</p>
            <button className="project-btn">View Case Study →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
