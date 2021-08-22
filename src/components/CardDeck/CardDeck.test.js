import { render, within } from "@testing-library/react";

import CardDeck from "./CardDeck";

describe("CardDeck", () => {
  it("renders CardDeck", () => {
    const { getByTestId } = render(<CardDeck />);
    expect(getByTestId("deck")).toBeInTheDocument();
  });
  it("renders 3 Cards", () => {
    const { getByTestId } = render(<CardDeck />);
    const deck = getByTestId("deck");
    const cards = within(deck).getAllByTestId("card");
    expect(cards.length).toBe(3);
  });
});
