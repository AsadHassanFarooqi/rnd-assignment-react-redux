import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import Navbar from "../../components/Nav";
import {store} from "../../store";
import {setAuthedUser} from "../../actions/authedUser";

describe("Nav", () => {
  it("should render the View", () => {
    store.dispatch(setAuthedUser({id: "sarahedo", password: ""}));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it("should display username of logged in user", () => {
    store.dispatch(setAuthedUser({id: "sarahedo", password: ""}));

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = view.getByTestId("user-information");
    expect(userSpanElement.textContent).toBe("sarahedo");

  });
});
