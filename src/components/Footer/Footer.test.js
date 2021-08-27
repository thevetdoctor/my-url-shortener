import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders Footer", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeInTheDocument();
  });
  it("renders social media icons", () => {
    const { getByAltText } = render(<Footer />);
    const fbImage = getByAltText("facebook icon");
    expect(fbImage).toBeInTheDocument();
    expect(fbImage.getAttribute("src")).toBe("icon-facebook.svg");

    const instaImage = getByAltText("instagram icon");
    expect(instaImage).toBeInTheDocument();
    expect(instaImage.getAttribute("src")).toBe("icon-instagram.svg");

    const twitterImage = getByAltText("twitter icon");
    expect(twitterImage).toBeInTheDocument();
    expect(twitterImage.getAttribute("src")).toBe("icon-twitter.svg");

    const pinImage = getByAltText("pinterest icon");
    expect(pinImage).toBeInTheDocument();
    expect(pinImage.getAttribute("src")).toBe("icon-pinterest.svg");
  });
});
