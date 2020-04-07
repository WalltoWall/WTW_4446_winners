import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Layout, LayoutProps } from '../components/Layout'
import { View } from '../components/View'
import { HTMLContent } from '../components/HTMLContent'
import { SVG } from '../components/SVG'

import { HeroSlice } from '../slices/HeroSlice'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'

import { t, mq, linearScale } from '../theme'
import { EVENT_SITE_URL } from '../constants'
import AssetAboutHeroPNG from '../assets/temp/about-hero.png'
import { ReactComponent as AssetAAFLogoSVG } from '../assets/aaf-logo.svg'

type AboutPageProps = LayoutProps

const sliceData = {
  hero: {
    textHTML: `
      <h1>
        <a href="/winners/">Each year, the Pele Awards recognizes excellence in advertising & design in Hawaii.</a>
      </h1>
      <p>
        The Pele Awards have been a part of Hawaii’s advertising and design community for more than 40 years. 
      </p> 
    `,
    imageAlt: 'Winners Trophy.',
    imageSrc: AssetAboutHeroPNG,
  },
  sponsors: {},
  boxes: {
    whiteBoxChildren: (
      <HTMLContent
        html={`
          <h1>
            About AAF Hawaii
          </h1> 
          <p>
            The Pele Awards is one of fifteen National District Competitions for the 
            American Advertising Awards (also known as the ADDYs). The Pele Gold 
            winners in all national categories are sent to the National Finals 
            of the American Advertising Awards Competition to represent District 13.
          </p>
        `}
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
    ),
    redBoxChildren: (
      <SVG
        svg={AssetAAFLogoSVG}
        x={236}
        y={147}
        css={mq({ width: ['6rem', '8rem', '10rem', '12rem'] })}
      />
    ),
  },
  cta: {
    buttonText: 'Learn More',
    buttonHref: EVENT_SITE_URL,
    textHTML: `
      <h1>
        Get ready to enter for 2021!
      </h1> 
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Curabitur blandit tempus porttitor. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Maecenas faucibus mollis interdum.
      </p>
    `,
  },
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>

      <HeroSlice
        textHTML={sliceData.hero.textHTML}
        imageAlt={sliceData.hero.imageAlt}
        imageSrc={sliceData.hero.imageSrc}
      />

      <ColoredBoxesSlice
        whiteBoxChildren={sliceData.boxes.whiteBoxChildren}
        redBoxChildren={sliceData.boxes.redBoxChildren}
      />

      <CallToActionSlice
        buttonHref={sliceData.cta.buttonHref}
        buttonText={sliceData.cta.buttonText}
        textHTML={sliceData.cta.textHTML}
      />
    </Layout>
  )
}

export default AboutPage
