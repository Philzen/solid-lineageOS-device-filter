import { JSXElement } from "solid-js";

export default function FilterForm(): JSXElement {
  return <form>
    <fieldset class="filter-form">
      <legend>Filter Options</legend>
      <div>
        <label for="minDevCount">Min. # of active Developers</label>
        <input type="number" id="minDevCount" min={0} value={2} />
      </div>
      <div>
        <label for="updateableFirmwareFlag">Firmware is updateable</label>
        <input id="updateableFirmwareFlag" type="checkbox" checked={true} />
      </div>
    </fieldset>
  </form>
}