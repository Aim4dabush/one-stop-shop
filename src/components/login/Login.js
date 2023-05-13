//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedInput from "../shared/shared-input/SharedInput";
import SharedLink from "../shared/shared-link/SharedLink";

//hooks
import useValidation from "../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";

//services
import { login } from "../../firebase/services/auth-service";

//styles
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const email = useValidation(
    (value) => value.trim() !== "" && value.includes("@")
  );
  const password = useValidation((value) => value.trim() !== "");
  let formIsValid = false;

  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      email: email.value,
      password: password.value,
    };

    if (!formIsValid) {
      return;
    }

    dispatch(login(data));
    email.resetHandler();
    password.resetHandler();
  };

  return (
    <div className={styles.login_container}>
      <form className={styles.login_form} onSubmit={submitHandler}>
        <h1 className={styles.form_title}>Login</h1>
        <div className={styles.input_container}>
          <SharedInput
            error={email.error}
            id={"email"}
            message={"Please enter a valid email"}
            onBlurHandler={email.onBlurHandler}
            onChangeHandler={email.onChangeHandler}
            type={"email"}
            value={email.value}
          >
            Email
          </SharedInput>
          <SharedInput
            error={password.error}
            id={"password"}
            message={"Please enter a password"}
            onBlurHandler={password.onBlurHandler}
            onChangeHandler={password.onChangeHandler}
            type={"password"}
            value={password.value}
          >
            Password
          </SharedInput>
        </div>
        <div className={styles.btn_wrapper}>
          <SharedButton buttonStyle={"success"}>Login</SharedButton>
        </div>
        <p className={styles.text_wrapper}>
          Not registered?{" "}
          <SharedLink path={"/register"} alternateColor={true}>
            Click here
          </SharedLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
