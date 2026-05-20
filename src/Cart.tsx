import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
    return acc + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 text-zinc-50 font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-rose-500 hover:text-rose-400 text-sm font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
            <p className="text-zinc-500 mb-4">Your cart is empty</p>
            <a href="/portal" className="text-emerald-500 hover:underline">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-300/50 dark:bg-zinc-900/50 border dark:border-zinc-800"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-black dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-emerald-500">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-zinc-300 hover:dark:bg-zinc-800 rounded-full text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="mt-10 p-6 rounded-2xl bg-zinc-300/50 dark:bg-zinc-900/50 border dark:border-zinc-800">
              <div className="flex justify-between text-xl text-black dark:text-white font-bold mb-6">
                <span>Total Amount</span>
                <span>Rs {totalPrice}/-</span>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
