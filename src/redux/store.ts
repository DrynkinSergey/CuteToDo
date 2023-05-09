import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { filterReducer } from './filterSlice'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const persistConfig = {
	key: 'todos',
	version: 1,
	storage,
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
	reducer: { todos: persistedReducer, filter: filterReducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => RootDispatch = useDispatch
