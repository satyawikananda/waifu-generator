import data from "../data/data.json"
import { getWaifuFullName, getWaifuLastName, getWaifuName } from "./waifu.mjs"

console.log(getWaifuName(data))
console.log(getWaifuLastName(data))
console.log(getWaifuFullName(data))
