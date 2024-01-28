import {createContext, useState} from 'react'
import {IErrors} from "../interface/IHome.interface";

export const GlobalContext = createContext({})

export function RoutesProvider({children}: any) {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [result, setResult] = useState({});
    const [wrongInputs, setWrongInputs] = useState<IErrors>({
        day: {
            whole: undefined,
            invalid: undefined,
            empty: undefined,
        },
        month: {
            invalid: undefined,
            empty: undefined,
        },
        year: {
            invalid: undefined,
            empty: undefined,
        },
    });
    const errors: IErrors = {
        day: {
            whole: undefined,
            invalid: undefined,
            empty: undefined,
        },
        month: {
            invalid: undefined,
            empty: undefined,
        },
        year: {
            invalid: undefined,
            empty: undefined,
        },
    }

    return (
        <GlobalContext.Provider value={{ day, month, year, setDay, setMonth, setYear, result, setResult, errors, wrongInputs, setWrongInputs }}>
            {children}
        </GlobalContext.Provider>
    )
}