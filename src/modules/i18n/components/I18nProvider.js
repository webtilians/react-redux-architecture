import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class I18nProvider extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    i18n: PropTypes.object.isRequired
  };

  getChildContext() {
    const { locale, messages } = this.props;
    return {
      i18n: typeof messages[locale] == "undefined" ? {} : messages[locale]
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default connect(state => ({ locale: state.i18n.locale }))(I18nProvider);
