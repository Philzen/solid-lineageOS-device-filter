import LineageDeviceInfo from "../types/LineageDeviceInfo";

async function fetchDeviceData(device: string): Promise<LineageDeviceInfo> {
  const response = await fetch(
    `https://raw.githubusercontent.com/LineageOS/lineage_wiki/master/_data/devices/${device}.yml`
  )
  const results = await response.text()
  return {
    codename: device,
    maintainers: results.split('maintainers: ')[1].substring(0, results.split('maintainers: ')[1].indexOf("\n")).split(','),
    name: results.split('\nname: ')[1].substring(0, results.split('\nname: ')[1].indexOf("\n")),
    vendor: results.split('\nvendor: ')[1].substring(0, results.split('\nvendor: ')[1].indexOf("\n")),
  };
}

export default fetchDeviceData