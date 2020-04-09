import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

export type FormSelectProps = ViewProps & {
  defaultValue?: string
}

export const FormSelect = ({
  children,
  defaultValue,
  ...props
}: FormSelectProps) => (
  <View {...props} css={{ position: 'relative' }}>
    <FormInput
      forwardedAs="select"
      defaultValue={defaultValue}
      css={mq({
        paddingRight: linearScale('1.75rem', '2.5rem', 'space'),
      })}
    >
      {children}
    </FormInput>
    <Icon
      name="chevronDown"
      css={mq({
        position: 'absolute',
        top: '50%',
        right: linearScale('0.6875rem', '1.125rem', 'space'),
        transform: 'translateY(-50%)',
        width: linearScale('0.5rem', '0.75rem'),
      })}
    />
  </View>
)
