import React from 'react'
import classes from './CardUI.module.css'
import { useContext } from 'react'
import { Context } from '../context/contextAPI'


const Card = ({children}) => {

  const {darkMode} = useContext(Context)


  return (
    <div className={darkMode ? classes.card : classes.lightCard}>
        {children}
    </div>
  )
}

export default Card