"use client";

import { IconType } from "react-icons";

interface ButtonProps{
    label: string,
    disabled?: boolean,
    custom?: boolean,
    small?: boolean,
    outline?: boolean,
    icon?: IconType,
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void

}

const Button : React.FC<ButtonProps> = ({
    label, disabled, custom, small, outline, icon: Icon, onClick
}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`disabled:opacity-70 disabled:cursor-not-allowed 
            hover:opacity-90 rounded-md transition w-full border-slate-700 flex items-center justify-center gap-2
            ${outline ? 'bg-white text-slate-700 border' : 'bg-slate-700 text-white'}
            ${small ? 'text-sm py-1 px-2 font-light border-1' : 'text-md py-3 px-4 font-semibold border-2'}
            ${custom ? custom : ''}
        
        `}>
            {Icon && <Icon/> }
            {label}
        </button>
    );
};

export default Button;