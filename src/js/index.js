import "babel-polyfill";
import React from 'react';
require('../less/layout/main-layout.less');
require('../less/modules/some-module-or-page.less');
import ReactDom from 'react-dom';

import Layout from "./pages/layout";
import {PATHS} from "./constants"

var app = document.querySelector("#app");


ReactDom.render(
  <section>
    <Layout/>
    <div className="component">just a small boilerplate</div>
  </section>

  , app);



