import React from "react";
import AddItem from "./AddItem";
import { shallow, mount } from "enzyme";

describe("AddItem Component", () => {
  let wrapper;
  let props = {
    addTodoHandler: jest.fn(), // You don't need to define the implementation if it's empty
  };

  beforeEach(() => {
    wrapper = mount(<AddItem {...props} />);
  });

  it("renders", () => {
    shallow(<AddItem />);
  });

  it("starts with an empty input", () => {
    const initialInputValue = wrapper.find("input").text();
    expect(initialInputValue).toMatch("");
  });

  it("calls the addTodoHandler when input has a value and button is clicked", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Hello World" } });
    const addButton = wrapper.find("button");
    addButton.simulate("click");
    expect(props.addTodoHandler).toHaveBeenCalled();
  });
});
