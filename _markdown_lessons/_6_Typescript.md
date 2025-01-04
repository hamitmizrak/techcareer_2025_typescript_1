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


# tsc komutları

### **TypeScript Compiler (TSC) Komutları ve Açıklamaları**

`tsc` (TypeScript Compiler), TypeScript dosyalarını **JavaScript’e derlemek** için kullanılan bir araçtır. `tsc`, TypeScript projelerini derlemek, yapılandırma dosyaları oluşturmak ve özelleştirilmiş ayarlarla çalışmak gibi işlemleri gerçekleştirir. Aşağıda, `tsc` ile ilgili tüm önemli komutlar ve açıklamaları detaylı bir şekilde yer almaktadır.

---

### **1. `tsc` Komutu**

TypeScript dosyasını derlemek için temel komut:

```bash
tsc <dosya_adı>.ts
```

- Bu komut, belirtilen `.ts` dosyasını JavaScript dosyasına çevirir.
- Çıktı, aynı klasörde `.js` uzantılı bir dosya olarak oluşturulur.

**Örnek:**
```bash
tsc example.ts
```

- Derleme sonrası `example.js` dosyası oluşturulur.

---

### **2. Tüm Projeyi Derlemek**

Bir TypeScript projesinde tüm dosyaları derlemek için:

```bash
tsc
```

- Bu komut, proje kök dizinindeki `tsconfig.json` dosyasını kullanarak belirtilen tüm TypeScript dosyalarını derler.

**Not:**
- Eğer `tsconfig.json` yoksa, `tsc` bir hata verecektir.
- `tsconfig.json` dosyası, derleyiciye hangi dosyaları derlemesi gerektiğini ve hangi ayarları kullanacağını bildirir.

---

### **3. `--init` (Yapılandırma Dosyası Oluşturma)**

Bir proje için `tsconfig.json` dosyasını oluşturur:

```bash
tsc --init
```

**Sonuç:**
- Aşağıdaki gibi varsayılan ayarlarla bir `tsconfig.json` dosyası oluşturulur:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

### **4. Belirli Bir Dosyayı ve Hedef Klasörü Belirlemek**

TypeScript dosyasını belirli bir klasöre derlemek için:

```bash
tsc <dosya_adı>.ts --outDir <klasör_adı>
```

**Örnek:**
```bash
tsc example.ts --outDir dist
```

- Bu komut, `example.ts` dosyasını `dist/` klasörüne derler.

---

### **5. Tüm Dosyaları Belirli Bir Klasöre Derlemek**

Projedeki tüm TypeScript dosyalarını belirli bir klasöre derlemek için:

```bash
tsc --outDir <klasör_adı>
```

**Örnek:**
```bash
tsc --outDir dist
```

- Bu komut, `tsconfig.json` dosyasına göre tüm dosyaları `dist/` klasörüne derler.

---

### **6. Belirli Bir JavaScript Hedefi Belirlemek**

Derleme sonrası oluşturulacak JavaScript dosyasının ES5, ES6 gibi hangi ECMAScript sürümünü hedefleyeceğini belirtmek için:

```bash
tsc <dosya_adı>.ts --target <hedef_sürüm>
```

**Örnek:**
```bash
tsc example.ts --target es6
```

- Bu komut, `example.ts` dosyasını ES6 uyumlu bir JavaScript dosyasına çevirir.

---

### **7. Modül Türünü Belirlemek**

TypeScript dosyasında kullanılan modül sistemini belirtmek için:

```bash
tsc <dosya_adı>.ts --module <modül_türü>
```

**Örnek:**
```bash
tsc example.ts --module commonjs
```

Desteklenen modül türleri:
- `commonjs`: Node.js projeleri için.
- `amd`: Tarayıcılar için asenkron modül yükleme.
- `es2020`: ES modül sistemi.

---

### **8. Kaynak Haritası (Source Map) Oluşturma**

Source map dosyaları, hata ayıklamada TypeScript kodunu izlemek için kullanılır. Source map dosyası oluşturmak için:

```bash
tsc <dosya_adı>.ts --sourceMap
```

**Örnek:**
```bash
tsc example.ts --sourceMap
```

- Derleme sonrası `example.js` ve `example.js.map` dosyaları oluşturulur.
- `.map` dosyası, TypeScript kaynak koduna bağlantı sağlar.

---

### **9. İzleme Modu (Watch Mode)**

TypeScript dosyalarını sürekli izlemek ve her değişiklik sonrası yeniden derlemek için:

```bash
tsc <dosya_adı>.ts --watch
```

**Örnek:**
```bash
tsc example.ts --watch
```

- Bu komut, `example.ts` dosyasını sürekli izler ve değişiklik olduğunda otomatik olarak yeniden derler.

---

### **10. Sıkı Mod (Strict Mode)**

TypeScript'in sıkı tip kontrolü yapmasını sağlar:

```bash
tsc <dosya_adı>.ts --strict
```

**Özellikler:**
- **strictNullChecks**: Null ve undefined değerlerini sıkı bir şekilde kontrol eder.
- **noImplicitAny**: Belirsiz türlere (any) izin vermez.
- **alwaysStrict**: Kodun her zaman `strict` modunda çalışmasını sağlar.

**Örnek:**
```bash
tsc example.ts --strict
```

---

### **11. Dosya Kök Dizini Belirlemek**

Derlenecek TypeScript dosyalarının bulunduğu kök dizini belirtmek için:

```bash
tsc --rootDir <klasör_adı>
```

**Örnek:**
```bash
tsc --rootDir src
```

- Bu komut, `src/` dizinindeki TypeScript dosyalarını derler.

---

### **12. Çıktı Dosyasını Belirlemek**

Tek bir JavaScript dosyasında derleme yapmak için:

```bash
tsc <dosya_adı>.ts --outFile <dosya_adı>.js
```

**Örnek:**
```bash
tsc example.ts --outFile bundle.js
```

- Bu komut, tüm TypeScript kodunu `bundle.js` adında tek bir dosyada toplar.

---

### **13. Belirli Dosyaları Dahil Etmek veya Hariç Tutmak**

`tsconfig.json` içinde belirli dosyaları dahil etmek veya hariç tutmak için:

- Dahil Etme:
  ```json
  {
    "include": ["src/**/*.ts"]
  }
  ```

- Hariç Tutma:
  ```json
  {
    "exclude": ["node_modules", "dist"]
  }
  ```

---

### **14. Hata Ayıklama İçin Daha Fazla Bilgi**

Derleme sırasında daha fazla bilgi almak için:

```bash
tsc <dosya_adı>.ts --diagnostics
```

**Örnek:**
```bash
tsc example.ts --diagnostics
```

---

### **15. Yardım Komutları**

TypeScript derleyicisinin tüm özelliklerini görmek için:

```bash
tsc --help
```

---

### **Özet**

`tsc` komutları, TypeScript projelerini derlemek, yapılandırmak ve özelleştirmek için geniş bir seçenek yelpazesi sunar. Bu komutlar, derleme sürecini özelleştirmek ve projelerinizi daha etkili bir şekilde yönetmek için güçlü bir araç sağlar. Önemli komutlar ve açıklamaları, TypeScript projelerinde verimli bir geliştirme ortamı oluşturmanıza yardımcı olur.