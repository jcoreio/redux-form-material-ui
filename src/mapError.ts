import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps,
  WrappedFieldProps,
} from 'redux-form'

type MapErrorProps<P extends WrappedFieldProps & { hasHelperText?: boolean }> =
  WrappedFieldInputProps & {
    error?: boolean
    helperText?: WrappedFieldMetaProps['error']
  } & Omit<P, 'meta' | 'input' | 'hasHelperText'>

const mapError = <P extends WrappedFieldProps & { hasHelperText?: boolean }>({
  hasHelperText = true,
  meta: { touched, error, warning } = {} as any,
  input,
  ...props
}: P): MapErrorProps<P> => {
  const errorProps: MapErrorProps<P> =
    touched && (error || warning)
      ? {
          ...props,
          ...input,
          error: Boolean(error || warning),
        }
      : { ...input, ...props }

  if (touched && hasHelperText && (error || warning)) {
    errorProps.helperText = error || warning
  }

  return errorProps
}

export default mapError
