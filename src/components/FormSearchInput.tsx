import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

export type FormSearchInputProps<T = unknown> = ViewProps & {
  placeholder?: string
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
      ...props
    }: FormSearchInputProps,
    ref,
  ) => (
    <View ref={ref} {...props} css={{ position: 'relative' }}>
      <FormInput
        ref={innerRef}
        placeholder={placeholder}
        css={mq({
          paddingLeft: linearScale('2rem', '2.5rem', 'space'),
          '&::placeholder': {
            color: t.c.Gray60,
          },
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
