import { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";

export const Menu = () => {
  const { data, setPizzaInCart, dataAsSearch, setdataAsSearch } = useContext(
    PizzaContext
  );

  const [showVeg, setShowVeg] = useState(false); //veg-category
  const [showSpicy, setShowSpicy] = useState(false); //spicy-category
  const [isSort, setIsSort] = useState(""); // sorting

  const searchPizza = (e) => {
    const filterPizza = data.filter(({ name }) =>
      name.toLowerCase().includes(e.target.value)
    );
    e.target.value === ""
      ? setdataAsSearch(data)
      : setdataAsSearch(filterPizza);
  };

  const addToCart = (addedPizza) => {
    setPizzaInCart((pizzaInCart) => [...pizzaInCart, addedPizza]);
  };

  const handleVeg = () => {
    setShowVeg((pre) => !pre);
  };
  const handleSpicy = () => {
    setShowSpicy((pre) => !pre);
  };

  let showData = dataAsSearch;

  if (showVeg) {
    showData = showData.filter(({ is_vegetarian }) => is_vegetarian);
  }
  if (showSpicy) {
    showData = showData.filter(({ is_spicy }) => is_spicy);
  }

  const lowToHigh = () => {
    setIsSort(() => "lowToHigh");
  };
  const highToLow = () => {
    setIsSort(() => "highToLow");
  };

  if (isSort === "lowToHigh") {
    showData = [...showData].sort((a, b) => a.price - b.price);
  }
  if (isSort === "highToLow") {
    showData = [...showData].sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h2> Menu</h2>
      <input
        className="input-type"
        placeholder="   🔍 Search for meals"
        onChange={searchPizza}
        type="text"
      />
      <input
        style={{ accentColor: "White" }}
        onChange={handleVeg}
        type="checkbox"
      />
      Veg
      <input
        style={{ accentColor: "white" }}
        onChange={handleSpicy}
        type="checkbox"
      />
      Spicy
      <input
        style={{ accentColor: "crimson" }}
        onChange={lowToHigh}
        name="sorting"
        type="radio"
      />{" "}
      Price low to high
      <input
        style={{ accentColor: "crimson" }}
        onChange={highToLow}
        name="sorting"
        type="radio"
      />{" "}
      Price high to low
      <div style={{ marginTop: "30px" }}>
        <ul>
          {showData.map((item) => {
            const { id, name, description, price, image, delivery_time } = item;
            return (
              <li key={id}>
                <img src={image} alt="pizaa" width="230" height="200" />
                <h4> {name} </h4>
                <p>{description} </p>
                <p>$ {price}</p>
                <p>
                  <span role="img" aria-label="delivery-truck">
                    🚚 {""}
                  </span>
                  {delivery_time}
                </p>
                <button
                  className="addToCartBtn"
                  onClick={() => addToCart(item)}
                >
                  {" "}
                  Add to cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
