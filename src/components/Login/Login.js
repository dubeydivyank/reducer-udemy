import React, { useReducer, useEffect } from "react";
import { loginReducer, ACTION } from "../../reducers/loginReducer.js";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [state, dispatch] = useReducer(loginReducer, {
    enteredEmail: "",
    enteredPassword: "",
    emailIsValid: "",
    passwordIsValid: "",
    formIsValid: false
  });

  useEffect(() => {
    dispatch({ type: ACTION.VALIDATE_FORM });
  }, [state.enteredEmail, state.enteredPassword]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.enteredEmail, state.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.enteredEmail}
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_ENTERED_EMAIL,
                payload: e.target.value
              });
              dispatch({
                type: ACTION.VALIDATE_EMAIL
              });
            }}
            onBlur={(e) => {
              dispatch({
                type: ACTION.VALIDATE_EMAIL
              });
            }}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.enteredPassword}
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_ENTERED_PASSWORD,
                payload: e.target.value
              });
              dispatch({ type: ACTION.VALIDATE_PASSWORD });
            }}
            onBlur={() => {
              dispatch({ type: ACTION.VALIDATE_PASSWORD });
            }}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!state.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
