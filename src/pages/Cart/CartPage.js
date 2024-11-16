import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const { cartList } = useCart();
  const cartLength = cartList.length;
  useTitle(`Cart (${cartLength})`);

  return <main>{cartLength ? <CartList /> : <CartEmpty />}</main>;
};
