import React from "react";
import { UserProvider } from "./contexts/userContext";
import Global from "./styles/global";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
