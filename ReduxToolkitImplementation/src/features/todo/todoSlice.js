import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    toDos : [{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // reducers: contains functions that define how the state should be updated based on actions
    // each reducer function receives the current state and an action, and returns the updated state
    reducers: {
        addToDo: (state, action) => {
                const toDo = {
                    id: nanoid(),
                    text: action.payload
                }
                // push the new toDo object to the toDos array in state
                state.toDos.push(toDo)
        },
        removeToDo: (state, action) => { //state : current state passed and action: whatever action needs to be performed

            state.toDos = state.toDos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addToDo, removeToDo} = todoSlice.actions

export default todoSlice.reducer //exports the list of reducers