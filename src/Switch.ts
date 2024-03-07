import Switch from '@material-ui/core/Switch'
import createComponent from './createComponent'

export default createComponent(
  Switch,
  ({ input: { onChange, value, ...inputProps }, meta, ...props }) => ({
    ...inputProps,
    ...props,
    onChange,
    checked: !!value,
  })
)
