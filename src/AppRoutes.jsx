import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

const AppRoutes = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
