import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function IndexContent() {
  return (
    <>
      <div className="main">
        <div
          className="section text-center"
          id="join"
          style={{ padding: "8%" }}
        >
          <Container>
            <h2 className="title">Join the community</h2>
            <Row>
              <Col md="3">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "1000" }}
                  >
                    Step 1
                  </h4>
                  <a
                    href="https://www.facebook.com/groups/3092720600797985/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/icons/facebook.png")}
                        style={{ width: "80%", padding: "10px" }}
                      />
                      <p className="darker pl-5 pr-5">
                        Join the Jersey Junior Devs Facebook group.
                      </p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col md="3">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "1000" }}
                  >
                    Step 2
                  </h4>
                  <a
                    href="https://github.com/Jersey-Junior-Devs/JerseyJuniorDevs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/github.png")}
                      style={{ width: "80%", padding: "10px" }}
                    />
                    <p className="darker pl-5 pr-5">
                      Fork the Jersey Junior Devs Github Repo.
                    </p>
                  </a>
                </div>
              </Col>
              <Col md="3">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "1000" }}
                  >
                    Step 3
                  </h4>
                  <a
                    href="https://join.slack.com/t/jersey-devs/shared_invite/enQtOTAwMTgzNzcyMTk3LTIzODhhYjJkOTI0MjNlMzFkZWY0NDA3OGU1NWQ2NzQxZjRkYmUyMWI2YzQ0NWZmMGE1YzllMzg3ZDkwOGUzYzM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/slack.png")}
                      style={{ width: "80%", padding: "10px" }}
                    />
                    <p className="darker pl-5 pr-5">
                      Share ideas or ask for help on the Slack group.
                    </p>
                  </a>
                </div>
              </Col>
              <Col md="3">
                <div className="description">
                  <h4
                    className="info-title"
                    style={{ color: "#F7CB15", fontWeight: "1000" }}
                  >
                    Step 4
                  </h4>
                  <a
                    href="https://trello.com/invite/b/NVgGPulp/87a2320880adcc71349d89d12ae59915/jjd-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/icons/trello.png")}
                      style={{ width: "80%", padding: "10px" }}
                    />
                    <p className="darker pl-5 pr-5">
                      Visit the Trello board and start contributing to the
                      website.
                    </p>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-dark text-center"
          id="about"
          style={{ padding: "10%" }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="9">
                <h2 className="title">About us</h2>
                <p
                  className="description description-bold"
                  style={{ fontSize: "1.5em" }}
                >
                  JerseyJuniorDevs is a community which aims to bring together
                  people from the island with a passion or interest for
                  programming and technology, especially those who are at the
                  beginning of their career, or those who are trying to get into
                  the industry.
                </p>
                <p className="description m-3" style={{ fontSize: "1.5em" }}>
                  Together, we are networking, growing and staying up to date
                  with the tech industry; we are encouraging contributions to
                  open source, group projects, regular meetings with senior
                  people from the industry, as well as participating in other
                  communities and events across the island.
                </p>
                <p className="description m-3" style={{ fontSize: "1.5em" }}>
                  As we are growing in numbers, this page will be updated with
                  future projects and contributors.
                </p>
                <p className="description m-3" style={{ fontSize: "1.5em" }}>
                  Please share this page with anyone that you think might be
                  interested to join!
                </p>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexContent;
