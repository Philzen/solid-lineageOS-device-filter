import GithubDirectory from "../types/GithubDirectory";

async function fetchFirmwareUpdateableDevices(): Promise<string[]> {
  const response = await fetch(
    "https://api.github.com/repos/LineageOS/lineage_wiki/contents/pages/fw_update"
  )
  const results = await response.json()
  return results.map((item: GithubDirectory) => item.name.split('.md')[0]);  
}

export default fetchFirmwareUpdateableDevices