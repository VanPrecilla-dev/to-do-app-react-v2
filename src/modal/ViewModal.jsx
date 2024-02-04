import React, { useEffect } from "react";
import { useContext } from "react";

import classes from "./ViewModalUI.module.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Context } from "../context/contextAPI";
import { CgCloseR } from "react-icons/cg";
import ModalCard from "../container/ModalCard";

const ViewModal = (props) => {
  const {
    indvTasks,
    viewModal,
    setViewModal,
    deleteFunction,
    setYesEdit,
    viewFunction,
  } = useContext(Context);

  const closeModal = () => setViewModal(!viewModal);

  const deleteHandler = (id) => {
    deleteFunction(id);
    setViewModal(!viewModal);
  };

  const editHandler = (id) => {
    viewFunction(id);
    setYesEdit(true);
    setViewModal(!viewModal);
  };

  return (
    <ModalCard>
      <div className={classes.modalContainer}>
        <div>
          <h1>View Data for Title {indvTasks.title} </h1>
          <button onClick={() => closeModal()} className={classes.closeBtn}><CgCloseR className={classes.iconBtn}/></button>
          <table>
            <tr className={classes.trDiv}>
              <td className={classes.tdLabelDiv}>ID No.</td>
              <td className={classes.inputTable}>{indvTasks.id}</td>
            </tr>
            <tr className={classes.trDiv}>
              <td className={classes.tdLabelDiv}>Title</td>
              <td className={classes.inputTable}>{indvTasks.title}</td>
            </tr>
            <tr className={classes.trDiv}>
              <td className={classes.tdLabelDiv}>Description</td>
              <td className={classes.inputTable}>{indvTasks.description}</td>
            </tr>
            <tr className={classes.trDiv}>
              <td className={classes.tdLabelDiv}>Date & Time</td>
              <td className={classes.inputTable}>{indvTasks.datetime} </td>
            </tr>

            <tr className={classes.trDiv}>
              <td className={classes.tdLabelDiv}>Status</td>
              <td  className={classes.inputTable}>{indvTasks.status}</td>
            </tr>
          </table>
        </div>

        <div>
 
          <button onClick={() => editHandler(indvTasks.id)} className={classes.modalButton}>
            <FaRegEdit className={classes.modalIcon}/>
          </button>
          <button onClick={() => deleteHandler(indvTasks.id)} className={classes.modalButton} >
            <RiDeleteBin2Fill className={classes.modalIcon}/>
          </button>
        </div>
      </div>
    </ModalCard>
  );
};

export default ViewModal;
