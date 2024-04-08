const crypto = require("crypto");

module.exports = ({ env }) => ({
    apiToken: {
      salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('base64')),
    },
    auth: {
      secret: env('ADMIN_JWT_SECRET', '84d69d082ca568fd62f5887d4b42ab97'),
    },
  });