import React from 'react'
import { isForwardRef } from 'react-is'
import { WrappedFieldInputProps, WrappedFieldProps } from 'redux-form'

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function createComponent<P extends {}>(
  MaterialUIComponent: React.ComponentType<P>,
  mapProps: (
    props: WrappedFieldProps &
      Omit<P, keyof WrappedFieldInputProps | 'error' | 'hasHelperText'>
  ) => P
) {
  const InputComponent = React.forwardRef(function InputComponent(
    props: WrappedFieldProps &
      Omit<P, keyof WrappedFieldInputProps | 'error' | 'hasHelperText'>,
    ref
  ) {
    return React.createElement(MaterialUIComponent, { ...mapProps(props), ref })
  })
  InputComponent.displayName = `ReduxFormMaterialUI(${getDisplayName(
    MaterialUIComponent
  )})`
  return InputComponent
}

function getDisplayName(comp: React.ComponentType<any>): string {
  if (comp.displayName) return comp.displayName
  if (isForwardRef(React.createElement(comp))) {
    return `ForwardRef(${getDisplayName((comp as any).render)})`
  }
  return comp.name
}
