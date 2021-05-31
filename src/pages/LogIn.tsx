import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'

import { unwrapResult } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { loginAsync, selectToken } from '../redux/reducers/login'

const LogIn = () => {
  const token = useAppSelector(selectToken)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      console.log(values)
      try {
        const result = await dispatch(loginAsync(values))
        await unwrapResult(result)
      } catch (error) {
        console.log(error)
      }
    },
  })

  if (token) return <Redirect to="/home" />

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Box style={{ maxWidth: 550 }}>
          <Link to="/home">Home</Link>,&nbsp;<Link to="/counter">Counter</Link>
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
