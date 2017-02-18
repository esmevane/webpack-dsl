const entry = require("./entry")
const output = require("./output")

const properties = [ entry, output ]

const composePropertyWithEnv =
  env =>
    (config, property) =>
      Object.assign({}, config, property(env))

module.exports =
  env =>
    properties.reduce(composePropertyWithEnv(env), {})
