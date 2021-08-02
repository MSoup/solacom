import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";

import photo1 from "../../assets/images/blog/2021/solacom-workinmiyagi-photo1.jpg";
import photo2 from "../../assets/images/blog/2021/solacom-workinmiyagi-photo2.jpg";

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Blog Post 2</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Sola.com Featured on "Work in Miyagi"</h1>
          </header>
          <span className="image main">
            <img src={photo1} alt="" />
          </span>
          <p>For more information about work in Miyagi, check out <a href="https://vimeo.com/534783563">this video</a>. </p>
          <p>Blog post translated from <a href="https://solanets.com/wp/2021/07/30/%e5%ae%ae%e5%9f%8e%e7%9c%8c%e6%a7%98%e3%80%8cwork-in-miyagi%e3%80%8d%e3%81%ab%e5%bf%9c%e6%8f%b4%e5%8b%95%e7%94%bb%e3%82%92%e3%81%94%e6%8e%b2%e8%bc%89%e9%a0%82%e3%81%8d%e3%81%be%e3%81%97%e3%81%9f/">Japanese Site</a>.</p>
          <p>Hey everyone! This is Daven from Sola.com! In late July, Sola.com President Takahashi and full time staff member from Malaysia, Jackson Hue, were featured on "Work In Miyagi," a site that aims to promote job opportunities to students studying abroad in Miyagi.</p>
          <img src={photo2}></img>
          <p></p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Generic;
