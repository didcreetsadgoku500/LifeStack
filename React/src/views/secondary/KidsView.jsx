import { useContext } from "react";
import CardButton from "../../atoms/CardButton";
import { GlobalContext } from "../../components/GlobalState";
import PetsView from "./PetsView"

const KidsView = (props) => {
    const appContext = useContext(GlobalContext)

    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Family Size
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        How many children would you supporting in this scenario? <br />.
    </p>

    <div className="flex flex-wrap flex-col gap-5">
        <div>

        <CardButton iconSrc="/people1.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = `${newState.secondaryFamilySize}0c`
            appContext.setState(newState)
            props.setView(() => PetsView)
        }}>
            No children
        </CardButton>
        </div>

        <div>
        <CardButton iconSrc="/people1.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = `${newState.secondaryFamilySize}1c`
            appContext.setState(newState)
            props.setView(() => PetsView)
        }}>

            1 child
        </CardButton>
        </div>        <div>

        <CardButton iconSrc="/people2.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = `${newState.secondaryFamilySize}2c`
            appContext.setState(newState)
            props.setView(() => PetsView)
        }}>

            2 children
        </CardButton>
        </div>        <div>

        <CardButton iconSrc="/people3.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = `${newState.secondaryFamilySize}3c`
            appContext.setState(newState)
            props.setView(() => PetsView)
        }}>

            3 children
        </CardButton>
        </div>        <div>

        <CardButton iconSrc="/people3.png"
        onClick={() => {
            const newState = appContext.state
            newState.secondaryFamilySize = `${newState.secondaryFamilySize}4c`
            appContext.setState(newState)
            props.setView(() => PetsView)
        }}>

            4+ children
        </CardButton>
        </div>
    </div>
    </div>
}

export default KidsView;