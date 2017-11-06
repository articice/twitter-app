import React from 'react'
import PropTypes from 'prop-types'
import Post from '../components/Post'

const Feed = ({ posts, onPostClick }) => (
  <div class="posts-container">
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}

      />
    )}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default Feed
