import {
    SEARCH, INVALIDATE,
    REQUEST, RECEIVE
} from '../actions'

const postsTwitter = (state = { }, action) => {
    switch (action.type) {
        case INVALIDATE:
        case RECEIVE:
        case REQUEST:
            return {
                ...state,
                items: posts(state[action.query], action)
            }
        default:
            return state
    }
}

const posts = (state = {
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
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.items,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

export default postsTwitter
