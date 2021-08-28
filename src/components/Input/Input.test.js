import { fireEvent, render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("renders Input", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input")).toBeInTheDocument();
    expect(getByTestId("input").tagName).toBe("INPUT");
  });
  it("calls function onChange", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input onChange={onChange} />);
    fireEvent.change(getByTestId("input"), { target: { value: "Good Day" } });
    expect(onChange).toHaveBeenCalled();
  });
});
