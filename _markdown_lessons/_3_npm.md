# Techcareer Typescript
[GitHub](https://github.com/hamitmizrak/techcareer_2025_typescript_1)
[Techcareer Eğitim Linkleri](https://www.techcareer.net/courses)
---
## Npm Komutları
```sh

```
---

### **npm Komutları ve Açıklamaları**

`npm` (Node Package Manager), **Node.js ile birlikte gelen bir paket yönetim aracıdır.** npm, 
JavaScript projelerinde kullanılan kütüphaneleri ve bağımlılıkları kolayca yüklemek, yönetmek ve güncellemek için kullanılır.

---

### **Temel npm Komutları**

#### **1. `npm init`**
Yeni bir Node.js projesi başlatmak için kullanılır. Bu komut, proje klasörünüzde bir `package.json` dosyası oluşturur.

- **Kullanım:**
  ```bash
  npm init
  ```
- **Hızlı başlatma için:**
  ```bash
  npm init -y
  ```
  Bu komut, tüm varsayılan değerlerle `package.json` dosyasını oluşturur.

---

#### **2. `npm install` veya `npm i`**
Bir proje için bağımlılık yüklemek için kullanılır. Bu komut, bağımlılıkları `node_modules` klasörüne indirir.

- **Genel kullanım:**
  ```bash
  npm install <paket_adı>
  ```
  Örneğin:
  ```bash
  npm install express
  ```

- **Yerel Bağımlılık (Varsayılan):**
  - Paketler sadece proje içinde kullanılabilir. Bu bağımlılıklar `dependencies` bölümüne eklenir.

- **Geliştirme Bağımlılığı:**
  ```bash
  npm install <paket_adı> --save-dev
  ```
  Geliştirme sırasında kullanılan araçlar için bağımlılık ekler. Örneğin:
  ```bash
  npm install eslint --save-dev
  ```

- **Global Bağımlılık:**
  ```bash
  npm install -g <paket_adı>
  ```
  Paketler sistem genelinde kullanılabilir. Örneğin:
  ```bash
  npm install -g typescript
  ```

- **Tüm bağımlılıkları yüklemek:**
  Eğer `package.json` dosyasında listelenen tüm bağımlılıkları yüklemek istiyorsanız:
  ```bash
  npm install
  ```

---

#### **3. `npm uninstall` veya `npm remove`**
Yüklü bir paketi kaldırmak için kullanılır.

- **Kullanım:**
  ```bash
  npm uninstall <paket_adı>
  ```

- **Geliştirme bağımlılığını kaldırmak için:**
  ```bash
  npm uninstall <paket_adı> --save-dev
  ```

- **Global paketi kaldırmak için:**
  ```bash
  npm uninstall -g <paket_adı>
  ```

---

#### **4. `npm update`**
Projedeki bağımlılıkları güncellemek için kullanılır.

- **Tüm bağımlılıkları güncellemek için:**
  ```bash
  npm update
  ```

- **Belirli bir paketi güncellemek için:**
  ```bash
  npm update <paket_adı>
  ```

---

#### **5. `npm outdated`**
Projede yüklü olan bağımlılıkların güncel olup olmadığını kontrol eder. Güncellenmesi gereken paketleri listeler.

- **Kullanım:**
  ```bash
  npm outdated
  ```

Çıktı genellikle şu bilgileri içerir:
- **Current:** Yüklü sürüm.
- **Wanted:** package.json'da belirtilen sürüm.
- **Latest:** En son sürüm.

---

#### **6. `npm run`**
`package.json` dosyasındaki **scripts** bölümünde tanımlanmış özel komutları çalıştırır.

- **Kullanım:**
  ```bash
  npm run <komut_adı>
  ```
  Örneğin, `package.json` içinde şu script tanımlıysa:
  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```
  Komut şu şekilde çalıştırılır:
  ```bash
  npm run start
  ```

---

#### **7. `npm list`**
Proje veya globalde yüklü olan bağımlılıkları listeler.

- **Proje bağımlılıklarını listelemek:**
  ```bash
  npm list
  ```

- **Global bağımlılıkları listelemek:**
  ```bash
  npm list -g
  ```

- **Bağımlılıkların ağacını derinlemesine görmek:**
  ```bash
  npm list --depth=0
  ```

---

#### **8. `npm cache`**
npm’in önbelleğini yönetmek için kullanılır.

- **Önbelleği temizlemek:**
  ```bash
  npm cache clean --force
  ```

- **Önbellek doğrulaması:**
  ```bash
  npm cache verify
  ```

---

#### **9. `npm audit`**
Projede yüklü olan bağımlılıklarda güvenlik açıklarını tarar ve raporlar.

- **Tarama başlatmak:**
  ```bash
  npm audit
  ```

- **Düzeltmeler yapmak için:**
  ```bash
  npm audit fix
  ```

---

#### **10. `npm start`**
`package.json` dosyasındaki **start** script’ini çalıştırır.

- **Kullanım:**
  ```bash
  npm start
  ```

Eğer `package.json` içinde `start` script’i yoksa şu komutu çalıştırır:
```bash
node server.js
```

---

#### **11. `npm publish`**
Bir paketi npm’in çevrimiçi depolamasına yüklemek için kullanılır.

- **Kullanım:**
  ```bash
  npm publish
  ```

---

#### **12. `npm login`**
npm hesabına giriş yapmak için kullanılır. Paketleri yayınlamadan önce giriş yapmanız gerekir.

- **Kullanım:**
  ```bash
  npm login
  ```

---

#### **13. `npm pack`**
Bir Node.js paketini `.tgz` formatında sıkıştırır.

- **Kullanım:**
  ```bash
  npm pack
  ```

---

#### **14. `npm version`**
Proje sürümünü güncellemek için kullanılır.

- **Kullanım:**
  ```bash
  npm version <yeni_sürüm>
  ```

Örneğin:
```bash
npm version 1.0.1
```

---

#### **15. `npm rebuild`**
Tüm bağımlılıkları yeniden derlemek için kullanılır.

- **Kullanım:**
  ```bash
  npm rebuild
  ```

---

#### **16. `npm config`**
npm yapılandırmasını görmek veya değiştirmek için kullanılır.

- **Yapılandırmayı görmek:**
  ```bash
  npm config list
  ```

- **Yeni bir yapılandırma eklemek:**
  ```bash
  npm config set <ayar_ismi> <değer>
  ```
  Örneğin:
  ```bash
  npm config set registry https://registry.npmjs.org/
  ```

---

#### **17. `npm info`**
Belirli bir paketin detaylı bilgilerini görüntüler.

- **Kullanım:**
  ```bash
  npm info <paket_adı>
  ```

---

### **npm Komutları Özet**

| **Komut**              | **Açıklama**                                                                                   |
|-------------------------|-----------------------------------------------------------------------------------------------|
| `npm init`             | Yeni bir proje başlatır ve `package.json` oluşturur.                                          |
| `npm install`          | Paket yükler ve bağımlılıkları kurar.                                                         |
| `npm uninstall`        | Bir paketi kaldırır.                                                                          |
| `npm update`           | Bağımlılıkları günceller.                                                                     |
| `npm list`             | Yüklü paketleri listeler.                                                                     |
| `npm run`              | `package.json` içindeki script’leri çalıştırır.                                               |
| `npm start`            | Projeyi başlatır.                                                                             |
| `npm audit`            | Güvenlik açıklarını tarar ve düzeltme önerileri sunar.                                        |
| `npm cache`            | npm önbelleğini yönetir.                                                                      |
| `npm login`            | npm hesabına giriş yapar.                                                                     |

---

### **Sonuç**

npm, Node.js projelerinde kullanılan paketlerin yönetimini kolaylaştıran güçlü bir araçtır. 
Hem bağımlılıkları yönetmek hem de projeleri yapılandırmak için sıkça kullanılır. 
Yukarıdaki komutlar, npm’in temel işlevlerini anlamak ve projelerinizi verimli bir şekilde yönetmek için yeterli olacaktır.

