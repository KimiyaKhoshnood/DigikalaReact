import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHeader = createAsyncThunk(`header/fetch`, async () => {
  try {
    const res = await axios.get(`http://localhost:3004/header`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const HeaderReducer = createSlice({
  name: `header`,
  initialState: {
    header: null,
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.loading = false;
        {
          typeof action.payload == "string"
            ? (state.header == null, (state.error = action.payload))
            : (state.header = action.payload);
        }
      })
      .addCase(fetchHeader.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHeader.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching header!";
      });
  },
});

export default HeaderReducer.reducer;