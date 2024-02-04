import AddForm from "./component/AddForm";
import AllTasks from "./component/AllTasks";
import Header from "./component/Header";
import BackgroundPic from "./container/BackgroundPic";
import ContextAPIProvider from "./context/contextAPI";

function App() {
  return (
    <>
   
      <ContextAPIProvider>
        <div id="mainContainer">
        <BackgroundPic>
          <Header />
          <AddForm />
          <AllTasks />
        </BackgroundPic>
        </div>
      </ContextAPIProvider>

    </>
  );
}

export default App;
