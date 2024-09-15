import { useState } from "react";
import Input from "../atoms/Input"


const handleSalaryChange = (value, salaryState, setSalary) => {
    
}

const SalaryView = () => {
    const [salaryState, setSalary] = useState(null);

    return <div className="lg:w-1/2 mx-auto pt-12">

    <h2 className="mb-4 text-5xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-5xl dark:text-white">Base Salary</h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>


    <div className="flex flex-wrap">
    <Input placeholder="Enter your salary" inputType="numeric" onInputChange={(e) => handleSalaryChange(e, salaryState, setSalary)}/>
    <p>{salaryState}</p>
    </div>
        
    </div>
          
}


export default SalaryView