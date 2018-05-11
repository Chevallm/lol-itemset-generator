const cheerio = require('cheerio')
const request = require('request')

const Set = require('./Set')

class Parser {

    constructor() {}

    parse(pageURL, championKey) {
        request(pageURL, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const matches = JSON.parse(html).matches
                console.log(`${matches.length} matches trouvés.`)
                const sets = new Array()
                matches.map( match => {
                    const $ = cheerio.load(match)
                    const player = $(".player").text()
                    const kda = $(".kda").text()
                    const build = new Array()
                    $(".items .slot img").each( (index, element) => {
                        const idItem = element.attribs['data-id']
                        if(idItem) {
                            build.push(idItem)
                        }
                    })
                    
                    const set = new Set(player, kda, build, championKey)
                    sets.push(set)
                    console.log(sets);
                    
                })
                return sets
            }
        })
    }
}

module.exports = Parser