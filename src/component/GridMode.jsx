import React, { useContext } from "react";
import classes from "./GridModeUI.module.css";

import { LuView } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { Context } from "../context/contextAPI";

import ListCardView from "../container/ListCardView";

const GridMode = () => {
  const {
    newViewTasks,
    viewFunction,
    deleteFunction,
    setYesEdit,
    viewModal,
    setViewModal,
    darkMode,
  } = useContext(Context);

  const viewModalHandler = (id) => {
    viewFunction(id);
    setViewModal(!viewModal);
  };

  const deleteHandler = (id) => {
    deleteFunction(id);
  };

  const editHandler = (id) => {
    viewFunction(id);
    setYesEdit(true);
  };

  return (
    <ListCardView>
      <div >
      { newViewTasks ? (
        newViewTasks.map((data, key) => {
          return (
            <div className={darkMode ? classes.gridBox : classes.lightGridBox}>
              <div key={key}>
                <p className={classes.numLabel}>No. {key + 1} </p>
                <label htmlFor="title" className={classes.labelView} >Title</label>
                <input type="text" id="title" value={data.title} className={classes.inputView} readOnly />
              </div>
              <div>
                <label htmlFor="dateTime" className={classes.labelView}>Date & Time</label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  value={data.datetime}
                  className={classes.inputView} 
                  readOnly
                />
              </div>
          
                <div className={classes.btnDiv}>
                  <button onClick={() => viewModalHandler(data.id)} className={classes.iconBtn} ><LuView className={darkMode ? classes.icon : classes.lightIcon}/></button>
                  <button onClick={() => editHandler(data.id)} className={classes.iconBtn}>
                  <FaRegEdit  className={darkMode ? classes.icon : classes.lightIcon}/>
                  </button>
                  <button onClick={() => deleteHandler(data.id)} className={classes.iconBtn} >
                  <RiDeleteBin2Fill className={darkMode ? classes.icon : classes.lightIcon}/>
                  </button>
                </div>
              </div>
    
          );
        })
      ) : (
        <h1 style={{ color: "white", fontSize: "150px" }}>
          You don't have to-do-list yet.
        </h1>
      )}

    </div>
    </ListCardView>
  );
};

export default GridMode;
