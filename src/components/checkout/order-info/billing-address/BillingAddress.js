//shared
import SharedInput from "../../../shared/shared-input/SharedInput";
import SharedSelect from "../../../shared/shared-select/SharedSelect";

//styles
import styles from "./BillingAddress.module.scss";

//utils
import { stateOptions } from "../../../../utils/options-data";

const BillingAddress = ({
  billingCity,
  billingCityError,
  billingCityOnBlur,
  billingCityOnChange,
  billingState,
  billingStateError,
  billingStateOnBlur,
  billingStateOnChange,
  billingStreet,
  billingStreetError,
  billingStreetOnBlur,
  billingStreetOnChange,
  billingZip,
  billingZipError,
  billingZipOnBlur,
  billingZipOnChange,
}) => {
  return (
    <div className={styles.billing_wrapper}>
      <h3>Billing Address</h3>
      <div className={styles.billing_address}>
        <SharedInput
          error={billingStreetError}
          full={true}
          id={"billing_street"}
          message={"Please fill out street"}
          onBlurHandler={billingStreetOnBlur}
          onChangeHandler={billingStreetOnChange}
          smallDevice={true}
          split={true}
          type={"text"}
          value={billingStreet}
        >
          Street
        </SharedInput>

        <SharedInput
          error={billingCityError}
          id={"billing_city"}
          message={"Please enter a city"}
          onBlurHandler={billingCityOnBlur}
          onChangeHandler={billingCityOnChange}
          smallDevice={true}
          type={"text"}
          value={billingCity}
        >
          City
        </SharedInput>
        <SharedSelect
          error={billingStateError}
          id={"billing_state"}
          message={"Please select a state"}
          onBlurHandler={billingStateOnBlur}
          onChangeHandler={billingStateOnChange}
          selectOptions={stateOptions}
          smallDevice={true}
          value={billingState}
        >
          State
        </SharedSelect>
        <SharedInput
          error={billingZipError}
          id={"billing_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={billingZipOnBlur}
          onChangeHandler={billingZipOnChange}
          smallDevice={true}
          type={"number"}
          value={billingZip}
        >
          Zip Code
        </SharedInput>
      </div>
    </div>
  );
};

export default BillingAddress;
