import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Link, LinkProps } from './Link'
import { Icon } from './Icon'

const variants = {
  previous: {
    label: 'Previous',
    iconName: 'chevronLeft',
    iconOffsetX: '-10%',
  },
  next: {
    label: 'Next',
    iconName: 'chevronRight',
    iconOffsetX: '10%',
  },
} as const

type DirectionButtonProps = LinkProps & {
  variant: keyof typeof variants
}

const DirectionButton = ({
  variant: variantName,
  children,
  ...props
}: DirectionButtonProps) => {
  const variant = variants[variantName]

  return (
    <Link
      {...props}
      css={mq({
        display: 'grid',
        gap: linearScale('0.375rem', '0.5rem'),
        textAlign: 'center',
        justifyItems: 'center',
        '&:hover, &:focus': {
          '.icon': {
            backgroundColor: t.c.Gray60,
          },
        },
      })}
    >
      <div
        className="icon"
        css={mq({
          backgroundColor: t.c.Gray70,
          width: linearScale('1.125rem', '1.5rem'),
          height: linearScale('1.125rem', '1.5rem'),
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transitionProperty: 'background-color',
        })}
      >
        <Icon
          name={variant.iconName}
          css={mq({
            color: t.c.White,
            width: ['0.3rem', '0.4rem', '0.5rem'],
            transform: `translateX(${variant.iconOffsetX})`,
          })}
        />
      </div>
      <div css={mq({ fontSize: t.f['b-'], lineHeight: t.lh.Copy })}>
        <span
          css={{
            display: 'block',
            color: t.c.Black,
            transitionProperty: 'color',
          }}
        >
          {variant.label}
        </span>
        {children && (
          <span css={{ display: 'block', color: t.c.Gray60 }}>{children}</span>
        )}
      </div>
    </Link>
  )
}

export type NextPreviousProps = ViewProps & {
  nextHref?: string
  nextLabel?: string
  previousHref?: string
  previousLabel?: string
}

export const NextPrevious = ({
  nextHref,
  nextLabel,
  previousHref,
  previousLabel,
  ...props
}: NextPreviousProps) => (
  <View
    {...props}
    css={mq({
      display: 'grid',
      gridTemplateColumns: nextHref && previousHref ? 'repeat(2, 1fr)' : '1fr',
      gap: linearScale('1rem', '5.625rem'),
      justifyContent: 'center',
    })}
  >
    {previousHref && (
      <DirectionButton variant="previous" href={previousHref}>
        {previousLabel}
      </DirectionButton>
    )}
    {nextHref && (
      <DirectionButton variant="next" href={nextHref}>
        {nextLabel}
      </DirectionButton>
    )}
  </View>
)
