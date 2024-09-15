import { useContext } from "react";
import CardButton from "../atoms/CardButton";
import { GlobalContext } from "../components/GlobalState";

const KidsView = (props) => {
    const appContext = useContext(GlobalContext)

    return <div className="lg:w-1/3 mx-auto pt-12">
        

    <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800">
        Family Size
    </h2>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        How many children are you supporting on your salary? <br />.
    </p>

    <div className="flex flex-wrap flex-col gap-5">
        <CardButton iconSrc="/people1.png"
        onClick={() => {
            const newState = appContext.state
            newState.primaryFamilySize = `${newState.primaryFamilySize}0c`
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>
            No children
        </CardButton>


        <CardButton iconSrc="/people1.png"
        onClick={() => {
            const newState = appContext.state
            newState.primaryFamilySize = `${newState.primaryFamilySize}1c`
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>

            1 child
        </CardButton>

        <CardButton iconSrc="/people2.png"
        onClick={() => {
            const newState = appContext.state
            newState.primaryFamilySize = `${newState.primaryFamilySize}2c`
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>

            2 children
        </CardButton>

        <CardButton iconSrc="/people3.png"
        onClick={() => {
            const newState = appContext.state
            newState.primaryFamilySize = `${newState.primaryFamilySize}3c`
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>

            3 children
        </CardButton>

        <CardButton iconSrc="/people3.png"
        onClick={() => {
            const newState = appContext.state
            newState.primaryFamilySize = `${newState.primaryFamilySize}4c`
            appContext.setState(newState)
            props.setView(() => KidsView)
        }}>

            4+ children
        </CardButton>
        
    </div>
    </div>
}

export default KidsView;