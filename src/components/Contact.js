import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "shivarajhsd7451",
        "template_zact1al",
        form.current,
        "A8MgR915gwBUAoaHO"
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });

    e.target.reset();
  };

  return (
    <>
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <section className="contact-section">
        <div className="container contact-wrapper">

          <div className="glass-card">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input name="name" placeholder="Full Name" required />
              <input name="email" type="email" placeholder="Email Address" required />
              <textarea name="message" rows="5" placeholder="Message" required />
              <button type="submit" className="contact-btn">
                Send Message
              </button>

              {success && <p className="success-msg">✔ Message Sent Successfully</p>}
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="glass-card">
              <p><FaEnvelope className="icon"/> info@viphrud.com</p>
              <p><FaPhoneAlt className="icon"/> +91 98765 43210</p>
              <p><FaMapMarkerAlt className="icon"/> India</p>
            </div>

            <div className="map-card">
              <iframe
                src="https://www.google.com/maps?q=India&output=embed"
                title="map"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
