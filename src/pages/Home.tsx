import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { logout, selectToken, selectUser } from '../redux/reducers/login'

const Home = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)
  const user = useAppSelector(selectUser)

  if (!token) return <Redirect to="/" />

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Link to="/">Log in</Link>,&nbsp;<Link to="/counter">Counter</Link>
        <Box mt={2.5}>
          <Typography variant="h6" gutterBottom>
            <Typography variant="body2" display="inline" gutterBottom>
              Name:&nbsp;
            </Typography>
            {user?.profile.full_name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Typography variant="body2" display="inline" gutterBottom>
              Email:&nbsp;
            </Typography>
            {user?.email}
          </Typography>
          {user?.profile.country && (
            <Typography variant="h6" gutterBottom>
              <Typography variant="body2" display="inline" gutterBottom>
                Country:&nbsp;
              </Typography>
              {user?.profile.country}
            </Typography>
          )}
        </Box>
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
