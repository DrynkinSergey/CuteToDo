import React, { useEffect, useState } from 'react'
import { SingleTodo } from './singleTodo'
import axios from 'axios'

export const TodoList = ({ data, onChecked, onDelete }) => {
	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				{data.map(todo => {
					return (
						<SingleTodo
							onDelete={onDelete}
							onChecked={onChecked}
							key={todo.id}
							{...todo}
						/>
					)
				})}
				<li className='list-none  py-4   text-white/40 flex justify-between px-8 items-center'>
					<span>5 items left</span>
					<div className='flex gap-4 '>
						<span className='hover:text-white cursor-pointer text-blue-500'>
							All
						</span>
						<span className='hover:text-white cursor-pointer'>Active</span>
						<span className='hover:text-white cursor-pointer'>Completed</span>
					</div>
					<span className='hover:text-white cursor-pointer'>
						Clear Completed
					</span>
				</li>
			</ul>
		</div>
	)
}
