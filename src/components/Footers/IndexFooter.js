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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://www.google.com" target="_blank">
                  Useful Info
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  w3schools
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/" target="_blank">
                  Freecodecamp
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
                  ReactJS Docs
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()},
              <i className="fa fa-users users" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
