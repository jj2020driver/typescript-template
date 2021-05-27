import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const LogIn = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Box style={{ maxWidth: 600 }}>
          <Link to="/home">Home</Link>
        </Box>
      </Box>
    </Container>
  )
}

export default LogIn
