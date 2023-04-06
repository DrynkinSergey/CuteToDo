import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todoList: [],
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action) => {
				state.todoList.push(action.payload)
			},
			prepare: title => ({
				payload: { id: nanoid(), title, completed: false },
			}),
		},
		removeTodo: (state, { payload }) => {
			const item = state.todoList.findIndex(item => item.id === payload)
			state.todoList.splice(item, 1)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todoList.find(item => item.id === payload)
			item.completed = !item.completed
		},
		resetComplete: state => {
			state.todoList.map(item => (item.completed = false))
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { addTodo, removeTodo, toggleTodo, resetComplete } =
	todoSlice.actions
