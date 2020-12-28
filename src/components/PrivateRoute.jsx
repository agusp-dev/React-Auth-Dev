import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth()
	return (
		<Route
		{...rest}
		render={ props => {
			return currentUser && currentUser.email 
				? <Component {...props} /> 
				: <Redirect to='/login'/>
		}}
		>
		</Route>
	)
}

export { PrivateRoute }