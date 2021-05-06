/**
 * Create by fay on 4/27/20 11:59 下午
 */
const withNextConfig = require('@stjk/next/next/config');
const assetPrefix = process.env.NODE_ENV === 'production' ? '' : '';

module.exports = withNextConfig({
  assetPrefix,
})