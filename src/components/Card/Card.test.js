import { render, within } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("renders Card", () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId("card")).toBeInTheDocument();
  });
  it("renders with FeatureIcon component", () => {
    const { getByTestId } = render(<Card />);
    const card = getByTestId("card");
    const featureIconInCard = within(card).getByTestId("icon");
    expect(featureIconInCard).toBeInTheDocument();
  });
  it("renders with card title and body text", () => {
    const { getByText } = render(
      <Card cardTitle="Card 1" cardBody="I am Card. Card is me." />
    );
    expect(getByText("Card 1")).toBeInTheDocument();
    expect(getByText("I am Card. Card is me.")).toBeInTheDocument();
  });
});
