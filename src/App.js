import React from "react";
import { Layout } from "antd";
import AppRoutes from "./AppRoutes";
import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </div>
    </div>
  );
};

export default App;
