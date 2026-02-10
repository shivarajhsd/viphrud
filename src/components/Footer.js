function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>VIPHRUD TECHNOLOGIES</h3>
          <p>Enterprise Software & Consulting</p>
        </div>

        <div>
          <h4>Services</h4>
          <p>Development</p>
          <p>Cloud</p>
          <p>Consulting</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>info@viphrud.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} VIPHRUD TECHNOLOGIES
      </div>
    </footer>
  );
}

export default Footer;
