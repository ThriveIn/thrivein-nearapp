import { AnyAction } from "redux";
import { initialState, IUserState } from "state/user";

export const reducers = {
  updateUserState(state: IUserState, action: any) {
    return { ...state, ...action.payload };
  },
};

// const updateUserAvatar = {
//   pending: (state: IUserState, action: AnyAction): void => {
//     console.log();
//   },
//   fulfilled: (state: IUserState, action: AnyAction): IUserState => {
//     return {
//       ...state,
//       OnboardingStage: "OnboardingAvatarAdded",
//       AvatarUrl: action.meta.arg,
//     };
//   },
//   rejected: (state: IUserState, action: AnyAction): void => {
//     console.log();
//   },
// };

// const loadUser = {
//   pending: (state: IUserState, action: AnyAction): void => {
//     console.log();
//   },
//   fulfilled: (state: IUserState, action: AnyAction): IUserState => {
//     // TODO: Filter out wallets that aren't verified
//     return { ...state, ...action.payload.data.user, isLoggedIn: true };
//   },
//   rejected: (state: IUserState, action: AnyAction): IUserState => {
//     return initialState;
//   },
// };

// const updateUserName = {
//   pending: (state: IUserState, action: AnyAction): IUserState => {
//     return { ...state, loading: true, error: "" };
//   },
//   fulfilled: (state: IUserState, action: AnyAction): IUserState => {
//     // If part of onboarding process, progress the OnboardingStage
//     if (state.OnboardingStage === "OnboardingInitial") {
//       return {
//         ...state,
//         error: "",
//         Username: action.meta.arg,
//         loading: false,
//         OnboardingStage: "OnboardingUsernameAdded",
//       };
//     }
//     // If it's just a username update, then don't touch OnboardingStage
//     return {
//       ...state,
//       Username: action.meta.arg,
//     };
//   },
//   rejected: (state: IUserState, action: AnyAction): IUserState => {
//     return {
//       ...state,
//       error: action.error ? action.error.message : "",
//       loading: false,
//     };
//   },
// };

// const updateUserInfo = {
//   pending: (state: IUserState, action: AnyAction): IUserState => {
//     return { ...state, loading: true, error: "" };
//   },
//   fulfilled: (state: IUserState, action: AnyAction): IUserState => {
//     return {
//       ...state,
//       error: "",
//       loading: false,
//       ...action.meta.arg,
//     };
//   },
//   rejected: (state: IUserState, action: AnyAction): IUserState => {
//     return {
//       ...state,
//       error: action.error ? action.error.message : "",
//       loading: false,
//     };
//   },
// };

const loginUser = {
  pending: (state: IUserState, action: AnyAction): IUserState => {
    return { ...state, loading: true };
  },
  fulfilled: (state: IUserState, action: AnyAction): IUserState => {
    console.log({ action });
    return {
      ...state,
      isLoggedIn: true,
      loading: false,
      authToken: action.payload.data.accessToken,
      email: action.meta.arg.email,
    };
  },
  rejected: (state: IUserState, action: AnyAction): IUserState => {
    console.log({ action });
    return {
      ...state,
      // error: action.error ? action.error.message : "",
      isLoggedIn: false,
      loading: false,
      error: action?.error?.message,
    };
  },
};

// const logoutUser = {
//   pending: (state: IUserState, action: AnyAction): IUserState => {
//     return { ...state, loading: true };
//   },
//   fulfilled: (state: IUserState, action: AnyAction): IUserState => {
//     return initialState;
//   },
//   rejected: (state: IUserState, action: AnyAction): void => {
//     console.log();
//   },
// };

export const extraReducers = {
  // updateUserAvatar,
  // loadUser,
  // updateUserName,
  loginUser,
  // logoutUser,
  // updateUserInfo,
};
