# Techcareer Typescript 
[GitHub](https://github.com/hamitmizrak/techcareer_2025_typescript_1)
[Techcareer Eğitim Linkleri](https://www.techcareer.net/courses)
---

## Git
```sh
git init
git add .
git commit -m "typescript init"
git remote add origin GitHubUrl
git push -u origin master

git status
git log

git clone https://github.com/hamitmizrak/techcareer_2025_typescript_1
```
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



## VS code Extensions
```sh
Auto Close Tag    => Jun Han
Auto Complete Tag => Jun Han
Auto Rename Tag   => Jun Han
Bootstrap 5 Quick Snippets => Anbuselvan Rocky
Css  Snippets => Joy-yu
Git Graph =>  mhutchie
gitignore => CodeZombie
Live Server => Ritwick Dey
Material Icon Theme => Philipp Kief


```
---

## Typescript
```sh

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
npm install -g typescript
npm install  typescript --save-dev

tsconfig dosyası için aşağıdaki komutu çalıştır:
tsc --init --locale tr
tsc --init

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

## Concurrently => Asenkron çalışma modeli (aynı anda birden fazla script çalıştırmak içindir)
```sh
npm install -g concurrently
npm install concurrently --save-dev

package.json=> içine
"asenkron": "concurrently \"npm run tsc_w\"  \"npm run nodemon\"",

npm run asenkron
```
---

##  Senkron çalışma modeli (aynı anda sadece bir script sonrasında diğer script çalışsın)
```sh
npm install -g npm-run-all
npm install npm-run-all --save-dev

package.json=> içine
"senkron": "nom-run-all --serial tsc_w nodemon",

npm run senkron
```
---

## NPM(Node Package Management) Komutlar
```sh
npm root                 (Çalıştığım projeki node_modules yolu)
npm root -g              (Global projeki node_modules you (C:\Users\Hamit-Mizrak\AppData\Roaming\npm\node_modules
)

npm list                 (Projemizdeki bağlımlıkları gösterir)
npm list -g              (Global bağlımlıkları gösterir (C:\Users\Hamit-Mizrak\AppData\Roaming\npm)
npm list --depth=0       (Çok derinlenmesine ağaç yapısında görmek istiyorsam)

npm info nodemon

npm config list          (Npm yapılandırılmalarını görmek içindir)
npm config set <key> <value> e.g(  npm config set registry https://registry.npmjs.org/  )


npm rebuild              (Tüm bağımlıkları yeniden derleme)

npm audit                (Güvenlik açıklarını tarar ve raporlar)
npm audit fix            (Güvenlik sorunlarını çözmek istiyorsak)

npm login                (npm hesabınıza giriş içindir)
npm pack                 (Node.js paketini .tgz sıkıştırma formatında ekliyor)
npm publish              (ilgili pkaeti npm gönder)

npm cache clean --force  (Dikkat: Eğer npm çalışmazsa yapınız. Ben mesul değilim.)
npm cache verify         (Cache dorğulaması)

```
---



## NPM(Node Package Management) Komutlar
```sh
npm install

npm i express
npm install -g express
npm install express
npm install express@4.21.2
npm install express@latest

npm install express --save
npm install express --save-dev

npm uninstall -g express

npm update
npm update express

npm outdated  
=> Projede eklenmiş bileşenlerin güncelliğini kontrol eder eğer güncel bir paket gelmişse bunu bize lsiteler
current: Şimdiki Yüklü Sürüm
latest: En son sürüm
Wanted: package.json'ki sürümdür
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
    "asenkron": "concurrently \"npm run tsc_w\"  \"npm run nodemon\"",
    "senkron": "nom-run-all --serial tsc_w nodemon",
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





