import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      {" "}
      <h2>Welcome to neoG pizza store. </h2>
      <Link to="/menu">
        {" "}
        <button className="addToCartBtn">Go to Menu </button>{" "}
      </Link>
    </div>
  );
};
