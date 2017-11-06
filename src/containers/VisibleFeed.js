import { connect } from 'react-redux'
import Feed from './Feed'

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posts
    case 'SHOW_1W':
      return posts.filter(t => t.completed)
    case 'SHOW_1D':
      return posts.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  posts: getVisiblePosts(state.posts, state.visibilityFilter)
})

const mapDispatchToProps = {
  //onTodoClick: toggleTodo
}

const VisibleFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)

export default VisibleFeed
