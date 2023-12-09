import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CompetitorReducer from "../store/storeReducers/Competitor";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  competitors: CompetitorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
