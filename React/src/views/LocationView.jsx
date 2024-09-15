import { useContext, useEffect, useState } from "react"
import AutocompleteInput from "../atoms/AutocompleteInput"
import CardButton from "../atoms/CardButton"
import Input from "../atoms/Input"
import { API_BASE_URL } from "../config"
import {GlobalContext} from '../components/GlobalState'
import SalaryView from "./SalaryView"


const LocationView = (props) => {
    const [suggestions, setSuggestions] = useState([])
    const appContext = useContext(GlobalContext)
    

    useEffect(() => {
        // Fetch here
        const getLocations = async () => {
            const countiesAndStates = await fetch(API_BASE_URL + "api/getLocations")
            const casJSON = await countiesAndStates.json()
            const combined = casJSON.map((row) => ({"county": row[0], "state": row[1], "text": `${row[0]}, ${row[1]}`}))
            setSuggestions(combined)
        }

        getLocations();
    }, [])
    
    
    return <div className="lg:w-1/3 mx-auto pt-12">
        

        <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
            Primary Location
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            Tell us more about where you're located. <br></br> Which county do you reside in?
        </p>

            <div className="flex flex-wrap flex-col gap-5 w-100">
            <AutocompleteInput suggestions={suggestions} onSelect={
                (newLocation) => {
                    const newState = appContext.state;
                    newState.primaryLocation = newLocation;
                    appContext.setState(newState)
                }
                }>

            </AutocompleteInput>
            <CardButton onClick={() => {
                if (appContext && appContext.state.primaryLocation != "" && appContext.state.primaryLocation != null) {
                    props.setView(() => SalaryView)
                }
            }}>Confirm location</CardButton>

            </div>

        </div>
}


export default LocationView