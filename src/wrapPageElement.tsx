import React from 'react'
import { WrapPageElementBrowserArgs } from 'gatsby'

import { Lightbox } from './components/Lightbox'

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Lightbox>{element}</Lightbox>
}
