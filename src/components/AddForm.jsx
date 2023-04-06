import React from 'react'

export const AddForm = ({ onSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault()
		onSubmit(e.target.addTodo.value)
		e.target.reset()
		e.target.focus()
	}
	return (
		<form
			className=' flex justify-center w-full mb-8 font-josefin bg-black/80 list-none px-4 py-4 rounded-md border-b-white/30 border-b-[1px] text-white/80'
			onSubmit={handleSubmit}
		>
			<input
				placeholder='Add some todo....'
				className=' px-4  w-2/3 rounded-md mr-4 text-black'
				name='addTodo'
				type='text'
			/>
			<button className='border-[1px] px-4 rounded-md'>+</button>
		</form>
	)
}
