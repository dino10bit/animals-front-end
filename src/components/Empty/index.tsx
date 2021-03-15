import { Empty as AntEmpty } from 'antd'
import React from 'react'

export const COMPONENT_EMPTY_TEST_ID = 'error-alert-component'

export const Empty = () => (
  <AntEmpty
    description="Page Not Found"
    data-testid={COMPONENT_EMPTY_TEST_ID}
  />
)
