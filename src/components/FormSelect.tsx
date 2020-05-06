import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

export type FormSelectProps = ViewProps & {
  defaultValue?: string
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ children, defaultValue, name, ...props }, ref) => (
    <View {...props} css={{ position: 'relative' }}>
      <FormInput
        ref={ref}
        name={name}
        forwardedAs="select"
        defaultValue={defaultValue}
        aria-label={props['aria-label']}
        css={mq({
          paddingRight: linearScale('1.75rem', '2.5rem', 'space'),
        })}
      >
        {children}
      </FormInput>
      <Icon
        name="chevronDown"
        css={mq({
          pointerEvents: 'none',
          position: 'absolute',
          right: linearScale('0.6875rem', '1.125rem', 'space'),
          top: '50%',
          transform: 'translateY(-50%)',
          width: linearScale('0.5rem', '0.75rem'),
        })}
      />
    </View>
  ),
)
