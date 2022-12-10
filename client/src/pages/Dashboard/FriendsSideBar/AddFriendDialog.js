import React, { useEffect, useState } from "react";
import { validateEmail } from "../../../utils/validators";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Typography } from "@mui/material";
import InputWithLabel from "../../../components/InputWithLabel";
import CustomPrimaryButton from "../../../components/CustomPrimaryButton";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvition = () => {},
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {};
  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter Email Address of friend which you would like to invite
            </Typography>
            <InputWithLabel
              label="Email"
              type="text"
              value={email}
              setValue={setEmail}
              placeholder="Enter Email Address of friend"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "15px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
