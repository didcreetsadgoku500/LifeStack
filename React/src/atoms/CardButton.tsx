import { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    iconSrc?: string;
    primary?: boolean;

}

const CardButton = ({onClick, children, iconSrc, primary}: ButtonProps) => {


    return <div className="group relative max-w-7xl mx-auto">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200 group-hover:duration-200 -z-10"></div>
    <div className={primary ? "bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-6 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 cursor-pointer" : "px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 cursor-pointer"} onClick={onClick}>
      {
        iconSrc ? <img src={iconSrc} className="w-8 h-8"/> : ""
      }
      <div className="space-y-2">
        <p className={primary ? "text-slate-200 font-bold" : "text-slate-800 font-bold"}>{children}</p>
      </div>
    </div>
   </div>

}

export default CardButton;