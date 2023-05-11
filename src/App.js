import { Fragment } from "react";

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
      <main></main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
