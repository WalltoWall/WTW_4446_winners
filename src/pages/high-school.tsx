import React from 'react'
import { Helmet } from 'react-helmet-async'

import { mq } from '../theme'

import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'

export const HighSchoolPage = () => (
  <Layout>
    <Helmet>
      <title>High School</title>
    </Helmet>
    <BoundedBox
      css={{
        backgroundImage:
          "url('https://images.prismic.io/peleawards/bcc30c5e-78d4-43c0-b1d8-89d2401104fe_background.jpg?auto=compress,format')",
        backgroundSize: 'cover',
        position: 'relative',
        height: '80vh',
      }}
    >
      <img
        src="https://images.prismic.io/peleawards/59edc04e-82ee-4368-94ef-9ed7ae3700e3_logo.png?auto=compress,format"
        css={mq({
          width: ['8rem', '10rem', '14rem'],
          maxWidth: '100%',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        })}
      />
      <img
        src="https://images.prismic.io/peleawards/df36a555-9549-439c-982c-a41d66b390ee_comingsoon.png?auto=compress,format"
        css={mq({
          width: '50%',
          maxWidth: '30rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
        })}
      />
    </BoundedBox>
  </Layout>
)

export default HighSchoolPage
