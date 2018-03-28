import React, { Component } from "react";
import { Container } from "../../utils";
import { setLocaleLinksRegularMode } from "../i18n";
import * as actions from "./actions";
// import HtmlHead from "./components/HtmlHead";
import Home from "./components/Home";

// @Container({
//   props: state => ({
//     homeSlider: state.home.homeSlider
//   }),

//   actions: { ...actions, setLocaleLinksRegularMode }
// })
class HomeContainer extends Component {
  render() {
    return (
      <div>
        {/* <HtmlHead /> */}
        <Home />
      </div>
    );
  }
}

export default HomeContainer;
