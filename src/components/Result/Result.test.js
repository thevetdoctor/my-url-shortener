import { render } from "@testing-library/react";

import Result from "./Result";

describe("Result", () => {
  it("renders Result", () => {
    const { getByTestId } = render(<Result />);
    expect(getByTestId("result")).toBeInTheDocument();
  });
  it("renders full URL", () => {
    const { getByText } = render(<Result fullLink="https:/sample.com" />);
    expect(getByText("https:/sample.com")).toBeInTheDocument();
  });
  it("renders short URL", () => {
    const { getByText } = render(<Result shortenedLink="bit.ly/xyz" />);
    expect(getByText("bit.ly/xyz")).toBeInTheDocument();
  });
  it("renders Copy button", () => {
    const { getByTestId } = render(<Result />);
    expect(getByTestId("button")).toBeInTheDocument();
  });
});
