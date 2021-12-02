import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders pizzeria header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Pizzeria/i);
  expect(headerElement).toBeInTheDocument();
});
