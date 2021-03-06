import React from "react";

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Sola.com</h1>
      </header>
      <div className="content">
        <p>
          Human Centered Innovation
          <br />A concept site
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              View Projects
            </a>
          </li>
          <li>
            <a href="/landing" className="button next scrolly">
              View our blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
