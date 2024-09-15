import CardButton from "../../atoms/CardButton"
import ReceiptView from "../ReceiptView"

const SecondaryCompletionView = (props) => {
    return <div className="pt-60">
        <h1 className="mb-4 mx-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Perfect!</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">You're all set!. <br />Click the button to see the results</p>
        
        <div className="flex flex-wrap mt-10">

        <CardButton primary iconSrc="./next.png" onClick={() => props.setView(() => ReceiptView)}>
                Show my results
        </CardButton>
        </div>
    </div>
}


export default SecondaryCompletionView