if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

export default () => ({
  port: process.env.PORT,
});
