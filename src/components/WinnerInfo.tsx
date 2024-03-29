import React from 'react'
import { negateScale } from 'styled-system-scale'

import { Tag as TagType, Agency, Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AwardIcon, AwardIconProps } from './AwardIcon'
import { Heading } from './Heading'
import { HTMLContent } from './HTMLContent'
import { Tag } from './Tag'
import { AgencyIdentifier } from './AgencyIdentifier'

const awardTexts: Record<Award, string> = {
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Pele Gold',
}

const variants = {
  professional: {
    clientLabel: 'Client',
    agencyLabel: 'Creative Agency',
    agencyLabelPlural: 'Creative Agencies',
  },
  student: {
    clientLabel: 'School',
    agencyLabel: 'Student',
    agencyLabelPlural: 'Students',
  },
}

type WinnerInfoProps = ViewProps & {
  variant: keyof typeof variants
  award: AwardIconProps['type']
  specialAward?: string[]
  year?: string
  categoryLine1?: string
  categoryLine2?: string
  tags?: TagType[]
  creditsHTML?: string
  agencies?: Agency[]
  client?: string
}

export const WinnerInfo: React.FC<WinnerInfoProps> = ({
  variant: variantName,
  award,
  specialAward,
  year,
  categoryLine1,
  categoryLine2,
  tags = [],
  creditsHTML,
  agencies = [],
  client,
  ...props
}) => {
  const variant = variants[variantName]
  const hasTags = tags.length > 0
  const hasMultipleAgencies = agencies.length > 1
  const awardText = awardTexts[award]

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
      <div
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
        <div
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
          {(specialAward || awardText) && (
            <Heading
              css={{
                color: specialAward ? t.c.Red40 : t.c.Black,
                lineHeight: t.lh.Solid,
              }}
            >
              {specialAward?.[0] ?? awardText}
            </Heading>
          )}
        </div>
        <div css={mq({ lineHeight: t.lh.Copy, gridColumn: [null, 1] })}>
          <p css={{ fontWeight: t.fw.Semibold }}>{year}</p>
          <p css={{ fontWeight: t.fw.Semibold }}>{categoryLine1}</p>
          <p>{categoryLine2}</p>
        </div>
        {hasTags && (
          <ul
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
              tag =>
                tag?.url && (
                  <li
                    key={tag.tag}
                    css={mq({
                      paddingRight: linearScale('0.5rem', '0.875rem'),
                      paddingBottom: linearScale('0.5rem', '0.875rem'),
                    })}
                  >
                    <Tag href={tag.url}>{tag.tag}</Tag>
                  </li>
                ),
            )}
          </ul>
        )}
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.5rem', '1rem'),
            gridColumn: [null, 2],
            gridRow: [null, '1 / 4'],
            lineHeight: t.lh.Copy,
          })}
        >
          {client && (
            <dl>
              <dt css={{ fontWeight: t.fw.Semibold }}>{variant.clientLabel}</dt>
              <dd>{client}</dd>
            </dl>
          )}
          {agencies.length > 0 && (
            <dl>
              <dt css={{ fontWeight: t.fw.Semibold }}>
                {hasMultipleAgencies
                  ? variant.agencyLabelPlural
                  : variant.agencyLabel}
              </dt>
              <dd
                css={mq({
                  display: 'flex',
                  justifyContent: ['center', 'flex-start'],
                })}
              >
                <ul
                  css={mq({
                    display: 'grid',
                    gap: linearScale('0.25rem', '0.375rem', 'space'),
                    alignSelf: ['center', 'end'],
                    justifyItems: ['center', 'start'],
                  })}
                >
                  {agencies.map(agency => (
                    <li key={agency.name}>
                      <AgencyIdentifier
                        name={agency.name}
                        href={agency.url}
                        avatarFluid={agency.avatarFluid}
                      />
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          )}
          {creditsHTML && <HTMLContent html={creditsHTML} />}
        </div>
      </div>
    </View>
  )
}
