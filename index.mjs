import waifuScrape from "./src/waifuScrape.mjs"
import { writeFile } from "fs"
import { join } from "path"
import chalk from "chalk"

const outputFile = join(process.cwd(), "data/data.json")
const baseUrl = "http://jurnalotaku.com/tag/waifu-wednesday/page/1"

// Start scrape the data here
async function scrape() {
  const response = await waifuScrape(baseUrl)
  const data = await response
  writeFile(outputFile, JSON.stringify(data), (err) => {
    if (err) console.log(err)
    console.log(chalk.blue.bgYellow(`\n =========Scraping data successfully finished========= \n`))
  })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping Start========= \n`))
scrape()
