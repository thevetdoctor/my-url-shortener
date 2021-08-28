import { render } from "@testing-library/react";

import HamburgerMenu from "./HamburgerMenu";

describe("HamburgerMenu", () => {
  it("renders HamburgerMenu", () => {
    const { getByTestId } = render(<HamburgerMenu />);
    expect(getByTestId("hamburger")).toBeInTheDocument();
  });
  it("className is hideNav on render", () => {
    const { getByTestId } = render(<HamburgerMenu showNav={false} />);
    const hamburgerClassName = getByTestId("hamburger").className;
    expect(hamburgerClassName.includes("hideNav")).toBe(true);
  });
});
