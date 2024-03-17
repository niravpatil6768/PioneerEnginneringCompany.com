import React from "react";
// import Dial from "./components/Dial";
import { Typography } from "@mui/material";
import Dial from "./components/Dial";
import NavBar from "./components/navBar";
import LandPage from "./components/LandPage";

function App() {
  return (
    <div>
      <NavBar />
      <LandPage />

      <Dial />
    </div>
  );
}

export default App;
