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
					<ViewData />
					{globalData?.length > 0 && <Filter />}
				</ul>
			)}
		</div>
	)
}
