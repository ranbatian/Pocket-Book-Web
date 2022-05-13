import React, { useState } from "react";
import { Pull } from "zarm";
import BillItem from "./BillItem";
import { REFRESH_STATE, LOAD_STATE } from "../../../utils";
import dayjs from "dayjs";
const CostList = (props) => {
  const [refreshStatus, setRefreshStatus] = useState(REFRESH_STATE.normal);
  const [loadStatus, setLoadStatus] = useState(LOAD_STATE.normal);
  const [pageNo, setPageNo] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM'))
  const [list, setList] = useState([
    {
      bills: [
        {
          amount: "25.00",
          date: "1623390740000",
          id: 911,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮",
        },
      ],
      date: "2021-06-11",
    },
  ]);

  // 更新账单
  const updateCoastList = () => {
    
  }
  // 请求列表
  const getCoatList = () => {

  }

  return (
    <div className="home-contentWrap">
      {list.length ? (
        <Pull refresh={{}} load={{}}>
          {list.map((item, index) => {
            const { date, bills } = item;
            return <BillItem date={date} bills={bills} />;
          })}
        </Pull>
      ) : null}
    </div>
  );
};

export default CostList;
