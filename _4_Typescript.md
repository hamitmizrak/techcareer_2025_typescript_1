# Typescript Öğreniyorum 
---

## Typescript Dersleri
```sh

```
---

### **TypeScript Nedir?**

TypeScript, **Microsoft** tarafından geliştirilmiş, açık kaynaklı bir **programlama dilidir.** TypeScript, **JavaScript'in bir üst kümesi (superset)** olarak tanımlanır ve JavaScript'in üzerine eklenen güçlü tip kontrolü (type checking) ve nesne yönelimli programlama (OOP) özellikleriyle, büyük ve karmaşık projelerde daha güvenilir ve ölçeklenebilir bir geliştirme ortamı sağlar.

TypeScript, JavaScript'in tüm özelliklerini destekler. Bunun yanı sıra, statik tip kontrolü, gelişmiş hata ayıklama ve modern JavaScript özelliklerini destekleyerek kodun daha okunabilir ve hatasız olmasını sağlar.

---

### **TypeScript’in Amacı**

- JavaScript'in dinamik yapısından kaynaklanan hataları önceden tespit etmek.
- Büyük ölçekli projelerde **tip güvenliği** sağlayarak daha tutarlı kod yazılmasına yardımcı olmak.
- Modern JavaScript özelliklerini (ES6 ve sonrası) destekleyerek, eski tarayıcılarla uyumlu hale getirmek.

---

### **TypeScript ile JavaScript Arasındaki Temel Farklar**

| **Özellik**            | **JavaScript**                                             | **TypeScript**                                               |
|-------------------------|-----------------------------------------------------------|-------------------------------------------------------------|
| **Tip Kontrolü**        | Dinamik (runtime sırasında kontrol edilir)                | Statik (derleme sırasında kontrol edilir)                   |
| **Tip Güvenliği**       | Yok                                                       | Var                                                         |
| **Nesne Yönelimli Destek**| Kısıtlı                                                 | Güçlü destek (sınıflar, arayüzler, kalıtım vb.)             |
| **Hata Yakalama**       | Çalışma zamanında                                         | Derleme zamanında                                           |
| **Modül Sistemi**       | ES6 ile sınırlı                                           | Daha gelişmiş ve özelleştirilebilir modül sistemleri         |
| **Derleme**             | Gerektirmez                                               | Gerektirir (JavaScript'e derlenir)                          |

---

### **TypeScript’in Özellikleri**

#### **1. Statik Tip Kontrolü (Static Typing)**
TypeScript’in en önemli özelliği, kod yazarken değişkenlerin, parametrelerin ve fonksiyonların türlerini belirleme yeteneğidir. Bu, tür uyuşmazlıklarından kaynaklanan hataları önler.

**Örnek:**
```typescript
let name: string = "John";
name = 123; // Hata: 'number' türü 'string' türüne atanamaz.
```

---

#### **2. Nesne Yönelimli Programlama (Object-Oriented Programming - OOP)**
TypeScript, sınıflar (classes), arayüzler (interfaces), kalıtım (inheritance) gibi OOP konseptlerini destekler.

**Örnek:**
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person("Alice", 25);
console.log(person.greet());
```

---

#### **3. Arayüzler (Interfaces)**
Arayüzler, TypeScript'te nesnelerin ve sınıfların yapısını tanımlamak için kullanılır. Kodun daha düzenli ve anlaşılır olmasını sağlar.

**Örnek:**
```typescript
interface User {
    id: number;
    username: string;
    isAdmin: boolean;
}

const user: User = {
    id: 1,
    username: "john_doe",
    isAdmin: true
};
```

---

#### **4. Modülerlik**
TypeScript, modern modül sistemlerini destekler. Kodun farklı dosyalara bölünmesini ve modüller aracılığıyla yeniden kullanılabilir hale gelmesini sağlar.

**Örnek:**
```typescript
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// app.ts
import { add } from './math';
console.log(add(5, 10)); // 15
```

---

#### **5. Tip Çıkarsama (Type Inference)**
TypeScript, bazı durumlarda değişkenlerin türlerini otomatik olarak belirleyebilir.

**Örnek:**
```typescript
let message = "Hello, TypeScript!"; // 'message' otomatik olarak 'string' türünde olur.
```

---

#### **6. Derleme (Compilation)**
TypeScript, doğrudan tarayıcılar veya Node.js tarafından çalıştırılamaz. Yazılan TypeScript kodu, **JavaScript'e derlenir** (transpile edilir). Bu işlem, `tsc` (TypeScript Compiler) aracılığıyla yapılır.

**Örnek:**
- TypeScript dosyası (`example.ts`):
  ```typescript
  const message: string = "Hello, TypeScript!";
  console.log(message);
  ```

- Derleme:
  ```bash
  tsc example.ts
  ```

- Oluşan JavaScript dosyası (`example.js`):
  ```javascript
  var message = "Hello, TypeScript!";
  console.log(message);
  ```

---

#### **7. Gelişmiş IDE Desteği**
TypeScript’in statik tip sistemi, modern IDE’lerde (örneğin, Visual Studio Code) **kod tamamlama**, **hata vurgulama**, ve **otomatik düzeltme** gibi özelliklere olanak tanır.

---

#### **8. Enum ve Tip Birleştirme**
TypeScript, sabit değerleri gruplamak için `enum` yapısını destekler. Ayrıca `union` tipiyle bir değişkenin birden fazla türde değer alabileceği belirtilir.

**Enum Örneği:**
```typescript
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); // 1
```

**Union Tip Örneği:**
```typescript
let value: string | number;
value = "Hello"; // Geçerli
value = 42;      // Geçerli
```

---

#### **9. Decorators (Dekoratörler)**
TypeScript, sınıflar ve fonksiyonlar üzerinde özelleştirilmiş davranışlar tanımlamayı sağlayan **dekoratörler** sunar. Özellikle Angular gibi framework'lerde yaygın olarak kullanılır.

**Örnek:**
```typescript
function Log(target: any, propertyName: string) {
    console.log(`Property: ${propertyName}`);
}

