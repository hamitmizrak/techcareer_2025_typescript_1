# Typescript Öğreniyorum 
---

## npm run otomatik çalıştırmak concurrently Dersleri
```sh

```
---


**Scripts içindeki `tsc_w` ve `nodemon` komutlarını otomatik çalıştırmak için `concurrently` modülünü kullanabilirsiniz.** Böylece iki komut aynı anda çalıştırılabilir.

### **Güncellenmiş Adımlar**

#### 1. **`concurrently` Modülünü Yükleme**
Terminalden aşağıdaki komutu çalıştırarak `concurrently` paketini projenize ekleyin:
```bash
npm install --save-dev concurrently
```

---

#### 2. **`package.json` Güncellemesi**
`package.json` dosyasındaki **scripts** kısmını aşağıdaki şekilde güncelleyin:

```json
"scripts": {
    "tsc": "tsc ./src/index.ts",
    "tsc_w": "tsc -w ./src/index.ts",
    "nodemon": "nodemon ./src/index.js",
    "start": "concurrently \"npm run tsc_w\" \"npm run nodemon\"",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

- **`start` script'i**, `npm run tsc_w` ve `npm run nodemon` komutlarını aynı anda çalıştırır.

---

#### 3. **Komutları Çalıştırma**
Artık terminalde aşağıdaki komutla hem `tsc_w` hem de `nodemon` aynı anda çalıştırılabilir:
```bash
npm run start
```

---

### **Çalışma Süreci**
1. `npm run start` komutu çalıştırıldığında:
   - **`tsc -w`**: TypeScript dosyalarını izler ve her değişiklikte yeniden derler.
   - **`nodemon`**: Derlenen JavaScript dosyasını izler ve her değişiklikte Node.js uygulamasını yeniden başlatır.

2. Tüm değişiklikler anında hem derlenir hem de çalıştırılır.

---

Bu yöntem, geliştirme sırasında hem TypeScript dosyalarını derleyip hem de Node.js uygulamasını otomatik olarak çalıştırmanızı sağlar.