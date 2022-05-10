import React from "react";
import NavBar from "../../components/Nav";
import Header from "./component/Header";
import CostList from "./component/CostList";
import "./index.less";
const Home = (props) => {
  return (
    <div className="home-content">
      <Header />
      <NavBar />
      {/* <CostList /> */}
    </div>
  );
};

export default Home;
