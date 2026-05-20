import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { cx } from "class-variance-authority";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-200/80 dark:bg-zinc-950/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to="/" className={cx("flex items-center space-x-3")}>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-black dark:bg-white text-white dark:text-black">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            VergeStore
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="relative w-full max-w-[500px] focus:scale-105"
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <input
          className="bg-zinc-300 dark:bg-zinc-800 border-none outline-none px-6 py-3 rounded-[30px] w-full text-black dark:text-white"
          type="text"
          placeholder="Search Product... "
        />
        <BsSearch
          className="text-zinc-900 dark:text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2"
          size={20}
        />
      </motion.div>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative group">
          <AiOutlineShoppingCart
            size={38}
            className="text-black dark:text-white group-hover:text-zinc-200 px-2 py-2 rounded-full border border-zinc-800 group-hover:bg-zinc-800 transition-colors cursor-pointer"
          />
          <CartCountBadge size="h-[18px] w-[18px]" count={cartItems.length} />
        </Link>
        <Link
          to="/"
          className="text-sm px-4 py-2 rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors text-black dark:text-white"
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
