import { join } from "path"
import { readFile } from "fs/promises"

const file = join(process.cwd(), "data/data.json")

export default async (_, res) => {
    const data = await readFile(file, "utf-8")
    const waifuScrape = JSON.parse(data)

    res.status(200).send(waifuScrape)
}