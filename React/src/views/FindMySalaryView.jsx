import { useContext, useEffect, useState } from "react"
import AutocompleteInput from "../atoms/AutocompleteInput"
import CardButton from "../atoms/CardButton"
import { API_BASE_URL } from "../config"
import {GlobalContext} from '../components/GlobalState'
import SalaryView from "./SalaryView"

const FindMySalaryView = (props) => {
    const [suggestions, setSuggestions] = useState([])
    const appContext = useContext(GlobalContext)
    

    useEffect(() => {
        // Fetch here
        const getOccupations = async () => {
            const jobsRaw = await fetch(API_BASE_URL + "api/getOccupations")
            const jobs = await jobsRaw.json()
            const jobs_mapped = jobs.map((j) => ({"text": j}))
            setSuggestions(jobs_mapped)
        }

        getOccupations();
    }, [])

    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Occupation
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        Pick the job title that best matches the line of work you want to consider.
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
        }}>Confirm job</CardButton>

        </div>

    </div>

}


export default FindMySalaryView