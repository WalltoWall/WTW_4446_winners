import React from 'react'
import { Helmet } from 'react-helmet-async'

import { EVENT_SITE_URL } from '../constants'
import { Layout, LayoutProps } from '../components/Layout'
import AssetAboutHeroPNG from '../assets/temp/about-hero.png'
import { HeroSlice } from '../slices/HeroSlice'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'

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
        whiteBoxChildren={<>Hello</>}
        redBoxChildren={<>Red</>}
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
