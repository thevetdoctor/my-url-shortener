import { render, within } from "@testing-library/react";
import BoostSection from "./BoostSection";

describe("BoostSection", () => {
  it("renders BoostSection component", () => {
    const { getByTestId } = render(<BoostSection />);
    expect(getByTestId("boost")).toBeInTheDocument();
  });
  it("renders button in section", () => {
    const { getByTestId } = render(<BoostSection />);
    const boostSection = getByTestId("boost");
    const buttonInCard = within(boostSection).getByTestId("button");
    expect(buttonInCard).toBeInTheDocument();
  });
});
