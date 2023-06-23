import { Fragment } from "react";

//components
import SharedInput from "../../../shared/shared-input/SharedInput";

//styles
import styles from "./Customer.module.scss";

const CustomerInfo = ({
  birth,
  birthError,
  birthOnBlur,
  birthOnChange,
  email,
  emailError,
  emailOnBlur,
  emailOnChange,
  name,
  nameError,
  nameOnBlur,
  nameOnChange,
  phone,
  phoneError,
  phoneOnBlur,
  phoneOnChange,
}) => {
  return (
    <Fragment>
      <h3>Customer Info</h3>
      <div className={`${styles.info}`}>
        <SharedInput
          error={nameError}
          full={true}
          id={"name"}
          message={"Please enter a name"}
          onBlurHandler={nameOnBlur}
          onChangeHandler={nameOnChange}
          smallDevice={true}
          split={true}
          type={"text"}
          value={name}
        >
          Name
        </SharedInput>
        <SharedInput
          error={emailError}
          full={true}
          id={"email"}
          message={"Please enter a value email"}
          onBlurHandler={emailOnBlur}
          onChangeHandler={emailOnChange}
          smallDevice={true}
          split={true}
          type={"email"}
          value={email}
        >
          Email
        </SharedInput>
        <SharedInput
          error={phoneError}
          id={"phone"}
          message={"Please enter a valid phone number"}
          onBlurHandler={phoneOnBlur}
          onChangeHandler={phoneOnChange}
          smallDevice={true}
          type={"number"}
          value={phone}
        >
          Phone
        </SharedInput>
        <SharedInput
          error={birthError}
          id={"birth"}
          message={"Please select a date"}
          onBlurHandler={birthOnBlur}
          onChangeHandler={birthOnChange}
          smallDevice={true}
          type={"date"}
          value={birth}
        >
          Birthday
        </SharedInput>
      </div>
    </Fragment>
  );
};

export default CustomerInfo;
