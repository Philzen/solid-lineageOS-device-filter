import { Component, createResource, createSignal, Show } from 'solid-js';

import styles from './App.module.css';
import fetchDeviceList from './fetch/deviceList';
import fetchFirmwareUpdateableDevices from './fetch/firmwareUpdateable';
import ResultList from './ResultList';
import FilterForm from './FilterForm';

const [allDevicesList] = createResource(fetchDeviceList);
const [firmwareUpdateableDevices] = createResource(fetchFirmwareUpdateableDevices);

const [showOnlyFirmwareUpdateable, setShowOnlyFirmwareUpdateable] = createSignal(true);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Lineage OS Device selection helper</h1>
        <FilterForm 
          showOnlyFirmwareUpdateable={showOnlyFirmwareUpdateable()} 
          setOnlyFirmwareUpdateableFlag={setShowOnlyFirmwareUpdateable}
        />
      </header>
      <main>
        <Show 
          when={!allDevicesList.loading && !firmwareUpdateableDevices.loading} 
          fallback={<div>Loading data...</div>}
        >
          <ResultList deviceList={showOnlyFirmwareUpdateable() ? firmwareUpdateableDevices : allDevicesList} />
        </Show>
      </main>
    </div>
  );
};

export default App;
