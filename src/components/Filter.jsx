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
		<li className='list-none  py-4   text-white/40 flex justify-between px-8 items-center'>
			{completedTodos === 0 ? (
				<span>All is complete!</span>
			) : (
				<span>{completedTodos} items left</span>
			)}
			<div className='flex gap-4 '>
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
			<span onClick={() => dispatch(resetComplete())} className={classes}>
				Clear Completed
			</span>
		</li>
	)
}
