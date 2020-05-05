import { FluidObject } from 'gatsby-image'

export type Award = 'gold' | 'silver' | 'bronze'

export type Tag = { tag: string; url: string }

export interface Agency {
  name: string
  url: string
  avatarFluid?: FluidObject
}

export interface Winner {
  url: string
  name?: string
  award?: Award
  category?: { line_1: string; line_2: string }
  imageFluid?: FluidObject
  agencies: Agency[]
  nationalWinner: boolean
  nmgScholarshipWinner: boolean
  year?: number
}

export interface WinnerSearchResult {
  url: string
  name: string
  award: string
  year: string
  categoryLine1: string
  specialAward: string[]
  agencies: Agency[]
  imageFluid?: FluidObject
  type: 'Professional' | 'College' | 'High School'
}

export interface AdPersonSearchResult {
  url: string
  name: string
  special_award: string
  imageFluid?: FluidObject
}
