import React, { useContext } from 'react'
import { data } from './Context'

function Profile() {
    let{name}=useContext(data)
    return (
        <div>
            <h1>User Name</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default Profile