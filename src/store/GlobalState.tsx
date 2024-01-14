import {createContext, useState} from 'react'

export const GlobalContext = createContext({})

export function RoutesProvider({children}: any) {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [result, setResult] = useState({})
    const [errors, setErrors] = useState([])

    return (
        <GlobalContext.Provider value={{ day, month, year, setDay, setMonth, setYear, result, setResult, errors, setErrors }}>
            {children}
        </GlobalContext.Provider>
    )
}