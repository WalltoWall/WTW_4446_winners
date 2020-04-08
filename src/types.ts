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
}

export interface WinnerSearchResult {
  url: string
  name: string
  award: string
  categoryLine1: string
  imageFluid?: FluidObject
}

export interface AdPersonSearchResult {
  url: string
  name: string
  special_award: string
  imageFluid?: FluidObject
}
