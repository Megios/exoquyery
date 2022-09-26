import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk(
  'users/fetch',
  async () => {
    const response = await fetch('http://localhost:3004/users')
    const data = await response.json()
    return data
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: {
    entities: []
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.entities = action.payload
    }
  }
})

export { userSlice, fetchUsers };