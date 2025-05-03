const crypto = require("crypto");

module.exports = ({ env }) => ({
    apiToken: {
      salt: env('API_TOKEN_SALT', process.env.API_TOKEN_SALT),
    },
    auth: {
      secret: env('ADMIN_JWT_SECRET', process.env.JWT_SECRET),
    },
  });