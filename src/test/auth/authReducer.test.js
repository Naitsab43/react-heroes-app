import React from "react"
const { shallow } = require("enzyme")
const { authReducer } = require("../../auth/authReducer")
import "@testing-library/jest-dom"

describe('Pruebas en authReducer', () => {
  
  test('Debe de retornar el estado por defecto', () => {
    
    const wrapper = shallow(<authReducer />)

    expect(wrapper).toMatchSnapshot()

  })
  

  test('Debe de autenticar y colocar el name del usuario', () => {
    
  })
  

})
