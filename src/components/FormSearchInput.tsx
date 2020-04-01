import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { FormInput } from './FormInput'
import { Icon } from './Icon'

type FormSearchInputProps = React.ComponentProps<typeof View> & {
  placeholder?: string
}

export const FormSearchInput: React.FC<FormSearchInputProps> = ({
  children,
  placeholder = 'Search…',
  ...props
}) => (
  <View {...props} css={{ position: 'relative' }}>
    <FormInput
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
)
