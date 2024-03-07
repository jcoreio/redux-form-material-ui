import { expect } from 'chai'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import ReduxFormMaterialUITextField from '../TextField'
import { create } from 'react-test-renderer'
import { describe, it } from 'mocha'

describe('TextField', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUITextField.displayName).to.equal(
      'ReduxFormMaterialUI(WithStyles(ForwardRef(TextField)))'
    )
  })

  it('renders a TextField', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
          input={{
            name: 'myText',
            value: 'Foo',
          }}
        />
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a TextField with no error when not touched', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            error: 'FooError',
          }}
        />
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a TextField with an error', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            error: 'FooError',
            touched: true,
          }}
        />
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
      error: true,
      helperText: 'FooError',
    })
  })

  it('renders a TextField with no warning when not touched', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            warning: 'FooWarning',
          }}
        />
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
    })
  })

  it('renders a TextField with an warning', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
          input={{
            name: 'myText',
            value: 'Foo',
          }}
          meta={{
            warning: 'FooWarning',
            touched: true,
          }}
        />
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: 'Foo',
      error: true,
      helperText: 'FooWarning',
    })
  })

  it('should ignore defaultValue', () => {
    expect(
      create(
        <ReduxFormMaterialUITextField
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
      ).root.findByType(TextField).props
    ).to.containSubset({
      name: 'myText',
      value: '',
      error: true,
      helperText: 'FooWarning',
    })
  })
})
