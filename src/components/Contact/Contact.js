import React from 'react';
import '../Contact/Contact.css';

export const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact-container">
          <form className="shadow">
            <h4>Message Us</h4> <br />
            <input
              type="text"
              placeholder="Full Name"
            />
            <input
              type="text"
              placeholder="Email"
            />
            <input
              type="phone number"
              placeholder="+25195783932"
            />
            {/* <input type='text' placeholder='Subject' /> */}
            <textarea
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};
