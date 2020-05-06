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
    }
  }
`
