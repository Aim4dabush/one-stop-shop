//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedInput from "../shared/shared-input/SharedInput";
import SharedLink from "../shared/shared-link/SharedLink";

//styles
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <form className={styles.login_form}>
        <h1 className={styles.form_title}>Login</h1>
        <div className={styles.input_container}>
          <SharedInput>Email</SharedInput>
          <SharedInput>Password</SharedInput>
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
