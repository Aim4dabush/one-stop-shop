import { setOrderHistory } from "../../redux/slices/orderHistorySlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, update } from "firebase/database";

//services
import { postProfile } from "./profile-service";

export const deleteOrder = (receipt, userId) => {
  return async (dispatch) => {
    let receipts = [];
    const orderRef = ref(realtimeDB, `users/${userId}/orders`);

    try {
      const result = await get(orderRef);

      if (!result.exists()) {
        return;
      }

      receipts = result.val().receipts;
      const newReceipts = receipts.reduce((arr, item) => {
        if (item.order.receipt === receipt) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      update(orderRef, { receipts: newReceipts });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getOrderHistory = (userId) => {
  return (dispatch) => {
    const orderRef = ref(realtimeDB, `users/${userId}/orders`);

    try {
      onValue(orderRef, (result) => {
        if (!result.exists()) {
          return;
        }

        const orders = result.val().receipts;
        dispatch(setOrderHistory(orders));
      });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const postOrder = (data, userId) => {
  return async (dispatch) => {
    let receipts = [];
    const { billing, general, order, payment, shippingInfo } = data;
    const orderRef = ref(realtimeDB, `users/${userId}/orders`);
    const orderInfo = {
      customer: {
        email: general.email,
        name: general.name,
        phone: general.phone,
      },
      payment: {
        card_company: payment.card_company,
        card_expiration: payment.card_expiration,
        card_number: payment.card_number,
      },
      order: {
        arrival: order.arrival_date,
        city: shippingInfo.city,
        products: order.products,
        order_date: order.order_date,
        order_total: order.order_total,
        receipt: order.receipt,
        state: shippingInfo.state,
        street: shippingInfo.street,
        zip: shippingInfo.zip,
      },
    };
    const profile = {
      city: billing.city,
      email: general.email,
      name: general.name,
      phone: general.phone,
      state: billing.state,
      street: billing.street,
      zip: billing.zip,
    };

    try {
      const result = await get(orderRef);
      if (!result.exists()) {
        receipts.push(orderInfo);
        update(orderRef, { receipts });
        dispatch(postProfile(profile));
        return;
      }

      receipts = result.val().receipts;
      receipts.push(orderInfo);
      update(orderRef, { receipts });
      dispatch(postProfile(profile));
    } catch (err) {
      alert(err.message);
    }
  };
};
