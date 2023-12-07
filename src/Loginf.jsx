import React, { useContext, useState } from 'react'
import { data } from './Context'

function Loginf() {
    let[name,setName]=useState("")
    let{upName}=useContext(data)
    return (
        <div>
            <input type="text" placeholder='Enter Your Name' name="" id="" onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>upName(name)}>Login</button>
        </div>
    )
}

export default Loginf