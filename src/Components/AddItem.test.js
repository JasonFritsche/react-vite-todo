import React from "react";
import AddItem from "./AddItem";
import { shallow } from "enzyme";

describe("AddItem Component", () => {
  it("renders", () => {
    shallow(<AddItem />);
  });

  it("starts with an empty input", () => {
    const wrapper = shallow(<AddItem />);
    const initialInputValue = wrapper.find("input").text();
    expect(initialInputValue).toMatch("");
  });
});
