import { ITodo } from '../../types'
import { createSlice, isAnyOf, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodos, updateTodoThunk } from './operations'
import { logoutThunk } from '../Auth/operations'

type Init = {
	todos: ITodo[]
	loading: boolean
	error: string
	filter: 'all' | 'active' | 'completed'
	filterStr: string
	currentTodo: string
}

const initialState: Init = {
	todos: [],
	loading: false,
	error: '',
	filter: 'all',
	filterStr: '',
	currentTodo: '',
}

const pending = (state, action) => {
	state.loading = true
	state.error = ''
}

const slice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
		changeFilter: (state, { payload }) => {
			state.filterStr = payload
		},
		setCurrentTodo: (state, { payload }) => {
			state.currentTodo = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.todos = action.payload
			})

			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.todos = []
			})
			.addCase(deleteTodoThunk.fulfilled, (state, action: PayloadAction<any>) => {
				state.todos = state.todos.filter(item => item._id !== action.payload)
			})
			.addCase(updateTodoThunk.fulfilled, (state, action) => {
				const element = state.todos.find(item => item._id === action.payload._id)
				if (element) {
					element.completed = !element.completed
				}
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.loading = false
			})
			.addMatcher(
				isAnyOf(fetchTodos.fulfilled, addTodoThunk.fulfilled, deleteTodoThunk.fulfilled, updateTodoThunk.fulfilled),
				(state, action) => {
					state.loading = false
				}
			)
			.addMatcher(isAnyOf(fetchTodos.pending, deleteTodoThunk.pending), pending)
	},
})

export const { setFilter, changeFilter, setCurrentTodo } = slice.actions
export const todoReducer = slice.reducer
