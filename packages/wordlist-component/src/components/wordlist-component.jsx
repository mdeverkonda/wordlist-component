// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/wordlist-component.css";
import Accordion from "./accordion";

export default class WordlistComponent extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.container}>
        <h4>Demo Component</h4>
        {data.map((d, x) => <Accordion key={x} summary={d.summary} details={d.details} />)}
      </div>
    );
  }
}

WordlistComponent.displayName = "WordlistComponent";

WordlistComponent.propTypes = {
  data: propTypes.array
};

WordlistComponent.defaultProps = { };
