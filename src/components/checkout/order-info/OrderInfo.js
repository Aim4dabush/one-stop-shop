import { useState } from "react";

//components
import BillingAddress from "./billing-address/BillingAddress";
import Customer from "./customer/Customer";
import Payment from "./payment/Payment";
import ShippingAddress from "./shipping-address/ShippingAddress";
import ShippingOptions from "./shipping-options/ShippingOptions";

//hooks
import useValidation from "../../../hooks/useValidation";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { postOrder } from "../../../firebase/services/order-service";

//shared
import SharedButton from "../../shared/shared-button/SharedButton";
import SharedInput from "../../shared/shared-input/SharedInput";

//string generator
import Randomstring from "randomstring";

//styles
import styles from "./OrderInfo.module.scss";

const OrderInfo = ({ cart, total }) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.profile);
  const { loggedUser } = useSelector((state) => state.auth);
  const [matchAddress, setMatchAddress] = useState(true);
  const [shippingOptions, setShippingOptions] = useState();
  const {
    error: billingCityError,
    isValid: billingCityValid,
    value: billingCity,
    onBlurHandler: billingCityOnBlur,
    onChangeHandler: billingCityOnChange,
    resetHandler: billingCityReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: billingStateError,
    isValid: billingStateValid,
    value: billingState,
    onBlurHandler: billingStateOnBlur,
    onChangeHandler: billingStateOnChange,
    resetHandler: billingStateReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: billingStreetError,
    isValid: billingStreetValid,
    value: billingStreet,
    onBlurHandler: billingStreetOnBlur,
    onChangeHandler: billingStreetOnChange,
    resetHandler: billingStreetReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: billingZipError,
    isValid: billingZipValid,
    value: billingZip,
    onBlurHandler: billingZipOnBlur,
    onChangeHandler: billingZipOnChange,
    resetHandler: billingZipReset,
  } = useValidation((value) => value.trim() !== "" && value.length === 5, "");
  const {
    error: birthError,
    isValid: birthValid,
    value: birth,
    onBlurHandler: birthOnBlur,
    onChangeHandler: birthOnChange,
    resetHandler: birthReset,
  } = useValidation(
    (value) => value.trim() !== "",
    info.birth ? info.birth : ""
  );
  const {
    error: cardError,
    isValid: cardValid,
    value: card,
    onBlurHandler: cardOnBlur,
    onChangeHandler: cardOnChange,
    resetHandler: cardReset,
  } = useValidation((value) => value.trim() !== "" && value.length === 16, "");
  const {
    error: companyError,
    isValid: companyValid,
    value: company,
    onBlurHandler: companyOnBlur,
    onChangeHandler: companyOnChange,
    resetHandler: companyReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailOnChange,
    resetHandler: emailReset,
  } = useValidation(
    (value) => value.includes("@"),
    info.email ? info.email : ""
  );
  const {
    error: expirationError,
    isValid: expirationValid,
    value: expiration,
    onBlurHandler: expirationOnBlur,
    onChangeHandler: expirationOnChange,
    resetHandler: expirationReset,
  } = useValidation((value) => value.trim() !== "", "");
  const {
    error: nameError,
    isValid: nameValid,
    value: name,
    onBlurHandler: nameOnBlur,
    onChangeHandler: nameOnChange,
    resetHandler: nameReset,
  } = useValidation((value) => value.trim() !== "", info.name ? info.name : "");
  const {
    error: phoneError,
    isValid: phoneValid,
    value: phone,
    onBlurHandler: phoneOnBlur,
    onChangeHandler: phoneOnChange,
    resetHandler: phoneReset,
  } = useValidation(
    (value) => value.trim() !== "" && value.length >= 10,
    info.phone ? info.phone : ""
  );
  const {
    error: shippingCityError,
    isValid: shippingCityValid,
    value: shippingCity,
    onBlurHandler: shippingCityOnBlur,
    onChangeHandler: shippingCityOnChange,
    resetHandler: shippingCityReset,
  } = useValidation((value) => value.trim() !== "" || matchAddress, "");
  const {
    error: shippingStateError,
    isValid: shippingStateValid,
    value: shippingState,
    onBlurHandler: shippingStateOnBlur,
    onChangeHandler: shippingStateOnChange,
    resetHandler: shippingStateReset,
  } = useValidation((value) => value.trim() !== "" || matchAddress, "");
  const {
    error: shippingStreetError,
    isValid: shippingStreetValid,
    value: shippingStreet,
    onBlurHandler: shippingStreetOnBlur,
    onChangeHandler: shippingStreetOnChange,
    resetHandler: shippingStreetReset,
  } = useValidation((value) => value.trim() !== "" || matchAddress, "");
  const {
    error: shippingZipError,
    isValid: shippingZipValid,
    value: shippingZip,
    onBlurHandler: shippingZipOnBlur,
    onChangeHandler: shippingZipOnChange,
    resetHandler: shippingZipReset,
  } = useValidation((value) => value.trim() !== "" || matchAddress, "");

  let formIsValid = false;

  if (
    billingCityValid &&
    billingStateValid &&
    billingStreetValid &&
    billingZipValid &&
    birthValid &&
    cardValid &&
    companyValid &&
    emailValid &&
    expirationValid &&
    nameValid &&
    phoneValid &&
    shippingCityValid &&
    shippingStateValid &&
    shippingStreetValid &&
    shippingZipValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let orderInfo = {};
    const receipt = Randomstring.generate();

    orderInfo = {
      billing: {
        city: billingCity,
        state: billingState,
        street: billingState,
        zip: billingZip,
      },
      general: {
        birth,
        email,
        name,
        phone,
      },
      order: {
        shipping_type: shippingOptions.title,
        arrival_date: shippingOptions.date,
        products: cart,
        order_total: total,
        receipt,
      },
      payment: {
        card_number: card,
        card_company: company,
        card_expiration: expiration,
      },
      shippingInfo: {
        city: matchAddress ? billingCity : shippingCity,
        state: matchAddress ? billingState : shippingState,
        street: matchAddress ? billingStreet : shippingStreet,
        zip: matchAddress ? billingZip : shippingZip,
      },
    };

    if (!formIsValid) {
      return;
    }

    dispatch(postOrder(orderInfo, loggedUser.id));
    billingCityReset();
    billingStateReset();
    billingStreetReset();
    billingZipReset();
    birthReset();
    cardReset();
    companyReset();
    emailReset();
    expirationReset();
    nameReset();
    phoneReset();
    shippingCityReset();
    shippingStateReset();
    shippingStreetReset();
    shippingZipReset();
  };

  const matchAddressHandler = (e) => {
    setMatchAddress(e.target.checked);
  };

  return (
    <form className={styles.order_info_container} onSubmit={submitHandler}>
      <h1 className={styles.form_title}>Order Form</h1>
      <Customer
        birth={birth}
        birthError={birthError}
        birthOnBlur={birthOnBlur}
        birthOnChange={birthOnChange}
        email={email}
        emailError={emailError}
        emailOnBlur={emailOnBlur}
        emailOnChange={emailOnChange}
        name={name}
        nameError={nameError}
        nameOnBlur={nameOnBlur}
        nameOnChange={nameOnChange}
        phone={phone}
        phoneError={phoneError}
        phoneOnBlur={phoneOnBlur}
        phoneOnChange={phoneOnChange}
      />
      <BillingAddress
        billingCity={billingCity}
        billingCityError={billingCityError}
        billingCityOnBlur={billingCityOnBlur}
        billingCityOnChange={billingCityOnChange}
        billingState={billingState}
        billingStateError={billingStateError}
        billingStateOnBlur={billingStateOnBlur}
        billingStateOnChange={billingStateOnChange}
        billingStreet={billingStreet}
        billingStreetError={billingStreetError}
        billingStreetOnBlur={billingStreetOnBlur}
        billingStreetOnChange={billingStreetOnChange}
        billingZip={billingZip}
        billingZipError={billingZipError}
        billingZipOnBlur={billingZipOnBlur}
        billingZipOnChange={billingZipOnChange}
      />
      <ShippingAddress
        matchAddress={matchAddress}
        shippingCity={shippingCity}
        shippingCityError={shippingCityError}
        shippingCityOnBlur={shippingCityOnBlur}
        shippingCityOnChange={shippingCityOnChange}
        shippingState={shippingState}
        shippingStateError={shippingStateError}
        shippingStateOnBlur={shippingStateOnBlur}
        shippingStateOnChange={shippingStateOnChange}
        shippingStreet={shippingStreet}
        shippingStreetError={shippingStreetError}
        shippingStreetOnBlur={shippingStreetOnBlur}
        shippingStreetOnChange={shippingStreetOnChange}
        shippingZip={shippingZip}
        shippingZipError={shippingZipError}
        shippingZipOnBlur={shippingZipOnBlur}
        shippingZipOnChange={shippingZipOnChange}
      />
      <SharedInput
        checked={matchAddress}
        id={"match_address"}
        type={"checkbox"}
        value={matchAddress}
        onChangeHandler={matchAddressHandler}
      >
        Same as billing
      </SharedInput>
      <Payment
        card={card}
        cardError={cardError}
        cardOnBlur={cardOnBlur}
        cardOnChange={cardOnChange}
        company={company}
        companyError={companyError}
        companyOnBlur={companyOnBlur}
        companyOnChange={companyOnChange}
        expiration={expiration}
        expirationError={expirationError}
        expirationOnBlur={expirationOnBlur}
        expirationOnChange={expirationOnChange}
      />
      <ShippingOptions setValue={setShippingOptions} />
      <div className={styles.btn_wrapper}>
        <SharedButton buttonStyle={"success"}>Complete Order</SharedButton>
      </div>
    </form>
  );
};

export default OrderInfo;
