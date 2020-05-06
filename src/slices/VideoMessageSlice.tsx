import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { useLightbox, LIGHTBOX_TYPE } from '../components/Lightbox'

import { mq, t, linearScale } from '../theme'
import { View, ViewProps } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { ImageContainer } from '../components/ImageContainer'
import { PlayButton } from '../components/PlayButton'
import { Button } from '../components/Button'
import { Link } from '../components/Link'

const Box = ({ children, ...props }: { children: React.ReactNode }) => (
  <View
    css={mq({
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: linearScale('40px', '80px', 'space'),
      minHeight: [null, null, '25rem', '32rem'],
    })}
    {...props}
  >
    {children}
  </View>
)

type VideoMessageSliceProps = ViewProps & {
  textHTML?: string
  buttonHref?: string
  buttonText?: string
  videoUrl?: string
  videoThumbnailFluid?: FluidObject
}

export const VideoMessageSlice = ({
  textHTML,
  buttonHref,
  buttonText,
  videoUrl: videoSrc,
  videoThumbnailFluid,
  ...props
}: VideoMessageSliceProps) => {
  const { setLightbox } = useLightbox()

  const openVideo = () => {
    if (!videoSrc) return
    setLightbox(videoSrc, LIGHTBOX_TYPE.VIDEO)
  }

  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Xlarge"
      css={{ background: t.c.Gray95 }}
      {...props}
    >
      <View
        css={mq({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
        })}
      >
        <Box css={{ background: t.colors.White }}>
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('0.75rem', '1.5rem'),
            })}
          >
            <HTMLContent
              html={textHTML}
              componentOverrides={{
                h1: Comp => props => (
                  <View
                    as={Comp}
                    {...props}
                    css={mq({
                      fontSize: t.f.xl,
                      lineHeight: t.lh.Title,
                      marginTop: linearScale('2.25rem', '3rem'),
                      marginBottom: linearScale('1rem', '1.5rem'),
                      color: t.c.Black,
                      ...t.boxStyles.firstLastNoMargin,
                    })}
                  />
                ),
              }}
            />
            {buttonHref && (
              <Button
                forwardedAs={Link}
                href={buttonHref}
                css={{ justifySelf: 'center' }}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </Box>
        <Box
          css={{
            color: t.colors.White,
            background: t.colors.Black,
            padding: 0,
            position: 'relative',
          }}
        >
          {videoThumbnailFluid && (
            <ImageContainer
              css={mq({
                width: '100%',
                position: [null, 'absolute'],
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              })}
            >
              <GatsbyImage
                fluid={videoThumbnailFluid}
                css={mq({ height: ['auto', '100%'], width: '100%' })}
              />
            </ImageContainer>
          )}
          <button
            onClick={openVideo}
            css={{
              display: 'flex',
              width: '100%',
              alignSelf: 'stretch',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              '&:hover, &:focus': {
                '.play-button': {
                  backgroundColor: t.colors.Red40,
                },
              },
            }}
          >
            <PlayButton as="div" className="play-button" />
          </button>
        </Box>
      </View>
    </BoundedBox>
  )
}
