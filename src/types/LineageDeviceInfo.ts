/**
 * Bare minimum of properties we're currently extracting and showing.
 * 
 * Ideally, we'll use a YAML parser in `fetch/deviceData.ts` and include all fields 
 * and subtypes in this interface. 
 * 
 * See @see https://github.com/LineageOS/lineage_wiki/blob/master/device_sample/sample.yml
 * for an example of available types.
 * 
 */

export default interface LineageDeviceInfo {
  codename: string
  maintainers: string[]
  name: string
  vendor: string
}