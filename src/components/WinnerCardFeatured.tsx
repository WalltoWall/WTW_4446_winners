import React from 'react'

import { t, mq, linearScale } from '../theme'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { Anchor } from './Anchor'
import { View } from './View'
import { AwardIcon } from './AwardIcon'
import { AgencyIdentifier } from './AgencyIdentifier'
import { WinnerCardImageLink, WinnerCardProps } from './WinnerCard'
import { PlayButton } from '../components/PlayButton'
import { useLightbox, LIGHTBOX_TYPE } from './Lightbox'

const variants = {
  featured: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
  },
  featuredWide: {
    imageAspectRatioX: 8,
    imageAspectRatioY: 5,
  },
} as const

type WinnerCardFeaturedProps = WinnerCardProps & {
  variant?: 'featured' | 'featuredWide'
}

const padding = linearScale('1rem', '1.5rem', 'space')

export const WinnerCardFeatured = ({
  variant: variantName = 'featured',
  videoUrl,
  href,
  title,
  subtitle,
  award,
  imageFluid,
  agencies = [],
  isNationalWinner,
  isNmgScholarshipWinner,
  year,
  ...props
}: WinnerCardFeaturedProps) => {
  const { setLightbox } = useLightbox()
  const variant = variants[variantName]

  const onClick = () => {
    if (!videoUrl) return

    setLightbox(videoUrl, LIGHTBOX_TYPE.VIDEO)
  }

  return (
    <View
      {...props}
      css={mq({
        backgroundColor: t.c.White,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      })}
    >
      <WinnerCardImageLink
        href={href}
        title={title}
        x={variant.imageAspectRatioX}
        y={variant.imageAspectRatioY}
        imageFluid={imageFluid}
        isNationalWinner={isNationalWinner}
        isNmgScholarshipWinner={isNmgScholarshipWinner}
        year={year}
        variant="wide"
      />
      <button
        onClick={onClick}
        css={mq({
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: t.colors.Gray90,
          paddingLeft: padding,
          paddingRight: padding,
          paddingTop: linearScale('.75rem', '1rem', 'space'),
          paddingBottom: linearScale('.75rem', '1rem', 'space'),
          cursor: videoUrl ? 'pointer' : 'not-allowed',

          '&:hover, &:focus': {
            '.play-button': {
              backgroundColor: videoUrl ? t.colors.Red40 : t.colors.Gray70,
            },
          },
        })}
      >
        <PlayButton
          forwardedAs="div"
          className="play-button"
          css={mq({
            backgroundColor: t.c.Black,
            width: linearScale('2rem', '2.25rem', 'space'),
            height: linearScale('2rem', '2.25rem', 'space'),
            flexShrink: 0,
            marginRight: linearScale('10px', '10px', 'space'),
            marginLeft: '-.125rem',
          })}
        />

        {subtitle && (
          <div>
            <Subheading
              forwardedAs="h4"
              css={mq({
                fontSize: t.fontSizeScales.b,
                marginBottom: videoUrl && '.125rem',
              })}
            >
              {subtitle}
            </Subheading>
            <p
              css={mq({
                color: t.colors.Gray50,
                fontSize: t.fontSizeScales['b-'],
              })}
            >
              {videoUrl ? 'Watch the presentation' : 'Video unavailable'}
            </p>
          </div>
        )}
      </button>

      <div
        className="metadata"
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          width: '100%',
          alignContent: ['center', 'stretch'],
          flexGrow: '1',
          gap: linearScale('0.375rem', '0.5rem', 'space'),
          gridTemplateColumns: '1fr auto',
          padding: padding,
          boxShadow: ['none', '0 -1px 0 rgba(0, 0, 0, 0.05)'],
          position: 'relative',
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.375rem', '0.5rem', 'space'),
            gridTemplateRows: ['auto', 'auto auto'],
            alignItems: ['center', 'start'],
            textAlign: 'inherit',
          })}
        >
          {title && (
            <Heading forwardedAs="h3" css={mq({ fontSize: t.f.m })}>
              <Anchor className="title-link" href={href}>
                {title}
              </Anchor>
            </Heading>
          )}
          <ul
            css={mq({
              display: 'grid',
              gap: linearScale('0.25rem', '0.375rem', 'space'),
              alignSelf: ['center', 'end'],
              justifyItems: 'start',
              justifySelf: 'start',
            })}
          >
            {agencies.map(agency => (
              <li key={agency.name}>
                <AgencyIdentifier
                  variant="small"
                  name={agency.name}
                  href={agency.url}
                  avatarFluid={agency.avatarFluid}
                />
              </li>
            ))}
          </ul>
        </div>

        {award && (
          <AwardIcon
            type={award}
            css={mq({
              width: ['0.8125rem', '1.25rem'],
              gridRow: 'auto',
              justifySelf: 'end',
              alignSelf: 'end',
            })}
          />
        )}
      </div>
    </View>
  )
}
