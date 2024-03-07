import { expect } from 'chai'
import Select from '@material-ui/core/Select'
import React from 'react'
import ReduxFormMaterialUISelect from '../Select'
import { create } from 'react-test-renderer'
import { describe, it } from 'mocha'

const noop = () => {
  // no-op
}

describe('Select', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISelect.displayName).to.equal(
      'ReduxFormMaterialUI(WithStyles(ForwardRef(Select)))'
    )
  })

  it('renders a Select', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: 'Foo',
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a Select with multiple', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          multiple
          input={{
            name: 'myText',
            value: ['Foo', 'Bar'],
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      multiple: true,
      name: 'myText',
      value: ['Foo', 'Bar'],
    })
  })

  it('renders a Select with no error when not touched', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            error: 'FooError',
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a Select with an error', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            error: 'FooError',
            touched: true,
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
      error: true,
    })
  })

  it('renders a Select with no warning when not touched', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            warning: 'FooWarning',
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a Select with an warning', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            warning: 'FooWarning',
            touched: true,
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
      error: true,
    })
  })

  it('should ignore defaultValue', () => {
    expect(
      create(
        <ReduxFormMaterialUISelect
          input={{
            name: 'myText',
            value: '',
          }}
          defaultValue={'5'}
          meta={{
            warning: 'FooWarning',
            touched: true,
          }}
        />
      ).root.findByType(Select).props
    ).to.containSubset({
      name: 'myText',
      value: '',
      error: true,
    })
  })
})
