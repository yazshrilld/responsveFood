import React from 'react'
import TextInputField from '../pages/InputField/TextInputField'
import barmenu from "../assets/images/Group 12.svg"

const Main = () => {    

  return (
    <>
      <TextInputField />
            <img src={barmenu} alt="bar_image" className='' />
    </>
  )
}

export default Main