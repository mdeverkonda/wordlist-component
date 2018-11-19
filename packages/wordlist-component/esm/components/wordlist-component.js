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

import styles from "../styles/wordlist-component.css";
import Accordion from "./accordion";

var _ref = React.createElement(
  "h4",
  null,
  "Demo Component"
);

var WordlistComponent = function (_React$Component) {
  _inherits(WordlistComponent, _React$Component);

  function WordlistComponent() {
    _classCallCheck(this, WordlistComponent);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  WordlistComponent.prototype.render = function render() {
    var data = this.props.data;

    return React.createElement(
      "div",
      { className: styles.container },
      _ref,
      data.map(function (d, x) {
        return React.createElement(Accordion, { key: x, summary: d.summary, details: d.details });
      })
    );
  };

  return WordlistComponent;
}(React.Component);

export default WordlistComponent;


WordlistComponent.displayName = "WordlistComponent";

WordlistComponent.propTypes = {
  data: propTypes.array
};

WordlistComponent.defaultProps = {};