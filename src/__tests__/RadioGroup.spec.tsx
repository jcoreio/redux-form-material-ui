import { expect } from 'chai'
import RadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'
import { create } from 'react-test-renderer'
import ReduxFormMaterialUIRadioGroup from '../RadioGroup'
import { describe, it } from 'mocha'

const noop = () => {
  // no-op
}

describe('RadioGroup', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIRadioGroup.displayName).to.equal(
      'ReduxFormMaterialUI(ForwardRef(RadioGroup))'
    )
  })

  it('renders a RadioGroup', () => {
    expect(
      create(
        <ReduxFormMaterialUIRadioGroup
          input={{
            name: 'myRadio',
            value: 'Foo',
            onChange: {
              noop,
            },
          }}
        />
      ).root.findByType(RadioGroup).props
    ).to.containSubset({
      name: 'myRadio',
      value: 'Foo',
    })
  })
})
