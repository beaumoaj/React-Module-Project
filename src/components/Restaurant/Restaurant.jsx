import Order from "./Order";
import "./Restaurant.scss";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </section>
  );
};

export default Restaurant;
