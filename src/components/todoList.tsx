import React, { useEffect, useState } from 'react'
import { SingleTodo } from './singleTodo'
import { useSelector } from 'react-redux'
import { Filter } from './Filter'
import { selectFilteredData, selectTodos } from '../redux/selectors'

export const TodoList = () => {
	const data = useSelector(selectFilteredData)
	const globalData = useSelector(selectTodos)
	const ViewData = () => (
		<>
			{data?.map(todo => (
				<SingleTodo key={todo._id} {...todo} />
			))}
		</>
	)

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
				{globalData?.length > 0 && <Filter />}
			</ul>
		</div>
	)
}
