import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FormattedMessage } from "react-intl";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetInputs = () => {
    Array.from(document.getElementsByClassName("contact-input")).forEach(
      (input) => (input.value = "")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://mailer-portfolio.herokuapp.com", {
        method: "POST",
        body: JSON.stringify(mail),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      console.log(data);
      resetInputs();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <form
      className="contact-form mx-auto mb-8 w-96 max-w-md rounded px-6 pt-8 pb-4 backdrop-blur-md bg-black/40"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-6">
        <FormattedMessage id="contactForm-name" defaultMessage="">
          {(placeholder) => (
            <input
              type="text"
              className="contact-input p-2 text-white"
              onChange={handleChange}
              name="name"
              autoComplete="off"
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        <FormattedMessage id="contactForm-email" defaultMessage="">
          {(placeholder) => (
            <input
              type="email"
              className="contact-input email-input p-2 text-white"
              onChange={handleChange}
              name="email"
              autoComplete="off"
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        <FormattedMessage id="contactForm-subject" defaultMessage="">
          {(placeholder) => (
            <input
              type="text"
              className="contact-input p-2 text-white"
              onChange={handleChange}
              name="subject"
              autoComplete="off"
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        <FormattedMessage id="contactForm-message" defaultMessage="">
          {(placeholder) => (
            <textarea
              rows={6}
              className="contact-input p-2 text-white"
              onChange={handleChange}
              name="message"
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>
        <button
          className="send-button"
          disabled={!mail.name || !mail.email || !mail.message}
        >
          <div>
            {loading ? (
              <span className="loader mx-auto" />
            ) : (
              <div className="alt-send-button text-white text-xl font-bold">
                <div className="mx-auto w-7">
                  <BiMailSend size={30} />
                </div>
                <span className="send-text">
                  {!mail.name || !mail.email || !mail.message ? (
                    <FormattedMessage
                      id="contactForm-cantSubmit"
                      defaultMessage=""
                    />
                  ) : (
                    <FormattedMessage id="contactForm-send" defaultMessage="" />
                  )}
                </span>
              </div>
            )}
          </div>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
