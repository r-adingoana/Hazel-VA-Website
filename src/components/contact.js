import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fe5npo8",
        "template_1hhpx0c",
        form.current,
        "uPNSl12p8bFttTV3a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
<section id="contact" className="contact-section py-5 text-center">
      <div className="container">
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-control"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="form-control"
          />
          <textarea
            name="message"
            placeholder="How can I help you?"
            rows="5"
            required
            className="form-control"
          ></textarea>
          <button type="submit" className="btn-cta btn w-100">
            Send Message
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
