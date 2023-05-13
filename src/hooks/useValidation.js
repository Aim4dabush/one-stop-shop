import { useState } from "react";

const useValidation = (validation) => {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");

  const isValid = validation(value);
  const error = !isValid && touched;

  const onBlurHandler = () => {
    setTouched(true);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const resetHandler = () => {
    setValue("");
    setTouched(false);
  };

  return {
    error,
    isValid,
    value,
    onBlurHandler,
    onChangeHandler,
    resetHandler,
  };
};

export default useValidation;
