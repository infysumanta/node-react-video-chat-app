export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 20;
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

const usernameValid = (username) => {
  return username.length > 2 && username.length < 12;
};

export const validateRegisterForm = ({ email, username, password }) => {
  return (
    validateEmail(email) &&
    usernameValid(username) &&
    validatePassword(password)
  );
};
