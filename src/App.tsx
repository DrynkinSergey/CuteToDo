import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux/store'
import { selectIsLoggedIn } from './redux/Auth/selectors'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Todo } from './pages/Todo'
import { refreshThunk } from './redux/Auth/operations'

export const App = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [])
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
