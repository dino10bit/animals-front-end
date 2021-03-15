import { Spin } from 'antd'
import React from 'react'

export const COMPONENT_LOADER_TEST_ID = 'loader-component'

export const Loader = () => (
  <Spin data-testid={COMPONENT_LOADER_TEST_ID} size="large" />
)
