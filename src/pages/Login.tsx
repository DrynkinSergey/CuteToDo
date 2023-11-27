import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../redux/store'
import { loginThunk } from '../redux/Auth/operations'
import { Link } from 'react-router-dom'
export const Login = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useAppDispatch()
	const submit = data => {
		//@ts-ignore
		dispatch(loginThunk(data))
	}
	return (
		<div className='bg-darkMain min-h-screen grid place-content-center'>
			<form className='flex flex-col gap-4 px-4 py-4 border-2 border-white rounded-md ' onSubmit={handleSubmit(submit)}>
				<input placeholder='email...' className='border-2 border-black p-2' {...register('email')} />
				<input
					placeholder='password...'
					className='border-2 border-black p-2'
					{...register('password')}
					type='password'
				/>
				<button className='border-2 bg-white hover:bg-blue-700 hover:text-white transition border-black p-2'>
					Login
				</button>
				<span className='text-white'>
					You don't have account?{' '}
					<Link className='underline text-teal-600' to='/register'>
						Sign UP!
					</Link>
				</span>
			</form>
		</div>
	)
}
