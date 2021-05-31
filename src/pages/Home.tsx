import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { logout, selectToken } from '../redux/reducers/login'

const Home = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)

  if (!token) return <Redirect to="/" />

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Link to="/">Log in</Link>,&nbsp;<Link to="/counter">Counter</Link>
        <Box mt={3.5}>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(logout())
            }}
          >
            Log out
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
