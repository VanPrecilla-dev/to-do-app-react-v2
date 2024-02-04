import React, { useContext } from "react";




import { Context } from "../context/contextAPI";
import GridMode from "./GridMode";
import ListMode from "./ListMode";



const AllTasks = () => {
  const {
    gridMode
  } = useContext(Context);

  
  return (
   
    <>
      {gridMode ? <GridMode /> : <ListMode />}
    </>
   
  );
};

export default AllTasks;

