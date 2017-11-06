import * as actions from './index'

describe('actions', () => {
  it('search should create SEARCH action', () => {
    expect(actions.search('Redux')).toEqual({
      type: 'SEARCH',
      q: 'Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })
})
