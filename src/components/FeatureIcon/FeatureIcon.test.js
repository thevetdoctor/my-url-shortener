import { render } from "@testing-library/react";

import FeatureIcon from "./FeatureIcon";

describe("FeatureIcon", () => {
  it("renders FeatureIcon", () => {
    const { getByTestId } = render(<FeatureIcon />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });
  it("renders an image with the src url alt text", () => {
    const { getByAltText } = render(
      <FeatureIcon srcLink="/image.png" iconName="brand recognition" />
    );
    const image = getByAltText("brand recognition icon");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("/image.png");
  });
});
