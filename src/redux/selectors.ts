import { createSelector } from '@reduxjs/toolkit'

export const selectFilter = state => state.filter.filter
export const selectTodos = state => state.todos.todoList
export const selectCompletedTodos = state => {
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
