import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

const ConnectToStore = (mapStateToProps, actions) => {
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

  return WrappedComponent =>
    connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

const Container = ({ props = null, actions = {} } = {}) => {
  return WrappedComponent => {
    let hocs = [];

    if (props || actions) {
      if (!actions) {
        actions = {};
      }

      hocs.push(ConnectToStore(props, actions));
    }

    const enhance = compose(...hocs);
    const Wce = enhance(WrappedComponent);

    class ContainerComponent extends React.Component {
      render() {
        return <Wce {...this.props} />;
      }
    }

    if (WrappedComponent.getInitialProps) {
      ContainerComponent.getInitialProps = WrappedComponent.getInitialProps;
    }

    return ContainerComponent;
  };
};

export default Container;
