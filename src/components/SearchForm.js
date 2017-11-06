import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { search } from '../actions'
import { fetchTwitter } from '../actions/index';

class SearchForm extends Component{
   static propTypes = {
       dispatch: PropTypes.func.isRequired,
       input: PropTypes.string
   }

   render() {
       return (
           <div>
               <form action="search" className="SearchForm" onSubmit={e => {
                   e.preventDefault()
                   if (!this.props.input.trim()) {
                       return
                   }
                   this.props.dispatch(search(this.props.input))
               }}>
                   <input ref={q => {
                       this.props.input = q
                   }}
                          type="text"
                          autoComplete="off" //TODO: add hashtag suggests
                          className="SearchForm--input col-md-4"
                   />
                   <div className="col-md-12 SearchForm--search-btn" style={{textAlign: 'right'}}>
                       <button type="submit" style={{display: 'inline-block'}}>
                           Search
                       </button>
                   </div>
               </form>
           </div>
       )
   }
}

SearchForm.componentDidMount = function() {
    const { dispatch } = this.props;
    this.props.dispatch(fetchTwitter(this.props.input))
};

export default connect()(SearchForm)
