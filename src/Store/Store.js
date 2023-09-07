import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterinitialState = {counter:0,toggle:false};

const counterSlice = createSlice({
    name:'counter',
    initialState: counterinitialState,
    reducers:{
        incriment(state,action){
            state.counter = state.counter + action.payload;
        },
        decriment(state) {
            state.counter--;
        },
        toggler (state)  {
            state.toggle = !state.toggle
        }
    }

})

// const counterReducer = (state = initialState,action) => {
//     if(action.type === 'inc'){
//         return {counter : state.counter + 1}
//     }

//     if(action.type === 'dec'){
//         return {counter : state.counter - 1}
//     }

//     if(action.type === 'toggle'){
//         return {
//             counter:state.counter,
//             toggle: !state.toggle,
//         }
//     }

//     return state;
// }

const authInitialState = {
    isAuthenticated :false,
}

const  authSlice = createSlice({
    name:'Authentication',
    initialState:authInitialState,
    reducers:{
        login(state)  {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})
const store = configureStore({
    reducer:{counter :counterSlice.reducer , auth:authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;