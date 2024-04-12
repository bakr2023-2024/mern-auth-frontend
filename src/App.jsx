import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default App;
