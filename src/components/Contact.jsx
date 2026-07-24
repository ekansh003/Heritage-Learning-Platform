import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const form = useRef();
  const captchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const captchaValue = captchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please verify captcha");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_pfscp3s",
        "template_u8jrh49",
        form.current,
        "wtnu1TVE_FZFzjp-u",
      )
      .then(() => {
        setMessage("Message sent successfully!");
        form.current.reset();
        captchaRef.current.reset();
      })
      .catch(() => {
        setMessage("Failed to send. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>

        <div className="contact-wrapper">
          <div className="contact-left">
            <h2>Reach Us</h2>

            <p>
              <strong>Phone:</strong> +91 99933 16161, +91 94442 12300
            </p>

            <p>
              <strong>Email:</strong> exploristoryeducations@gmail.com
            </p>

            <p>
              <strong>Address:</strong>
              <br />
              17/11 - Jeevanantham Street, Vinayagapuram, Ambattur, Chennai,
              Tamil Nadu - 600053
              <br />
              Landmark - Behind Naidu Hall
            </p>
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            <input type="email" name="email" placeholder="Email" required />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>

            <div className="form-actions">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey="6LeQEposAAAAAOi0-wZXZrmHCOf-duoWau4amQlH"
              />

              <button
                type="submit"
                className={loading ? "loading" : ""}
                disabled={loading}
              >
                <span className="btn-text">
                  {loading ? "Sending..." : "Submit"}
                </span>

                <span className="btn-loader"></span>
              </button>
            </div>

            {message && (
              <p
                style={{
                  marginTop: "15px",
                  color:
                    message === "Message sent successfully!" ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
