// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "zarm";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import "zarm/dist/zarm.css";
import NavBar from "./components/Nav";
import router from "./router";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider primaryColor={"#007fff"} locale={zhCN}>
        <Routes>
          {router.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </ConfigProvider>
      {/* <NavBar /> */}
    </BrowserRouter>
  );
}

export default App;
