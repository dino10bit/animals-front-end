import { MockedResponse } from '@apollo/client/testing'
import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from './ApolloProvider'

export const renderWithRouter = (
  component: JSX.Element,
  uri: string,
  mocks: MockedResponse[] = []
) =>
  render(
    <MemoryRouter initialEntries={[uri]}>
      <ApolloProvider mocks={mocks}>{component}</ApolloProvider>
    </MemoryRouter>
  )
