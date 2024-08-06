import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType | null;
    handleAddProductToCard: (product: CartProductType) => void
    handleRemoveFromCart: (product: CartProductType) => void
}
export const CartContext = createContext<CartContextType | null>(null)

interface Props{
    [propName : string] : any 
}
export const CartContextProvider = (props : Props)=>{
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(()=>{
        const cartItems: any = localStorage.getItem("eShopCartItems")

        const cProducts : CartProductType | null= JSON.parse(cartItems)

        setCartProducts(cProducts)
    }, [])
    const handleAddProductToCard = useCallback((product: CartProductType)=>{
       
        setCartProducts((prev)=>{
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product]
            } else{
                updatedCart = [product]
            }

            toast.success("Product added to cart")
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        })
    }, [])

   const handleRemoveFromCart = useCallback((product: CartContextType)=>{

    if(product){
        const filterProducts = cartProducts?.filter(item=> {
            return item.id !== product.id
        })
        setCartProducts(filterProducts)
        toast.success("Product remove from cart")
        localStorage.setItem('eShopCartItems', JSON.stringify(filterProducts))
            
    }
   }, [cartProducts])

    const value={
        cartTotalQty,
        cartProducts,
        handleAddProductToCard,
        handleRemoveFromCart
    }
    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = ()=>{
    const context = useContext(CartContext)

    if(context === null){
        throw new Error("useCart must be used within a CartContext Provider")
    }

    return context;
}