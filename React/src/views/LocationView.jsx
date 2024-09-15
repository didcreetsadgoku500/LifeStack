import { useEffect, useState } from "react"
import AutocompleteInput from "../atoms/AutocompleteInput"
import CardButton from "../atoms/CardButton"
import Input from "../atoms/Input"
import { API_BASE_URL } from "../config"


const LocationView = (props) => {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        // Fetch here
        const getLocations = async () => {
            const countiesAndStates = await fetch(API_BASE_URL + "api/getLocations")
            const casJSON = await countiesAndStates.json()
            const combined = casJSON.map((row) => `${row[0]}, ${row[1]}`)
            setSuggestions(combined)


        }

        getLocations();
    }, [])
    
    
    
    
    return <div className="lg:w-1/3 mx-auto pt-12">
        

        <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800 dark:text-white">
            Primary Location
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            Tell us more about where you're located. <br></br> Which county do you reside in?
        </p>

            <div className="flex flex-wrap flex-col gap-5 w-100">
            <AutocompleteInput suggestions={suggestions}>

            </AutocompleteInput>
            <CardButton>Confirm location</CardButton>

            </div>

        </div>
}


export default LocationView