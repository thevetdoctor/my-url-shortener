import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("Button", () => {
  it("renders Button", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("header-nav")).toBeInTheDocument();
  });
  it("renders MenuIcon component", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("menu-icon")).toBeInTheDocument();
  });
  it("renders HamburgerMenu component", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("hamburger")).toBeInTheDocument();
  });
});
