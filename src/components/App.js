import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import Feed from '../containers/Feed'
import { fetchTwitter } from '../actions'
const queryString = require('query-string');

class App extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const { dispatch } = this.props;
    }

    render() {
        const { q } = queryString.parse(this.props.location.search);

        return (
            <div>
                <SearchForm history={this.props.history}/>
                <Feed query={ q || '#JavaScript' }/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        q: state.posts.query
    }
}


export default connect(mapStateToProps)(App)
