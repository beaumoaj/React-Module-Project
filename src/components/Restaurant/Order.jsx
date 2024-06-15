import { useState } from "react";
import "./Restaurant.scss";

const Order = (props) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  const labelId = "button_" + props.orderType;
  return (
    <li key={labelId} className="restaurant__item">
      <label htmlFor={labelId}>
        {props.orderType} {orders}{" "}
      </label>
      <button
        id={labelId}
        name={labelId}
        className="button restaurant__button"
        onClick={orderOne}
      >
        Add {props.orderType}
      </button>
    </li>
  );
};

export default Order;
