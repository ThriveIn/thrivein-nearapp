import { createSlice } from "@reduxjs/toolkit";
import * as Thunks from "./user.thunks";
import { reducers, extraReducers } from "./user.reducers";

export type IUserState = {
  email: string;
  authToken: string;
  loading: boolean;
  isLoggedIn: boolean;
  error: string;
};

export const initialState: IUserState = {
  email: "",
  authToken: "",
  loading: false,
  isLoggedIn: false,
  error: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers,
  extraReducers: builder => {
    builder
      // .addCase(Thunks.updateUserAvatar.pending, (state, action) =>
      //   extraReducers.updateUserAvatar.pending(state, action)
      // )
      // .addCase(Thunks.updateUserAvatar.fulfilled, (state, action) =>
      //   extraReducers.updateUserAvatar.fulfilled(state, action)
      // )
      // .addCase(Thunks.updateUserAvatar.rejected, (state, action) =>
      //   extraReducers.updateUserAvatar.rejected(state, action)
      // )
      // .addCase(Thunks.loadUser.pending, (state, action) =>
      //   extraReducers.loadUser.pending(state, action)
      // )
      // .addCase(Thunks.loadUser.fulfilled, (state, action) =>
      //   extraReducers.loadUser.fulfilled(state, action)
      // )
      // .addCase(Thunks.loadUser.rejected, (state, action) =>
      //   extraReducers.loadUser.rejected(state, action)
      // )
      // .addCase(Thunks.updateUserName.pending, (state, action) =>
      //   extraReducers.updateUserName.pending(state, action)
      // )
      // .addCase(Thunks.updateUserName.fulfilled, (state, action) =>
      //   extraReducers.updateUserName.fulfilled(state, action)
      // )
      // .addCase(Thunks.updateUserName.rejected, (state, action) =>
      //   extraReducers.updateUserName.rejected(state, action)
      // )
      // .addCase(Thunks.updateUserInfo.pending, (state, action) =>
      //   extraReducers.updateUserInfo.pending(state, action)
      // )
      // .addCase(Thunks.updateUserInfo.fulfilled, (state, action) =>
      //   extraReducers.updateUserInfo.fulfilled(state, action)
      // )
      // .addCase(Thunks.updateUserInfo.rejected, (state, action) =>
      //   extraReducers.updateUserInfo.rejected(state, action)
      // )
      .addCase(Thunks.loginUser.pending, (state, action) =>
        extraReducers.loginUser.pending(state, action)
      )
      .addCase(Thunks.loginUser.fulfilled, (state, action) =>
        extraReducers.loginUser.fulfilled(state, action)
      )
      .addCase(Thunks.loginUser.rejected, (state, action) =>
        extraReducers.loginUser.rejected(state, action)
      );
    // .addCase(Thunks.logoutUser.pending, (state, action) =>
    //   extraReducers.logoutUser.pending(state, action)
    // )
    // .addCase(Thunks.logoutUser.fulfilled, (state, action) =>
    //   extraReducers.logoutUser.fulfilled(state, action)
    // )
    // .addCase(Thunks.logoutUser.rejected, (state, action) =>
    //   extraReducers.logoutUser.rejected(state, action)
    // );
  },
});

export const { reducer } = slice;

export const actions = {
  updateUserState: slice.actions.updateUserState,
};
