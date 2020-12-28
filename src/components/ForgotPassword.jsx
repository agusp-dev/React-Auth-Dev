import React, { Fragment, useState, useRef } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgotPassword = () => {

	const emailRef = useRef()
	const { resetPassword } = useAuth()

	const [message, setMessage] = useState('')
	const [error, setError] = useState('')

	const onHandleSubmit = e => {
		e.preventDefault()
		setError('')
		setMessage('')
		setResetPassword()
	}

	const setResetPassword = async () => {
		const email = emailRef.current.value
		try {
			await resetPassword(email)
			setMessage('Please, check your inbox!')
		}	catch (e) {
			setError(e.message)
		}	
	}

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Password Reset</h2>
					{error && (
						<Alert variant='danger'>{ error }</Alert>
					)}
					{message && (
						<Alert variant='info'>{ message }</Alert>
					)}
					<Form onSubmit={ onHandleSubmit }>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control 
								type='email'
								ref={ emailRef }
								required
							/>
						</Form.Group>
						<Button 
							type='submit'
							className='w-100'
						>Reset Password
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/login'>Sign In</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</Fragment>
	)
}

export { ForgotPassword }