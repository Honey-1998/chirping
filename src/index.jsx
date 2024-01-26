// import React from "react"
// import ReactDOM from "react-dom"
// // import "./style.css"

// import App from "./App"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// import store from "./Components/redux/store";
import store from "./Components/redux/store"
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);