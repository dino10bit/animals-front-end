import React, { FunctionComponent, ComponentType } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { ROUTE_PATHS } from 'routes'
import { auth } from 'services/auth'

interface IOuterProps {
  component: ComponentType
}

type IProps = IOuterProps & RouteProps

export const ProtectedRoute: FunctionComponent<IProps> = ({
  component: TargetComponent,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const accessToken = auth.getAccessToken()
      if (accessToken) {
        return <TargetComponent {...props} />
      }

      return (
        <Redirect
          to={{
            pathname: ROUTE_PATHS.auth.login,
            state: { from: props.location },
          }}
        />
      )
    }}
  />
)
