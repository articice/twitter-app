import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTwitter } from '../actions/index';

class SearchForm extends Component{
   static propTypes = {
       dispatch: PropTypes.func.isRequired,
       history: PropTypes.object.isRequired,
       location: PropTypes.object.isRequired,
   }

   render() {
       return (
           <div>
               <form action="search" className="SearchForm" onSubmit={e => {
                   e.preventDefault()
                   if (!this.input.value.trim()) {
                       return
                   }
                   const url = `/search?q=${this.input.value}`;
                   this.props.history.push(url);
                   this.props.dispatch(fetchTwitter(this.input.value))
               }}>
                   <input ref={(input) => this.input = input}
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
    //const { dispatch } = this.props;
    this.props.dispatch(fetchTwitter(this.input.value))
};

export default connect()(SearchForm)
