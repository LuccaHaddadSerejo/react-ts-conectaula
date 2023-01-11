import React from "react";
import { UserProvider } from "./contexts/userContext";
import Global from "./styles/global";
import { RoutesMain as Routes } from "./routes";
import { GradesProvider } from "./contexts/gradesContext";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <GradesProvider>
          <Routes />
        </GradesProvider>
      </UserProvider>
    </>
  );
}

export default App;
