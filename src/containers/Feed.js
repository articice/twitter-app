import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTwitter } from '../actions'
import Post from '../components/Post'

class Feed extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
    }

    render() {
        const { query, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0

        return (
            <div class="row">
            {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
            </span>
            }
            <div class="posts-container">
                {posts.map(post =>
                    <Post
                        key={post.id}
                        {...post}

                    />
                )}
            </div>
            </div>
        )
    }

    componentDidMount() {
        const { dispatch, query } = this.props;
        dispatch(fetchTwitter(query));
    }
}


const mapStateToProps = state => {
    const {
        isFetching,
        lastUpdated,
        items,
        query
    } = state.posts;

    return {
        query,
        posts: items || [],
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Feed)
