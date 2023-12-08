import React  from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return(
        <div>

        {/* NAVBAR */}
        <section>
            <div className="container">
                <div className="flex">
                    <nav className='flex'>
                        <NavLink to='/'><h4>Home</h4></NavLink>
                        <NavLink to='/product'><h4>Product</h4></NavLink>
                        <NavLink to='/signup'><h4>Signup</h4></NavLink>
                        <NavLink to='/login'><h4>Login</h4></NavLink>
                    </nav>
                </div>
            </div>
        </section>
    </div>
)
}

export default Nav