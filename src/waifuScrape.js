const axios = require('axios').default
const cheerio = require('cheerio')
const chalk = require('chalk')

const data = []
const WaifuGenerator = (url) => {
    return new Promise( async (resolve, reject) => {
        await axios.get(url)
         .then( async (response) => {
            if(response.status == 200){
                const html = response.data
                const $ = cheerio.load(html)
                const articleWaifu = $(".article-wrapper.article-tb.m-tb")
                articleWaifu.each((i, el) => {
                    const image = $(el).find(".article-inner-wrapper > .cover.size-a.has-depth > img").attr("src")
                    const anime = $(el).find(".article-inner-wrapper > .meta > a:nth-child(1)").text().trim()
                    const name = $(el).find(".article-inner-wrapper > .meta > a:nth-child(2).title > h3 > span").text().replace("[Waifu Wednesday]", "").trim()
                    data.push({
                        image,
                        anime,
                        name
                    })
                })
                const nextUrlPage = $(".nextpostslink").attr("href")
                if(nextUrlPage === undefined)  return false;
                console.log(chalk.yellow.bgBlue(`Scraping next url: ${nextUrlPage}`))
                return await WaifuGenerator(nextUrlPage)
            }
         })
         .catch((err) => {
            reject(err)
         })
        resolve(data)
    })
}

module.exports = WaifuGenerator