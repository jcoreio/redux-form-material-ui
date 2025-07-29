import { Checkbox } from '@material-ui/core'
import createComponent from './createComponent'

export default createComponent(
  Checkbox,
  ({
    input: { onChange, value, ...inputProps },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    meta,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultChecked,
    ...props
  }) => ({
    ...inputProps,
    ...props,
    checked: value ? true : false,
    onChange: (event, isInputChecked) => {
      onChange(isInputChecked)
    },
  })
)
