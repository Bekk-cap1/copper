import { createContext, useState } from "react";


const Context = createContext()
function Provider ({children}){
    const [value, setValue] = useState('')
    return(
        <Context.Provider value={{value, setValue}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}