"use client"

import { formatePrice } from "@/utils/formatePrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { trancateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {

    const {handleRemoveFromCart, handleCartQtyIncrase, handleCartQtyDecrase} = useCart()
    return (
        <div className="grid grid-cols-5 gap-4 py-4 text-xs md:text-sm items-center border-t-[1.5px] border-slate-200">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image fill alt={item.name} src={item.selectedImg.image} className="object-contain"/>
                    </div>
                </Link>

                <div className="flex flex-col justify-between">
                    <Link href={`/product/${item.id}`}>{trancateText(item.name)}</Link>

                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button onClick={()=>{handleRemoveFromCart(item)}} className="text-slate-500 underline">Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{formatePrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity cartProduct={item} cartCounter={true} handleDecreaseQty={()=>{handleCartQtyDecrase(item)}} handleIncreaseQty={()=>{handleCartQtyIncrase(item)}}/>
            </div>
            <div className="justify-self-end font-semibold">{formatePrice(item.price * item.quantity)}</div>
        </div>
    );
};

export default ItemContent;