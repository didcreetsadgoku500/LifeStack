import { createContext, useState } from "react";


interface IGlobalState {
    primaryLocation: string,
    secondaryLocation?: string,
    primaryJobTitle?: string,
    secondaryJobTitle?: string,
    primarySalary?: number,
    secondarySalary?: number,
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
    state: IGlobalState | null,
    setState: (newState: IGlobalState) => void
}


export const GlobalContext = createContext<IGlobalContext>(
    {
        state: null, 
        setState: () => {},
});


export const GlobalStateProvider = ({children}: any) => {
    const [globalState, setGlobalState] = useState<IGlobalState | null>(null);


    return (
        <GlobalContext.Provider value={{
                state: globalState, 
                setState: setGlobalState,
            }}>

            {children}

        </GlobalContext.Provider>
    )


}

