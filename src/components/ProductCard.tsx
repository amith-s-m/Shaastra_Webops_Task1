import { useCart } from "../context/CartContext";

interface propsType {
  id: number;
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ id, img, name, price }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Check if this specific item is already in the cart
  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, img, name, price });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="border border-zinc-700 rounded-md p-2 relative hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-md"
      />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-lg">{price}</p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <button className="mx-auto flex items-center gap-2 rounded-full px-8 py-2 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-fit shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500/30 backdrop-blur-md hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30">
          Buy Now
        </button>

        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="mx-auto flex items-center gap-2 rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-fit shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-rose-500/20 bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition-colors"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mx-auto flex items-center gap-2 rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-fit shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-zinc-800 bg-zinc-800 text-white dark:text-white dark:bg-zinc-500/20 dark:border-zinc-800 backdrop-blur-md hover:bg-zinc-800 dark:hover:bg-zinc-800"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
