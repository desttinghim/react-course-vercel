import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const ui = useSelector((store) => store.ui);

  return (
    <Layout>
      {ui.cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
