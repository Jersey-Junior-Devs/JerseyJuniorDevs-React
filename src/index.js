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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// Google tag manager plugin
import TagManager from "react-gtm-module";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";


const env = process.env.NODE_ENV;

const tagManagerArgs = {
  gtmId: "GTM-WLM3JH7",
  //! the below changes GTM values based on whether dev or production
  auth: env === "development"
      ? "wOLlB9ZmTeQvnptGPP4WAA"
      : "yRVsO-whbdxkUy_41C2-0w",
  preview: env === "development"
    ? "env-7"
    : "env-1"
};
TagManager.initialize(tagManagerArgs);

// others
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
