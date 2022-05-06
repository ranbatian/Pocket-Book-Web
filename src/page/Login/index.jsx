import React, { useState } from "react";
import { Input, Cell, Button, Checkbox, Toast } from "zarm";
import { useRequest } from "ahooks";
import request from "../../utils/axios";
import apiConfig from "../../utils/apiConfig";
import CustomIcon from "../../components/CustomIcon";
import Captcha from "react-captcha-code";
import "./module.style.less";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [optionType, setOptionType] = useState("login");

  const login = () =>
    request.post(apiConfig.login, {
      username,
      password,
    });

  const { loading, run } = useRequest(login, {
    manual: true,
    onSuccess: (result, params) => {
      const { data } = result;
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      const { data } = error;
      Toast.show(data.msg);
    },
  });

  return (
    <div className="login-container">
      <div className="img-container"></div>
      <div className="optionType-container">
        <span
          onClick={() => setOptionType("register")}
          className={optionType === "register" ? "checked" : "other"}
        >
          注册
        </span>
        <span
          onClick={() => setOptionType("login")}
          className={optionType === "register" ? "other" : "checked"}
        >
          登陆
        </span>
      </div>
      <div>
        <div>
          <Cell icon={<CustomIcon type="zhanghao" />}>
            <Input
              clearable
              type="text"
              value={username}
              onChange={setUsername}
              placeholder="请输入账号"
            />
          </Cell>
          <Cell icon={<CustomIcon type="mima" />}>
            <Input
              clearable
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={setPassword}
            />
          </Cell>
          {optionType === "register" ? (
            <Cell icon={<CustomIcon type="mima" />}>
              <Input
                clearable
                type="text"
                placeholder="请填写验证码"
                value={captcha}
                onChange={setCaptcha}
              />
              <Captcha charNum={4} />
            </Cell>
          ) : null}
          <Cell>
            <div className="checkbox-ill">
              <Checkbox id="agreement" />
              <span htmlFor="agreement" className="agreement-span">
                阅读并同意《我说啥是啥条款》
              </span>
            </div>
          </Cell>
        </div>
      </div>
      <div className="button-container">
        <Button block theme="primary" onClick={run}>
          {optionType === "register" ? "注册" : "登陆"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
