import isBrowserEnv from '../lib/index'

describe('is-browser-env', () => {
  it('returns false when window is not defined', () => {
    const result = isBrowserEnv()
    expect(result).toBe(false)
  })
})
