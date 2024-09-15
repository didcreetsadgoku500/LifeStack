import { useContext, useEffect, useState } from "react"
import AutocompleteInput from "../atoms/AutocompleteInput"
import CardButton from "../atoms/CardButton"
import { API_BASE_URL } from "../config"
import {GlobalContext} from '../components/GlobalState'
import { getStateFullName } from "../utils/utility"
import FamilyView from "./FamilyView"

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
             (newJob) => {
                const newState = appContext.state;
                newState.primaryJobTitle = newJob.text;
                appContext.setState(newState)

                

            }
            }>

        </AutocompleteInput>
        <CardButton onClick={async () => {
            if (appContext && appContext.state.primaryJobTitle != "" && appContext.state.primaryJobTitle != null) {
                props.setView(() => FamilyView)
            
                const res = await fetch(API_BASE_URL + `api/getSalaryByJobAndLocation?us_state=${getStateFullName(appContext.state.primaryState)}&occupation=${appContext.state.primaryJobTitle}`)
                const salary = await res.json()
                const newState = appContext.state;
                newState.primarySalary = salary.income;
                appContext.setState(newState)
        }
        }}>Confirm job</CardButton>

        </div>

    </div>

}


export default FindMySalaryView