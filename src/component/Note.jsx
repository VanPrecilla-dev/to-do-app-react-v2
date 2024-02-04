import React, {useState} from "react";
import classes from "./NoteUI.module.css";
import { IoIosInformationCircle } from "react-icons/io";


const Note = () => {
  const [note, setNote] = useState(false);

  const openNotes = () => {
    setNote(!note);
  };

  return (
    <>
      <div className={classes.container}>
        <button type="button" onClick={openNotes} className={classes.noteBtn}><IoIosInformationCircle className={classes.noteIcon} />
</button>
        { note &&    

          <ul className={classes.notes}>
            <h5>Brief of this To-Do-App React by Van Precilla</h5>
            <li>
              Source Code:{" "}
              <a href="https://github.com/VanPrecilla-dev/to-do-app-react-v2.git"  target="_blank" rel="noreferrer" >
                {" "}
                Go to GitHub Source Code{" "}
              </a>
            </li>
            <li>Have ready data on the first load hard coded and will always shows every reload of page even deleted. </li>
            <li>
               This To-Do App use the local storage of the web browser to store
              data, dark mode status and grid mode status.
            </li>
            <li>
              This app implement a full CRUD using localStorage as the
              Database so every item you entered will persist and you need to delete it.
            </li>
            <li>
              This app has dark and light mode which is visible when yout
              toggle the button.
            </li>
            <li> This app has grid and table view.</li>
            <li>Designed by Van</li>
          </ul>

     }
     </div>
    </>
  );
};

export default Note;
