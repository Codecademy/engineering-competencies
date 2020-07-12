import React, { useEffect } from "react";
import "./App.scss";
import { FilterBar } from "./components/FilterBar";
import { ListView } from "./components/ListView";
import { MatrixView } from "./components/MatrixView";
import { useDispatch } from "react-redux";
import { loadFiles } from "./thunks/load";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFiles());
  }, []);

  return (
    <div className="layout">
      <FilterBar />
      <ListView />
      <MatrixView />
    </div>
  );
}

export default App;
