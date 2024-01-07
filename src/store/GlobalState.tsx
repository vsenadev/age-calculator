import {createContext, useState} from 'react'

export const GlobalContext = createContext({})

export function RoutesProvider({children}: any) {
    const [pages, setPages] = useState();

    return (
        <GlobalContext.Provider value={{ pages, setPages }}>
            {children}
        </GlobalContext.Provider>
    )
}