import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const LinkLocale = ({
  children,
  to,
  onClick = null,
  locale = null,
  defaultLocale
}) => {
  const linkProps = { to, onClick };

  if (locale === null) {
    locale = defaultLocale;
  }

  if (linkProps.to !== null && locale != defaultLocale) {
    linkProps.to =
      linkProps.to == "" ? `/${locale}` : `/${locale}/${linkProps.to}`;
  } else {
    linkProps.to = `/${linkProps.to}`;
  }

  return <Link {...linkProps}>{children}</Link>;
};

export default connect(state => ({
  locale: state.i18n.locale,
  defaultLocale: state.i18n.defaultLocale
}))(LinkLocale);
