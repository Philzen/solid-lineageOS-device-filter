import type { Component } from 'solid-js';

import styles from './App.module.css';
import ResultList from './ResultList';
import FilterForm from './FilterForm';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Lineage OS Device selection helper</h1>
        <FilterForm />
      </header>
      <main>
        <ResultList />
      </main>
    </div>
  );
};

export default App;
