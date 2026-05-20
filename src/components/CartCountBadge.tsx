import React from "react";

interface propsType {
    size: string;
    count: number;
}

const CartCountBadge: React.FC<propsType> = ({ size, count }) => {
    if (count === 0) return null;

    return (
        <div
            className={`absolute bg-rose-600 text-white text-[10px] font-bold ${size} -right-1 -top-1 rounded-full flex items-center justify-center shadow-sm`}
        >
            {count}
        </div>
    );
};

export default CartCountBadge;