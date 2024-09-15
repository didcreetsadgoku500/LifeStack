import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../components/GlobalState";
import {currencyFormatter} from "../utils/utility.js";
import { API_BASE_URL } from "../config.js";

const ReceiptView = (props) => {
    const appContext = useContext(GlobalContext)
    const [primaryExpenses, setPrimaryExpenses] = useState([])
    const [secondaryExpenses, setSecondaryExpenses] = useState([])

    useEffect(() => {
        const finalProcessing = async () => {
            const primaryReceipt = []
            const secondaryReceipt = []

            let fullConditions = await fetch(API_BASE_URL + "api/getConditions")
            fullConditions = await fullConditions.json()
            
            for (const c of fullConditions) {
                if (appContext.state.primaryConditions.includes(c.condition)) {
                    primaryReceipt.push({item: c.condition, cost: c.cost})
                }
                if (appContext.state.secondaryConditions.includes(c.condition)) {
                    secondaryReceipt.push({item: c.condition, cost: c.cost})
                }
            }



            setPrimaryExpenses(primaryReceipt)
            setSecondaryExpenses(secondaryReceipt)
        }

        finalProcessing()


    }, [])


    return (
        <div className="lg:w-4/5 xl:w-3/4 mx-auto pt-12">

            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 dark:text-white pb-14">
                Comparison</h1>

            <div className="flex justify-between space-x-20">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                        {`${appContext.state.primaryCounty}, ${appContext.state.primaryState}`}
                    </h3>

                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Starting Salary: {currencyFormatter(appContext.state.primarySalary)}
                        {/* Starting Salary: $45,000 */}
                    </p>

{/* THE MAPPER */}
                    {primaryExpenses.map((item, index) => (
                    <p className="text-gray-800 justify-between w-full flex flex-row">
                        <span>{item.item}</span>
                        <span>{currencyFormatter(item.cost)}</span>
                    </p>

                    ))}
                    <div className="border-t border-gray-300 mt-4 pt-4">
                        <p className="font-bold text-gray-800 dark:text-gray-900">
                            Total: {currencyFormatter(-9999)}
                        </p>
                    </div>
                </div>

                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                    {`${appContext.state.secondaryCounty}, ${appContext.state.secondaryState}`}
                    
                    </h3>

                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Starting Salary: {currencyFormatter(appContext.state.secondarySalary)}
                    </p>

{/* THE MAPPER SECONDARY */}
                    {secondaryExpenses.map((item, index) => (
                    <p className="text-gray-800 justify-between w-full flex flex-row">
                        <span>{item.item}</span>
                        <span>{currencyFormatter(item.cost)}</span>
                    </p>

                    ))}
                    <div className="border-t border-gray-300 mt-4 pt-4">
                        <p className="font-bold text-gray-800 dark:text-gray-900">
                            Total: {currencyFormatter(-9999)}
                        </p>
                    </div>
                </div>
            </div>

        </div>)
}

export default ReceiptView;