import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <h1>Contact Us</h1>
        <form method="post" action="https://getform.io/f/f8b36190-d152-41f5-9996-828c8d0bd66e">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto: info@solanets.com">info@solanets.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone (Hours 10:00-19:00 M-F)</h3>
            <span>022-226-7025</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Miyagi-ken, Sendai-shi, Aoba-ku
              <br />
              Honmachi 1-2-5
              <br />
              JAPAN
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
