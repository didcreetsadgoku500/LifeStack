import { createContext, useState } from "react";


interface IGlobalState {
    primaryCounty: string,
    primaryState: string,
    secondaryCounty: string,
    secondaryState: string,
    primaryJobTitle?: string,
    secondaryJobTitle?: string,
    primarySalary?: number,
    secondarySalary?: number,

    primaryFamilySize?: string,
    secondaryFamilySize?: string,
    primaryCosts?: {
        [family: string]: {
            cost: number,
            option?: string
        }
    }
    secondaryCosts?: {
        [family: string]: {
            cost: number,
            option?: string
        }
    }
}

interface IGlobalContext {
    state: IGlobalState | {},
    setState: (newState: IGlobalState) => void
}


export const GlobalContext = createContext<IGlobalContext>(
    {
        state: {}, 
        setState: () => {},
});


export const GlobalStateProvider = ({children}: any) => {
    const [globalState, setGlobalState] = useState<IGlobalState | {}>({});


    return (
        <GlobalContext.Provider value={{
                state: globalState, 
                setState: setGlobalState,
            }}>

            {children}

        </GlobalContext.Provider>
    )


}

