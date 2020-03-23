import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import { RegisterPage } from 'pages/Auth/Register'
import { MePage } from 'pages/Auth/Me'
import { NotFoundPage } from 'pages/NotFound'
import { LoginPage } from 'pages/Auth/Login'
import { LogoutPage } from 'pages/Auth/Logout'
import { CreateAnimalPage } from 'pages/Animal/Create'
import { EditAnimalPage } from 'pages/Animal/Edit'
import { DetailPage } from 'pages/Animal/Detail'
import { ProtectedRoute } from 'modules/router/routes/Protected'
import { PasswordForgotPage } from './pages/Auth/PasswordForgot'
import { PasswordResetPage } from './pages/Auth/PasswordReset'

export const ROUTE_PATHS = {
  home: '/',
  notFound: '*',
  animal: {
    create: '/animal/create',
    edit: (id = ':animalId') => `/animal/${id}/edit`,
    detail: (id = ':animalId') => `/animal/${id}`,
  },
  auth: {
    me: '/me',
    register: '/register',
    login: '/login',
    logout: '/logout',
    passwordForgot: '/password-forgot',
    passwordReset: '/password-reset/:token',
  },
}

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_PATHS.home} exact component={HomePage} />
    <ProtectedRoute
      path={ROUTE_PATHS.animal.create}
      exact
      component={CreateAnimalPage}
    />
    <ProtectedRoute
      path={ROUTE_PATHS.animal.edit()}
      exact
      component={EditAnimalPage}
    />
    <Route path={ROUTE_PATHS.animal.detail()} exact component={DetailPage} />
    <ProtectedRoute path={ROUTE_PATHS.auth.me} exact component={MePage} />
    <Route path={ROUTE_PATHS.auth.register} exact component={RegisterPage} />
    <Route path={ROUTE_PATHS.auth.login} exact component={LoginPage} />
    <Route
      exact
      path={ROUTE_PATHS.auth.passwordForgot}
      component={PasswordForgotPage}
    />
    <Route
      exact
      path={ROUTE_PATHS.auth.passwordReset}
      component={PasswordResetPage}
    />
    <ProtectedRoute
      path={ROUTE_PATHS.auth.logout}
      exact
      component={LogoutPage}
    />
    <Route path={ROUTE_PATHS.notFound} exact component={NotFoundPage} />
  </Switch>
)
