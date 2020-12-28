import React, { Fragment, useState, useRef } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {

	const emailRef = useRef()
	const passwordRef = useRef()
	const history = useHistory()
	const { login } = useAuth()

	const [error, setError] = useState('')

	const onHandleSubmit = e => {
		e.preventDefault()
		setError('')
		const email = emailRef.current.value
		const password = passwordRef.current.value
		setLogin(email, password)
	}

	const setLogin = async (e, p) => {
		try {
			const result = await login(e, p)
			if (result && result.user && Object.keys(result.user).length > 0) {
				history.push('/')
			} else {
				setError('Firebase Error')
			}
		} catch (e) {
			setError(e.message)
		} 
	}

	

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign In</h2>
					{error && (
						<Alert variant='danger'>{ error }</Alert>
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
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control 
								type='password'
								ref={ passwordRef }
								required
							/>
						</Form.Group>
						<Button 
							type='submit'
							className='w-100'
						>Sign In
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/forgotpassword'>Forgot Password</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/signup'>Sign Up</Link>
			</div>
		</Fragment>
	)
}

export { Login }