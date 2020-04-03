import React from 'react'
import { negateScale } from 'styled-system-scale'

import { Tag as TagType } from '../types'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { AwardIcon } from './AwardIcon'
import { Avatar } from './Avatar'
import { Heading } from './Heading'
import { HTMLContent } from './HTMLContent'
import { Anchor } from './Anchor'
import { Tag } from './Tag'

type WinnerInfoProps = React.ComponentProps<typeof View> & {
  award: React.ComponentProps<typeof AwardIcon>['type']
  specialAward?: string
  year: string
  categoryLine1?: string
  categoryLine2?: string
  tags?: TagType[]
  creditsHTML?: string
  entrantType: 'agency' | 'student'
  entrantAvatarFluid?: React.ComponentProps<typeof Avatar>['fluid']
  entrantName?: string
  entrantHref?: string
  client?: string
  school?: string
}

export const WinnerInfo: React.FC<WinnerInfoProps> = ({
  award,
  specialAward,
  year,
  categoryLine1,
  categoryLine2,
  tags = [],
  creditsHTML,
  entrantType,
  entrantAvatarFluid,
  entrantName,
  entrantHref,
  school,
  client,
  ...props
}) => {
  const hasTags = tags.length > 0

  return (
    <View
      {...props}
      css={mq({
        backgroundColor: t.c.White,
        paddingTop: linearScale('2rem', '4rem'),
        paddingBottom: linearScale('2rem', '4rem'),
        paddingLeft: linearScale('2rem', '7.25rem'),
        paddingRight: linearScale('2rem', '7.25rem'),
        textAlign: ['center', 'left'],
      })}
    >
      <View
        css={mq({
          display: 'grid',
          rowGap: linearScale('1.25rem', '1.5rem'),
          columnGap: '5rem',
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
            type={award}
            css={mq({ width: linearScale('0.8125rem', '1.25rem') })}
          />
          {specialAward && (
            <Heading
              css={{
                color: t.c.Red40,
                lineHeight: t.lh.Solid,
              }}
            >
              {specialAward}
            </Heading>
          )}
        </View>
        <View css={mq({ lineHeight: t.lh.Copy, gridColumn: [null, 1] })}>
          <View as="p" css={{ fontWeight: t.fw.Semibold }}>
            {year}
          </View>
          <View as="p" css={{ fontWeight: t.fw.Semibold }}>
            {categoryLine1}
          </View>
          <View as="p">{categoryLine2}</View>
        </View>
        {hasTags && (
          <View
            as="ul"
            css={mq({
              display: 'flex',
              marginRight: negateScale(linearScale('0.5rem', '0.875rem')),
              marginBottom: negateScale(linearScale('0.5rem', '0.875rem')),
              flexWrap: 'wrap',
              justifyContent: ['center', 'left'],
              gridColumn: [null, 1],
            })}
          >
            {tags.map(
              (tag) =>
                tag?.url && (
                  <View
                    key={tag.tag}
                    as="li"
                    css={mq({
                      paddingRight: linearScale('0.5rem', '0.875rem'),
                      paddingBottom: linearScale('0.5rem', '0.875rem'),
                    })}
                  >
                    <Tag href={tag.url}>{tag.tag}</Tag>
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
          {entrantType === 'student' && (
            <>
              <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                  Student Name
                </View>
                <View as="dd">{entrantName}</View>
              </View>
              <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                  School
                </View>
                <View as="dd">{school}</View>
              </View>
            </>
          )}
          {entrantType === 'agency' && (
            <>
              <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                  Client
                </View>
                <View as="dd">{client}</View>
              </View>
              <View as="dl" css={{ lineHeight: t.lh.Copy }}>
                <View as="dt" css={{ fontWeight: t.fw.Semibold }}>
                  Creative Agency
                </View>
                <View as="dd">
                  <Anchor href={entrantHref!} css={{ display: 'inline-block' }}>
                    <View
                      css={mq({
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        gap: linearScale('0.25rem', '0.5rem', 'space'),
                        alignItems: 'center',
                      })}
                    >
                      <Avatar variant="small" fluid={entrantAvatarFluid} />
                      {entrantName}
                    </View>
                  </Anchor>
                </View>
              </View>
            </>
          )}
          <HTMLContent html={creditsHTML} />
        </View>
      </View>
    </View>
  )
}
