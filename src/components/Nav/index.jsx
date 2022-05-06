import React, { useState } from "react";
import { TabBar } from "zarm";
import s from "./style.module.less";
import CustomIcon from "../CustomIcon";
const { Item } = TabBar;
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isShow, setIsShow] = useState(true);
  const [activeKey, setActiveKey] = useState("/");
  let navigate = useNavigate();
  const changeTar = (value) => {
    setActiveKey(value);
    navigate(value);
  };
  return (
    <TabBar isShow={isShow} activeKey={activeKey} onChange={changeTar}>
      <Item itemKey="/" title="账单" icon={<CustomIcon type="zhangdan" />} />
      <Item itemKey="/data" title="统计" icon={<CustomIcon type="tongji" />} />
      <Item itemKey="/user" title="我的" icon={<CustomIcon type="wode" />} />
    </TabBar>
  );
};

export default NavBar;
