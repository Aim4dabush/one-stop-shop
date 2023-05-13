import { useState } from "react";

//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedInput from "../shared/shared-input/SharedInput";

//hooks
import useValidation from "../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";

//services
import { signup } from "../../firebase/services/auth-service";

//styles
import styles from "./Register.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [messageMatch, setMessageMatch] = useState(true);
  const birthday = useValidation((value) => value.trim() !== "");
  const confirm = useValidation((value) => value.trim() !== "");
  const email = useValidation((value) => value.includes("@"));
  const name = useValidation(
    (value) => value.trim() !== "" && value.length >= 2
  );
  const password = useValidation(
    (value) => value.trim() !== "" && value.length >= 6
  );
  const phone = useValidation(
    (value) => value.trim() !== "" && (value.length >= 10 || value.length <= 11)
  );
  let formIsValid = false;

  if (
    birthday.isValid &&
    confirm.isValid &&
    email.isValid &&
    name.isValid &&
    password.isValid &&
    phone.isValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setMessageMatch(true);
    if (password.value !== confirm.value) {
      setMessageMatch(false);
      return;
    }

    let registerData = {};
    registerData = {
      birthday: birthday.value,
      email: email.value,
      name: name.value,
      password: password.value,
      phone: phone.value,
    };

    if (!formIsValid) {
      return;
    }

    dispatch(signup(registerData));

    // birthday.resetHandler();
    // confirm.resetHandler();
    // email.resetHandler();
    // name.resetHandler();
    // password.resetHandler();
    // phone.resetHandler();
  };

  return (
    <div className={styles.register_container}>
      <form className={styles.register_form} onSubmit={submitHandler}>
        <h1 className={styles.form_title}>Registration</h1>
        <div className={styles.general_container}>
          <div className={styles.input_container}>
            <SharedInput
              error={name.error}
              id={"name"}
              message={"Please enter a name with 2 or more letters"}
              onBlurHandler={name.onBlurHandler}
              onChangeHandler={name.onChangeHandler}
              type={"text"}
              value={name.value}
            >
              Name
            </SharedInput>
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
          </div>
          <div className={styles.input_container}>
            <SharedInput
              error={phone.error}
              id={"phone"}
              message={"Please enter a valid phone number"}
              onBlurHandler={phone.onBlurHandler}
              onChangeHandler={phone.onChangeHandler}
              type={"number"}
              value={phone.value}
            >
              Phone
            </SharedInput>
            <SharedInput
              error={birthday.error}
              id={"birthday"}
              message={"Please select a date"}
              onBlurHandler={birthday.onBlurHandler}
              onChangeHandler={birthday.onChangeHandler}
              type={"date"}
              value={birthday.value}
            >
              Birthday
            </SharedInput>
          </div>
        </div>
        <div className={styles.password_container}>
          <div className={styles.input_container}>
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
            <div className={styles.input_wrapper}>
              <label
                className={`${confirm.error && styles.error_label}`}
                htmlFor="confirm"
              >
                Confirm Password
              </label>
              <input
                className={`${confirm.error && styles.error}`}
                type="password"
                id="confirm"
                value={confirm.value}
                onBlur={confirm.onBlurHandler}
                onChange={confirm.onChangeHandler}
              />
              {!messageMatch && (
                <p className={styles.error_message}>Passwords don't match</p>
              )}
              {confirm.error && (
                <p className={styles.error_message}>
                  Please re-enter your password
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <SharedButton buttonStyle={"success"}>Register</SharedButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
