function Services() {
  return (
    <section className="services-section fade-in">
      <div className="container">
        <h2 className="section-title">Our Core Services</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Enterprise Software Development</h3>
            <p>Custom enterprise applications built for scalability.</p>
          </div>

          <div className="card">
            <h3>Cloud & DevOps</h3>
            <p>CI/CD pipelines, containerization and cloud strategy.</p>
          </div>

          <div className="card">
            <h3>Digital Transformation</h3>
            <p>Modernizing legacy systems for competitive advantage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
