import { useContext, useEffect, useState } from "react";
import ToggleBox from "../../atoms/ToggleBox";
import { API_BASE_URL } from "../../config"

import { GlobalContext } from "../../components/GlobalState";
import CardButton from "../../atoms/CardButton";
import PrimaryCompleteView from "./SecondaryCompletionView";

const ConditionView = (props) => {
    const appContext = useContext(GlobalContext)
    const [conditionsList, setConditionsList] = useState([])
    const [checkboxStates, setBoxStates] = useState({})

    useEffect(() => {
        const getConditions = async () => {
            const res = await fetch(API_BASE_URL + "api/getConditions")
            const conditions = await res.json()
            setConditionsList(conditions)
        }

        getConditions()
    }
        , [])


    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Medical Conditions
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        Do you want to account for any medical conditions? Select all of them here<br />.
    </p>

    <div className="flex flex-col gap-5">
        {
            conditionsList.map((condition) => (<div key={condition}><ToggleBox 
            onToggle={(isActive) => {
                const newState = checkboxStates;
                newState[condition] = isActive;
                setBoxStates(newState)
            }} 
            iconSrc="/heart.png">
                    {condition}
                </ToggleBox></div>))
        }
        <div>
            
            <CardButton primary iconSrc="/next.png" onClick={() => {
                const finalConditionsList = []
                for (const condition in checkboxStates) {
                    if (checkboxStates[condition] === true) {
                        finalConditionsList.push(condition)
                    }
                }

                const newState = appContext.state
                newState.secondaryConditions = finalConditionsList
                appContext.setState(newState)
                props.setView(() => PrimaryCompleteView)
            }}>
            Confirm conditions
        </CardButton>
            </div>
        

        
    </div>
    </div>
}

export default ConditionView;