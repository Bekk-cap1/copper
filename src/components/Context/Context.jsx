import { createContext, useState } from "react";


const Context = createContext()
function Provider ({children}){
    const [value, setValue] = useState('')
    const [catal, setCatal] = useState({})
    const [seter, setSeter] = useState({})
    const [id, setId] = useState(0)
    const [userrr, setUserrr] = useState()
    return(
        <Context.Provider value={{value, setValue, catal, setCatal, seter, setSeter, id, setId, userrr, setUserrr}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}