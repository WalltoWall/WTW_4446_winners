import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { Link } from './Link'
import { SVG } from './SVG'
import { ReactComponent as AssetIconChevronLeft } from '../assets/icon-chevron-left.svg'
import { ReactComponent as AssetIconChevronRight } from '../assets/icon-chevron-right.svg'

const variants = {
  previous: {
    label: 'Previous',
    svg: AssetIconChevronLeft,
    svgOffsetX: '-10%',
  },
  next: {
    label: 'Next',
    svg: AssetIconChevronRight,
    svgOffsetX: '10%',
  },
} as const

type DirectionButtonProps = React.ComponentProps<typeof Link> & {
  variant: keyof typeof variants
}

const DirectionButton: React.FC<DirectionButtonProps> = ({
  variant: variantName,
  children,
  ...props
}) => {
  const variant = variants[variantName]

  return (
    <Link
      {...props}
      css={mq({
        display: 'grid',
        gap: linearScale('0.375rem', '0.5rem'),
        textAlign: 'center',
        justifyItems: 'center',
      })}
    >
      <View
        css={mq({
          backgroundColor: t.c.Gray70,
          width: linearScale('1.125rem', '1.5rem'),
          height: linearScale('1.125rem', '1.5rem'),
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <SVG
          svg={variant.svg}
          x={8}
          y={14}
          css={mq({
            color: t.c.White,
            width: ['0.3rem', '0.4rem', '0.5rem'],
            transform: `translateX(${variant.svgOffsetX})`,
          })}
        />
      </View>
      <View css={mq({ fontSize: t.f['b-'], lineHeight: t.lh.Copy })}>
        <View as="span" css={{ display: 'block', color: t.c.Black }}>
          {variant.label}
        </View>
        {children && (
          <View as="span" css={{ display: 'block', color: t.c.Gray60 }}>
            {children}
          </View>
        )}
      </View>
    </Link>
  )
}

type NextPreviousProps = React.ComponentProps<typeof View> & {
  nextHref?: string
  nextLabel?: string
  previousHref?: string
  previousLabel?: string
}

export const NextPrevious: React.FC<NextPreviousProps> = ({
  nextHref,
  nextLabel,
  previousHref,
  previousLabel,
  ...props
}) => (
  <View
    {...props}
    css={mq({
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: linearScale('1rem', '5.625rem'),
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
