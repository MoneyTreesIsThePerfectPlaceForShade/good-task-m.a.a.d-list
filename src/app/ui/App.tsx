import React from "react";
import styles from "./App.module.scss";
import { About, MainPage } from "../../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        {/*сделать страницу ошибки*/}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
