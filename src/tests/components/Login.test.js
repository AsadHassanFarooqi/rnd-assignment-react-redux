import React from "react";
import {Provider} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import {store} from "../../store";
import Login from "../../components/Login";

describe("Login", () => {
  it("should render the component", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it("will verify that the login component has a login field, a password field and a submit button", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const userInput = view.getByTestId("user-field");
    fireEvent.change(userInput, { target: { value: "sarahedo" } });
    const passwordInput = view.getByTestId("password-field");
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    const loginButton = view.getByTestId("login-btn");

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    // fireEvent.click(loginButton);
  });
});
