import '@testing-library/jest-dom'
jest.setTimeout(10000)
afterEach(() => {
  // resets all mocks between tests
  jest.clearAllMocks()
})
