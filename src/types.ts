import { FluidObject } from 'gatsby-image'

export type Award = 'gold' | 'silver' | 'bronze'

export type Tag = { tag: string; url: string }

export interface Winner {
  url: string
  name?: string
  award?: Award
  category?: { line_1: string; line_2: string }
  imageFluid?: FluidObject
  agency: { name: string; url: string; avatarFluid?: FluidObject }
  nationalWinner: boolean
}

export interface WinnerSearchResult {
  url: string
  name: string
  award: string
  year: string
  categoryLine1: string
  agencyName?: string
  agencyUrl?: string
  agencyAvatarFluid?: FluidObject
  imageFluid?: FluidObject
}

export interface AdPersonSearchResult {
  url: string
  name: string
  special_award: string
  imageFluid?: FluidObject
}
