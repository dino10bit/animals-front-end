import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { ChangePasswordForm } from 'modules/auth/forms/ChangePassword'

export const PAGE_PASSWORD_RESET_TEST_ID = 'password-reset-page'

export const PasswordResetPage: FC<RouteComponentProps<{
  token: string
}>> = ({ history, match }) => {
  const resetToken = match.params.token

  return (
    <div data-testid={PAGE_PASSWORD_RESET_TEST_ID}>
      <H1>Password Reset</H1>
      <ChangePasswordForm routerHistory={history} token={resetToken} />
    </div>
  )
}
