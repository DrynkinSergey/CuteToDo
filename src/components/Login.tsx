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
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(submit)}>
			<input placeholder='email' className='border-2 border-black p-2' {...register('email')} />
			<input placeholder='password' className='border-2 border-black p-2' {...register('password')} />
			<button className='border-2 border-black p-2'>Login</button>
		</form>
	)
}
