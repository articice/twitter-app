import {
    SEARCH, INVALIDATE,
    REQUEST, RECEIVE
} from '../actions'

const postsTwitter = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST:
            return {
                ...state,
                query: action.query,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                query: action.query,
                items: action.items,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

export default postsTwitter
