import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./MainScreen";
import LoadingPage from "./LoadingPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/Loading" element={<LoadingPage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
