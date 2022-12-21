import { JSX, JSXElement, Setter } from "solid-js";

interface FilterFormProps {
  showOnlyFirmwareUpdateable: boolean
  setOnlyFirmwareUpdateableFlag: Setter<boolean>
}

export default function FilterForm(props: FilterFormProps): JSXElement {
  
  const setFirmwareUpdateableFlag: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    props.setOnlyFirmwareUpdateableFlag(event.currentTarget.checked)
  };
  
  return <form>
    <fieldset class="filter-form">
      <legend>Filter Options</legend>
      <div>
        <label for="minDevCount">Min. # of active Developers</label>
        <input type="number" id="minDevCount" min={0} value={2} />
      </div>
      <div>
        <label for="updateableFirmwareFlag">Firmware is updateable</label>
        <input 
          id="updateableFirmwareFlag" 
          type="checkbox" 
          checked={props.showOnlyFirmwareUpdateable} 
          onChange={setFirmwareUpdateableFlag}
        />
      </div>
    </fieldset>
  </form>
}