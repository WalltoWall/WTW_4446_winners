import React from 'react'
import { linearScale } from 'styled-system-scale'

import { t, mq } from '../theme'
import { View } from './View'

const variants = {
  red: {
    color: t.c.White,
    colorHover: t.c.White,
    colorDisabled: t.c.Gray80,
    backgroundColor: t.c.Red40,
    backgroundColorHover: t.c.Red30,
    backgroundColorDisabled: t.c.Gray90,
    fontSize: t.f.b,
  },
} as const

type ButtonProps = React.ComponentProps<typeof View> & {
  variant?: keyof typeof variants
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant: variantName = 'red',
  disabled = false,
  ...props
}) => {
  const variant = variants[variantName]

  return (
    <View
      as="button"
      disabled={disabled}
      {...props}
      css={mq({
        backgroundColor: disabled
          ? variant.backgroundColorDisabled
          : variant.backgroundColor,
        borderRadius: '3px',
        color: disabled ? variant.colorDisabled : variant.color,
        cursor: disabled ? 'default' : 'pointer',
        fontSize: variant.fontSize,
        paddingTop: linearScale('0.625rem', '1.125rem', { count: 3 }),
        paddingBottom: linearScale('0.625rem', '1.125rem', { count: 3 }),
        paddingLeft: linearScale('1rem', '1.625rem', { count: 3 }),
        paddingRight: linearScale('1rem', '1.625rem', { count: 3 }),
        textAlign: 'center',
        transitionProperty: 'color, background-color',
        '&:hover, &:focus': {
          backgroundColor: disabled
            ? variant.backgroundColorDisabled
            : variant.backgroundColorHover,
          color: disabled ? variant.colorDisabled : variant.colorHover,
        },
      })}
    />
  )
}
