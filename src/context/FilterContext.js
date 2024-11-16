import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  const initialProductList = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  };
  const inStocks = (products) => {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  };
  const bestSeller = (products) => {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  };
  const sort = (products) => {
    if (state.sortBy === "lowToHigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "highToLow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  };
  const rating = (products) => {
    if (state.ratings === "4STARABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3STARABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2STARABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1STARABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  };
  const filteredProducts = rating(
    sort(inStocks(bestSeller(state.productList)))
  );
  const value = {
    state,
    dispatch,
    products: filteredProducts,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
