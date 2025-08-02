module.exports = ({ env }) => ({
  url: env('SERVER_URL', ''),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});