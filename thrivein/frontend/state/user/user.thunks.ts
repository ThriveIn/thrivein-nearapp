import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticatedAxios, PublicAxios } from "api/Axios";

// export const loadUser = createAsyncThunk("user/loadUser", async () =>
//   AuthenticatedAxios.get("/api/user")
// );

// export const updateUserAvatar = createAsyncThunk(
//   "user/updateUserProfile",
//   async (AvatarUrl: string) =>
//     AuthenticatedAxios.post("/api/user/setAvatarUrl", { AvatarUrl })
// );

// export const updateUserName = createAsyncThunk(
//   "user/updateUserName",
//   async (Username: string) =>
//     AuthenticatedAxios.post("/api/user/setUsername", { Username })
// );

// export const updateUserInfo = createAsyncThunk(
//   "user/updateUserInfo",
//   async (payload: any) => AuthenticatedAxios.post("/api/user", payload)
// );

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await PublicAxios.post("/api/auth/signin", {
        email,
        password,
      });
      return res;
    } catch (err) {
      console.log({ err });
      throw new Error(err?.message);
    }
  }
);

// export const logoutUser = createAsyncThunk("user/logout", async () => {
//   return AuthenticatedAxios.get(`/auth/logout`);
// });
