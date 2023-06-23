//components
import SharedInput from "../../../shared/shared-input/SharedInput";
import SharedSelect from "../../../shared/shared-select/SharedSelect";

//data
import { stateOptions } from "../../../../utils/options-data";

//styles
import styles from "./ShippingAddress.module.scss";

const ShippingAddress = ({
  matchAddress,
  shippingCity,
  shippingCityError,
  shippingCityOnBlur,
  shippingCityOnChange,
  shippingState,
  shippingStateError,
  shippingStateOnBlur,
  shippingStateOnChange,
  shippingStreet,
  shippingStreetError,
  shippingStreetOnBlur,
  shippingStreetOnChange,
  shippingZip,
  shippingZipError,
  shippingZipOnBlur,
  shippingZipOnChange,
}) => {
  return (
    <div className={styles.shipping_address}>
      <h3>Shipping Address</h3>
      <div className={styles.row}>
        <SharedInput
          disable={matchAddress}
          error={shippingStreetError}
          full={true}
          id={"shipping_street"}
          message={"Please fill out street"}
          onBlurHandler={shippingStreetOnBlur}
          onChangeHandler={shippingStreetOnChange}
          smallDevice={true}
          split={true}
          type={"text"}
          value={shippingStreet}
        >
          Street
        </SharedInput>
        <SharedInput
          disable={matchAddress}
          error={shippingCityError}
          id={"shipping_city"}
          message={"Please enter a city"}
          onBlurHandler={shippingCityOnBlur}
          onChangeHandler={shippingCityOnChange}
          smallDevice={true}
          type={"text"}
          value={shippingCity}
        >
          City
        </SharedInput>
        <SharedSelect
          disable={matchAddress}
          error={shippingStateError}
          id={"shipping_state"}
          message={"Please select a state"}
          onBlurHandler={shippingStateOnBlur}
          onChangeHandler={shippingStateOnChange}
          selectOptions={stateOptions}
          smallDevice={true}
          padding={true}
          value={shippingState}
        >
          State
        </SharedSelect>
        <SharedInput
          disable={matchAddress}
          error={shippingZipError}
          id={"shipping_zip"}
          message={"Please enter a zip code"}
          onBlurHandler={shippingZipOnBlur}
          onChangeHandler={shippingZipOnChange}
          smallDevice={true}
          type={"number"}
          value={shippingZip}
        >
          Zip Code
        </SharedInput>
      </div>
    </div>
  );
};

export default ShippingAddress;
