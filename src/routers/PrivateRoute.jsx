import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {

  if(rest.location.search){
    localStorage.setItem("lastSearch", rest.location.search);
  }
  
  localStorage.setItem("lastPath", rest.location.pathname);
  
  return (
    <Route {...rest} component={ (props) => (isAuthenticated) ? 
      (<Component {...props} />) : (<Redirect to="/login" />) } />
  )
}



PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}