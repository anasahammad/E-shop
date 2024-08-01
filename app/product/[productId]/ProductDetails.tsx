"use client";

import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsPros{
    product: any;
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    quantity: number,
    price: number,
    selectedImg: SelectedImgType
}

export type SelectedImgType = {
    color: string,
    colorCode : string,
    image: string
}
const HorizontalLine = ()=>{
    return <hr  className="w-[30%] my-2"/>
}
const ProductDetails: React.FC<ProductDetailsPros> = ({product}) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
       id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    quantity: 1,
    price: product.price,
    selectedImg: {...product.images[0]} 
    })
    const productRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect =  useCallback((value: SelectedImgType) =>{
            setCartProduct((prev)=> {
                return {...prev, selectedImg: value}
            })
    }, [cartProduct.selectedImg])

    const handleDecreaseQty = useCallback(()=>{

        if(cartProduct.quantity === 1) {
            return
        }

        setCartProduct((prev)=>{
            return {...prev, quantity : --prev.quantity}
        })
    }, [cartProduct])

    const handleIncreaseQty = useCallback(()=>{
        if(cartProduct.quantity === 999) {
            return
        }
        setCartProduct((prev)=>{
            return {...prev, quantity: ++prev.quantity}
        })
    }, [cartProduct])

    


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>Images</div>
          <div className="flex flex-col gap-1 text-slate-500 text-2m">
            <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2">
                <Rating value={productRating} readOnly/>
                <div>{product.reviews.length} reviews</div>
            </div>
            <HorizontalLine/>
            <div className="text-justify">{product.description}</div>
            <HorizontalLine/>

            <div>
                <span className="font-semibold">CATEGORY:</span> {product.category}
            </div>
            <div>
                <span className="font-semibold">BRAND:</span> {product.brand}
            </div>

            <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                {product.inStock ? 'In-stock': 'Out of stock'}
            </div>

            <HorizontalLine/>
          <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect}/>
            <HorizontalLine/>
            <SetQuantity handleIncreaseQty={handleIncreaseQty} handleDecreaseQty={handleDecreaseQty} cartProduct={cartProduct}/>
            <HorizontalLine/>
            <div>add to cart btn</div>
          </div>
        </div>
    );
};

export default ProductDetails;