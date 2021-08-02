import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";

import pic11 from "../../assets/images/blog/2021/daven-photo.jpg";

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Blog Post 1</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Daven's Blog</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            This photo of me was taken in Zao, Miyagi Prefecture. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>

          <div class="table-wrapper">
            <table class="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company Name</td>
                  <td>Sola.com</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>Takahashi Hiroto</td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>10,000,000 JPY</td>
                </tr>
                <tr>
                  <td>Founded</td>
                  <td>March 6, 2003</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td>36 (As of July 2020)</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    Miyagi-ken, Sendai-shi, Aoba-ku
                    <br />
                    Honmachi 1-2-5
                    <br />
                    JAPAN
                  </td>
                </tr>
                <tr>
                  <td>Office Hours</td>
                  <td>10:00～19:00 Monday to Friday (excluding holidays)</td>
                </tr>
                <tr>
                  <td>Services</td>
                  <td>
                    System Integration
                    <br />
                    Systems Consulting
                    <br />
                    Cyber Security Consulting
                    <br />
                    Data Processing
                    <br />
                    Software Development
                    <br />
                    and more (contact for details)
                  </td>
                </tr>
                <tr>
                  <td>Advisors</td>
                  <td>
                    Miyagi Information Service Industry Association
                    <br />
                    Miyagi Japan Hong Kong Society
                    <br />
                    The Society For Promotion of Japanese Diplomacy
                    <br />
                    Japan Society for Security and Crisis Management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Generic;
