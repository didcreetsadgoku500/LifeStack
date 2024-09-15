import {useContext} from "react";
import {GlobalContext} from "../components/GlobalState";
import {currencyFormatter} from "../utils/utility.js";

const ReceiptView = (props) => {

    const appContext = useContext(GlobalContext)

    return (
        <div className="lg:w-4/5 xl:w-3/4 mx-auto pt-12">

            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 dark:text-white pb-14">
                Comparison</h1>

            <div className="flex justify-between space-x-20">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                        {/*{appContext.state.primaryLocation}*/}
                        Alabama
                    </h3>

                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {/*Starting Salary: {currencyFormatter(appContext.state.primarySalary)}*/}
                        Starting Salary: $45,000
                    </p>

                    {/*{appContext.state.primaryCosts.map((item, index) => (*/}
                    <p className="text-gray-800">
                        Pet Rock: {currencyFormatter(-6500)}
                    </p>
                    <p className="text-gray-800">
                        2nd Pet Rock: {currencyFormatter(-6500)}
                    </p>
                    <p className="text-gray-800">
                        Alzheimers From Pet Rock: {currencyFormatter(-6500)}
                    </p>
                    {/*))}*/}
                    <div className="border-t border-gray-300 mt-4 pt-4">
                        <p className="font-bold text-gray-800 dark:text-gray-900">
                            Total: {currencyFormatter(-9999)}
                        </p>
                    </div>
                </div>

                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                        {/*{appContext.state.secondaryLocation}*/}
                        Kentucky
                    </h3>

                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {/*Starting Salary: {currencyFormatter(appContext.state.secondarySalary)}*/}
                        Starting Salary: $42,030
                    </p>

                    {/*{appContext.state.secondaryCosts.map((item, index) => (*/}
                    <p className="text-gray-800">
                        Doctor Appointment: {currencyFormatter(-6500)}
                    </p>
                    {/*))}*/}
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