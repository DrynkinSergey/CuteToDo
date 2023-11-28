import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../Auth/operations'
import { setCurrentTodo } from './todoSlice'

export const fetchTodos = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
	try {
		const res = await API.get('/todos')
		return res.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
	try {
		await API.post('/todos', { title: body })
		thunkAPI.dispatch(fetchTodos())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('todos/delete', async (id, { dispatch, rejectWithValue }) => {
	dispatch(setCurrentTodo(id))
	try {
		await API.delete(`/todos/${id}`)
		return id
	} catch (error) {
		dispatch(setCurrentTodo(''))
		return rejectWithValue(error.message)
	}
})

export const updateTodoThunk = createAsyncThunk('todos', async ({ id, body }, { dispatch, rejectWithValue }) => {
	try {
		//@ts-ignore
		const { data } = await API.patch(`/todos/${id}`, body)
		return data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
