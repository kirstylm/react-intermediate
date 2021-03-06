import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer, { initialGameState } from "reducers/reducers";

function render(
  ui,
  {
    initialState = initialGameState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
