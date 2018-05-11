const Parser = require('./parser')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const {Kayn, REGIONS, BasicJSCache} = require('kayn')

const basicJSCache = new BasicJSCache()

const p = new Parser()
const Set = require('./Set')

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
const API_KEY = config.API_KEY
const BASE_URL = 'http://www.probuilds.net/ajax/champBuilds?championId='

const kayn = Kayn(API_KEY)({ region: REGIONS.EUROPE_WEST})

kayn.Static.Champion.list()
    .then( reponse => {
        const champions = _.map(reponse.data)
        champions.forEach( champion => {
            const url = BASE_URL + champion.id
            sets = p.parse(url, champion.key)            
            sets.forEach( set => {
                fs.writeFileSync(path.join('sets', champion.key + '.json'), set.championKey)
            })
        })
    })
    .catch( error => console.error(error) )


