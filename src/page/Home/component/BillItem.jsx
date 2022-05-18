import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Cell } from "zarm";
import { useNavigate } from "react-router-dom";
import CustomIcon from "../../../components/CustomIcon";
import { typeMap } from "../../../utils";
import "./bill.less";

const BillItem = ({ bills, date }) => {
  const [income, setIncome] = useState(0); // 收入
  const [expense, setExpense] = useState(0); // 支出
  const navigate = useNavigate();

  // 计算月度总支出和总收入
  useEffect(() => {
    const _income = bills
      .filter((i) => i.pay_type == 2)
      .reduce((curr, item) => {
        curr += Number(item.amount);
        return curr;
      }, 0);
    setIncome(_income);
    const _expense = bills
      .filter((i) => i.pay_type == 1)
      .reduce((curr, item) => {
        curr += Number(item.amount);
        return curr;
      }, 0);
    setExpense(_expense);
  }, [bills.bills]);

  return (
    <div className="bill-item">
      <div className="bill-header-date">
        <div className="bill-date">{date}</div>
        <div className="bill-money">
          <span>
            <img src="//s.yezgea02.com/1615953405599/zhi%402x.png" alt="支" />
            <span>¥{income}</span>
          </span>
          <span>
            <img src="//s.yezgea02.com/1615953405599/shou%402x.png" alt="收" />
            <span>¥{expense}</span>
          </span>
        </div>
      </div>
      {bills.map((item) => {
        console.log(item)
        return (
          <Cell
            className="bill-bill"
            key={item.id}
            title={
              <>
                <CustomIcon
                  className="bill-itemIcon"
                  type={item.type_id ? typeMap[item.type_id].icon : 1}
                />
                <span>{item.type_name}</span>
              </>
            }
            description={
              <span
                style={{ color: item.pay_type == 2 ? "red" : "#39be77" }}
              >{`${item.pay_type == 1 ? "-" : "+"}${item.amount}`}</span>
            }
            help={
              <div>
                {dayjs(Number(item.date)).format("HH:mm")}{" "}
                {item.remark ? `| ${item.remark}` : ""}
              </div>
            }
          ></Cell>
        );
      })}
    </div>
  );
};

export default BillItem;
