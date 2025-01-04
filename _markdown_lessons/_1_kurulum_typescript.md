# Typescript Kurulumu 
---

## Programs Link
```sh
Nodejs                      : https://nodejs.org/en
Visual Studio Code(vs code) : https://code.visualstudio.com/
Git Download                : https://git-scm.com/downloads/win
```
---

## Version
```sh
code .
node -v
npm -v
git -v
```
---


## Dikkat Typescript
```sh
ls -al
pwd
Mutlaka bulunduğunuz yer index.html,style.css veya README.md olan yerde olmalıyız.
```
---

## package.json Config
```sh
npm init 
npm init -y
```
---


## Typescript kurulum
```sh

tsc --init --locale tr
tsc --init

npm install -g typescript
npm install  typescript --save-dev
tsc 
tsc -w (Sistem kendi compiler yapıyor yazdıklarımı kendi ekliyor.)
```
---


## Nodemon kurulum
```sh
npm install -g nodemon
npm install  nodemon --save-dev
nodemon ./src/index.js
```
---

## Concurrently => aynı anda birden fazla script çalıştırmak içindir
```sh
npm install concurrently --save-dev

package.json=> içine
"start": "concurrently \"npm run tsc_w\"  \"npm run nodemon\"  "
```
---



## NPM Komutlar
```sh
npm install
```
---




## package.json
```sh
{
  "main": "src/index.js",

  "scripts": {
    "tsc": "tsc ./src/index.ts",
    "tsc_w": "tsc -w ./src/index.ts",
    "nodemon": "nodemon ./src/index.js",
    "start": "concurrently \"npm run tsc_w\"  \"npm run nodemon\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  "devDependencies": {
    "concurrently": "^9.1.2",
    "nodemon": "^3.1.9",
    "typescript": "^5.7.2"
  }
}
```
---

