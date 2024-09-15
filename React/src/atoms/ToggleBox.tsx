import { ReactNode, useState } from "react";

interface ButtonProps {
    children: ReactNode;
    iconSrc?: string;
    primary?: boolean;
    onToggle: (newState: boolean) => {}

}

const ToggleBox = ({children, iconSrc, primary, onToggle}: ButtonProps) => {
    const [isSelected, setSelected] = useState(false)

    return <div className="group relative max-w-7xl mx-auto">
    <div className={`absolute -inset-1 bg-gradient-to-r  rounded-lg blur ${isSelected ? "opacity-100 from-green-600 to-cyan-600" : "opacity-25 from-purple-600 to-pink-600"} transition duration-200 group-hover:duration-200 -z-10`}></div>
    <div className={primary ? "bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-6 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 cursor-pointer" : "px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 cursor-pointer"} onClick={
      
      () =>{ 
        onToggle(!isSelected)
        setSelected(!isSelected)}
      }>      
    <div className="flex flex-row w-full justify-between">

    <p className={primary ? "text-slate-200 font-bold" : "text-slate-800 font-bold"}>{children}</p>      </div>
      {
        iconSrc ? <img src={iconSrc} className={primary ? "w-8 h-8 invert" : "w-8 h-8"}/> : ""
      }
      </div>
   </div>

}

export default ToggleBox;