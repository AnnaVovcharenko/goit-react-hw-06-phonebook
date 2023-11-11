import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { contactReducer } from "./contactsSilce";
import { filterReducer } from "./filterSlice";



const persistConfig = {
    key: 'root',
    storage,
};

const constantReducer = persistReducer(
    persistConfig,
    combineReducers({
        contacts: contactReducer,
        filter: filterReducer,
    })
);
export const store = configureStore({
    reducer: constantReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);