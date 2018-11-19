import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/accordion.css";

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      active: false
    };
    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  Accordion.prototype.handleToggle = function handleToggle() {
    this.setState({
      active: !this.state.active
    });
  };

  Accordion.prototype.render = function render() {
    var stateStyle = this.state.active ? styles.active : styles.inactive;

    return React.createElement(
      "section",
      { className: styles.accordion },
      React.createElement(
        "a",
        { onClick: this.handleToggle },
        this.props.summary
      ),
      React.createElement(
        "p",
        { className: stateStyle },
        this.props.details
      )
    );
  };

  return Accordion;
}(React.Component);

export default Accordion;


Accordion.propTypes = {
  summary: propTypes.string.isRequired,
  details: propTypes.string.isRequired
};