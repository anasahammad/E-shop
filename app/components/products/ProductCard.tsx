"use client"

import Image from "next/image";
import { trancateText } from "@/utils/truncateText";
interface ProductCardProps{
    data: any;
}

const ProductCard:React.FC<ProductCardProps>  = ({data}) => {
    return (
        <div className="col-span-1 cursor-pointer border-[1.2px] 
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
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default ProductCard;