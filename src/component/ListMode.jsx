import React, { useContext } from "react";
import classes from './ListModeUI.module.css'

import { LuView } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { Context } from "../context/contextAPI";

import ListCardView from "../container/ListCardView";

const ListMode = () => {
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
        <table className={darkMode ? classes.tableContainer : classes.lightTableContainer}>
            <thead>
                <tr className={classes.tr}>
                    <th className={`${classes.labelView} ${classes.th}`}>No. </th>
                    <th className={`${classes.labelView} ${classes.th}`}>Title </th>
                    <th className={`${classes.labelView} ${classes.th}`}>Date & Time </th>
                    <th className={`${classes.labelView} ${classes.th}`}> </th>

                </tr>
            </thead>
            <tbody>
      { newViewTasks ? (
        newViewTasks.map((data, key) => {
          return (
            <tr  className={classes.tr}>
                <td className={`${classes.inputView} ${classes.td}`}>{key +1}</td>
                <td className={`${classes.inputView} ${classes.td}`}>{data.title}</td>
                <td className={`${classes.inputView} ${classes.td}`}>{data.datetime}</td>
                <td className={`${classes.inputView} ${classes.td}`}> <div className={classes.btnDiv}>
                  <button onClick={() => viewModalHandler(data.id)} className={classes.iconBtn}><LuView className={darkMode ? classes.icon : classes.lightIcon}/></button>
                  <button onClick={() => editHandler(data.id)} className={classes.iconBtn}>
                  <FaRegEdit  className={darkMode ? classes.icon : classes.lightIcon}/>
                  </button>
                  <button onClick={() => deleteHandler(data.id)} className={classes.iconBtn} >
                  <RiDeleteBin2Fill className={darkMode ? classes.icon : classes.lightIcon}/>
                  </button>
                </div></td>
            </tr>
               
          
          );
        })
      ) : (
        <h1 style={{ color: "white", fontSize: "150px" }}>
          You don't have to-do-list yet.
        </h1>
      )}
      </tbody>
        </table>
    </div>
    </ListCardView>
  );
};

export default ListMode;
