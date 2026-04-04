const fs = require('fs');
const date = new Date().toISOString().slice(0, 10);
const content = `REACT_APP_BUILD_DATE=${date}\n`;
fs.writeFileSync('.env', content);
console.log(`Set REACT_APP_BUILD_DATE to ${date}`);
