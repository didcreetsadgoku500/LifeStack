import { useState, useContext } from "react";
import Input from "../../atoms/Input"
import CardButton from "../../atoms/CardButton";
import FadeTransition from "../../components/FadeTransition";
import { GlobalContext } from "../../components/GlobalState";
import FindMySalaryView from "./FindMySalaryView";
import FamilyView from "./FamilyView";

const handleSalaryChange = (e, salaryState, setSalary) => {
    // TODO: enforce numbers only by comparing salaryState (previous state) to updated state

    const negatedNumber_Pattern = /([^0-9]+)/;

    if (negatedNumber_Pattern.exec(e.target.value) != null) {
        e.target.value = salaryState;
    }

    setSalary(e.target.value)
}

const SalaryView = (props) => {
    const [salaryState, setSalary] = useState("");
    const appContext = useContext(GlobalContext);

    return <div className="lg:w-1/3 mx-auto pt-12">

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800 dark:text-white">Comparing Salary</h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">Now let's pin down the hypothetical base salary. How much do you think you'll make in this scenario?</p>



    <div className="flex flex-wrap flex-col gap-5">
    <Input placeholder="Enter your salary" inputType="numeric" onInputChange={(e) => handleSalaryChange(e, salaryState, setSalary)}/>
    <FadeTransition fade_duration={200}>
        {(salaryState == "") ? 
            <CardButton iconSrc="./payroll.png" primary
                onClick={() => props.setView(() => FindMySalaryView)}
            >I don't know my salary</CardButton> 
        : 
            <CardButton iconSrc="./payroll.png"
                onClick={() => {
                    props.setView(() => FamilyView)
                    const newState = appContext.state;
                    newState.secondarySalary = salaryState;
                    newState.secondaryJobTitle = "Custom Job"
                    appContext.setState(newState)    
                }}
            >Confirm salary</CardButton>    
        }
    </FadeTransition>
    </div>
    
        
    </div>
          
}


export default SalaryView