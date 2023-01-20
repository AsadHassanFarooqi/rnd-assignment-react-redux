import React from "react";
import {Provider} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import {store} from "../../store";
import Login from "../../components/Login";
import { handleLogin } from '../../actions/authedUser';

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
    const passwordInput = view.getByTestId("password-field");
    const loginButton = view.getByTestId("login-btn");
    
    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    fireEvent.change(userInput, { target: { value: "sarahedo" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
    store.dispatch(handleLogin(userInput.value, passwordInput.value));
  });
});
