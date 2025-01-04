# Typescript Öğreniyorum 
---

## tsc ile nodemon arasındaki farklar 
```sh

```
---
### **`tsc` ve `nodemon` Arasındaki Farklar**

Hem `tsc` hem de `nodemon` geliştirme süreçlerinde farklı görevler için kullanılır ve işlevleri birbirinden oldukça farklıdır. İşte bu iki aracın ayrıntılı açıklaması ve farkları:

---

### **1. `tsc` (TypeScript Compiler)**

`tsc` (TypeScript Compiler), **TypeScript dosyalarını JavaScript'e derlemek** için kullanılır. TypeScript, tarayıcılar veya Node.js tarafından doğrudan çalıştırılamaz, bu yüzden önce JavaScript'e çevrilmesi gerekir.

#### **`tsc` Nasıl Çalışır?**
1. **Derleme İşlevi:** 
   - TypeScript dosyalarını (`.ts`) JavaScript dosyalarına (`.js`) dönüştürür.
   - Örnek:
     ```bash
     tsc index.ts
     ```
     Bu komut, `index.ts` dosyasını `index.js` olarak derler.

2. **Hata Yakalama:**
   - Derleme sırasında TypeScript’in statik tip kontrolü sayesinde hataları yakalar.
   - Örneğin, yanlış bir tür atanması durumunda `tsc` derleme sırasında hata verir:
     ```typescript
     let age: number = "20"; // Hata: 'string' türü 'number' türüne atanamaz.
     ```

3. **Özelleştirme:**
   - `tsconfig.json` ile proje ayarlarını özelleştirebilirsiniz (örneğin, çıkış klasörü, ECMAScript hedefi).

#### **`tsc`’nin Kullanım Alanları:**
- Sadece TypeScript dosyalarını derlemek.
- Kodun hatalarını derleme aşamasında yakalamak.
- Daha eski tarayıcılara uygun JavaScript kodu üretmek (ör. ES5 uyumlu JavaScript).

---

### **2. `nodemon`**

`nodemon`, **Node.js uygulamalarını geliştirme sırasında otomatik yeniden başlatma** işlevi sağlayan bir araçtır. Çalışmakta olan bir Node.js uygulamasında dosya değişiklikleri olduğunda, uygulamayı otomatik olarak yeniden başlatır.

#### **`nodemon` Nasıl Çalışır?**
1. **Otomatik Yeniden Başlatma:**
   - Kod dosyasında değişiklik yapıldığında, `nodemon` uygulamayı otomatik olarak yeniden başlatır.
   - Örnek:
     ```bash
     nodemon index.js
     ```

2. **Gerçek Zamanlı Geliştirme:**
   - Dosyayı manuel olarak yeniden çalıştırmak yerine, `nodemon` her değişiklik sonrası bunu sizin için yapar.

3. **Hızlı Test Döngüsü:**
   - Node.js uygulamalarını geliştirme sırasında testler veya uygulama değişiklikleri için zaman kazandırır.

#### **`nodemon`’un Kullanım Alanları:**
- Node.js projelerinde, özellikle gerçek zamanlı geliştirme süreçlerinde.
- Sunucu tabanlı uygulamaların geliştirilmesi sırasında test ve hata ayıklama.

---

### **`tsc` ve `nodemon` Arasındaki Temel Farklar**

| **Özellik**              | **`tsc`**                                      | **`nodemon`**                                    |
|---------------------------|-----------------------------------------------|------------------------------------------------|
| **Amacı**                | TypeScript dosyalarını JavaScript'e derler.   | Node.js uygulamalarını otomatik yeniden başlatır. |
| **Hedef Kullanım**        | TypeScript kodunu çalıştırılabilir JavaScript'e dönüştürmek. | Node.js projelerinde kod değişikliklerini otomatik olarak görmek. |
| **Hata Yakalama**         | Derleme sırasında TypeScript hatalarını bildirir. | Hata yakalama işlemi yoktur, sadece Node.js hatalarını gösterir. |
| **Otomatik İşlevsellik**  | Otomatik derleme modunda kullanılabilir (`--watch`). | Kod değişikliklerini algılar ve uygulamayı yeniden başlatır. |
| **Kapsam**               | TypeScript projeleri için kullanılır.          | Tüm Node.js projelerinde kullanılabilir.       |
| **Örnek Komut**           | `tsc index.ts`                               | `nodemon index.js`                             |

---

### **Birlikte Kullanım: `tsc` ve `nodemon`**

`tsc` ve `nodemon`, birlikte kullanıldığında daha verimli bir geliştirme süreci sunar. TypeScript ile çalışırken, derleme işlemini ve Node.js uygulamasını yeniden başlatma işlemini birleştirebilirsiniz.

#### **TypeScript ile `tsc` ve `nodemon` Entegrasyonu**
1. **Adım 1: `tsc --watch` ile Derlemeyi İzleme**
   - TypeScript dosyalarındaki değişiklikleri izlemek ve otomatik olarak derlemek için:
     ```bash
     tsc --watch
     ```

2. **Adım 2: `nodemon` ile JavaScript Dosyasını İzleme**
   - Derlenen JavaScript dosyasını otomatik olarak çalıştırmak için:
     ```bash
     nodemon dist/index.js
     ```

3. **Alternatif: `concurrently` ile Paralel Çalıştırma**
   - Hem `tsc --watch` hem de `nodemon`'u aynı anda çalıştırmak için `concurrently` modülünü kullanabilirsiniz.
   - Kurulum:
     ```bash
     npm install -g concurrently
     ```
   - Çalıştırma:
     ```bash
     concurrently "tsc --watch" "nodemon dist/index.js"
     ```

---

### **Sonuç**

- **`tsc`**, TypeScript kodunu JavaScript'e dönüştürmek için kullanılır ve derleme sırasında hataları yakalar.
- **`nodemon`**, Node.js projelerinde kod değişikliklerini algılayarak uygulamayı otomatik olarak yeniden başlatır.
- **Birlikte kullanıldığında**, TypeScript projelerinde derleme ve yeniden başlatma süreçleri otomatikleştirilerek geliştirme süreci hızlandırılabilir.