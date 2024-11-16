import { useEffect, useState } from "react";
import { Rating } from "../components";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  useTitle(productDetails.name);
  const { id } = useParams();
  const { addCart, cartList, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        let data = await getProduct(id);
        setProductDetails(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    };
    fetchProductDetails();
  }, [id]);
  useEffect(() => {
    const productInCart = cartList.find(
      (item) => item.id === productDetails.id
    );
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, productDetails.id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {productDetails.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {productDetails.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img
              className="rounded"
              src={productDetails.poster}
              alt={productDetails.name}
            />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{productDetails.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={productDetails.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {productDetails.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {productDetails.in_stock && (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              )}
              {!productDetails.in_stock && (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {productDetails.size} MB
              </span>
            </p>
            <p className="my-3">
              {!inCart && (
                <button
                  onClick={() => addCart(productDetails)}
                  disabled={productDetails.in_stock ? "" : "disabled"}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    productDetails.in_stock ? "" : "cursor-not-allowed"
                  }`}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
              {inCart && (
                <button
                  onClick={() => removeFromCart(productDetails)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 `}
                  disabled={productDetails.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}{" "}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {productDetails.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
