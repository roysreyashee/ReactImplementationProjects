import { useState } from 'react'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
   <UserContextProvider>
   <div className=' justify-center text-center font-bold'>
    Form

     <Login/>
   <Profile/>
   </div>
  
   </UserContextProvider>
  )
}

export default App
