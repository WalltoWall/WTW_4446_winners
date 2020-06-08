import { graphql } from 'gatsby'

export const fragments = graphql`
  fragment SpecialAwardWinner on AirtableWinner {
    fields {
      url
      featured_image {
        fluid(maxWidth: 600) {
          ...GatsbyImgixFluid
        }
      }
    }
    data {
      name
      award
      national_winner
      special_award
      special_award_video
      agency {
        fields {
          url
          avatar {
            fluid(maxWidth: 40) {
              ...GatsbyImgixFluid
            }
          }
        }
        data {
          name
        }
      }
      year
    }
  }
`

export const GatsbyImgixFixedType = graphql`
  fragment GatsbyImgixFixed on ImgixFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFixed_noBase64 = graphql`
  fragment GatsbyImgixFixed_noBase64 on ImgixFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

// Not actually necessary - since Imgix is scaling,
// there is no "penalty" for including WebP by default
// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFixed_withWebp = graphql`
  fragment GatsbyImgixFixed_withWebp on ImgixFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

// Not actually necessary - since Imgix is scaling,
// there is no "penalty" for including WebP by default
// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFixed_withWebp_noBase64 = graphql`
  fragment GatsbyImgixFixed_withWebp_noBase64 on ImgixFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const GatsbyImgixFluidType = graphql`
  fragment GatsbyImgixFluid on ImgixFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFluid_noBase64 = graphql`
  fragment GatsbyImgixFluid_noBase64 on ImgixFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

// Not actually necessary - since Imgix is scaling,
// there is no "penalty" for including WebP by default
// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFluid_withWebp = graphql`
  fragment GatsbyImgixFluid_withWebp on ImgixFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

// Not actually necessary - since Imgix is scaling,
// there is no "penalty" for including WebP by default
// eslint-disable-next-line @typescript-eslint/camelcase
export const GatsbyImgixFluid_withWebp_noBase64 = graphql`
  fragment GatsbyImgixFluid_withWebp_noBase64 on ImgixFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
