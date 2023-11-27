import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from './redux/store'
import { selectIsLoggedIn } from './redux/Auth/selectors'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Todo } from './pages/Todo'

export const App = () => {
	const isLoggedIn = useAppSelector(selectIsLoggedIn)
	return !isLoggedIn ? (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<Login />} />
		</Routes>
	) : (
		<Routes>
			<Route path='/todo' element={<Todo />} />
			<Route path='*' element={<Todo />} />
		</Routes>
	)
}
