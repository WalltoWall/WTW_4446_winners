import React from 'react'
import { graphql } from 'gatsby'
import { negateScale } from 'styled-system-scale'

import { EntryTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View } from '../components/View'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { Tag } from '../components/Tag'
import { Link } from '../components/Link'

type EntryTemplateProps = React.ComponentProps<typeof Layout> & {
  data: EntryTemplateQuery
}

export const EntryTemplate: React.FC<EntryTemplateProps> = ({
  data,
  ...props
}) => {
  const entry = data.airtableEntry

  return (
    <Layout {...props}>
      <BoundedBox forwardedAs="section" css={{ backgroundColor: t.c.Gray95 }}>
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('1.875rem', '4rem'),
            justifyItems: 'center',
          })}
        >
          <View css={{ textAlign: 'center' }}>
            <View
              as="p"
              css={mq({
                color: t.c.Gray60,
                fontSize: t.f['b-'],
                marginBottom: linearScale('0.5rem', '0.8125rem'),
              })}
            >
              <Anchor href="/winners/">Winners</Anchor>
            </View>
            <Heading css={mq({ fontSize: t.f.xl })}>
              {entry?.data?.name}
            </Heading>
          </View>
          <View
            css={mq({
              backgroundColor: t.c.White,
              paddingTop: linearScale('2rem', '4rem'),
              paddingBottom: linearScale('2rem', '4rem'),
              paddingLeft: linearScale('2rem', '7.25rem'),
              paddingRight: linearScale('2rem', '7.25rem'),
              maxWidth: t.sz.Large,
              width: '100%',
            })}
          >
            <View
              as="ul"
              css={mq({
                display: 'flex',
                marginRight: negateScale(linearScale('0.5rem', '0.875rem')),
                marginBottom: negateScale(linearScale('0.5rem', '0.875rem')),
              })}
            >
              {entry?.data?.tags?.map((tag) => (
                <View
                  as="li"
                  css={mq({
                    paddingRight: linearScale('0.5rem', '0.875rem'),
                    paddingBottom: linearScale('0.5rem', '0.875rem'),
                  })}
                >
                  <Link href={`/tags/${tag}/`}>
                    <Tag>{tag}</Tag>
                  </Link>
                </View>
              ))}
            </View>
          </View>
        </View>
      </BoundedBox>
    </Layout>
  )
}

export default EntryTemplate

export const query = graphql`
  query EntryTemplate($recordId: String!) {
    airtableEntry(recordId: { eq: $recordId }) {
      data {
        name
        tags
        images {
          localFiles {
            childCloudinaryAsset {
              fluid(maxWidth: 800) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
  }
`
