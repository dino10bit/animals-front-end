import { waitForElement } from '@testing-library/react'
import React from 'react'
import { App } from 'app'
import { COMPONENT_LOADER_TEST_ID } from 'components/Loader'
import { COMPONENT_ANIMAL_CARD_TEST_ID } from 'modules/animal/components/AnimalCard'
import { ROUTE_PATHS } from 'routes'
import { createAnimal, MockAnimalType } from 'test-utils/generators'
import { mockListAnimalsError, mockListAnimalsSuccess } from 'test-utils/gql'
import { renderWithRouter } from 'test-utils/render'
import { COMPONENT_EMPTY_TEST_ID } from '../../../components/Empty'
import { COMPONENT_ERROR_ALERT_TEST_ID } from '../../../components/ErrorAlert'
import { PAGE_HOME_TEST_ID } from '../index'

describe('[page] Home', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.home)
    const pageElement = renderer.getByTestId(PAGE_HOME_TEST_ID)
    const spinnerElement = renderer.getByTestId(COMPONENT_LOADER_TEST_ID)
    expect(pageElement).toBeTruthy()
    expect(spinnerElement).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle success state', async () => {
      const expectedData = [createAnimal(1), createAnimal(2)]

      const { getAllByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListAnimalsSuccess(expectedData),
      ])

      await waitForElement(() => getAllByTestId(COMPONENT_ANIMAL_CARD_TEST_ID))
      expect(getAllByTestId(COMPONENT_ANIMAL_CARD_TEST_ID).length).toEqual(
        expectedData.length
      )
    })

    it('should handle empty state', async () => {
      const expectedData: MockAnimalType[] = []

      const { getByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListAnimalsSuccess(expectedData),
      ])

      await waitForElement(() => getByTestId(COMPONENT_EMPTY_TEST_ID))
      expect(getByTestId(COMPONENT_EMPTY_TEST_ID)).toBeTruthy()
    })

    it('should handle error state', async () => {
      const { getByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListAnimalsError,
      ])

      await waitForElement(() => getByTestId(COMPONENT_ERROR_ALERT_TEST_ID))
      expect(getByTestId(COMPONENT_ERROR_ALERT_TEST_ID)).toBeTruthy()
    })
  })
})
