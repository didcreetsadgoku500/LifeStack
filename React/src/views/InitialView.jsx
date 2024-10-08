import CardButton from "../atoms/CardButton"
import LocationView from "./LocationView";
import SalaryView from "./SalaryView";
import NextView from "./SampleView"

// export interface IViewProps {
//     // currentView: ReactNode | (() => ReactNode) | null,
//     setView: (newView: any) => void,
// }

const InitialView = (props) => {

    return <div className="pt-60">
        <h1 className="mb-4 mx-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">LifeStack</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">See how your cost of living stacks up against someone elses'</p>
        
        <div className="flex flex-wrap mt-10">

        <CardButton iconSrc="./next.png" onClick={() => props.setView(() => LocationView)}>
                Let's get started!
        </CardButton>
        </div>
    </div>
    
}

export default InitialView;