import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import "../App.css"


const InquiryMessage = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3fupxco', 'template_o2gn8t6', form.current, {
        publicKey: 'lCr3B-Vq5bCIfFsO0',
      })
      .then(
        () => {
          alert("Mail Sent Successfully");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Mail Not Send Successfully");
        },
      );
  };

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (name === '' || email === '' || message === '') {
      setErrorMessage('All fields are required');
      return false;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const re =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    
    <div className="container-wrapper">
    <div className="text-message-container">
      <p>
        If hostellers or guardians have any issues related to payment, please feel free to contact our financial staff
        via email at <a href="mailto:finance@example.com">finance@example.com</a>. We are here to assist you.
      </p>
    </div>
    <div className="inquiryMessage">
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
          <legend>Inquiry Message:</legend>
          <div className="error-message">{errorMessage}</div>
          <label>Name</label>
          <input type="text" name="from_name" pattern="[A-Za-z]+" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </fieldset>
      </form>
    </div>
  </div>
  );
};

export default InquiryMessage;
