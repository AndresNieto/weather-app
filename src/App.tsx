import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import DashboardComponent from "./pages/dashboard/Dashboard.page";
import { LocationContext } from "./context/LocationContext";
import LocationContextProvider from "./context/LocationContextProvider";

function App() {
  return (
    <LocationContextProvider>
      <DashboardComponent />
    </LocationContextProvider>
  );
}

export default App;
