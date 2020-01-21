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
import { Container } from "reactstrap";
import './indexHeader.css'

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h2 className="presentation-title">Jersey Junior Devs</h2>
            </div>
            <h2
              className="presentation-subtitle text-center"
            >
              Built by members of the community themselves.
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
