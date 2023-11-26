import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../redux/store'
import { loginThunk } from '../redux/Auth/operations'

export const Login = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useAppDispatch()
	const submit = data => {
		//@ts-ignore
		dispatch(loginThunk(data))
	}
	return (
		<form onSubmit={handleSubmit(submit)}>
			<input {...register('email')} />
			<input {...register('password')} />
			<button>Login</button>
		</form>
	)
}
