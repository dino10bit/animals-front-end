import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React, { FC } from 'react'

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <AntButton size="large" {...rest}>
    {children}
  </AntButton>
)
