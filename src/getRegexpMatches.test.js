import { getRegexpMatches } from './getRegexpMatches'

const text = 'a ab abc abcd'

describe('getRegexpMatches', () => {
  it('returns an empty array if string contains no matches', () => {
    expect(getRegexpMatches(/foo/, text)).toEqual([])
  })

  it('returns an array with the single match if used with a RegExp without `g` flag', () => {
    const regexp = /ab(c)?/
    expect(getRegexpMatches(regexp, text)).toEqual([regexp.exec(text)])
  })

  it('finds all matches for a RegExp with `g` flag', () => {
    const regexp = /ab(c)?/g
    expect(getRegexpMatches(regexp, text)).toEqual([0, 1, 2].map(() => regexp.exec(text)))
  })
})
