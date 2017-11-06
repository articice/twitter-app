export const SEARCH = 'SEARCH'
export const REQUEST = 'REQUEST'
export const RECEIVE = 'RECEIVE'
export const INVALIDATE = 'INVALIDATE'
export const ERROR = 'ERROR'

export const search = (text) => ({
  type: SEARCH,
  q: text
})

export const receive = (query, items) => ({
    type: RECEIVE,
    query,
    items,
    receivedAt: Date.now()
})

export const error = (query, err) => ({
    type: ERROR,
    query,
    err
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const fetchTwitterSearch = query => dispatch => {
  return fetch(`http://localhost:3001/search?q=${query}`)
    .then(response => response.json())
    .then(json => {
        //TODO check json
        dispatch(receive(query, json.statuses))
    })
    .catch(err => dispatch(error(query, err)))
}

export const fetchTwitter = query => (dispatch, getState) => {
    return dispatch(fetchTwitterSearch(query))
}