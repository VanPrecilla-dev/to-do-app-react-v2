import React, {useContext }from "react";
import classes from './ModalCardUI.module.css'
import { Context } from "../context/contextAPI";


const ModalCard = ({ children }) => {

  
  const {darkMode} = useContext(Context)

  return( 
  <div className={darkMode ? classes.modalCard : classes.lightModalCard}>{children}</div>
  
  );
};

export default ModalCard;
