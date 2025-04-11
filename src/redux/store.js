import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReduser = persistReducer(contactsPersistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: persistedContactsReduser,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
