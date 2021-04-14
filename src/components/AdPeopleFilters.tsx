import React, { useRef } from 'react'
import { navigate } from 'gatsby'

import { t, mq, linearScale } from '../theme'

import { Heading } from '../components/Heading'
import { FormSelect } from '../components/FormSelect'
import { BoundedBox } from '../components/BoundedBox'

export type AdPeopleFiltersProps = {
  years: string[]
  initialYear: string
}

export const AdPeopleFilters = ({
  years,
  initialYear,
}: AdPeopleFiltersProps) => {
  const yearRef = useRef<HTMLSelectElement>(null)

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/ad-people/${e.target.value}/`)
  }

  return (
    <BoundedBox
      css={mq({
        backgroundColor: t.c.White,
        paddingTop: linearScale('1.5rem', '3.5rem'),
        paddingBottom: linearScale('1.5rem', '3.5rem'),
      })}
    >
      <div
        css={mq({
          display: 'grid',
          gap: linearScale('0.6875rem', '1.375rem', 'space'),
        })}
      >
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          Ad People of the Year
        </Heading>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.875rem', 'space'),
            justifyContent: 'center',
            justifyItems: 'center',
          })}
        >
          <FormSelect
            defaultValue={initialYear}
            onChange={handleYearChange}
            ref={yearRef}
            aria-label="Year"
            css={{ display: years.length > 1 ? 'auto' : 'none' }}
          >
            {years.map(y => (
              <option value={y} key={y}>
                {y}
              </option>
            ))}
          </FormSelect>
        </div>
      </div>
    </BoundedBox>
  )
}
