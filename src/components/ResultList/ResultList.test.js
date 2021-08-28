import { within, render } from "@testing-library/react";

import ResultList from "./ResultList";

const results = [
  {
    original_link: "https://here.i.am",
    full_short_link: "bit.ly/xyz.co",
  },
  {
    original_link: "https://there.i.am",
    full_short_link: "bit.ly/xyz.co",
  },
  {
    original_link: "https://where.i.am",
    full_short_link: "bit.ly/xyz.co",
  },
];

describe("ResultList", () => {
  it("renders ResultList", () => {
    const { getByTestId } = render(<ResultList results={results} />);
    expect(getByTestId("results-list")).toBeInTheDocument();
  });
  it("prints you list of shortened links.", () => {
    const { getByTestId } = render(<ResultList results={results} />);
    const list = getByTestId("results-list");
    const resultCard = within(list).getAllByTestId("result");
    expect(resultCard.length).toBe(3);
  });
});
