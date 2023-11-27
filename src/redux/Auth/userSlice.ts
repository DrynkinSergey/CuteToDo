import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const slice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: '',
		error: '',
		isLoggedIn: false,
		isRefreshing: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.token = action.payload.token
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(refreshThunk.pending, (state, action) => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, (state, action) => {
				state.isRefreshing = false
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = ''
				state.isLoggedIn = false
			})
	},
})

export const userReducer = slice.reducer
