import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'
import axios from 'axios'

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { selectToken, selectStatus, selectError } from '../redux/reducers/login'
import { fetchLogin } from '../redux/actions/login'

const LogIn = () => {
  const token = useAppSelector(selectToken)
  const status = useAppSelector(selectStatus)
  const error = useAppSelector(selectError)
  const dispatch = useAppDispatch()
  const { addToast } = useToasts()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      dispatch(fetchLogin(values))
    },
  })

  React.useEffect(() => {
    if (error && axios.isAxiosError(error)) {
      addToast(error?.response?.data.message, { appearance: 'error' })
    }
  }, [error, addToast])

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
                    status === 'loading' ||
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
