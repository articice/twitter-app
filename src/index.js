import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './components/App'
import reducer from './reducers'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
      <Router>
          <Switch>
              <Route exact path='/' component={App}/>
              <Route path='/search?q=:q' component={App}/>
          </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);
