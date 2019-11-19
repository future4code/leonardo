import React from "react";
import { shallow } from "enzyme";
import { Comments, handleExpandClick, BoldTxt } from "./comments";
import renderer from "react-test-renderer";


describe("Comments component", () => {
  
    test("Bold Text", () => {
      const component = shallow(
        <BoldTxt />
      );
      const boldTxt = component.find(BoldTxt);
      expect(boldTxt).toHaveLength(1);
    });
  
    
  });
  