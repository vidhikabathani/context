import React, { createContext } from 'react';

export let data=createContext()

const Context=(children)=> {
    let clr={
        color:"teal"
    }
    return <data.Provider value={{clr}}>{children}</data.Provider>
}

export default Context