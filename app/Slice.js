import { createSlice } from "@reduxjs/toolkit";

export const AllDetailsSlice = createSlice({
    name: 'allDetail',
    initialState: {
        value: [],
        index: -1
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        removeUser: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        changeIndexTo: (state, action) => {
            state.index = action.payload
        },
        updateUser: (state, action) => {
            state.value.splice(action.payload.index, 1, action.payload)
        }
    }
})

export const { addUser, removeUser, changeIndexTo, updateUser } = AllDetailsSlice.actions;

export default AllDetailsSlice.reducer;