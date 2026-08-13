import { useState } from 'react'
// import './app.css'
import AddToDo from './components/AddTodo'
import ToDo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >Redux Toolkit Learning</div>
    <AddToDo/>
    <ToDo/>
    </>
  )
}

export default App
