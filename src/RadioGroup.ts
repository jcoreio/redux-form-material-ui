import { RadioGroup } from '@material-ui/core'
import createComponent from './createComponent'

export default createComponent(
  RadioGroup,
  ({
    input: { onChange, value, ...inputProps },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    meta,
    ...props
  }) => ({
    ...inputProps,
    ...props,
    value,
    onChange: (event, value) => {
      onChange(value)
    },
  })
)
