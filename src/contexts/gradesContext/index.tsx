import { createContext, useState } from "react";

interface iGradesProviderValue {
    grade: string;
    setGrade: React.Dispatch<React.SetStateAction<string>>
}

interface iGradesProviderProps {
    children: React.ReactNode;
}

export const GradesContext = createContext({} as iGradesProviderValue)

export const GradesProvider = ({children} : iGradesProviderProps ) => {
    const [grade, setGrade] = useState("")

    return (
        <GradesContext.Provider value={{grade, setGrade}} >
            {children}
        </GradesContext.Provider>
    )
}