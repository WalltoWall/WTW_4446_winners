import React from 'react'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { t, mq, linearScale } from '../theme'
import { WinnersTemplateQuery } from '../graphqlTypes'

import { BoundedBox } from '../components/BoundedBox'
import { PaginatedWinners } from '../components/PaginatedWinners'

type LoadMoreWinnersProps = {
  firstPageId: string
  initialPage: WinnersTemplateQuery['paginatedCollectionPage']
}

export const LoadMoreWinners = ({
  firstPageId,
  initialPage,
}: LoadMoreWinnersProps) => {
  return (
    <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
      <div
        css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
      >
        <PaginatedWinners
          firstPageId={firstPageId}
          initialPage={initialPage as Partial<ExpandedPageNode>}
          showingCountAddend={5}
          totalCountAddend={5}
        />
      </div>
    </BoundedBox>
  )
}
