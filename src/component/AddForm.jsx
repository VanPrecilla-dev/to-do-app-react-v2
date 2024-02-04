import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { Context } from "../context/contextAPI";
import Card from "../container/Card";
import classes from "./AddFormUI.module.css";
import ViewModal from "../modal/ViewModal";

//also as EditForm Component
const AddForm = () => {
  const {
    addFunction,
    updateFunction,
    yesEdit,
    setYesEdit,
    indvTasks,
    setIndvTasks,
    viewModal,
  } = useContext(Context);

  /* const [id] = useState(`toDoId-${uuidv4()}`) */
  const [toDo, setToDo] = useState([]);

  const addFormValue = (e) => {
    setToDo({ ...toDo, [e.currentTarget.id]: e.target.value });
  };

  const editFormValue = (e) => {
    setIndvTasks({ ...indvTasks, [e.currentTarget.id]: e.target.value });
  };

  const addForm = (e) => {
    e.preventDefault();
    const id = `toDoId-${uuidv4()}`;
    addFunction({ ...toDo, id: id });
    setToDo(""); //for reset form
  };

  const updateHandler = (e, id, updatedData) => {
    e.preventDefault();
    updateFunction(id, updatedData);
  };

  return (
    <>
      <Card>
        <div id="addFormContainer" className={classes.formContainer}>
          <form
            id="addForm"
            onSubmit={(e) => {
              yesEdit ? updateHandler(e, indvTasks.id, indvTasks) : addForm(e);
            }}
          >
            {yesEdit && (
              <div>
                <h3>Editing Task with Title: {indvTasks.title}</h3>
              </div>
            )}
            <div id="titleDiv" className={classes.groupDiv}>
              <div className={classes.labelDiv}>
                <label htmlFor="title" className={classes.label}>
                  Title:{" "}
                </label>
              </div>
              <div className={classes.inputDiv}>
                <input
                  type="text"
                  id="title"
                  value={yesEdit ? indvTasks.title : toDo.title || ""}
                  placeholder="Task Titles: Spark Your Journey!"
                  maxLength={100}
                  className={classes.input}
                  onChange={yesEdit ? editFormValue : addFormValue}
                  required
                />
              </div>
            </div>

            <div id="descriptionDiv" className={classes.groupDiv}>
              <div className={classes.labelDiv}>
                <label htmlFor="description" className={classes.label}>
                  Description:{" "}
                </label>
              </div>
              <div className={classes.inputDiv}>
                <textarea
                  id="description"
                  value={
                    yesEdit ? indvTasks.description : toDo.description || ""
                  }
                  placeholder="Describe your tasks with flair – make each word count!"
                  rows="7"
                  cols="39"
                  maxLength={300}
                  max-row="50"
                  className={classes.input}
                  onChange={yesEdit ? editFormValue : addFormValue}
                />
              </div>
            </div>

            <div id="dateDiv" className={classes.groupDiv}>
              <div className={classes.labelDiv}>
                <label htmlFor="datetime" className={classes.label}>
                  Date & Time:{" "}
                </label>
              </div>
              <div className={classes.inputDiv}>
                <input
                  type="datetime-local"
                  id="datetime"
                  value={yesEdit ? indvTasks.datetime : toDo.datetime || ""}
                  className={classes.input}
                  onChange={yesEdit ? editFormValue : addFormValue}
                  required
                />
              </div>
            </div>

            <div id="statusDiv" className={classes.groupDiv}>
              <div className={classes.labelDiv}>
                <label htmlFor="status" className={classes.label}>
                  Status:{" "}
                </label>
              </div>
              <div className={classes.inputDiv}>
                <select
                  id="status"
                  name="status"
                  className={classes.input}
                  onChange={yesEdit ? editFormValue : addFormValue}
                  value={yesEdit ? indvTasks.status : toDo.status || ""}
                >
                  <option value="Choose Status">Choose Status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div>
              {!yesEdit ? (
                <button id="addBtn" className={classes.button} type="submit">
                  ADD
                </button>
              ) : (
                <div>
                  <button id="editBtn" className={classes.button} type="submit">
                    Edit
                  </button>{" "}
                  <button
                    id="cancelBtn"
                    className={classes.button}
                    type="button"
                    onClick={() => setYesEdit(!yesEdit)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </Card>

      {!viewModal && <ViewModal />}
    </>
  );
};

export default AddForm;

