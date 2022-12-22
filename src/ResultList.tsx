import { createResource, For, JSXElement, Resource, Show } from "solid-js";
import fetchDeviceData from "./fetch/deviceData";
import LineageDeviceInfo from "./types/LineageDeviceInfo";

interface ResultListProps {
  deviceList: Resource<string[]>
  minDevCount: number
}


export default function ResultList(props: ResultListProps): JSXElement {
  
  if (props.deviceList() === undefined) return

  const deviceData: {[key: string]: Resource<LineageDeviceInfo>} = {}
  
  return <ul>
    <For each={props.deviceList()}>
      {(device: string) => {
        if (deviceData[device] === undefined) {
          deviceData[device] = createResource(device, fetchDeviceData)[0]
        }
        return (
          <Show when={
            deviceData[device].loading || (deviceData[device]()?.maintainers.length || 0) >= props.minDevCount
          }>
            <li>
              <Show
                when={!deviceData[device].loading}
                fallback={<span>{device} &ndash; Loading data...</span>}>
                <a href={`https://wiki.lineageos.org/devices/${device}/`}>
                  <span>{deviceData[device]()?.vendor} {deviceData[device]()?.name}</span> <strong>[{device}]</strong>
                </a>
              &nbsp;&ndash; <span>{deviceData[device]()?.maintainers.length} Devs</span>
              </Show>
            </li>
          </Show>
        )
      }}
    </For>
  </ul> 
}
