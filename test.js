let context = require.context('./src', true, /.+\.test\.[tj]s?$/);
context.keys().forEach(context);
module.exports = context;