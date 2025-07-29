import React from 'react'
import { isForwardRef } from 'react-is'
import { WrappedFieldProps } from 'redux-form'

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
export default function createComponent<C extends React.ComponentType<any>>(
  MaterialUIComponent: C,
  mapProps: (
    props: Omit<
      WrappedFieldProps & Omit<React.ComponentProps<C>, 'input' | 'meta'>,
      'ref'
    >
  ) => React.ComponentProps<C>
) {
  const InputComponent = React.forwardRef<
    any,
    WrappedFieldProps & React.ComponentProps<C>
  >(function InputComponent(
    props: Omit<
      WrappedFieldProps & Omit<React.ComponentProps<C>, 'input' | 'meta'>,
      'ref'
    >,
    ref
  ) {
    return React.createElement(MaterialUIComponent, {
      ...mapProps(props),
      ref,
    })
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
