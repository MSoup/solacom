import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const ContactUs = props => (
  <Layout>
    <Helmet>
      <title>Solacom - Contact Page</title>
      <meta name="Contact Solacom" content="Contact Solacom Form" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Contact Page</h1>
          </header>

          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactUs
