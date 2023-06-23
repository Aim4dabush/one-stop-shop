//components
import SharedInput from "../../../shared/shared-input/SharedInput";
import SharedSelect from "../../../shared/shared-select/SharedSelect";

//data
import { companyOptions } from "../../../../utils/options-data";

//styles
import styles from "./Payment.module.scss";

const PaymentInfo = ({
  card,
  cardError,
  cardOnBlur,
  cardOnChange,
  company,
  companyError,
  companyOnBlur,
  companyOnChange,
  expiration,
  expirationError,
  expirationOnBlur,
  expirationOnChange,
}) => {
  return (
    <div className={styles.payment_wrapper}>
      <h3>Payment Info</h3>
      <div className={styles.payment}>
        <SharedInput
          error={cardError}
          full={true}
          id={"card"}
          message={"Please enter an address"}
          onBlurHandler={cardOnBlur}
          onChangeHandler={cardOnChange}
          type={"text"}
          value={card}
        >
          Credit Card
        </SharedInput>
        <SharedSelect
          error={companyError}
          id={"company"}
          message={"Please select a card company"}
          onBlurHandler={companyOnBlur}
          onChangeHandler={companyOnChange}
          selectOptions={companyOptions}
          type={"select"}
          value={company}
        >
          Company
        </SharedSelect>
        <SharedInput
          error={expirationError}
          id={"expiration"}
          message={"Please select a date"}
          onBlurHandler={expirationOnBlur}
          onChangeHandler={expirationOnChange}
          type={"date"}
          value={expiration}
        >
          Expiration
        </SharedInput>
      </div>
    </div>
  );
};

export default PaymentInfo;
