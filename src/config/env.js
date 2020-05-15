module.exports = {
  //  List of keys to send on client
  INCLUDE_KEYS: process.env.INCLUDE_KEYS
    ? process.env.INCLUDE_KEYS
      .split(',')
      .map(el => el.trim())
      .filter(el => el)
    : [],
  // Cookie key
  COOKIE_KEY: process.env.COOKIE_KEY || 'clientConfig',
  // Whish file must to send a cookie
  FILES_MATCH: process.env.FILES_MATCH || '**/*.@(html|htm)',
  PORT: parseInt(process.env.PORT, 10) || 8080
}
