import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { History as RouterHistory } from 'history'
import { showAllGraphQLErrors } from 'services/messages'
import { auth } from 'services/auth'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { ElementLink } from 'components/FormElementLink'
import { ROUTE_PATHS } from 'routes'
import { previousLocation } from '../../../router/previousLocation'
import { useLogin } from '../../hooks/useLogin'

const initialValues = {
  email: 'dino10bit@gmail.com',
  password: 'zasada',
}

const loginSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
})

interface IProps {
  routerHistory: RouterHistory
}

export const LoginForm: FC<IProps> = ({ routerHistory }) => {
  const [login] = useLogin()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await login({ variables: { ...values } })
          if (result) {
            auth.logIn(
              result.data.login.accessToken,
              result.data.login.refreshToken
            )
            const targetPath = previousLocation(routerHistory.location)
            routerHistory.push(targetPath)
          }
        } catch (error) {
          setSubmitting(false)
          showAllGraphQLErrors(error.graphQLErrors)
        }
      }}
      validationSchema={loginSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput iconType="user" label="Email" name="email" />
          <TextInput
            iconType="lock"
            label="Password"
            name="password"
            type="password"
          />
          <ElementLink>
            <Link to={ROUTE_PATHS.auth.passwordForgot}>Forgot password</Link>
          </ElementLink>
          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </FormButton>
          <ElementLink>
            Or <Link to={ROUTE_PATHS.auth.register}>register now!</Link>
          </ElementLink>
        </Form>
      )}
    </Formik>
  )
}
