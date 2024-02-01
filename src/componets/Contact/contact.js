import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { grey } from '@mui/material/colors';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i4dw5qc', 'template_bg2193g', form.current, 'T318Dwv9GuN5Eo-Rq')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Message sent!");
      })
      .catch((error) => {
        console.error(error.text);
        alert("Some error occurred. Please try again!");
      });
  };

  const style = {
    background: grey[500],
    color: 'white',
    border: 'transparent',
  };

  return (
    <div id='contact' className="contactMain">
      <form ref={form} onSubmit={sendEmail} className="contactSection">
        <span className="contactHead">Contact</span>

        <div className="mb-3">
          <label htmlFor="inputPassword5" style={{ padding: '6px' }} className="form-label">
            Your Name
          </label>
          <input
            type="text"
            style={style}
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder='Full Name'
            name='from_name'
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" style={{ padding: '6px' }} className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            style={style}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name='from_email'
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" style={{ padding: '6px' }} className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            style={style}
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder='Enter your message here...'
            name='message'
            required
          ></textarea>
        </div>

        <button type="submit" className="btn submitBtn btn-primary" style={{ padding: '6px' }}>
          Send
          <div><i className="material-icons submit">send</i></div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
