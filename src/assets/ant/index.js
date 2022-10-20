
const fs = require('fs')
const path = require('path')

let rand = Math.ceil(Math.random() * 243)
while (rand == 99 || rand == 115 || rand == 147) {
    rand = Math.ceil(Math.random() * 243)
}
const configjson = path.resolve(__dirname, './json', rand + '.json')

const data = fs.readFileSync(configjson, 'UTF-8').toString()
let attributes = JSON.parse(data).attributes
let background = attributes[0].value
let clothes = attributes[2].value
let hair = attributes[4].value
let accessories = attributes[7].value
let hat = attributes[8].value

console.log(configjson)
console.log(attributes,background,clothes,hair,accessories,hat)
console.log(rand)
