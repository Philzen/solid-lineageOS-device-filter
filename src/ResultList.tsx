import { For, JSXElement, Resource } from "solid-js";

interface ResultListProps {
  deviceList: Resource<string[]>
}

export default function ResultList(props: ResultListProps): JSXElement {
  return <ul>
    <For each={props.deviceList()}>
      {(device: string) => (
        <li>
          <a href={`https://wiki.lineageos.org/devices/${device}/`}>
            <span>Market Name</span> <span>({device})</span>
          </a>
          &nbsp;| <span>N Devs</span>
        </li>
      )}
    </For>
  </ul> 
}
