import LocationContextProvider from "./context/LocationContextProvider";
import DashboardComponent from "./pages/dashboard/Dashboard.page";

function App() {
  return (
    <LocationContextProvider>
      <DashboardComponent />
    </LocationContextProvider>
  );
}

export default App;
