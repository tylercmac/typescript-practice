// import Todo from "./components/Todo"
import React from "react";
import "./App.css";
import {Store} from './components/Store'
// import {sayHi} from "./components/Context"



function App(): JSX.Element {
  const {state, dispatch} = React.useContext(Store)

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes")

    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA'
    })
  }

  return (
<React.Fragment>
  <h1>Rick and Morty episode picker</h1>
  <p>Pick your favorite episode!</p>
</React.Fragment>
  );
}

export default App;
