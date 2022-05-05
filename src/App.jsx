// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Index from "./page/Index";
import { ConfigProvider } from "zarm";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import "zarm/dist/zarm.css";
function App() {
  return (
    <BrowserRouter>
      <ConfigProvider primaryColor={"#007fff"} locale={zhCN}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
