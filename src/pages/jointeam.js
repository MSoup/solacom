import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import banner from '../assets/images/joinus/banner.jpeg'

const Test = props => (
  <Layout>
    <Helmet>
      <title>Solacom - Join The Team</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>We are hiring!</h1>
          </header>
          <span className="image main">
            <img src={banner} alt=""/>
          </span>
          <h2>Why work for Sola.com?</h2>
          <p>At Sola.com, we are a laid back working environment. We do not abide by many of the traditional Japanese work culture--for example, we do not enforce a dress code, and there is no mandatory overtime. We respect that each and every employee should value their health above their work.</p>
          <h2>Can you code? Are you eager and willing to learn?</h2>
          <p>
            Below are the positions we are hiring for:
          </p>

          <div className="grid-wrapper">
            <div className="col-6">
              <h3>Junior Software Developer (Contract)</h3>
              <p>
                Minimum requirements:
              </p>
              <ul>
                <li>Japanese Language Proficiency (ability to speak at a basic level)</li>
                <li>Autonomous</li>
                <li>Eager to Learn</li>
              </ul>
              <p>
                Preferred:
              </p>
              <ul>
                <li>Business Japanese Language Proficiency</li>
                <li>Python</li>
                <li>System engineering experience</li>
                <li>Cyber security experience</li>
                <p>*Note: Salaries and conditions to be discussed upon interview</p>
              </ul>
            </div>
            
            <div className="col-6">
              <h3>Intern (Fixed term)</h3>
              <p>
                Minimum requirements:
              </p>
              <ul>
                <li>Able to come regularly at a fixed time</li>
                <li>Autonomous</li>
                <li>Eager to Learn (some coding experience)</li>
              </ul>
              <p>
                Preferred:
              </p>
              <ul>
                <li>Business Japanese Language Proficiency</li>
                <li>Python</li>
                <li>Java</li>
                <p>*Note: allowances will not be provided for the duration of the internship</p>
              </ul>
            </div>
            </div>

            <h3>Software Developer (Full Time)</h3>
              <p>
                Minimum requirements:
              </p>
              <ul>
                <li>Japanese Language Proficiency (ability to speak at a business level)</li>
                <li>Autonomous</li>
                <li>Domain knowledge in a scripting language</li>
                <li>1+ year of relevant industry experience</li>
                <p>*Note: Salaries and conditions to be discussed upon interview</p>

              </ul>

            
        </div>
      </section>
    </div>
  </Layout>
)

export default Test
