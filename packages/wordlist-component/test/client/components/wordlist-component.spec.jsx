/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import WordlistComponent from "src/components/wordlist-component";

describe("components/wordlist-component", () => {

  describe("Mounting", () => {
    const data = [
      {
        summary: "summary 1",
        details: "details 1"
      },
      {
        summary: "summary 2",
        details: "details 2"
      },
      {
        summary: "summary 3",
        details: "details 3"
      }
    ];
    it("should render into the document", () => {
      const component = shallow(<WordlistComponent data={data}/>);
      expect(component).to.not.be.null;
    });

  });

});
