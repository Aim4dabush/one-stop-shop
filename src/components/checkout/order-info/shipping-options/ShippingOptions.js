import { useEffect, useState } from "react";

//luxon
import { DateTime } from "luxon";

//shared
import SharedInput from "../../../shared/shared-input/SharedInput";

//styles
import styles from "./ShippingOptions.module.scss";

const ShippingOptions = ({ setValue }) => {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: "two_day",
      title: "2 Day Shipping",
      date: DateTime.now().plus({ days: 2 }).toFormat("MM-dd-yyyy"),
      checked: false,
    },
    {
      id: "five_day",
      title: "5 Day Shipping",
      date: DateTime.now().plus({ days: 5 }).toFormat("MM-dd-yyyy"),
      checked: false,
    },
    {
      id: "free",
      title: "Free",
      date: DateTime.now().plus({ days: 3, weeks: 1 }).toFormat("MM-dd-yyyy"),
      checked: true,
    },
  ]);

  const checkboxGroupHandler = (e) => {
    const ship = checkboxes.find((box) => {
      return box.id === e.target.id;
    });

    setValue(ship);
    const newBoxes = filterBoxes(e.target.id);
    setCheckboxes(newBoxes);
  };

  const filterBoxes = (box) => {
    const newArr = checkboxes.reduce((arr, item) => {
      if (box === item.id) {
        item.checked = true;
        return [...arr, item];
      } else {
        item.checked = false;
        return [...arr, item];
      }
    }, []);

    return newArr;
  };

  useEffect(() => {
    setValue({
      id: "free",
      title: "Free",
      date: DateTime.now().plus({ days: 3, weeks: 1 }).toFormat("MM-dd-yyyy"),
      checked: true,
    });
  }, [setValue]);
  return (
    <div className={styles.options}>
      <h3>Shipping</h3>
      <div className={styles.checkbox_wrapper}>
        {checkboxes.map((checkbox) => {
          return (
            <SharedInput
              key={checkbox.id}
              checked={checkbox.checked}
              id={checkbox.id}
              type={"checkbox"}
              onChangeHandler={checkboxGroupHandler}
            >
              {checkbox.title}
            </SharedInput>
          );
        })}
      </div>
    </div>
  );
};

export default ShippingOptions;