class Person {
    @Log
    name: string;
}
```

---

### **TypeScript’in Kullanım Alanları**

1. **Web Uygulamaları Geliştirme**
   - Angular gibi TypeScript tabanlı framework'lerde yaygın olarak kullanılır.
   - React ve Vue.js ile uyumludur.

2. **Backend Uygulamaları**
   - Node.js projelerinde, özellikle büyük ölçekli ve karmaşık yapıya sahip uygulamalarda kullanılır.

3. **Hibrit Mobil Uygulama Geliştirme**
   - Ionic ve NativeScript gibi framework'lerde tercih edilir.

4. **Masaüstü Uygulama Geliştirme**
   - Electron framework'ü ile TypeScript, masaüstü uygulamalar için güçlü bir araçtır.

---

### **TypeScript’in Avantajları**

1. **Statik Tip Kontrolü**
   - Hataları erken yakalar ve daha güvenilir kod yazılmasını sağlar.

2. **Okunabilirlik ve Ölçeklenebilirlik**
   - Büyük projelerde kodun okunabilirliğini ve yönetilebilirliğini artırır.

3. **Modern JavaScript Desteği**
   - ES6 ve sonrası özellikleri destekler ve eski tarayıcılarla uyumlu JavaScript'e dönüştürür.

4. **IDE ve Araç Desteği**
   - Visual Studio Code gibi IDE'lerde mükemmel bir geliştirme deneyimi sunar.

5. **JavaScript ile Uyumlu**
   - Tüm mevcut JavaScript kütüphaneleri ve framework'leriyle uyum içinde çalışır.

---

### **TypeScript’in Dezavantajları**

1. **Derleme Süreci**
   - TypeScript kodunun çalıştırılmadan önce JavaScript'e derlenmesi gerekir.

2. **Öğrenme Eğrisi**
   - JavaScript bilen bir geliştirici için TypeScript’in tip sistemi ve ek özellikleri başlangıçta biraz karmaşık gelebilir.

3. **Proje Boyutu**
   - Tip kontrolü ve derleme aşaması, küçük projelerde gereksiz bir ek yük oluşturabilir.

---

### **TypeScript Nasıl Kurulur?**

1. **Node.js ve npm Kurulumu:**
   - [Node.js web sitesinden](https://nodejs.org) uygun sürümü indirin.
   - Kurulum sonrası `npm` kullanıma hazır olacaktır.

2. **TypeScript’i Global Kurulum:**
   ```bash
   npm install -g typescript
   ```

3. **TypeScript’in Doğrulanması:**
   ```bash
   tsc -v
   ```

4. **Basit Bir Örnek:**
   - Bir `example.ts` dosyası oluşturun:
     ```typescript
     let message: string = "Hello, TypeScript!";
     console.log(message);
     ```
   - Derleme:
     ```bash
     tsc example.ts
     ```
   - Çalıştırma:
     ```bash
     node example.js
     ```

---

### **Sonuç**

TypeScript, JavaScript’in güçlü yönlerini geliştirirken eksikliklerini gideren, modern ve güçlü bir programlama dilidir. Büyük ölçekli projelerde hata ayıklama, tip güvenliği ve kodun okunabilirliği gibi avantajları sayesinde, günümüzde birçok şirket ve geliştirici tarafından tercih edilmektedir.