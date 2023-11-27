import React from 'react'
import { useAppDispatch } from '../redux/store'
import { addTodoThunk } from '../redux/todos/operations'
export const AddForm = () => {
	const dispatch = useAppDispatch()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const target = e.target as HTMLFormElement

		e.preventDefault()
		if (target.addTodo.value.trim()) {
			//@ts-ignore
			dispatch(addTodoThunk(target.addTodo.value.trim()))
			target.reset()
			target.focus()
		}
	}
	return (
		<form
			className='shadow-mainDark flex justify-center w-full mb-8 font-josefin bg-darkMain list-none px-4 py-4 rounded-md border-b-white/30  text-white/80'
			onSubmit={handleSubmit}
		>
			<input
				placeholder='Add some todo....'
				className=' px-4 outline-none  w-2/3 rounded-md mr-4 text-black'
				name='addTodo'
				autoComplete='off'
				type='text'
			/>
			<button className='border-[1px] border-white/10 px-4 rounded-md'>+</button>
		</form>
	)
}
