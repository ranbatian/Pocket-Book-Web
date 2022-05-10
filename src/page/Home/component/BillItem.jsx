import React, { useState, useEffect } from "react";
import PorpTypes from "prop-types";
import dayjs from "dayjs";
import { Cell } from "zarm";
import { useNavigate } from "react-router-dom";
import CustomIcon from "../../../components/CustomIcon";
import {} from "../../../utils";

const BillItem = (props) => {
  const [income, setIncome] = useState(0); // 收入
  const [expense, setExpense] = useState(0); // 支出
  const navigate = useNavigate();
};
