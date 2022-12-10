import * as api from "./../../api";
import { openAlertMessage } from "./alertActions";
export const friendActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USER: "FRIEND.SET_ONLINE_USER",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvition: (data, closeDialogHandler) => {
      dispatch(sendFriendInvition(data, closeDialogHandler));
    },
  };
};

const sendFriendInvition = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvition(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been sent!"));
      closeDialogHandler();
    }
  };
};
