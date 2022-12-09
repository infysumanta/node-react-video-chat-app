import React from "react";
import InputWithLabel from "../../components/InputWithLabel";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <div>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="text"
        placeholder="Enter email address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </div>
  );
};

export default LoginPageInputs;
