import React, { useState } from 'react'
import classes from './BackgroundPicUI.module.css'
import { useContext } from 'react'
import { Context } from '../context/contextAPI'


const BackgroundPic = ({children}) => {

const {darkMode} = useContext(Context)


  return (

    <>
    <div className={darkMode ? classes.darkModeBG : classes.lightModeBG} >
        {children}
    </div>
   
    
    </>

  )
}

export default BackgroundPic