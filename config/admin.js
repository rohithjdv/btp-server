module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "uhrf8uh9ruv9"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", 4),
  },
});
