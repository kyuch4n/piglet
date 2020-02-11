const fs = require("fs")
const path = require("path")
const parser = require("../dist/lib/index.js").default
const snippet = fs.readFileSync(path.resolve(__dirname, "./codes/snippet_4.piglet"), "utf8")

const result = parser.parse(snippet)