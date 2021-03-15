import { waitForElement } from '@testing-library/react'
import React from 'react'
import { App } from 'app'
import { ROUTE_PATHS } from 'routes'
import { auth } from 'services/auth'
import { createAnimalWithUser } from 'test-utils/generators'
import { mockAnimalDetailSuccess } from 'test-utils/gql'
import { renderWithRouter } from 'test-utils/render'
import { ANIMAL_EDIT_TEST_ID } from '../index'

describe('[animal] Edit Animal', () => {
  beforeEach(() => {
    auth.setAccessToken('mockAccessToken')
  })

  afterEach(() => {
    auth.removeAccessToken()
  })

  describe('when animal is loaded', () => {
    it('it should render correctly', async () => {
      const animal = createAnimalWithUser(1, 1)
      const renderer = renderWithRouter(
        <App />,
        ROUTE_PATHS.animal.edit(String(animal.id)),
        [mockAnimalDetailSuccess(animal)]
      )

      await waitForElement(() => renderer.getByTestId(ANIMAL_EDIT_TEST_ID))

      expect(renderer.getByTestId(ANIMAL_EDIT_TEST_ID)).toBeTruthy()
    })
  })
})
