import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { LoginView } from './views/LoginView'
import { CreateAccountView } from './views/CreateAccountView'
import { useEffect } from 'react'
import { BACKEND_URL } from './_constants'
import { NavBar } from './NavBar'

export function AppRouter() {

    const token = localStorage.getItem('token')
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    async function retrieveLoggedInUser() {
        if (token) {
            let response = await fetch(`${BACKEND_URL}/auth/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = await response.json()
            if (!result.error) {
                dispatch({ type: 'LOGIN', user: result.user })
            }
        }
    }

    useEffect(() => {
        retrieveLoggedInUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(currentUser === null && token){
        return null
    }

    return (
        <BrowserRouter>
            { currentUser !== null
                ? (
                    <>
                        <NavBar />
                        <Switch>
                            <Route path="/dashboard" render={() => <Redirect to="/DiscussionBoard" />} />
                        </Switch>

                    </>
                )
                : (
                    <Switch>
                        <Route path="/create-account" component={CreateAccountView} />
                        <Route path="/login" component={LoginView} />
                        <Route path="/" render={() => <Redirect to="/login" />} />
                    </Switch>
                )
            }
        </BrowserRouter>
    )
}