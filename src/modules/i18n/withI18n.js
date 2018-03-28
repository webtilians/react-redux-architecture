import React from "react";
import PropTypes from "prop-types";

function withI18n(WrappedComponent) {
  return class extends React.Component {
    static contextTypes = {
      i18n: PropTypes.object
    };

    trans = (key, params = {}) => {
      const translations = this.context.i18n || this.props.i18n || {};
      let translation =
        typeof translations[key] == "undefined" ? key : translations[key];

      if (Object.keys(params).length > 0) {
        for (let i in params) {
          translation = translation.replace(new RegExp(i, "g"), params[i]);
        }
      }

      return translation;
    };

    render() {
      return <WrappedComponent trans={this.trans} {...this.props} />;
    }
  };
}

export default withI18n;
