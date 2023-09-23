import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./pages/Auth/AuthPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="chetansingh63.us.auth0.com"
    clientId="z9w2u6kpmfWCMvBySSrGTzfol6cGQAVP"
    authorizationParams={{
      // redirect_uri: "https://book-frontend-rust.vercel.app/home",

      redirectUri: `${window.location.origin}/home, appState: {returnTo: href }`
    }}
  >
    <SnackbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Auth0Provider>
);
