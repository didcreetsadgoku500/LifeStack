import { FunctionComponent, ReactNode, useContext } from "react"
import CardButton from "../atoms/CardButton"
import { GlobalContext } from "../components/GlobalState"
import NextView from "./NextView"

// export interface IViewProps {
//     // currentView: ReactNode | (() => ReactNode) | null,
//     setView: (newView: any) => void,
// }

const InitialView = (props) => {

    return <div>
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">App Title</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">See how much you could be making anywhere else in the world</p>
        
        <div className="flex flex-wrap mt-10">

        <CardButton onClick={() => props.setView(() => NextView)}>
                Let's Get Started!
        </CardButton>
        </div>
    </div>
    
}

export default InitialView;