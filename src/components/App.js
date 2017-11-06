import React from 'react'
import SearchForm from './SearchForm'
import Filters from './Filters'
import VisibleFeed from '../containers/VisibleFeed'

const App = ({ match: { params }}) => (
  <div>
    <SearchForm />
    <Filters />
    <VisibleFeed q={ params.q || '#JavaScript' }/>
  </div>
)

export default App
