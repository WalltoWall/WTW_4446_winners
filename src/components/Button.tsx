import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

const variants = {
  red: {
    color: t.c.White,
    colorHover: t.c.White,
    colorDisabled: t.c.Gray60,
    backgroundColor: t.c.Red40,
    backgroundColorHover: t.c.Red30,
    backgroundColorDisabled: t.c.Gray90,
    fontSize: t.f.b,
  },
} as const

export type ButtonProps = ViewProps & {
  variant?: keyof typeof variants
  disabled?: boolean
}

export const Button = ({
  variant: variantName = 'red',
  disabled = false,
  ...props
}: ButtonProps) => {
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
        borderRadius: ['3px', '4px'],
        color: disabled ? variant.colorDisabled : variant.color,
        cursor: disabled ? 'default' : 'pointer',
        fontSize: variant.fontSize,
        paddingTop: linearScale('0.625rem', '1.125rem', 'space'),
        paddingBottom: linearScale('0.625rem', '1.125rem', 'space'),
        paddingLeft: linearScale('1rem', '1.625rem', 'space'),
        paddingRight: linearScale('1rem', '1.625rem', 'space'),
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
