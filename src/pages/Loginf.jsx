import React, { useState } from 'react'

function Loginf() {
    let [username, setUsernsme] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [user, setUser] = useState({})

    const handleSubmit=()=>{}

    return (
        <div>
            <form>
                <input type="text" placeholder='Enter Username' value={username} />
                <input type="email" placeholder='Enter Email' value={email} />
                <input type="text" placeholder='Enter Password' value={password} />
                <input type="submit" onClick={handleSubmit} name="" id="" />
            </form>
        </div>
    )
}

export default Loginf