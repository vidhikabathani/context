import React, { createContext, useState } from 'react';

export let data=createContext()

const Context=({children})=> {
    let[name,setName]=useState("")

    const upName=(val)=>{
        setName(val);
    }
    return <data.Provider value={{name,upName}}>{children}</data.Provider>
}

export default Context