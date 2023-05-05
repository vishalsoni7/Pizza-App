import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Pizza, PizzaContext } from "./context/PizzaContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { PizzaContext };

root.render(
  <BrowserRouter>
    <Pizza>
      <App />
    </Pizza>
  </BrowserRouter>
);
