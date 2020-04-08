import React, { useCallback } from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Icon } from './Icon'

const variants = {
  previous: {
    iconName: 'chevronLeft',
    svgOffsetX: '-10%',
  },
  next: {
    iconName: 'chevronRight',
    svgOffsetX: '10%',
  },
} as const

type DirectionButtonProps = ViewProps & {
  variant: keyof typeof variants
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DirectionButton = ({
  variant: variantName,
  ...props
}: DirectionButtonProps) => {
  const variant = variants[variantName]

  return (
    <View
      as="button"
      {...props}
      css={mq({
        backgroundColor: t.c.Gray70,
        width: linearScale('1.125rem', '1.5rem'),
        height: linearScale('1.125rem', '1.5rem'),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background-color',
        '&:hover, &:focus': {
          backgroundColor: t.c.Gray60,
        },
      })}
    >
      <Icon
        name={variant.iconName}
        css={mq({
          color: t.c.White,
          width: ['0.3rem', '0.4rem', '0.5rem'],
          transform: `translateX(${variant.svgOffsetX})`,
        })}
      />
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

  const incPage = useCallback(() => setPage(Math.max(currentPage - 1, 0)), [
    currentPage,
    setPage,
  ])

  const decPage = useCallback(
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
      <DirectionButton variant="previous" onClick={incPage} />
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
      <DirectionButton variant="next" onClick={decPage} />
    </View>
  )
}
