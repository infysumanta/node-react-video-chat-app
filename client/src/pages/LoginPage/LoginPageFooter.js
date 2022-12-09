import React from "react";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";
const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const getFormNotValidMessage = () => {
    return "Enter Correct e-mail address and password should contains between 6 and 12 character";
  };
  const getFormValidMessage = () => {
    return "Press to Log in";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need and Account?"
        redirectText="Create and Account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={() => history.push("/register")}
      />
    </>
  );
};

export default LoginPageFooter;
