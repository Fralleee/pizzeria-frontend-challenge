import { render, screen } from "@testing-library/react";
import LandingPage from "components/LandingPage";

test("renders pizzeria name", () => {
  render(<LandingPage />);
  expect(screen.getByRole("heading")).toHaveTextContent("Diwala Pizzeria");
  expect(screen.getByRole("button")).toHaveTextContent("Sign-in with Google");
});
