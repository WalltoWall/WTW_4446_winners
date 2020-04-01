import React from 'react'

import { mq, linearScale } from '../theme'
import { View } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

type FormSelectProps = React.ComponentProps<typeof View>

export const FormSelect: React.FC<FormSelectProps> = ({
  children,
  ...props
}) => (
  <View {...props} css={{ position: 'relative' }}>
    <FormInput
      forwardedAs="select"
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
