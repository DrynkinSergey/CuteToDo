import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCompletedTodos, selectFilter } from '../redux/selectors'
import { setFilter } from '../redux/filterSlice'
import { resetComplete } from '../redux/todoSlice'

export const Filter = () => {
	const filter = useSelector(selectFilter)
	const completedTodos = useSelector(selectCompletedTodos)
	const dispatch = useDispatch()
	const setClasses = type =>
		filter === type ? `${classes} text-blue-600` : classes
	const classes = 'hover:text-white cursor-pointer'
	return (
		<li className='list-none  py-4 flex-col md:flex-row  text-white/40 flex justify-between px-8 items-center'>
			{completedTodos === 0 ? (
				<span className='md:order-1 order-1'>All is complete!</span>
			) : (
				<span className='md:order-1 order-1'>
					<span className='text-blue-500'>{completedTodos}</span> items left
				</span>
			)}
			<div className='flex gap-4 order-3 mt-4 md:mt-0  md:order-2'>
				<span
					onClick={() => dispatch(setFilter('all'))}
					className={setClasses('all')}
				>
					All
				</span>
				<span
					onClick={() => dispatch(setFilter('active'))}
					className={setClasses('active')}
				>
					Active
				</span>
				<span
					onClick={() => dispatch(setFilter('completed'))}
					className={setClasses('completed')}
				>
					Completed
				</span>
			</div>
			<span
				onClick={() => dispatch(resetComplete(''))}
				className={`${classes} order-2 sm:order-2`}
			>
				Clear Completed
			</span>
		</li>
	)
}
