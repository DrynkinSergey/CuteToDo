import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const API = axios.create({
	baseURL: 'https://cute-todo-api-rwtq.onrender.com/api/',
})

const setToken = token => {
	API.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	API.defaults.headers.common.Authorization = ``
}

export const registerThunk = createAsyncThunk('auth/reg', async (credentials, thunkAPI) => {
	try {
		const { data } = await API.post('auth/register', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const { data } = await API.post('auth/login', credentials)

		console.log(data)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		const { data } = await API.post('auth/logout')
		clearToken()
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const refreshThunk = createAsyncThunk('auth/current', async (_, thunkAPI) => {
	const savedToken = thunkAPI.getState().user.token
	if (!savedToken) {
		return thunkAPI.rejectWithValue('Token is not exist')
	}
	try {
		setToken(savedToken)
		const { data } = await API.get('auth/current')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
