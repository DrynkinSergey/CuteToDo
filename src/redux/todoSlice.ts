import { ITodo } from '../types'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

type Init = {
	todoList: ITodo[]
}

const initialState: Init = {
	todoList: [],
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<ITodo>) => {
				state.todoList.push(action.payload)
			},
			prepare: (title: string) => ({
				payload: { id: nanoid(), title, completed: false },
			}),
		},
		removeTodo: (state, { payload }: PayloadAction<string>) => {
			const item = state.todoList.findIndex(item => item.id === payload)
			state.todoList.splice(item, 1)
		},
		toggleTodo: (state, { payload }: PayloadAction<string>) => {
			const item = state.todoList.find(item => item.id === payload)
			if (item) item.completed = !item?.completed
		},
		resetComplete: (state, { payload }) => {
			state.todoList.map(item => (item.completed = false))
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { addTodo, removeTodo, toggleTodo, resetComplete } =
	todoSlice.actions
