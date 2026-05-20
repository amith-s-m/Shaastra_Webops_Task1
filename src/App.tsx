import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./Login";
import SalesPortal from "./SalesPortal";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Cart";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<SalesPortal />} />
        <Route path="/explore" element={<Hero />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="*"
          element={
            <h1 className="flex text-6xl h-screen justify-center items-center">
              404 - Not Found
            </h1>
          }
        />
      </Routes>
    </CartProvider>
  );
}
