import Select from '@material-ui/core/Select'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  Select,
  ({
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
