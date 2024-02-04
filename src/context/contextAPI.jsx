import React, { createContext, useEffect, useState } from "react";
import { dataStore } from "./dataStore";

export const Context = createContext(null);

const ContextAPIProvider = ({ children }) => {
  //checking is passing data thru context is not null to avoid error in screen
  if (Context === null) {
    console.error("null value");
  } else {
    console.log("successful established of contextApi");
  }

  const [tasks, setTasks] = useState([]); //state for addFunction
  const [viewTasks, setViewTasks] = useState([]); //state for view all list
  const [viewModal, setViewModal] = useState(true); //open & close view individual data
  const [indvTasks, setIndvTasks] = useState([]); //storing individual tasks from local storage
  const [yesEdit, setYesEdit] = useState(false); //open & close of edit form

  const [darkMode, setDarkMode] = useState(() => {
    const existingDarkModeStatus = localStorage.getItem("darkMode");
    const existingDarkModeStatusParse = existingDarkModeStatus
      ? JSON.parse(existingDarkModeStatus)
      : true;
    return existingDarkModeStatusParse;
  }); //set darkMode

  const [gridMode, setGridMode] = useState(() => {
    const existingGridModeStatus = localStorage.getItem("gridMode");
    const existingGridModeStatusParse = existingGridModeStatus
      ? JSON.parse(existingGridModeStatus)
      : true;
    return existingGridModeStatusParse;
  }); //change of gridMode

  const newViewTasks = viewTasks.filter(
    (item) => !Array.isArray(item) || item.length > 0
  ); //filtering viewTasks to remove all [] empty array and show only with list array



  //stored data and will show on first reload for user experience since this is local storage
  

  useEffect(() => {
    //put ready input set of data for user experience after first reload
    const storeData = () => {
      const addedLocalData = localStorage.getItem("tasks");
      const addedLocalDataParse = addedLocalData
        ? JSON.parse(addedLocalData)
        : [];

      const filterData = addedLocalDataParse.filter(item => !Array.isArray(item) || item.length > 0)

    //combining the old data in local storage and new data  from form into ne array
      if (filterData.length === 0 ) {
        const combineData = [...addedLocalDataParse, ...dataStore];
        const combineDataStringify = JSON.stringify(combineData);
        localStorage.setItem("tasks", combineDataStringify);
        console.log("successfully have ready data");
      }
    };

    storeData();
  }, []);

  useEffect(() => {
    //function for saving data to local storage and getting th enew data and reflect it to screen at the same time
    const combineLocalData = () => {
      //getting the existing data
      const existingLocalData = localStorage.getItem("tasks");
      const existingLocalDataParse = existingLocalData
        ? JSON.parse(existingLocalData)
        : [];

      //combining the old data in local storage and new data  from form into ne array
      const combineNewData = [...existingLocalDataParse, tasks];
      const combTaskStringify = JSON.stringify(combineNewData);

      //saving the new array combined data in localStorage
      localStorage.setItem("tasks", combTaskStringify);
      console.log("Data combined successfully.");

      //after saving, to reflect the changes in localstorage will use getItem() then store in viewTasks state. - tag the correct dependency w/c is setViewTasks
      const dataView = localStorage.getItem("tasks");
      const dataViewParse = JSON.parse(dataView);
      setViewTasks(dataViewParse);
    };

    //calling of function when there is changes in tasks state - connected to addFunction()
    combineLocalData();
    console.log("tasks", tasks);
  }, [tasks, setViewTasks]); //always tag the correct dependency

  //useEffect for real time updating of darkmode in local storage
  useEffect(() => {
    const getDarkModeStatus = () => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      console.log("Dark Mode Status", darkMode);
    };

    getDarkModeStatus();
  }, [setDarkMode, darkMode]);

  //setting gridMode status in local storage
  useEffect(() => {
    const getGridModeStatus = () => {
      localStorage.setItem("gridMode", JSON.stringify(gridMode));
      console.log("Dark Mode Status", gridMode);
    };

    getGridModeStatus();
  }, [gridMode, setGridMode]);

  //for adding new data to localStorage
  const addFunction = (arrayData) => {
    setTasks(arrayData);
  };

  //view function for individual tasks
  const viewFunction = (id) => {
    const indidvidualGetItem = JSON.parse(localStorage.getItem("tasks"));
    indidvidualGetItem.forEach((element) => {
      if (element.id === id) {
        setIndvTasks(element);
      }
    });
  };

  //update data in local storage using unique ID
  const updateFunction = (id, updatedData) => {
    window.confirm("Are you sure you want to edit?");
    if (window.confirm) {
      const individualEditItem =
        JSON.parse(localStorage.getItem("tasks")) || [];
      individualEditItem.forEach((item, index) => {
        if (item.id === id) {
          individualEditItem[index] = { ...item, ...updatedData };
        }
      });
      localStorage.setItem("tasks", JSON.stringify(individualEditItem));
      setViewTasks(individualEditItem);
      alert("Successful Edit");
      setYesEdit(!yesEdit);
      setViewModal(!viewModal);
    }
  };

  //delete data in local storage filter id and update new set of array in local storage
  const deleteFunction = (id) => {
    window.confirm("Are you sure you want to delete it?");

    if (window.confirm) {
      const delGetItem = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedExistingData = delGetItem.filter((item) => item.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedExistingData));
      setViewTasks(updatedExistingData);
      alert("Successfull delete ");
    }
  };

  //for turning On grid view
  const gridViewFunction = () => {
    setGridMode(true);
  };

  //for turning On list view
  const listViewFunction = () => {
    setGridMode(false);
  };

  //for turning On & Off dark mode
  const modeViewFunction = () => {
    setDarkMode(!darkMode);
    console.log("dark mode", darkMode);
  };

  //back-up funtion for reserved button to remove the data in local storage
  const removeLocalStorage = () => {
    localStorage.removeItem("tasks");
    alert(
      'Succesful delete of "tasks" in LocalStorage. Please check, do not reload if its gone and close this page. Thanks '
    );
  };

  return (
    <>
      <Context.Provider
        value={{
          addFunction,
          newViewTasks,
          viewFunction,
          indvTasks,
          setIndvTasks,
          deleteFunction,
          updateFunction,
          yesEdit,
          setYesEdit,
          viewModal,
          setViewModal,
          removeLocalStorage,
          darkMode,
          setDarkMode,
          modeViewFunction,
          gridViewFunction,
          listViewFunction,
          gridMode,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextAPIProvider;
