import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { Anchor } from '../components/Anchor'
import { View } from '../components/View'
import { ImageContainer } from '../components/ImageContainer'
import { HTMLContent } from '../components/HTMLContent'

export type OrganizerMessagesSliceProps = {
  children?: React.ReactNode
  heading?: string
  buttonHref?: string
  buttonText?: string
  textHTML?: string
}

export const OrganizerMessagesSlice = ({
  children,
  heading,
  buttonHref,
  buttonText,
  textHTML,
}: OrganizerMessagesSliceProps) => {
  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Large"
      css={{
        backgroundColor: t.c.Red40,
        color: t.c.White,
      }}
    >
      <div
        css={mq({
          display: 'grid',
          gap: linearScale('2rem', '5rem'),
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.5rem', '0.75rem'),
            textAlign: 'center',
            justifyItems: 'center',
          })}
        >
          {textHTML && (
            <HTMLContent
              html={textHTML}
              componentOverrides={{
                h1: Comp => props => (
                  <View
                    as={Comp}
                    {...props}
                    css={mq({
                      color: t.c.White,
                      fontSize: t.f.xl,
                    })}
                  />
                ),
                a: Comp => props => (
                  <View
                    as={Comp}
                    {...props}
                    css={mq({
                      color: t.c.White,
                      textDecoration: 'underline',
                      '&:hover, &:focus': {
                        color: t.c.White,
                      },
                    })}
                  />
                ),
              }}
            />
          )}

          {!textHTML && (
            <>
              {heading && (
                <Heading
                  css={mq({
                    fontSize: t.f.xl,
                  })}
                >
                  {heading}
                </Heading>
              )}
            </>
          )}

          {buttonHref && (
            <Anchor
              href={buttonHref}
              css={{
                '&:hover, &:focus': {
                  color: 'inherit',
                  textDecoration: 'underline',
                },
              }}
            >
              {buttonText}
            </Anchor>
          )}
        </div>
        {children && (
          <div
            css={mq({
              display: 'grid',
              gridTemplateColumns: [null, 'repeat(2, 1fr)'],
              gap: linearScale('2rem', '5rem'),
              alignItems: 'start',
            })}
          >
            {children}
          </div>
        )}
      </div>
    </BoundedBox>
  )
}

export type OrganizerMessagesSliceMessageProps = {
  textHTML?: string
  name?: string
  titleHTML?: string
  imageFluid?: FluidObject
  withQuotes?: boolean
}

OrganizerMessagesSlice.Message = ({
  textHTML,
  name,
  titleHTML,
  imageFluid,
  withQuotes = true,
}: OrganizerMessagesSliceMessageProps) => (
  <View
    css={mq({
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: linearScale('1rem', '2.25rem'),
    })}
  >
    <ImageContainer
      css={mq({
        width: linearScale('4rem', '6rem'),
        height: linearScale('4rem', '6rem'),
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: t.c.White,
      })}
    >
      {imageFluid && (
        <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
      )}
    </ImageContainer>
    <div
      css={mq({
        display: 'grid',
        gap: linearScale('0.75rem', '1.5rem'),
      })}
    >
      {textHTML && (
        <HTMLContent
          html={textHTML}
          css={{
            position: 'relative',
            '&::before': {
              display: withQuotes ? 'inline' : 'none',
              content: "'\\201C'",
              position: 'absolute',
              transform: 'translateX(-100%)',
            },
            '& :last-child': {
              '&::after': {
                display: withQuotes ? 'inline' : 'none',
                content: "'\\201D'",
              },
            },
          }}
        />
      )}
      {(name || titleHTML) && (
        <div css={{ lineHeight: t.lh.Copy }}>
          {name && <p css={{ fontWeight: t.fw.Semibold }}>{name}</p>}
          {titleHTML && <HTMLContent html={titleHTML} />}
        </div>
      )}
    </div>
  </View>
)
