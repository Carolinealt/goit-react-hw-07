import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const state = {
  contacts: {
    items: [],
  },

  filters: {
    name: "",
  },
};
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ['items']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
