import { screen, render, fireEvent } from "@testing-library/react";
import ProductTest from "./ProductTest";


test("Add Product feature existense", () => {
  render(<ProductTest></ProductTest>);
  const prd_elem = screen.findByText("Sample text");
  expect(prd_elem).t
  });