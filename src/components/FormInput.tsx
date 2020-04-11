import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

export type FormInputProps = ViewProps

export const FormInput = React.forwardRef((props: FormInputProps, ref) => (
  <View
    as="input"
    ref={ref}
    {...props}
    css={mq({
      backgroundColor: t.c.White,
      borderColor: t.c.Gray90,
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: t.f['b-'],
      lineHeight: t.lh.Title,
      paddingBottom: linearScale('0.6875rem', '0.75rem', 'space'),
      paddingLeft: linearScale('0.75rem', '1rem', 'space'),
      paddingRight: linearScale('0.75rem', '1rem', 'space'),
      paddingTop: linearScale('0.6875rem', '0.75rem', 'space'),
      transitionProperty: 'border-color, box-shadow',
      width: '100%',
      '&:focus': {
        borderColor: 'rgba(207, 24, 55, 0.3)',
        boxShadow: '0 0 0 2px rgba(207, 24, 55, 0.1)',
      },
      '&::placeholder': {
        color: t.c.Gray50,
      },
    })}
  />
))
