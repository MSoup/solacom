import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Banner from "../components/Banner";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";
import pic05 from "../assets/images/pic05.jpg";
import pic06 from "../assets/images/pic06.jpg";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Solacom - Home"
          meta={[
            { name: "description", content: "English Homepage for Sola.com" },
            { name: "keywords", content: "concept site, solacom" }
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Farm Automation</h3>
                <p>Creating more efficient farming systems</p>
              </header>
              <Link to="/farmAutomation" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Omni Oculus</h3>
                <p>Finding the truth in a world controlled by social media</p>
              </header>
              <Link to="/omnioculus" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Cybersecurity</h3>
                <p>Securing your digital assets</p>
              </header>
              <Link to="/cybersecurity" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>System Engineering</h3>
                <p>Need help on a project? Consult us.</p>
              </header>
              <Link to="/systemengineering" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Join The Team</h3>
                <p>Internship | Contract | Full Time Positions Available</p>
              </header>
              <Link to="/jointeam" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Meet The Team</h3>
                <p></p>
              </header>
              <Link to="/meetTeam" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>What is Sola.com?</h2>
              </header>
              <p className="centered">
                At Sola.com, we specialize in three things: 
                <br></br>
                Cybersecurity
                <br></br>
                Software Design
                <br></br>
                System Engineering. 
                <br></br>

                The world can become a better place through equipping our users with knowledge.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    See our blog here
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
