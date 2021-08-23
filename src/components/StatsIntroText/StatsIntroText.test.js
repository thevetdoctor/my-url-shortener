import { render } from "@testing-library/react";

import StatsIntroText from "./StatsIntroText";

describe("StatsIntroText", () => {
  it("renders StatsIntroText", () => {
    const { getByTestId } = render(<StatsIntroText />);
    expect(getByTestId("intro-text")).toBeInTheDocument();
  });
  it("renders with title and text", () => {
    const { getByText } = render(
      <StatsIntroText
        introTitle="Advanced Statistics"
        bodyText="Track how your links are performing across the web with our advanced statistics dashboard"
      />
    );
    expect(getByText("Advanced Statistics")).toBeInTheDocument();
    expect(
      getByText(
        "Track how your links are performing across the web with our advanced statistics dashboard"
      )
    ).toBeInTheDocument();
  });
});
