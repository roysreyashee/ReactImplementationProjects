import React, {useContext} from 'react';

import UserContext from '../context/Usercontext';

export default function Profile(){

    const {user} = useContext(UserContext)
    if(!user) return <div className='text-center'>Please login</div>
    return(
        <div className='text-center'>
            Welcome {user.username}
        </div>
    )
}