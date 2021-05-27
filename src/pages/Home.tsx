import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Link to="/">Log In</Link>
      </Box>
    </Container>
  )
}

export default Home
