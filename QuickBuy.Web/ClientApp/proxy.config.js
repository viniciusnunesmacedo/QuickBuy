const proxy = [
  {
    context: '/api',
    target: 'http://localhost:44302',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;
