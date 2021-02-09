'use strict';
const https = require('https')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async updateContent(ctx) {
    const body = JSON.stringify({
      "event_type": "strapi_update"
    });
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/repos/cds-snc/cds-website-pr-bot/dispatches',
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'user-agent': 'node.js',
        'Authorization' : 'token ' + process.env.TOKEN
      }
    }
    
    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    req.on('error', error => {
      console.error(error)
    })
    req.write(body)
    req.end()
  }
};
