import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

export type FormInputProps = ViewProps

export const FormInput = (props: FormInputProps) => (
  <View
    as="input"
    {...props}
    css={mq({
      borderColor: t.c.Gray90,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '3px',
      fontSize: t.f['b-'],
      paddingBottom: linearScale('0.6875rem', '0.75rem', 'space'),
      paddingLeft: linearScale('0.75rem', '1rem', 'space'),
      paddingRight: linearScale('0.75rem', '1rem', 'space'),
      paddingTop: linearScale('0.6875rem', '0.75rem', 'space'),
      width: '100%',
      lineHeight: t.lh.Title,
    })}
  />
)
