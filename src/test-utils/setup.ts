/* eslint-disable no-console */
import { cleanup } from '@testing-library/react'

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

const originalError = console.error
beforeAll(() => {
  console.error = (...args: any) => {
    if (
      /Warning.*not wrapped in act/u.test(args[0]) ||
      args[0].includes(
        "Warning: Can't perform a React state update on an unmounted component"
      )
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
