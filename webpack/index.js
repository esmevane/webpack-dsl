const entry = require("./entry")
const output = require("./output")
const modules = require("./module")

const properties = [ entry, output, modules ]

const composePropertyWithEnv =
  env =>
    (config, property) =>
      Object.assign({}, config, property(env))

module.exports =
  env =>
    properties.reduce(composePropertyWithEnv(env), {})
