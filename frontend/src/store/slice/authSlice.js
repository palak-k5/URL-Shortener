
//done till redux setup
import  {createSlice} from '@reduxjs/toolkit';

const initialState={
    user:null,
    isAuthenticated:false,
    
};

const authSlice=createSlice(
    {
        name:'auth',
        initialState,
        reducers:{
            login:(state,action)=>{
                state.user=action.payload;
                state.isAuthenticated=true;
            }
            ,
            logout: (state)=>{
                state.user=null.action;
                state.isAuthenticated=false;
            }
        },
    }
)

export const {clearError}=authSlice.actions;
export default authSlice.reducer;