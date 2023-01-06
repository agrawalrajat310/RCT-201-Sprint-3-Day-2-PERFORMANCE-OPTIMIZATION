import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import TopicsProviders from "./context/TopicContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
    <ChakraProvider>
      <TopicsProviders>
        <App />
      </TopicsProviders>
    </ChakraProvider>
);