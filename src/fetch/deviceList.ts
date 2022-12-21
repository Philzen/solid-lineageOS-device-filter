import GithubDirectory from "../types/GithubDirectory";

async function fetchDeviceList(): Promise<string[]> {
  const response = await fetch(
    "https://api.github.com/repos/LineageOS/lineage_wiki/contents/_data/devices"
  )
  const results = await response.json()
  return results.map((item: GithubDirectory) => item.name.split('.yml')[0]);
}

export default fetchDeviceList