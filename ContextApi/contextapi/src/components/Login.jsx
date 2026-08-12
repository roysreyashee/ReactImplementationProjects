import React, { useState, useContext } from 'react';
import UserContext from '../context/Usercontext';

// Login component allows a user to enter username and password
// and updates the global user state via context on submit.
export default function Login() {

    // Local state for the controlled input fields
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // Get the setUser function from UserContext to update global user
    const { setUser } = useContext(UserContext)

    // Handle form submission: prevent default behavior and
    // update context with the entered username and password
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    // Render simple login form with controlled inputs
    return (
        <div className='text-center'>
            <h2>Login component</h2>

            {/* Username input (controlled) */}
            <input
                value={username}
                type='text'
                placeholder='username'
                onChange={(e) => setUserName(e.target.value)} />

            {/* Password input (controlled) */}
            <input
                value={password}
                type='text'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} />

            {/* Submit button to trigger handleSubmit */}
            <button className = "cursor-pointer"onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}