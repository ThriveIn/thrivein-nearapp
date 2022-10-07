import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "state";
import { actions } from "state/user";
import { reducers } from "./user.reducers";
import * as Thunks from "./user.thunks";

export const useUserFacade = () => {
  const dispatch = useAppDispatch();

  const userState = useAppSelector(state => state.user);

  // const loadUser = useCallback(() => dispatch(Thunks.loadUser()), [dispatch]);

  // const updateUserAvatar = useCallback(
  //   (AvatarUrl: string) => dispatch(Thunks.updateUserAvatar(AvatarUrl)),
  //   [dispatch]
  // );

  // const updateUserInfo = useCallback(
  //   payload => dispatch(Thunks.updateUserInfo(payload)),
  //   [dispatch]
  // );

  // const updateUserState = useCallback(
  //   payload => dispatch(actions.updateUserState(payload)),
  //   [dispatch]
  // );

  // const updateWalletState = useCallback(
  //   payload => dispatch(actions.updateWalletState(payload)),
  //   [dispatch]
  // );

  // const updateUserName = useCallback(
  //   (Username: string) => dispatch(Thunks.updateUserName(Username)),
  //   [dispatch]
  // );

  const loginUser = useCallback(
    (payload: any) => dispatch(Thunks.loginUser(payload)),
    [dispatch]
  );

  // const logoutUser = useCallback(
  //   () => dispatch(Thunks.logoutUser()),
  //   [dispatch]
  // );

  return {
    userState,
    // loadUser,
    // updateUserState,
    // updateWalletState,
    // updateUserName,
    loginUser,
    // updateUserAvatar,
    // logoutUser,
    // updateUserInfo,
  };
};
