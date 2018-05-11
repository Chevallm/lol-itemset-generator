const Parser = require('./parser')
const fs = require('fs')
const {Kayn, REGIONS, BasicJSCache} = require('kayn')

const basicJSCache = new BasicJSCache()

const p = new Parser()

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
const API_KEY = config.API_KEY

const kayn = Kayn(API_KEY)({ region: REGIONS.EUROPE_WEST})

kayn.Champion.list()
    .then( data => console.log(data))
    .catch( error => console.error(error))

