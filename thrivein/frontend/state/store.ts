import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducer
import { appReducer } from "./reducer";

const store = configureStore({
  reducer: appReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "user/loadUser/fulfilled",
        "user/login/fulfilled",
        "user/updateUserName/fulfilled",
        "user/updateUserProfile/fulfilled",
        "user/updateUserInfo/fulfilled",
        "channel/loadMessages/fulfilled",
        "profiles/loadUser/fulfilled",
        "profiles/batchLoadUsers/fulfilled",
        "profiles/searchUsers/fulfilled",
        "community/loadCommunity/fulfilled",
        "community/loadCommunityMembers/fulfilled",
        "community/listAllCommunities/fulfilled",
        "channel/getDMs/fulfilled",
        "channel/getMessageFeeds/fulfilled",
        "channel/markChannelSeen/fulfilled",
        "websocket/startConnecting",
        "websocket/disconnected",
        "websocket/connectionEstablished",
        "websocket/storeConnectionTimer",
        "websocket/refreshTimer",
        "snackbar/toggleSnackbarOpen",
        "picker/openPicker",
        "messaging/addReaction",
        "messaging/editMessage",
        "channel/getActiveUsers/fulfilled",
      ],
      ignoredPaths: [
        "payload.config.adapter",
        "picker.message.created",
        "payload.message.created",
        "picker.message.threadMessages.0.created",
        "websocket.refreshTimer",
      ],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
