import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import verticalFarming from "../assets/images/verticalFarming.png";
import verticalFarming2 from "../assets/images/verticalFarming2.jpg";

const FarmAutomationPage = props => (
  <Layout>
    <Helmet>
      <title>Farm Automation</title>
      <meta name="farm automation page" content="Solacom Farm Automation Project" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Farm Automation Project</h1>
          </header>
          <span className="image main">
            <img src={verticalFarming} alt="" />
          </span>
          <h2>By Utilizing Vertical Farming, We Have Created More Efficient Watering Systems</h2>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
            Curabitur sapien risus, commodo eget turpis at, elementum convallis
            elit. Pellentesque enim turpis, hendrerit.
          </p>

          <h2>The Project</h2>

          <div className="grid-wrapper">
            <div className="col-6">
              <h3>Sem turpis amet semper</h3>
              <span className="image secondary">
                <img src={verticalFarming2} alt="" />
              </span>
            </div>
            <div className="col-6">
              <h3>Magna odio tempus commodo</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
            <div className="col-4">
              <h3>Interdum sapien gravida</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="col-4">
              <h3>Faucibus consequat lorem</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="col-4">
              <h3>Accumsan montes viverra</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default FarmAutomationPage;
