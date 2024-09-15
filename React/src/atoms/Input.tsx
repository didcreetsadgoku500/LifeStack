interface InputProps {
    placeholder?: string;
    onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
    inputType?: "text" | "numeric"
}

export default (props: InputProps) => {
    return  <div className="group relative max-w-7xl mx-auto">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 transition duration-200 focus-within:duration-200 -z-10 focus-within:opacity-100"></div>
    <input inputMode="numeric" 
        placeholder={props.placeholder} 
        className="px-4 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 text-lg focus:outline-none focus:ring-0" 
        onChange={props.onInputChange}>
    </input>
   </div>
}