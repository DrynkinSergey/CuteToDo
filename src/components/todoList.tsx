import React from 'react'
import { SingleTodo } from './singleTodo'
import { useSelector } from 'react-redux'
import { Filter } from './Filter'
import { selectFilteredData, selectLoading, selectTodos } from '../redux/selectors'
import { useAppSelector } from '../redux/store'
import { FetchLoader } from './FetchLoader'

export const TodoList = () => {
	const data = useAppSelector(selectFilteredData)
	const globalData = useSelector(selectTodos)
	const loading = useAppSelector(selectLoading)
	const ViewData = () => (
		<>
			{data?.map(todo => (
				<SingleTodo key={todo._id} {...todo} />
			))}
		</>
	)

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			{loading && !globalData.length ? (
				<FetchLoader />
			) : (
				<ul className='rounded-md overflow-hidden'>
					{globalData?.length ? (
						<ViewData />
					) : (
						<h2 className='py-4 px-2 text-center font-bold'>
							You don't have any todo! <span className='text-violet-600 '>Let's create</span> some!
						</h2>
					)}
					{globalData?.length > 0 && <Filter />}
				</ul>
			)}
		</div>
	)
}
