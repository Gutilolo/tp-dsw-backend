const app = require('./app.js')
const config = require('./utils/config')
const logger = require('./utils/logger')

console.log(config.PORT)

app.listen(config.PORT, () => {
          logger.info(`Server running on port ${config.PORT}`)
})