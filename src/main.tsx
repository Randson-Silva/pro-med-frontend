import { ProfileContextProvider } from "./context/ProfileContext";
import { ChakraBaseProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import theme from "./styles/theme";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
