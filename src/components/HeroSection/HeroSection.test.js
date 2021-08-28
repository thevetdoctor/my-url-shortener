import { render } from "@testing-library/react";

import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders HeroSection", () => {
    const { getByTestId } = render(<HeroSection />);
    expect(getByTestId("hero")).toBeInTheDocument();
  });
  it("renders button component", () => {
    const { getByTestId } = render(<HeroSection />);
    expect(getByTestId("button")).toBeInTheDocument();
  });
  it("renders image with src url and alt text", () => {
    const { getByAltText } = render(<HeroSection />);
    const image = getByAltText("Illustration of someone working");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("illustration-working.svg");
  });
});
