import React from "react";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters ans Password should contains between 3 and 12 characters. Also correct e-mail address should provided";
};
const getFormValidMessage = () => {
  return "Press to Register";
};
const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();
  const handlePushToLoginPage = () => {
    history.push("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />{" "}
        </div>
      </Tooltip>

      <RedirectInfo
        text="Already have an account? "
        redirectText="Click to Log in"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
