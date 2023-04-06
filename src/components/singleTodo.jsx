import React from 'react'

export const SingleTodo = ({ id, title, completed, onDelete, onChecked }) => {
	return (
		<li className='bg-black/80 list-none  py-4  border-b-white/30 border-b-[1px] text-white/80 grid  grid-cols-todo items-center'>
			<input
				className=''
				onChange={() => onChecked(id)}
				type='checkbox'
				checked={completed}
			/>
			<span>{title}</span>
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	)
}
