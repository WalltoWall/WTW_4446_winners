import { CloudinaryAssetFluidFragment } from './graphqlTypes'

export type Award = 'gold' | 'silver' | 'bronze'

export interface Winner {
  url: string
  name?: string
  award?: Award
  category?: { line_1: string; line_2: string }
  image?: CloudinaryAssetFluidFragment
}

