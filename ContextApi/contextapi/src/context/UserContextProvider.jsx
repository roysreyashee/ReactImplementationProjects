import React , {useState} from 'react';

import UserContext from './Usercontext';

// UserContextProvider wraps children with UserContext.Provider
// and makes the current user state available to nested components.
const UserContextProvider = ({children}) => {

    // Initialize user state as null, and provide a setter function.
    const [user, setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider