import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import React, { FC } from 'react'

interface IProps {
  mocks: MockedResponse[]
  children: JSX.Element
}

export const ApolloProvider: FC<IProps> = ({ mocks, children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
)
