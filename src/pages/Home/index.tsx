import React from 'react'
import { H1 } from 'components/Typography/H1'
import { AnimalsList } from 'modules/animal/components/AnimalsList'

export const PAGE_HOME_TEST_ID = 'home-page'

export const HomePage = () => (
  <div data-testid={PAGE_HOME_TEST_ID}>
    <H1>All Animals</H1>
    <AnimalsList />
  </div>
)
