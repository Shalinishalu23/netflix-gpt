import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovies: (state, action) => {
      const { type, data } = action.payload;
      state[type] = data;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;