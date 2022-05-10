import React from "react";
import { Icon } from "zarm";

const Header = (props) => {
  return (
    <div className="home-header">
      <div className="home-header-dataWrap">
        <span className="home-header-expense">
          总支出：<b>¥ 200</b>
        </span>
        <span className="home-header-income">
          总收入：<b>¥ 500</b>
        </span>
      </div>
      <div className="home-header-typeWrap">
        <div className="home-header-right">
          <span className="home-header-date">
            2022-06{" "}
            <Icon
              className="home-header-arrow"
              size="small"
              type="arrow-bottom"
            />
          </span>
        </div>
        <div className="home-header-title-left">
          <span className="home-header-title">
            类型{" "}
            <Icon
              className="home-header-arrow"
              size="small"
              type="arrow-bottom"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
