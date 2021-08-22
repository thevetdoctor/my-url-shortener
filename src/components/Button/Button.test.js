import { fireEvent, render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders Button", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByTestId("button").tagName).toBe("BUTTON");
  });
  it("renders with given text", () => {
    const { getByText } = render(<Button value="Get Started" />);
    expect(getByText("Get Started")).toBeInTheDocument();
  });
  it("calls function onClick", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button handleClick={handleClick} />);
    fireEvent.click(getByTestId("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
