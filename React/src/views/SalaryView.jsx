import { useState } from "react";
import Input from "../atoms/Input"
import CardButton from "../atoms/CardButton";
import FadeTransition from "../components/FadeTransition";

const handleSalaryChange = (e, salaryState, setSalary) => {
    // TODO: enforce numbers only by comparing salaryState (previous state) to updated state

    const negatedNumber_Pattern = /([^0-9]+)/;

    if (negatedNumber_Pattern.exec(e.target.value) != null) {
        e.target.value = salaryState;
    }

    setSalary(e.target.value)
}

const SalaryView = () => {
    const [salaryState, setSalary] = useState("");

    return <div className="lg:w-1/3 mx-auto pt-12">

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800 dark:text-white">Base Salary</h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">Great! Now let's pin down your base salary. How much do you expect to make in a year before any expenses?</p>



    <div className="flex flex-wrap flex-col gap-5">
    <Input placeholder="Enter your salary" inputType="numeric" onInputChange={(e) => handleSalaryChange(e, salaryState, setSalary)}/>
    <FadeTransition fade_duration={200}>
        {(salaryState == "") ? 
            <CardButton iconSrc="./payroll.png" primary>I don't know my salary</CardButton> 
        : 
            <CardButton iconSrc="./payroll.png">Confirm salary</CardButton>    
        }
    </FadeTransition>
    </div>
    
        
    </div>
          
}


export default SalaryView