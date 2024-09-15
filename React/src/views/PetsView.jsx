import { useContext, useEffect, useState } from "react";
import ToggleBox from "../atoms/ToggleBox";
import { API_BASE_URL } from "../config"

import { GlobalContext } from "../components/GlobalState";
import CardButton from "../atoms/CardButton";

const PetsView = (props) => {
    const appContext = useContext(GlobalContext)
    const [petsList, setPetsList] = useState([])
    const [checkboxStates, setBoxStates] = useState({})

    useEffect(() => {
        const getPets = async () => {
            const res = await fetch(API_BASE_URL + "api/getPets")
            const pets = await res.json()
            setPetsList(pets)
        }

        getPets()
    }
        , [])


    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Family Size
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        Do you have any pets? Select all of them here<br />.
    </p>

    <div className="flex flex-col gap-5">
        {
            petsList.map((pet) => (<div key={pet}><ToggleBox 
            onToggle={(isActive) => {
                const newState = checkboxStates;
                newState[pet] = isActive;
                setBoxStates(newState)
            }} 
            iconSrc="/paws.png">
                    {pet}
                </ToggleBox></div>))
        }
        <div>
            
            <CardButton primary iconSrc="/next.png" onClick={() => {
                const finalPetsList = []
                for (const pet in checkboxStates) {
                    if (checkboxStates[pet] === true) {
                        finalPetsList.push(pet)
                    }
                }

                const newState = appContext.state
                newState.primaryPets = finalPetsList
                appContext.setState(newState)
            }}>
            Confirm pets
        </CardButton>
            </div>
        

        
    </div>
    </div>
}

export default PetsView;