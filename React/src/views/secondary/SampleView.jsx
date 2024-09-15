import CardButton from "../atoms/CardButton"
import InitialView from "./InitialView"
import SalaryView from "./SalaryView"

// This view is for reference only


const NextView = (props) => {
    return <div className="flex flex-wrap">
        
        <CardButton onClick={() => props.setView(() => SalaryView)}>
            Go to initial view
        </CardButton>
        </div>
}


export default NextView