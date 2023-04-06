import React, { useEffect, useState } from 'react'
import { SingleTodo } from './singleTodo'
import axios from 'axios'

export const TodoList = ({ data, onChecked, onDelete }) => {
	return (
		<div>
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
		</div>
	)
}
