import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodoList } from './components/todoList'
import { AddForm } from './components/AddForm'

export const App = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => setData(res.data))
	}, [])
	const onDelete = id => {
		setData(data.filter(todo => todo.id !== id))
	}
	const onChecked = id => {
		const item = data.find(todo => todo.id === id)
		item.completed = !item.completed
		setData([...data])
	}

	const onSubmit = title => {
		setData([...data, { title, id: new Date(), completed: false }])
	}
	return (
		<div className='bg-black/60 min-h-screen px-6'>
			<div className='flex w-2/3 md:w-1/2 flex-col mx-auto py-4 '>
				<span className='font-extrabold mb-8 text-2xl text-white/80'>
					TODO:
				</span>
				<AddForm onSubmit={onSubmit} />
				<TodoList data={data} onDelete={onDelete} onChecked={onChecked} />
			</div>
		</div>
	)
}
