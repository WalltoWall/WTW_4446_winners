import React from 'react'

import { t, mq } from '../theme'
import { View } from '../components/View'
import { EntryCard } from '../components/EntryCard'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'

type IndexPageProps = React.ComponentProps<typeof Layout>

export const IndexPage: React.FC<IndexPageProps> = props => (
  <Layout {...props}>
    <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
      <View css={mq({ display: 'grid', gap: [t.S[3], t.S[4]] })}>
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          Best of Show Winners
        </Heading>
        <View
          css={mq({
            display: 'grid',
            gap: [t.S[3], null, t.S[4]],
            gridTemplateColumns: ['1fr', 'repeat(3, 1fr)'],
          })}
        >
          <EntryCard
            isSpecialAward={true}
            variant="featured"
            title="Entry Title"
            subtitle="Category"
            award="gold"
          />
          <EntryCard
            isSpecialAward={true}
            variant="featured"
            title="Entry Title"
            subtitle="Category"
            award="gold"
          />
          <EntryCard
            isSpecialAward={true}
            variant="featured"
            title="Entry Title"
            subtitle="Category"
            award="gold"
          />
        </View>
      </View>
    </BoundedBox>
  </Layout>
)

export default IndexPage
