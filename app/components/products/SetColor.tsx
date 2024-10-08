"use client";

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps{
    images: SelectedImgType[],
    cartProduct : CartProductType,
    handleColorSelect : (value: SelectedImgType) => void
}
const SetColor : React.FC<SetColorProps> = ({images, cartProduct, handleColorSelect}) => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <span className="font-semibold">COLOR: </span> <div className="flex gap-1">
                    { images.map((image)=> {
                        return <div
                            onClick={()=>handleColorSelect(image)}
                            className={`w-7 h-7 rounded-full flex items-center border-teal-300 justify-center ${cartProduct.selectedImg.color === image.color ? 'border-[1.2px]' : 'border-none'}`}
                        key={image.color}>
                            <div style={{background: image.color}}
                                className="w-5 h-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                            ></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default SetColor;