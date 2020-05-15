function handler (signal) {
  console.log(`Received ${signal}`)
  process.exit()
}

process.on('SIGINT', handler)
process.on('SIGTERM', handler)
