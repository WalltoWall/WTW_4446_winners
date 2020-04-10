import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

export type FormSearchInputProps<T = unknown> = ViewProps & {
  placeholder?: string
  defaultValue?: string
  innerRef?:
    | ((instance: T | null) => void)
    | React.MutableRefObject<T | null>
    | null
}

export const FormSearchInput = React.forwardRef(
  (
    {
      innerRef,
      children,
      placeholder = 'Search…',
      defaultValue,
      ...props
    }: FormSearchInputProps,
    ref,
  ) => (
    <View ref={ref} {...props} css={{ position: 'relative' }}>
      <FormInput
        ref={innerRef}
        type="search"
        placeholder={placeholder}
        defaultValue={defaultValue}
        css={mq({
          paddingLeft: linearScale('2rem', '2.5rem', 'space'),
        })}
      />
      <Icon
        name="search"
        css={mq({
          position: 'absolute',
          top: '50%',
          left: linearScale('0.75rem', '1rem', 'space'),
          transform: 'translateY(-50%)',
          width: linearScale('0.875rem', '1.125rem'),
        })}
      />
    </View>
  ),
)
