const http = require('http');

const routes = [
  '/', '/about/', '/reviews/', '/team/', '/team/ronan-short-roofing/',
  '/roof-repairs/', '/metal-roofing/', '/roof-restoration/', '/gutters-and-downpipes/',
  '/services/', '/quote/', '/contact/', '/roofing-tips/',
  '/roofing-tips/roof-leak-what-to-note/', '/robots.txt', '/sitemap.xml',
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = ''; res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path, status: res.statusCode, hasH1: data.includes('<h1'), contentLength: data.length }));
    }).on('error', (err) => resolve({ path, error: err.message }));
  });
}
(async () => { const results = []; for (const route of routes) results.push(await checkRoute(route)); console.table(results); console.log(`All routes returned HTTP 200: ${results.every((r) => r.status === 200)}`); })();
