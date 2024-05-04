import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import "@testing-library/jest-dom";

describe("SignUpForm", () => {
  test("checks if name input is present", () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    const nameElement = screen.getByTestId("name-input");
    expect(nameElement).toBeInTheDocument();
  });

  test("checks value of name input", () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    const nameElement = screen.getByTestId("name-input");

    fireEvent.change(nameElement, { target: { value: "John" } });
    expect(nameElement).toHaveValue("John");
  });
});

test("name and title fields are required", () => {
  const addFormEntries = jest.fn();
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <SignUpForm onSubmit={addFormEntries} />
    </BrowserRouter>
  );

  const nameInput = getByTestId("name-input");
  const ageInput = getByTestId("age-input");
  const titleInput = getByTestId("title-input");
  const hometownInput = getByTestId("hometown-input");
  const submitButton = getByTestId("submit-input");

  fireEvent.change(nameInput, { target: { value: "" } });
  fireEvent.change(ageInput, { target: { value: "" } });
  fireEvent.change(titleInput, { target: { value: "" } });
  fireEvent.change(hometownInput, { target: { value: "" } });
  fireEvent.click(submitButton);

  expect(addFormEntries).not.toHaveBeenCalled();
});

test("submits form with correct data", () => {
  const addFormEntries = jest.fn();
  const { getByTestId} = render(
    <BrowserRouter>
      <SignUpForm onSubmit={addFormEntries} />
    </BrowserRouter>
  );

  const nameInput = getByTestId("name-input");
  const ageInput = getByTestId("age-input");
  const titleInput = getByTestId("title-input");
  const hometownInput = getByTestId("hometown-input");
  const submitButton = getByTestId("submit-input");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(ageInput, { target: { value: "30" } });
  fireEvent.change(titleInput, { target: { value: "Software Engineer" } });
  fireEvent.change(hometownInput, { target: { value: "New York" } });

  fireEvent.click(submitButton);

  expect(addFormEntries).toHaveBeenCalledWith({
    name: "John Doe",
    age: "30",
    title: "Software Engineer",
    homeTown: "New York",
  });
});
