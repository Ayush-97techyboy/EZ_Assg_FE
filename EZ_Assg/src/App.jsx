import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://3.228.97.110:9000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setError("This email domain is not allowed");
      } else if (response.status === 200) {
        setSuccess(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className="header">
          <div className="logo">
            <span className="ez">EZ</span>
            <span className="works">Works</span>
          </div>
          <h1>Suite Of Business Support Services</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className={error ? "error" : ""}
              />
              <button type="submit" disabled={isSubmitting}>
                Contact Me
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Form Submitted</div>}
          </form>

        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3>Presentation Design</h3>
            <p>
              Professional presentation design services for impactful
              communication
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
            </div>
            <h3>Audio - Visual Services</h3>
            <p>High-quality audio and visual production services</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
              </svg>
            </div>
            <h3>Translation Services</h3>
            <p>Accurate translation services across multiple languages</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
                <circle cx="6.5" cy="11.5" r="1.5" />
                <circle cx="9.5" cy="7.5" r="1.5" />
                <circle cx="14.5" cy="7.5" r="1.5" />
                <circle cx="17.5" cy="11.5" r="1.5" />
              </svg>
            </div>
            <h3>Graphic Design</h3>
            <p>Creative graphic design solutions for your brand</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z" />
              </svg>
            </div>
            <h3>Research & Analytics</h3>
            <p>Data-driven research and analytical solutions</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.12-.82 4.06-2.16 5.5l1.42 1.42A9.97 9.97 0 0 0 22 13c0-5.52-4.48-10-10-10z" />
                <path d="M12 7c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l1.42-1.42A3.95 3.95 0 0 1 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.07-.42 2.05-1.11 2.77l1.42 1.42A5.98 5.98 0 0 0 18 13c0-3.31-2.69-6-6-6z" />
                <circle cx="12" cy="13" r="2" />
              </svg>
            </div>
            <h3>Data Processing</h3>
            <p>Efficient data processing and management services</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
