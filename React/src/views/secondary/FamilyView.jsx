import { useContext } from "react";
import CardButton from "../../atoms/CardButton";
import { GlobalContext } from "../../components/GlobalState";
import KidsView from "./KidsView"

const FamilyView = (props) => {
    const appContext = useContext(GlobalContext)

    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Family Size
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        How many adults would you support? <br />Include yourself in this measure.
    </p>

    <div className="flex flex-wrap flex-col gap-5">
        
        <div>

        
        <CardButton iconSrc="/people1.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = "1p"
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>

            1 Adult
        </CardButton>
        </div>
        <div>
        <CardButton iconSrc="/people2.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = "2p"
            appContext.setState(newState)
            props.setView(() => KidsView)

        }}>

            2+ Adults
        </CardButton>
        </div>
    </div>
    </div>
}

export default FamilyView;