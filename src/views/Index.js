/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexFooter from "components/Footers/IndexFooter.js";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />

      <div className="main" id="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="9">
                <h2 className="title">About us</h2>
                <p className="description description-bold">
                  JerseyJuniorDevs is a community which aims to bring together
                  people from the island with a passion or interest for
                  programming and technology, especially those who are at the
                  beginning of their career, or those who are trying to get into
                  the industry.
                </p>
                <p className="description-light m-3">
                  Together, we are networking, growing and staying up to date
                  with the tech industry; we are encouraging contributions to
                  open source, group projects, regular meetings with senior
                  people from the industry, as well as participating in other
                  communities and events across the island.
                </p>
                <p className="description-light m-3">
                  As we are growing in numbers, this page will be updated with
                  future projects and contributors.
                </p>
                <p className="description-light m-3">
                  Please share this page with anyone that you think might be
                  interested to join!
                </p>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "500" }}
                  >
                    Step 1
                  </h4>
                  <a
                    href="https://www.facebook.com/groups/3092720600797985/"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/facebook.png")}
                      style={{ width: "60%", padding: "10px" }}
                    />
                  </a>
                  <p className="darker pl-5 pr-5">
                    Join the Jersey Junior Devs Facebook group.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "500" }}
                  >
                    Step 2
                  </h4>
                  <a
                    href="https://github.com/Jersey-Junior-Devs/JerseyJuniorDevs"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/github.png")}
                      style={{ width: "60%", padding: "10px" }}
                    />
                  </a>
                  <p className="darker pl-5 pr-5">
                    Fork the Jersey Junior Devs Github Repo.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "500" }}
                  >
                    Step 3
                  </h4>
                  <a
                    href="https://trello.com/invite/b/NVgGPulp/87a2320880adcc71349d89d12ae59915/jjd-website"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/trello.png")}
                      style={{ width: "60%", padding: "10px" }}
                    />
                  </a>
                  <p className="darker pl-5 pr-5">
                    Visit the Trello board and start contributing to the
                    website.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <IndexFooter />
      </div>
    </>
  );
}

export default Index;
