import React, { Fragment, useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {

	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const history = useHistory()
	const { signup } = useAuth()

	const [error, setError] = useState('')

	const onHandleSubmit = e => {
		e.preventDefault()
		setError('')
		const password = passwordRef.current.value
		const confirmPassword = passwordConfirmRef.current.value
		if (!validateEqualsPasswords(password, confirmPassword)) {
			return setError('Passwords not Equals!')
		}
		const email = emailRef.current.value
		setSignup(email, password)
	}

	const setSignup = async (e, p) => {
		try {
			const result = await signup(e, p)
			if (result && result.user && Object.keys(result.user).length > 0) {
				history.push('/login')
			} else {
				setError('Firebase Error')
			}
		} catch (e) {
			setError(e.message)
		} 
	}

	const validateEqualsPasswords = (password, confirmed) => {
		return password === confirmed
	}

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign Up</h2>
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
						<Form.Group id='password-confirm'>
							<Form.Label>Password Confirm</Form.Label>
							<Form.Control 
								type='password'
								ref={ passwordConfirmRef }
								required
							/>
						</Form.Group>
						<Button 
							type='submit'
							className='w-100'
						>Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</div>
		</Fragment>
	)
}

export { Signup }