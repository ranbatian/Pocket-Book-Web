import React, { useState, useEffect } from "react";
import { Pull } from "zarm";
import BillItem from "./BillItem";
import { REFRESH_STATE, LOAD_STATE } from "../../../utils";
import dayjs from "dayjs";
import handler from "../../../utils/axios";
import axios from "axios";
import apiConfig from "../../../utils/apiConfig";
const CostList = (props) => {
  const [refreshStatus, setRefreshStatus] = useState(REFRESH_STATE.normal);
  const [loadStatus, setLoadStatus] = useState(LOAD_STATE.normal);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [currentTime, setCurrentTime] = useState(dayjs().format("YYYY-MM"));
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal);
  const [loading, setLoading] = useState(LOAD_STATE.normal);
  // 更新账单
  const updateCoastList = async () => {
    const { data } = await requestData("2011-10-17", 1);
    const { list, totalPage } = data;
    setTotalPage(totalPage);
    setList(list);
  };
  // 请求列表
  const requestData = (date, page) =>
    axios.get(apiConfig.bill_list, {
      params: { date, page },
    });
  // 首屏加载
  useEffect(() => {
    updateCoastList();
  }, []);

  // 下拉刷新

  const upload = async () => {
    setRefreshing(REFRESH_STATE.normal);
    await updateCoastList();
    setRefreshing(REFRESH_STATE.success);
  };
  return (
    <div className="home-contentWrap">
      {list.length ? (
        <Pull
          // 下拉触发
          refresh={{
            state: refreshing,
            handler: upload,
          }}
          load={{
            state: loading,
            handler: () => console.log("loading handler"),
          }}
        >
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
