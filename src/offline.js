if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime') // eslint-disable-line

  runtime.install({
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');

      // Tells to new SW to take control immediately
      runtime.applyUpdate();
    },

    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');

      // Reload page to load the new version
      window.location.reload();
    }
  });
}
