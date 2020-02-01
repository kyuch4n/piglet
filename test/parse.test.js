const fs = require("fs")
const path = require("path")
const parser = require("../dist/index.js").default
const snippet = fs.readFileSync(path.resolve(__dirname, "./codes/snippet_1.piglet"), "utf8")

const result = parser.parse(snippet)
console.log(result)