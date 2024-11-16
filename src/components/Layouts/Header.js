import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { useCart } from "../../context";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { cartList } = useCart();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Codebook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Codebook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-xl text-gray-700 dark:text-white bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setShowSearch(!showSearch)}
              className="bi text-gray-700 dark:text-white bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-bag-fill dark:text-white relative">
                <span className="text-white text-sm absolute -bottom-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setShowDropdown(!showDropdown)}
              className="bi text-gray-700 dark:text-white bi-person-circle"
            ></span>
            {showDropdown &&
              (token ? (
                <DropdownLoggedIn setShowDropdown={setShowDropdown} />
              ) : (
                <DropdownLoggedOut setShowDropdown={setShowDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};
