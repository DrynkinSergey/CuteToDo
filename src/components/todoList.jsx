import React, { useEffect, useState } from 'react'
import { SingleTodo } from './singleTodo'
import axios from 'axios'

export const TodoList = ({ data, onChecked, onDelete }) => {
	return (
		<div className='font-josefin bg-darkMain'>
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
			</ul>
		</div>
	)
}
