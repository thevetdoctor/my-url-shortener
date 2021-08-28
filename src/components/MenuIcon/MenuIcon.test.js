import { fireEvent, render } from "@testing-library/react";

import MenuIcon from "./MenuIcon";

describe("MenuIcon", () => {
  it("renders MenuIcon", () => {
    const { getByTestId } = render(<MenuIcon />);
    expect(getByTestId("menu-icon")).toBeInTheDocument();
  });
  it("calls function onClick", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<MenuIcon handleClick={handleClick} />);
    fireEvent.click(getByTestId("menu-icon"));
    expect(handleClick).toHaveBeenCalled();
  });
});
