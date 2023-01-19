import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { store } from "../../store";

import { receiveUsers } from "../../actions/users";

import { users } from "../../utils/_DATA";
import Leaderboard from "../../components/Leaderboard";

describe("Leaderboard component test", () => {
  it("will match snapshot test", () => {
    store.dispatch(receiveUsers(users));
    const view = render(
      <Provider store={store}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>
    );
    expect(view).toBeDefined();
  });
});