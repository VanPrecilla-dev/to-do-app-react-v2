import React, { useContext } from "react";
import classes from "./HeaderUI.module.css";
import { CiGrid41 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

import { Context } from "../context/contextAPI";
import Note from "./Note";

const Header = () => {
  const { darkMode, modeViewFunction, listViewFunction, gridViewFunction } = useContext(Context);


  

  return (
    <>
      <div id="header" className={classes.header}>
        <h1 id="title" className={darkMode ? classes.h1 : classes.lightH1 }>
          TO DO
        </h1>

        <div id="btnDiv" className={classes.imgBtnDiv}>
          <button className={classes.imgBtn} onClick={() => gridViewFunction()}>
            <CiGrid41 className={darkMode ? classes.imgIcon : classes.ligthImgIcon} />
          </button>
          <button className={classes.imgBtn} onClick={() => listViewFunction()}>
            <CiViewList className={darkMode ? classes.imgIcon : classes.ligthImgIcon} />
          </button>
          <button className={classes.imgBtn} onClick={() => modeViewFunction()}> 
            {darkMode ? <MdLightMode className={classes.imgIcon} /> : <MdModeNight className={classes.ligthImgIcon} />  }
          </button>
        </div>
  
      </div>
      <Note />
      <div id="centerLine" className={darkMode ? classes.line : classes.lightLine}></div>
    </>
  );
};

export default Header;
