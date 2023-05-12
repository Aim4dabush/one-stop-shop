import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//components
import NavBar from "./components/nav-bar/NavBar";

//styles
import "./App.scss";

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
