import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("posts/fetch", async (endpoint) => {
  try {
    const res = await axios.get(`http://localhost:3004/${endpoint}`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const PostReducer = createSlice({
  name: "posts",
  initialState: {
    posts: null,
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        {
          typeof action.payload == "string"
            ? (state.posts == null, (state.error = action.payload))
            : (state.posts = action.payload);
        }
      })
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching posts!";
      });
  },
});

export default PostReducer.reducer;
