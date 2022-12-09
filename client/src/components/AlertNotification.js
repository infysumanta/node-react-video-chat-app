import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getActions } from "../store/actions/alertActions";

const AlertNotification = ({
  showAlertMessage,
  alertMessageContent,
  closeAlertMessage,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};
export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(AlertNotification);
