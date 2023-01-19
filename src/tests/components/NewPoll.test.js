import React from "react";
import {Provider} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import { store } from "../../store";
import NewPoll from "../../components/NewPoll";


describe("NewPoll", () => {
  it("should render the component", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll/>
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it.only("should display all elements", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll/>
        </BrowserRouter>
      </Provider>
    );

      const firstOptionLabelElement = view.getByTestId("firstOptionLabel");
      const firstOptionInputElement = view.getByTestId("firstOption");
      const secondOptionLabelElement = view.getByTestId("secondOptionLabel");
      const secondOptionInputElement = view.getByTestId("secondOption");
      const submitButtonElement = view.getByTestId("submit-poll");

      expect(firstOptionLabelElement.textContent).toBe("First option");
      expect(secondOptionLabelElement.textContent).toBe("Second option");
      expect(submitButtonElement.textContent).toBe("Submit");

      fireEvent.change(firstOptionInputElement, {target: {value: 'Texas'}});
      fireEvent.change(secondOptionInputElement, {target: {value: 'New Hampshire'}});
      expect(firstOptionInputElement.value).toBe("Texas");
      expect(secondOptionInputElement.value).toBe("New Hampshire");
  });
});
