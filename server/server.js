const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
const BUILD_DIR = path.join(__dirname, '..', 'build');

app.use(
  express.static(BUILD_DIR, {
    setHeaders: (res, filePath) => {
      if (/\.(js|css|png|jpg|svg|woff2?|pdf)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  })
);

app.get('*', (_req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`jeffpalm.dev serving on :${PORT}`);
});
