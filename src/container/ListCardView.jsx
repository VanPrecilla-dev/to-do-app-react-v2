import React from 'react'
import classes from './ListCardViewUI.module.css'

const ListCardView = ({children}) => {
  return (
    <div className={classes.listCard}>
    {children}
</div>
  )
}

export default ListCardView