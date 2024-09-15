import CardButton from "../atoms/CardButton"
import LocationView from "./secondary/LocationView"


const PrimaryCompleteView = (props) => {
    return <div className="pt-60">
        <h1 className="mb-4 mx-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Great!</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">That's all the info we need for your current living situation. <br />Now we can pick a scenario to compare to</p>
        
        <div className="flex flex-wrap mt-10">

        <CardButton primary iconSrc="./next.png" onClick={() => props.setView(() => LocationView)}>
                Awesome! Let's go
        </CardButton>
        </div>
    </div>
}


export default PrimaryCompleteView