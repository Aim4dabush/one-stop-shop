//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedInput from "../shared/shared-input/SharedInput";

//styles
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.register_container}>
      <form className={styles.register_form}>
        <h1 className={styles.form_title}>Registration</h1>
        <div className={styles.general_container}>
          <div className={styles.input_container}>
            <SharedInput>Name</SharedInput>
            <SharedInput>Email</SharedInput>
          </div>
          <div className={styles.input_container}>
            <SharedInput>Phone</SharedInput>
            <SharedInput>Birthday</SharedInput>
          </div>
        </div>
        <div className={styles.password_container}>
          <div className={styles.input_container}>
            <SharedInput>Password</SharedInput>
            <SharedInput>Confirm Password</SharedInput>
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
