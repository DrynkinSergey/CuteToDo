import React from 'react'

export const AddForm = ({ onSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(e.target.addTodo.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input name='addTodo' type='text' />
			<button>Add</button>
		</form>
	)
}
