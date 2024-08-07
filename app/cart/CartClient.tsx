"use client"

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatePrice } from "@/utils/formatePrice";


const CartClient = () => {
    const {cartProducts, handleClearCart, cartTotalAmount} = useCart()

    if(!cartProducts || cartProducts.length === 0){
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl ">Your Cart is Empty</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex gap-1 items-center mt-2">

                    <MdArrowBack/>
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Heading title="Shopping Cart" center/>
            <div className="grid grid-cols-5 items-center gap-4 pb-2 text-xs mt-8">
                <div className="col-span-2 justify-self-start">Product</div>
                <div className="justify-self-center">Price</div>
                <div className="justify-self-center">Quantity</div>
                <div className="justify-self-end">Total</div>
            </div>

            <div>
                {cartProducts && cartProducts.map((item)=>{
                    return <ItemContent key={item.id} item={item}/>
                })}
            </div>

            <div className="flex justify-between gap-4 py-4 border-t-[1.5px] border-slate-200 ">
                <div className="w-[90px]">
                    <Button onClick={()=>{handleClearCart()}} label="Clear Cart" outline small/>
                </div>

                <div className="text-sm flex flex-col gap-1 items-start">
                   <div className="flex justify-between w-full text-base font-semibold">
                   <span>Subtotal</span>
                   <span>{formatePrice(cartTotalAmount)}</span>
                   </div>
                    <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
                    <Button onClick={()=>{}} label="Checkout"/>
                    <Link href={"/"} className="text-slate-500 flex gap-1 items-center mt-2">

<MdArrowBack/>
<span>Continue Shopping</span>
</Link>  
                </div>
            </div>
        </div>
    );
};

export default CartClient;