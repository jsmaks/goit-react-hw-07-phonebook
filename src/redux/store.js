/* eslint-disable import/no-anonymous-default-export */
// import storage from "redux-persist/lib/storage";
import {
     FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebook-reducer";
// import logger from "redux-logger";

//-----------------------------------------------------------------
//-----------Для локал стореджа, прослойку добавляем. костыль убираем ошибки------------//
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];
//---------------------------------------------------------------

//-----Добавляем ключ локал сторедж----
// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };
// //-------------------------------------

const store = configureStore({
  reducer: {
    contacts:  phonebookReducer,
  },
  middleware: middleware,
  devToold: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
