import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-cgahm8ulxmjo704k.us.auth0.com"
    clientId="WJTg6RAxBBxCEMz6SIZy1K5PsrLSJRZ4"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
