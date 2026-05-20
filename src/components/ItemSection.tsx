import ProductCard from "./ProductCard";
const data = [
  { id: 0, img: "/Images/Image (1).jpg", name: "Gadget 1", price: "Rs 500/-" },
  { id: 1, img: "/Images/Image (2).jpg", name: "Gadget 2", price: "Rs 300/-" },
  { id: 2, img: "/Images/Image (3).jpg", name: "Gadget 3", price: "Rs 200/-" },
  { id: 3, img: "/Images/Image (4).jpg", name: "Gadget 4", price: "Rs 100/-" },
  { id: 4, img: "/Images/Image (5).jpg", name: "Gadget 5", price: "Rs 500/-" },
  { id: 5, img: "/Images/Image (6).jpg", name: "Gadget 6", price: "Rs 300/-" },
  { id: 6, img: "/Images/Image (7).jpg", name: "Gadget 7", price: "Rs 200/-" },
  { id: 7, img: "/Images/Image (8).jpg", name: "Gadget 8", price: "Rs 100/-" },
  { id: 8, img: "/Images/Image (9).jpg", name: "Gadget 9", price: "Rs 500/-" },
  {
    id: 9,
    img: "/Images/Image (10).jpg",
    name: "Gadget 10",
    price: "Rs 300/-",
  },
  {
    id: 10,
    img: "/Images/Image (11).jpg",
    name: "Gadget 11",
    price: "Rs 200/-",
  },
  {
    id: 11,
    img: "/Images/Image (12).jpg",
    name: "Gadget 12",
    price: "Rs 100/-",
  },
  {
    id: 12,
    img: "/Images/Image (13).jpg",
    name: "Gadget 13",
    price: "Rs 500/-",
  },
  {
    id: 13,
    img: "/Images/Image (14).jpg",
    name: "Gadget 14",
    price: "Rs 300/-",
  },
  {
    id: 14,
    img: "/Images/Image (15).jpg",
    name: "Gadget 15",
    price: "Rs 200/-",
  },
  {
    id: 15,
    img: "/Images/Image (16).jpg",
    name: "Gadget 16",
    price: "Rs 100/-",
  },
  {
    id: 16,
    img: "/Images/Image (17).jpg",
    name: "Gadget 17",
    price: "Rs 500/-",
  },
  {
    id: 17,
    img: "/Images/Image (18).jpg",
    name: "Gadget 18",
    price: "Rs 300/-",
  },
  {
    id: 18,
    img: "/Images/Image (19).jpg",
    name: "Gadget 19",
    price: "Rs 200/-",
  },
];

const ItemSection = () => {
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 gap-2">
      {data.map((el) => (
        <ProductCard
          key={el.id}
          id={el.id}
          img={el.img}
          name={el.name}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default ItemSection;
