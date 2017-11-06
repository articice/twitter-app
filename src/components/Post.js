import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ onClick, completed, text }) => (
  <div class="twitter-post"
    //onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
      <div class="twitter-post-text">{text}</div>
  </div>
)

Post.propTypes = {
  //onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Post
