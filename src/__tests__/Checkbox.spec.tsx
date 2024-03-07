import { expect } from 'chai'
import Checkbox from '@material-ui/core/Checkbox'
import React from 'react'
import { create } from 'react-test-renderer'
import ReduxFormMaterialUICheckbox from '../Checkbox'
import { describe, it } from 'mocha'

const noop = () => {
  // no-op
}

describe('Checkbox', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUICheckbox.displayName).to.equal(
      'ReduxFormMaterialUI(WithStyles(ForwardRef(Checkbox)))'
    )
  })

  it('renders an unchecked Checkbox', () => {
    expect(
      create(
        <ReduxFormMaterialUICheckbox
          input={{
            name: 'myCheckbox',
            onChange: noop,
          }}
        />
      ).root.findByType(Checkbox).props
    ).to.containSubset((<Checkbox name="myCheckbox" checked={false} />).props)
  })

  it('renders a checked Checkbox', () => {
    expect(
      create(
        <ReduxFormMaterialUICheckbox
          input={{
            name: 'myCheckbox',
            onChange: noop,
            value: true,
          }}
        />
      ).root.findByType(Checkbox).props
    ).to.containSubset({
      name: 'myCheckbox',
      checked: true,
    })
  })

  it('should ignore defaultChecked', () => {
    expect(
      create(
        <ReduxFormMaterialUICheckbox
          input={{
            name: 'myCheckbox',
            onChange: noop,
          }}
          defaultChecked
        />
      ).root.findByType(Checkbox).props
    ).to.containSubset({
      name: 'myCheckbox',
    })
  })
})
