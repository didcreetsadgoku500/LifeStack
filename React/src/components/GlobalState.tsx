import { createContext, useState } from "react";


interface IGlobalState {
    primaryLocation: string,
    secondaryLocation?: string,
    jobTitle?: string,
    salary?: number,
    costs?: {
        [family: string]: {
            cost: number,
            option?: string
        }
    }
}

interface IGlobalContext {
    state: IGlobalState | null,
    setState: (newState: IGlobalState) => void
};


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

