import { expect } from 'chai'
import mapError from '../mapError'
import { describe, it } from 'mocha'

describe('mapError', () => {
  it('returns error if touched', () => {
    const input = {}
    const otherProps = {}
    const props = {
      meta: {
        touched: true,
        error: 'FooError',
      },
      input,
      ...otherProps,
    }
    const expected = {
      ...input,
      ...otherProps,
      error: true,
      helperText: props.meta.error,
    }

    const error = mapError(props)

    expect(error).to.deep.equal(expected)
  })

  it('respects hasHelperText', () => {
    const input = {}
    const otherProps = {}
    const props = {
      hasHelperText: false,
      meta: {
        touched: true,
        error: 'FooError',
      },
      input,
      ...otherProps,
    }
    const expected = {
      ...input,
      ...otherProps,
      error: true,
    }

    const error = mapError(props)

    expect(error).to.deep.equal(expected)
  })

  it('returns no error if not touched', () => {
    const input = {}
    const otherProps = {}
    const props = {
      hasHelperText: true,
      meta: {
        touched: false,
        error: 'FooError',
      },
      input,
      ...otherProps,
    }
    const expected = {
      ...input,
      ...otherProps,
    }

    const error = mapError(props)

    expect(error).to.deep.equal(expected)
  })
})
