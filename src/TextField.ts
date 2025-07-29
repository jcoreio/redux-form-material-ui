import { TextField } from '@material-ui/core'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  TextField,
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultValue,
    ...props
  }) => ({
    ...mapError(props),
  })
)
