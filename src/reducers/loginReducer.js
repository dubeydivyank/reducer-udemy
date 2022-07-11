const loginReducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTERED_EMAIL":
      return { ...state, enteredEmail: action.payload };
    case "SET_ENTERED_PASSWORD":
      return { ...state, enteredPassword: action.payload };
    case "VALIDATE_EMAIL":
      return { ...state, emailIsValid: state.enteredEmail.includes("@") };
    case "VALIDATE_PASSWORD":
      return {
        ...state,
        passwordIsValid: state.enteredPassword.trim().length > 6
      };
    case "VALIDATE_FORM":
      return {
        ...state,
        formIsValid:
          state.enteredEmail.includes("@") &&
          state.enteredPassword.trim().length > 6
      };
    default:
      throw new Error();
  }
};

const ACTION = {
  SET_ENTERED_EMAIL: "SET_ENTERED_EMAIL",
  SET_ENTERED_PASSWORD: "SET_ENTERED_PASSWORD",
  VALIDATE_EMAIL: "VALIDATE_EMAIL",
  VALIDATE_PASSWORD: "VALIDATE_PASSWORD",
  VALIDATE_FORM: "VALIDATE_FORM"
};

export { loginReducer, ACTION };
