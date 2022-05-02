import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/home/App";

test("renders home page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/about the app. here you find the information regarding this application/i);
  expect(linkElement).toBeInTheDocument();
});
