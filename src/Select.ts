import { Select } from '@material-ui/core'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  Select,
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultValue,
    input: { onChange, value, onBlur, ...inputProps },
    ...props
  }) => ({
    ...mapError({
      input: { onChange, value, onBlur, ...inputProps },
      ...props,
      hasHelperText: false,
    }),
    ...inputProps,
    value,
    onChange: (event) => {
      onChange(event.target.value)
    },
    onBlur: () => onBlur(value),
  })
)
