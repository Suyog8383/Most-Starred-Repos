import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  profiles: [],
};

const ProfileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    getProfile: (state) => {
      state.isFetching = true;
    },
    getProfileSuccess: (state, action) => {
      state.isFetching = false;
      state.profiles = action.payload.result.items;
      console.log("@SN slice", state.profiles);
    },
    getProfileFailed: (state) => {
      state.isFetching = false;
      state.profiles = [];
    },
  },
});

export const { getProfile, getProfileSuccess, getProfileFailed } =
  ProfileSlice.actions;

export default ProfileSlice.reducer;
