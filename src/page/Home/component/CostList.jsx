import React, { useState } from "react";
import { Pull } from "zarm";

const CostList = (props) => {
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
  ]); // 账单列表
  return (
    <div className='home-contentWrap'>
      {list.map((item, index) => (
        <BillItem />
      ))}
    </div>
  );
};


export default CostList;
