import React from "react";
import { Route, Routes } from "react-router-dom";
import Donor from "./pages/donor";
import Expiry from "./pages/expiry";
import Index from "./pages/index";
import Login from "./pages/login";
import Sale from "./pages/sale";
import Stock from "./pages/stock";
import Summary from "./pages/summary";
import Signup from "./pages/register";
import Scanner from "./pages/scanner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PasswordReset from "./pages/resetpasssword";
import { makeServer } from "./mirage";

makeServer({ environment: "development" });

// Enable this after all the APIs' are ready
// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

function App() {
  
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpasssword" element={<PasswordReset />} />

      {/* All the routes that are restricted and need authorization */}
      <Route element={<ProtectedRoute/>}>
        <Route index element={<Index />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/expiry" element={<Expiry />} />
        <Route path="/scanner" element={<Scanner />} />
      </Route>
    </Routes>
  );
}

export default App;
