import React, { useEffect } from 'react'
import { TodoList } from './components/todoList'
import { AddForm } from './components/AddForm'
//@ts-ignore
import bg from './assets/images/bg-desktop-dark.jpg'
//@ts-ignore
import bgMobile from './assets/images/bg-mobile-dark.jpg'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './redux/todos/operations'
import { loginThunk } from './redux/Auth/operations'
import { useAppSelector } from './redux/store'
import { selectIsLoggedIn } from './redux/Auth/selectors'
import { Login } from './components/Login'

export const App = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useAppSelector(selectIsLoggedIn)
	useEffect(() => {
		//@ts-ignore
		isLoggedIn && dispatch(fetchTodos())
	}, [dispatch])
	if (!isLoggedIn) {
		return <Login />
	}
	return (
		<div className=' bg-darkVeryBG min-h-screen px-6 text-lg'>
			<img className='fixed hidden md:block w-full h-1/2 object-cover left-0 z-1' src={bg} alt='bgImage' />
			<img className='fixed md:hidden block w-full h-1/2 object-cover left-0 z-1' src={bgMobile} alt='bgImage' />
			<div className='relative z-2 flex w-full  sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/4 flex-col mx-auto py-40 '>
				<span className='font-extrabold mb-8 text-2xl text-white/80'>TODO:</span>
				<AddForm />
				<TodoList />
			</div>
		</div>
	)
}
