import { expect } from 'chai'
import Switch from '@material-ui/core/Switch'
import React from 'react'
import ReduxFormMaterialUISwitch from '../Switch'
import { create } from 'react-test-renderer'
import { describe, it } from 'mocha'

const noop = () => {
  // no-op
}

describe('Switch', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISwitch.displayName).to.equal(
      'ReduxFormMaterialUI(WithStyles(ForwardRef(Switch)))'
    )
  })

  it('renders an unchecked Switch', () => {
    expect(
      create(
        <ReduxFormMaterialUISwitch
          input={{
            name: 'mySwitch',
            onChange: noop,
          }}
        />
      ).root.findByType(Switch).props
    ).to.containSubset({
      name: 'mySwitch',
    })
  })

  it('renders a checked Switch', () => {
    expect(
      create(
        <ReduxFormMaterialUISwitch
          input={{
            name: 'mySwitch',
            onChange: noop,
            value: true,
          }}
        />
      ).root.findByType(Switch).props
    ).to.containSubset({
      name: 'mySwitch',
      checked: true,
    })
  })

  it('should ignore checked', () => {
    expect(
      create(
        <ReduxFormMaterialUISwitch
          input={{
            name: 'mySwitch',
            onChange: noop,
          }}
          checked
        />
      ).root.findByType(Switch).props
    ).to.containSubset({
      name: 'mySwitch',
    })
  })

  it('renders a controlled Switch', () => {
    expect(
      create(
        <ReduxFormMaterialUISwitch
          input={{
            name: 'mySwitch',
            onChange: noop,
            value: true,
          }}
        />
      ).root.findByType(Switch).props
    ).to.containSubset({
      name: 'mySwitch',
      checked: true,
    })
    expect(
      create(
        <ReduxFormMaterialUISwitch
          input={{
            name: 'mySwitch',
            onChange: noop,
          }}
        />
      ).root.findByType(Switch).props
    ).to.containSubset({
      name: 'mySwitch',
      checked: false,
    })
  })
})
