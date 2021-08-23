import { render } from "@testing-library/react";

import StatSection from "./StatSection";

describe("StatSection", () => {
  it("renders StatSection", () => {
    const { getByTestId } = render(<StatSection />);
    expect(getByTestId("stats")).toBeInTheDocument();
  });
  it("renders StatIntroText component", () => {
    const { getByTestId } = render(<StatSection />);
    expect(getByTestId("intro-text")).toBeInTheDocument();
  });
  it("renders Form component", () => {
    const { getByTestId } = render(<StatSection />);
    expect(getByTestId("form")).toBeInTheDocument();
  });
  it("renders ResultList component", () => {
    const { getByTestId } = render(<StatSection />);
    expect(getByTestId("results-list")).toBeInTheDocument();
  });
  it("renders CardDeck component", () => {
    const { getByTestId } = render(<StatSection />);
    expect(getByTestId("deck")).toBeInTheDocument();
  });
});
