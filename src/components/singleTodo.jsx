import React from 'react'

export const SingleTodo = ({ id, title, completed, onDelete, onChecked }) => {
	return (
		<li>
			<input
				onChange={() => onChecked(id)}
				type='checkbox'
				checked={completed}
			/>
			<span>{title}</span>
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	)
}
