import { PrivateRoute, Signup, Dashboard, Login, ForgotPassword } from './components'
import { Container } from 'react-bootstrap' 
import AuthProvider from './context/AuthContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
		<Container 
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}>
			<div 
				className='w-100'
				style={{ maxWidth: '400px' }}>
					<Router>
						<AuthProvider>
							<Switch>
								<PrivateRoute exact path='/' component={ Dashboard } />
								<Route path='/signup' component={ Signup } />
								<Route path='/login' component={ Login }/>
								<Route path='/forgotpassword' component={ ForgotPassword }/>
							</Switch>
						</AuthProvider>
					</Router>
			</div>
		</Container>
  )
}

export default App;
