// ESM formatını kullanıyorsanız: package.json dosyasına "type": "module" eklediğinizden emin olun ve aşağıdaki kodu kullanın:
// tsconfig.js 
// "module": "esnext",
// "target": "es2016",
// "esModuleInterop": true

import open from 'open';

(async () => {
  await open('http://localhost:3000'); // Tarayıcıda URL açar
})();


//commonjs formatını kullanıyorsanız: import yerine require kullanmalısınız:
// tsconfig.js 
// "module": "commonjs",
// "target": "es2016",
// "esModuleInterop": true

// const open = require('open');

//  (async () => {
// await open('http://localhost:3000'); // tarayıcıda url açar
//  })();