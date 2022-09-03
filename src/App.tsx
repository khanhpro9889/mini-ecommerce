import React from "react";
import "./App.css";
import Routers from "./routers";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
