import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

function Counter() {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Link to="/">Log in</Link>,&nbsp;<Link to="/home">Home</Link>
        <br />
        <br />
        Counter
      </Box>
    </Container>
  )
}

export default Counter
