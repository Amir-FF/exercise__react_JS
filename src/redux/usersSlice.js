import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (num) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/ionohniusers?_limit=${num}`,
  );
  if (!res.ok) throw new Error(`Not Found: ${res.status}`);
  return await res.json();
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { add } = usersSlice.actions;

export default usersSlice.reducer;
