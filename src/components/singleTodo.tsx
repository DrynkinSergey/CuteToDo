import React from 'react'
import { MdDelete } from 'react-icons/md'

//@ts-ignore
import icon from './../assets/images/icon-check.svg'
import { useAppDispatch } from '../redux/store'
import { ITodo } from '../types'
import { deleteTodoThunk, updateTodoThunk } from '../redux/todos/operations'
export const SingleTodo: React.FC<ITodo> = ({ _id: id, title, completed }) => {
	const dispatch = useAppDispatch()
	const stylesActive = completed ? 'bg-gradient-to-br from-checkboxFrom to-checkboxTo' : ''
	return (
		<li className='group  list-none cursor-pointer  py-4  border-b-white/10 border-b-[1px] text-white/80 grid   grid-cols-todo items-center'>
			<label className='relative inline-block cursor-pointer'>
				<input
					type='checkbox'
					className='absolute opacity-0 cursor-pointer h-0 w-0'
					checked={completed}
					//@ts-ignore
					onChange={() => dispatch(updateTodoThunk({ id, body: { completed: !completed } }))}
				/>
				<span
					className={`${stylesActive} absolute h-5 w-5 flex items-center justify-center  left-4 top-[-10px] rounded-full border-white/20 border-[1px]`}
				>
					{completed && <img src={icon} alt='' />}
				</span>
			</label>
			<span className={completed ? 'line-through text-white/20 transition-all' : 'transition-all'}>{title}</span>
			<button
				className=' transition-all hidden text-white/20 hover:text-red-500  group-hover:block mx-auto'
				//@ts-ignore
				onClick={() => dispatch(deleteTodoThunk(id))}
			>
				<MdDelete />
			</button>
		</li>
	)
}
