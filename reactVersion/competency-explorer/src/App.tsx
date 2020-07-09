import React from 'react';
import './App.css';
import { FilterBar } from './components/FilterBar';
import { ListView } from './components/ListView';
import { MatrixView } from './components/MatrixView';

function App() {
  return (
    <div className="layout">
      <FilterBar />
      <ListView />
      <MatrixView />
    </div>
  );
}

export default App;