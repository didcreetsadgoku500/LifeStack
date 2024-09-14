import { ReactNode, useContext } from "react"
import CardButton from "../atoms/CardButton"
import { GlobalContext } from "../components/GlobalState"
import InitialView from "./InitialView"

// interface IViewProps {
//     // currentView: ReactNode | (() => ReactNode) | null,
//     setView: (newView: any) => void,
// }


const NextView = (props) => {

    return <CardButton onClick={() => props.setView(() => InitialView)}>
            Go to initial view
        </CardButton>
    
}


export default NextView