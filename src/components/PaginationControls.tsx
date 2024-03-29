import React, { useCallback } from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Icon } from './Icon'

const variants = {
  previous: {
    label: 'Previous',
    iconName: 'chevronLeft',
    svgOffsetX: '-10%',
  },
  next: {
    label: 'Next',
    iconName: 'chevronRight',
    svgOffsetX: '10%',
  },
} as const

type DirectionButtonProps = ViewProps & {
  variant: keyof typeof variants
  disabled?: boolean
}

const DirectionButton = ({
  variant: variantName,
  disabled = false,
  ...props
}: DirectionButtonProps) => {
  const variant = variants[variantName]

  return (
    <View
      as="button"
      disabled={disabled}
      {...props}
      css={mq({
        backgroundColor: disabled ? t.c.Gray90 : t.c.Gray70,
        width: linearScale('1.125rem', '1.5rem'),
        height: linearScale('1.125rem', '1.5rem'),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background-color',
        pointerEvents: disabled ? 'none' : 'auto',
        '&:hover, &:focus': {
          backgroundColor: t.c.Gray60,
        },
      })}
    >
      <Icon
        name={variant.iconName}
        css={mq({
          color: disabled ? t.c.Gray95 : t.c.White,
          width: ['0.3rem', '0.4rem', '0.5rem'],
          transform: `translateX(${variant.svgOffsetX})`,
        })}
      />
      <VisuallyHidden>{variant.label}</VisuallyHidden>
    </View>
  )
}

export type PaginationControlsProps = ViewProps & {
  currentPage: number
  totalPages: number
  setPage: (pageNumber: number) => void
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  setPage,
  ...props
}: PaginationControlsProps) => {
  const pageNumbers = Array(totalPages)
    .fill(undefined)
    .map((_, i) => i + 1)

  const hasPreviousPage = currentPage > 1
  const decPage = useCallback(() => setPage(Math.max(currentPage - 1, 1)), [
    currentPage,
    setPage,
  ])

  const hasNextPage = currentPage < totalPages
  const incPage = useCallback(
    () => setPage(Math.min(currentPage + 1, totalPages)),
    [currentPage, setPage, totalPages],
  )

  return (
    <View
      {...props}
      css={mq({
        display: 'grid',
        gap: linearScale('1rem', '1.5rem'),
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
      })}
    >
      <DirectionButton
        variant="previous"
        disabled={!hasPreviousPage}
        onClick={decPage}
      />
      <ul
        css={mq({
          display: 'grid',
          gap: linearScale('1rem', '1.5rem'),
          gridAutoFlow: 'column',
        })}
      >
        {pageNumbers.map(number => (
          <li
            key={number}
            css={{ color: currentPage === number ? t.c.Black : t.c.Gray60 }}
          >
            <button
              onClick={() => setPage(number)}
              css={{
                transitionProperty: 'color',
                '&:hover, &:focus': { color: t.c.Red40 },
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <DirectionButton
        variant="next"
        disabled={!hasNextPage}
        onClick={incPage}
      />
    </View>
  )
}
