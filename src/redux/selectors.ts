import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

export const selectFilter = (state: RootState) => state.filter.filter
export const selectTodos = (state: RootState) => state.todos.todoList
export const selectCompletedTodos = (state: RootState) => {
	const todos = selectTodos(state)
	return todos.reduce((acc, todo) => (!todo.completed ? (acc += 1) : acc), 0)
}
export const selectFilteredData = createSelector(
	[selectTodos, selectFilter],
	(todos, filter) => {
		switch (filter) {
			case 'all': {
				return todos
			}
			case 'active': {
				return todos.filter(todo => !todo.completed)
			}
			case 'completed': {
				return todos.filter(todo => todo.completed)
			}
			default:
				return todos
		}
	}
)
