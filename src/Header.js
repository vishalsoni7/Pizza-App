import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "./context/PizzaContext";

export const Header = () => {
  const { pizzaInCart } = useContext(PizzaContext);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <nav className="navbar">
        <NavLink className="nav" to="/">
          {" "}
          Home{" "}
        </NavLink>{" "}
        <NavLink className="nav" to="/menu">
          {" "}
          Menu{" "}
        </NavLink>
        <NavLink className="nav" to="/cart">
          Cart {pizzaInCart.length ? `(${pizzaInCart.length})` : null}
        </NavLink>
      </nav>
    </div>
  );
};
