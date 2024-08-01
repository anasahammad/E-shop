"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
    cartCounter?:boolean;
    cartProduct : CartProductType;
    handleIncreaseQty : () => void;
    handleDecreaseQty : () => void;
}

const SetQuantity : React.FC<SetQtyProps> = ({
    cartProduct, cartCounter, handleIncreaseQty, handleDecreaseQty
}) => {

    const btnStyle = 'border-[1.2px] border-slate-300 rounded px-2';
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div className="font-semibold">
                QUANTITY:
                
                </div>}

                <div className="flex gap-4 items-center text-base">
                    <button className={btnStyle} onClick={handleDecreaseQty}>-</button>
                    <div>{cartProduct.quantity}</div>
                    <button className={btnStyle} onClick={handleIncreaseQty}>+</button>
                </div>
        </div>
    );
};

export default SetQuantity;