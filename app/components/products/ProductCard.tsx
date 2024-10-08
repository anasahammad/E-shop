"use client"

import Image from "next/image";
import { trancateText } from "@/utils/truncateText";
import { formatePrice } from "@/utils/formatePrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
interface ProductCardProps{
    data: any;
}

const ProductCard:React.FC<ProductCardProps>  = ({data}) => {
    const router = useRouter()
    const productRating = data.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / data.reviews.length

    return (
        <div onClick={()=> router.push(`/product/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px] 
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2 transition-all hover:scale-105 text-center text-sm
        
        ">
            <div className="flex flex-col w-full items-center gap-1">
                <div className="aspect-square w-full relative overflow-hidden">
                    <Image
                        src={data.images[0].image}
                        alt={data.name}
                        fill
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="mt-4">
                    {trancateText(data.name)}
                </div>
                <div>
                    <Rating value={productRating} readOnly/>
                </div>
                <div>{data.reviews.length} reviews</div>
                <div>{formatePrice(data.price)}</div>
            </div>
        </div>
    );
};

export default ProductCard;