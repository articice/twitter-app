import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filters = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_1D">
      Today
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_1W">
      This week
    </FilterLink>
  </p>
)

export default Filters
