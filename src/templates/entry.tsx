import React from 'react'
import { graphql } from 'gatsby'
import { negateScale } from 'styled-system-scale'
import slug from 'slug'

import { Award } from '../types'
import { EntryTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View } from '../components/View'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { Tag } from '../components/Tag'
import { HTMLContent } from '../components/HTMLContent'
import { NextPrevious } from '../components/NextPrevious'
import { AwardIcon } from '../components/AwardIcon'

type EntryTemplateProps = React.ComponentProps<typeof Layout> & {
  data: EntryTemplateQuery
}

export const EntryTemplate: React.FC<EntryTemplateProps> = ({
  data,
  ...props
}) => {
  const entry = data.airtableEntry
  const category = entry?.data?.category?.[0]?.data
  const hasSpecialAward = Boolean(entry?.data?.special_award)
  const hasTags = (entry?.data?.tags?.length ?? 0) > 0

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
              textAlign: ['center', 'left'],
              width: '100%',
            })}
          >
            <View
              css={mq({
                display: 'grid',
                gap: linearScale('1.25rem', '1.5rem'),
                gridAutoFlow: 'row dense',
                alignItems: 'baseline',
                gridTemplateColumns: [null, 'repeat(2, 1fr)'],
                gridTemplateRows: [null, 'auto auto 1fr'],
              })}
            >
              <View
                css={mq({
                  display: 'grid',
                  gap: linearScale('0.5rem', '0.75rem'),
                  gridAutoFlow: 'column',
                  justifyContent: ['center', 'left'],
                  alignItems: 'center',
                  gridColumn: [null, 1],
                })}
              >
                <AwardIcon
                  type={entry?.data?.award?.toLowerCase?.() as Award}
                  css={mq({ width: linearScale('0.8125rem', '1.25rem') })}
                />
                {hasSpecialAward && (
                  <Heading
                    css={{
                      color: hasSpecialAward ? t.c.Red40 : 'inherit',
                      lineHeight: t.lh.Solid,
                    }}
                  >
                    {entry?.data?.special_award}
                  </Heading>
                )}
              </View>
              <View css={mq({ lineHeight: t.lh.Copy, gridColumn: [null, 1] })}>
                <View as="p" css={{ fontWeight: t.fw.Semibold }}>
                  {entry?.data?.year}
                </View>
                <View as="p" css={{ fontWeight: t.fw.Semibold }}>
                  {category?.line_1}
                </View>
                <View as="p">{category?.line_2}</View>
              </View>
              {hasTags && (
                <View
                  as="ul"
                  css={mq({
                    display: 'flex',
                    marginRight: negateScale(linearScale('0.5rem', '0.875rem')),
                    marginBottom: negateScale(
                      linearScale('0.5rem', '0.875rem'),
                    ),
                    flexWrap: 'wrap',
                    justifyContent: ['center', 'left'],
                    gridColumn: [null, 1],
                  })}
                >
                  {entry?.data?.tags?.map(
                    (tag) =>
                      tag && (
                        <View
                          key={tag}
                          as="li"
                          css={mq({
                            paddingRight: linearScale('0.5rem', '0.875rem'),
                            paddingBottom: linearScale('0.5rem', '0.875rem'),
                          })}
                        >
                          <Tag href={`/tags/${slug(tag.toLowerCase())}/`}>
                            {tag}
                          </Tag>
                        </View>
                      ),
                  )}
                </View>
              )}
              <View
                css={mq({
                  display: 'grid',
                  gap: linearScale('0.5rem', '1rem'),
                  gridColumn: [null, 2],
                  gridRow: [null, '1 / 4'],
                })}
              >
                <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                  <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                    Client
                  </View>
                  <View as="dd">{entry?.data?.client}</View>
                </View>
                <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                  <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                    Creative Agency
                  </View>
                  <View as="dd">{entry?.data?.entrant?.[0]?.data?.name}</View>
                </View>
                <HTMLContent
                  html={entry?.data?.credits?.childMarkdownRemark?.html}
                />
              </View>
            </View>
          </View>
          <NextPrevious
            previousHref="/"
            previousLabel="Hawaii Something"
            nextHref="/"
            nextLabel="Another What"
          />
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
        year
        award
        special_award
        category {
          data {
            line_1
            line_2
          }
        }
        client
        entrant {
          data {
            name
          }
        }
        credits {
          childMarkdownRemark {
            html
          }
        }
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
