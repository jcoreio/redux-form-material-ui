import { Switch } from '@material-ui/core'
import createComponent from './createComponent'

export default createComponent(
  Switch,
  ({
    input: { onChange, value, ...inputProps },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    meta,
    ...props
  }) => ({
    ...inputProps,
    ...props,
    onChange,
    checked: !!value,
  })
)
