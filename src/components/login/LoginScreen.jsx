import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () =>{
  
    
     let lastSearch = localStorage.getItem("lastSearch") || "";
     let lastPath = localStorage.getItem("lastPath") || "/";
    
    if(lastSearch !== undefined){

      lastPath+=lastSearch
    }

    dispatch({
      type: types.login,
      payload: {
        name: "Bastian"
      }
    })
                    
    history.replace(lastPath);

  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

    </div>
  )
}
