import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{},
  clientList: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({ 
  name: 'clients',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCredits:(state,action)=>{
      state.user.credits=action.payload
    }
  },
});

export const { setUsers,setCredits, setClientsList, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
