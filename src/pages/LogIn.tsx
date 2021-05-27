import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      console.log(values)
    },
  })

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Box style={{ maxWidth: 550 }}>
          <Link to="/home">Home</Link>, <Link to="/counter">Counter</Link>
          <Box mt={2.5}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                label="Email address"
                fullWidth
                margin="dense"
              />
              <TextField
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                label="Password"
                fullWidth
                margin="dense"
              />
              <Box mt={3.5}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={
                    formik.isSubmitting ||
                    (Boolean(formik?.submitCount) && !formik.isValid)
                  }
                >
                  Log in
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default LogIn
