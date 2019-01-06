import isBrowserEnv from '../lib/index'

describe('is-browser-env', () => {
  it('returns true when window is defined', () => {
    const result = isBrowserEnv()
    expect(result).toBe(true)
  })
})
