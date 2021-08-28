import { render, fireEvent } from "@testing-library/react";

import Form from "./Form";

describe("Form", () => {
  it("renders Form", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("form")).toBeInTheDocument();
  });
  it("renders input field", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("input")).toBeInTheDocument();
  });
  it("renders button", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("button")).toBeInTheDocument();
  });
  it("calls function onSubmit", () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={handleSubmit} />);
    fireEvent.submit(getByTestId("form"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
