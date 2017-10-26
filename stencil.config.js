exports.config = {
  bundles: [
    { components: ['my-first-component'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
