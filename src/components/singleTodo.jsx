import React from 'react'

export const SingleTodo = ({ id, title, completed, onDelete, onChecked }) => {
	return (
		<li className='bg-black/80 list-none  py-4  border-b-white/30 border-b-[1px] text-white/80 grid   grid-cols-todo items-center'>
			<input
				onChange={() => onChecked(id)}
				type='checkbox'
				checked={completed}
			/>
			<span>{title}</span>
			<button
				className='border-[1px] px-2 py-1 transition-all hover:bg-white/50 hover:text-black/80 mx-auto'
				onClick={() => onDelete(id)}
			>
				Delete
			</button>
		</li>
	)
}
