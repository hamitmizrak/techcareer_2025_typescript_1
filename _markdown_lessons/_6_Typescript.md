# Typescript Öğreniyorum 
---

## Typescript Dersleri
```sh

```
---


# Typescript konuları
 TypeScript konularını kapsayan bir ders planı için konu başlıkları:  

---

### **1. Giriş ve Temel Kavramlar**
- TypeScript Nedir?
- TypeScript ve JavaScript Arasındaki Farklar
- TypeScript'in Avantajları
- TypeScript ile Çalışma Ortamının Hazırlanması

### **2. Temel Türler (Types)**
- **Primitif Türler**: string, number, boolean, undefined, null
- Any, Unknown, Void, Never Türleri
- Type Inference (Tür Çıkarımı)

### **3. İleri Düzey Türler**
- Union ve Intersection Types
- Literal Types
- Tuple Types
- Enum Types

### **4. Fonksiyonlar**
- Fonksiyon Tanımları
- Parametre Türleri ve Varsayılan Değerler
- Rest Parametreleri
- Fonksiyon Dönüş Türleri
- Arrow Fonksiyonlar

### **5. Nesneler ve Arayüzler**
- Nesne Türleri
- Arayüz (Interface) Tanımları
- Genişletme (Extending Interfaces)
- Opsiyonel ve Readonly Özellikler

### **6. Sınıflar ve Nesne Yönelimli Programlama (OOP)**
- Sınıf Tanımları
- Constructor ve Public/Private/Protected Erişim Belirleyicileri
- Kalıtım (Inheritance)
- Statik Özellikler ve Metotlar
- Soyut Sınıflar (Abstract Classes)

### **7. İleri Düzey Kavramlar**
- Generics (Tür Bağımsız Kodlama)
- Type Aliases (Tür Takma Adları)
- Tür Koruma (Type Guards)
- Discriminated Unions
- Mapped Types ve Conditional Types

### **8. Modüller ve Namespace’ler**
- ES6 Modülleri
- TypeScript Modülleri
- Namespace Kullanımı

### **9. Dekoratörler**
- Dekoratör Nedir?
- Class, Method, Property ve Parameter Dekoratörleri
- Uygulama Alanları

### **10. Hata Yönetimi**
- Tür Kontrolü ile Hataların Önlenmesi
- Try-Catch ve Throw Kullanımı

### **11. TypeScript Araçları ve Yapılandırma**
- TypeScript Compiler (tsc) Kullanımı
- tsconfig.json Dosyasının Konfigürasyonu
- Linting ve Formatlama (ESLint, Prettier)

### **12. TypeScript ve Framework Entegrasyonları**
- Angular ile TypeScript
- React ile TypeScript
- Node.js ile TypeScript
- TypeORM ve TypeScript Kullanımı

### **13. Gerçek Hayat Uygulamaları**
- API İle İletişim
- Tip Güvenliği ile Çalışma
- Karmaşık Uygulama Yapıları

### **14. Proje ve Uygulama Örnekleri**
- Mini Projeler
- CRUD İşlemleri (Create, Read, Update, Delete)
- Kullanıcı Arayüzü ve Backend Uygulamaları

### **15. Sıkça Sorulan Sorular ve En İyi Uygulamalar**
- En İyi Uygulamalar (Best Practices)
- Performans Optimizasyonu
- Kodlama Standartları

---
#



### **TypeScript Nedir?**
TypeScript, **Microsoft** tarafından geliştirilmiş, açık kaynaklı bir programlama dilidir. **JavaScript’in bir üst kümesi** olarak kabul edilir ve **JavaScript’e tip güvenliği (type safety)** kazandırır. TypeScript, JavaScript kodlarını derleyerek (transpile ederek) çalışır, bu nedenle tarayıcılar veya Node.js üzerinde çalışabilmesi için TypeScript kodları, JavaScript’e dönüştürülür.

- **Statik Tip Kontrolü:** TypeScript, değişkenlerin türlerini derleme zamanında belirler. Bu, kod yazarken hataları daha erken fark etmeyi sağlar.
- **Gelişmiş IDE Desteği:** Otomatik tamamlama, hata bulma, yeniden düzenleme gibi özellikleri artırır.
- **ES6 ve Üzeri Özellikler:** TypeScript, modern JavaScript özelliklerini destekler ve bu özelliklerin eski tarayıcılarda çalışmasını sağlar.

---

### **TypeScript ve JavaScript Arasındaki Farklar**

| **Özellik**              | **TypeScript**                                     | **JavaScript**                               |
|---------------------------|---------------------------------------------------|---------------------------------------------|
| **Tip Güvenliği**         | Statik tip kontrolüne sahiptir.                   | Dinamik bir dil olduğundan tip kontrolü yoktur. |
| **Sınıflar ve Arayüzler** | TypeScript sınıflar ve arayüzlerle çalışmayı destekler. | JavaScript ES6 ile sınıf desteği sunar ancak arayüz desteği yoktur. |
| **Hata Tespiti**          | Derleme sırasında hataları algılar.              | Çalışma zamanında hataları algılar.         |
| **Kod Tamamlama**         | IDE'lerde daha güçlü kod tamamlama sağlar.       | Kod tamamlama özellikleri sınırlıdır.       |
| **Modül Sistemi**         | ES6 modüllerini ve diğer modül sistemlerini destekler. | Yalnızca ES6 modüllerini destekler.         |
| **Derleme**               | Derleme gerektirir (TypeScript -> JavaScript).   | Derleme gerekmez, doğrudan çalışır.         |
| **Backward Compatibility**| Daha eski JavaScript motorlarında çalışabilir.   | Tarayıcıya bağlı olarak değişebilir.        |

---

### **TypeScript'in Avantajları**

1. **Tip Güvenliği:**
   - Değişkenlerin, fonksiyonların ve sınıfların türlerini belirleyerek potansiyel hataları azaltır.
   - Örneğin, yanlış türde bir parametre verilirse derleme sırasında hata alırsınız.

2. **Kodun Anlaşılabilirliği ve Bakımı:**
   - Statik tipler sayesinde kodun ne yaptığı daha net anlaşılır.
   - Büyük projelerde ekip içindeki iletişimi kolaylaştırır.

3. **Gelişmiş Geliştirme Ortamı Desteği:**
   - IDE’lerde otomatik tamamlama, kod hatalarını önceden belirleme ve güçlü hata ayıklama desteği sağlar.
   - IntelliSense gibi özellikler, daha verimli çalışmanıza yardımcı olur.

4. **Modüler ve Ölçeklenebilir Kodlama:**
   - Modüller ve arayüzlerle daha iyi yapılandırılmış ve ölçeklenebilir projeler oluşturmayı sağlar.
   - Büyük projelerde kodun yeniden kullanılabilirliğini artırır.

5. **Geriye Dönük Uyum (Backward Compatibility):**
   - Modern JavaScript özelliklerini eski JavaScript sürümlerine dönüştürerek tarayıcı uyumluluğu sağlar.

6. **Büyük Projeler için İdeal:**
   - Karmaşık projelerde hata oranını ciddi oranda düşürür ve kod organizasyonunu kolaylaştırır.

---

### **TypeScript ile Çalışma Ortamının Hazırlanması**

TypeScript projelerine başlamadan önce uygun çalışma ortamını kurmak gereklidir. İşte adım adım rehber:

#### **1. Node.js ve npm Kurulumu**
- TypeScript, npm (Node Package Manager) üzerinden kurulabilir.
- **Node.js**'in resmi web sitesinden [Node.js](https://nodejs.org) indirip yükleyin.
- Kurulum sonrası sürümleri kontrol edin:
  ```bash
  node -v
  npm -v
  ```

#### **2. TypeScript Kurulumu**
- Global olarak TypeScript’i yüklemek için:
  ```bash
  npm install -g typescript
  ```
- Kurulumun başarılı olup olmadığını kontrol etmek için:
  ```bash
  tsc -v
  ```

#### **3. TypeScript Projesi Oluşturma**
1. Proje dizini oluşturun:
   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   ```
2. **TypeScript yapılandırma dosyası** oluşturun:
   ```bash
   tsc --init
   ```
   Bu komut, `tsconfig.json` adında bir dosya oluşturur. Bu dosya TypeScript derleyicisi için yapılandırma ayarlarını içerir.

#### **4. Geliştirme Ortamı (IDE) Kurulumu**
- **Visual Studio Code (VS Code):** TypeScript projeleri için en popüler IDE'dir.
- **TypeScript Eklentileri:** VS Code için **ESLint** ve **Prettier** gibi kod düzenleme araçlarını yükleyin.

#### **5. İlk TypeScript Dosyasını Yazma ve Çalıştırma**
1. Bir `index.ts` dosyası oluşturun ve aşağıdaki örnek kodu ekleyin:
   ```typescript
   function greet(name: string): string {
       return `Merhaba, ${name}!`;
   }

   console.log(greet("Dünya"));
   ```
2. TypeScript dosyasını derleyerek JavaScript’e dönüştürün:
   ```bash
   tsc index.ts
   ```
3. Oluşan `index.js` dosyasını çalıştırın:
   ```bash
   node index.js
   ```

#### **6. Paket Yöneticisi ile Çalışma**
- **Proje bağımlılıklarını yönetmek** için `package.json` dosyasını oluşturun:
  ```bash
  npm init -y
  ```
- TypeScript’i projeye bağımlılık olarak ekleyin:
  ```bash
  npm install typescript --save-dev
  ```

#### **7. Canlı Geliştirme için Araçlar**
- **ts-node:** TypeScript dosyalarını JavaScript’e çevirmeden doğrudan çalıştırmak için:
  ```bash
  npm install -g ts-node
  ```
- Kullanımı:
  ```bash
  ts-node index.ts
  ```

#### **8. Derleme Sürecini Otomatikleştirme**
- **Nodemon ve ts-node ile canlı yeniden yükleme (hot reload):**
  ```bash
  npm install -g nodemon
  ```
  - Çalıştırmak için:
    ```bash
    nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts
    ```

---

### **Sonuç**
TypeScript, güçlü tip kontrolü, gelişmiş hata ayıklama ve modern JavaScript özellikleriyle kod kalitesini artırır. Büyük ve karmaşık projelerde geliştirme sürecini daha verimli hale getirir. TypeScript ile çalışmaya başlamak için doğru araçları kurarak, güçlü bir geliştirme ortamı oluşturabilirsiniz.


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

### **Özet**

`tsc` komutları, TypeScript projelerini derlemek, yapılandırmak ve özelleştirmek için geniş bir seçenek yelpazesi sunar. Bu komutlar, derleme sürecini özelleştirmek ve projelerinizi daha etkili bir şekilde yönetmek için güçlü bir araç sağlar. Önemli komutlar ve açıklamaları, TypeScript projelerinde verimli bir geliştirme ortamı oluşturmanıza yardımcı olur.

#
### **TypeScript Tarihsel Gelişimi**

TypeScript, **Microsoft** tarafından geliştirilmiş ve ilk olarak 2012 yılında tanıtılmış bir programlama dilidir. JavaScript'in güçlü yönlerini koruyarak, zayıf yönlerini iyileştirmeyi hedefleyen TypeScript, JavaScript'in üzerine inşa edilmiştir. Geliştirilme sürecinde büyük projelerin ve yazılım ekiplerinin ihtiyaçlarını göz önünde bulundurarak tasarlanmıştır. Bu kapsamda, TypeScript'in tarihsel gelişimini detaylı olarak ele alalım.

---

### **2010: JavaScript'in Yetersizliklerinin Fark Edilmesi**

JavaScript, başlangıçta tarayıcılar üzerinde çalışan basit bir betik dili olarak tasarlanmıştır. Ancak zamanla, tarayıcılar dışında da kullanılarak (örneğin Node.js ile sunucu tarafında) büyük ve karmaşık projelerde yer almaya başlamıştır. Bu süreçte, JavaScript’in aşağıdaki yetersizlikleri öne çıkmıştır:

1. **Statik Tip Güvenliğinin Olmaması:**
   - JavaScript dinamik bir dildir, bu nedenle tür kontrolü çalışma zamanında yapılır. Bu durum, büyük projelerde hataların tespitini zorlaştırır.

2. **Modern Yazılım Gereksinimlerine Yanıt Vermede Eksiklik:**
   - JavaScript, sınıf tabanlı bir nesne yönelimli programlama (OOP) paradigmasını desteklemekte yetersizdi (ES6 öncesi).

3. **Büyük Projelerde Zor Yönetim:**
   - JavaScript, çok büyük projelerde kodun okunabilirliği ve bakımı açısından zorluk çıkarıyordu.

Bu yetersizlikler, Microsoft’un TypeScript’i geliştirmeye başlamasına ilham verdi. Amaç, JavaScript’in gücünü koruyarak, modern yazılım geliştirme ihtiyaçlarına uygun bir araç sunmaktı.

---

### **2012: İlk Sürüm ve Tanıtım**

Microsoft, TypeScript’in ilk sürümünü **Ekim 2012**'de duyurdu. Bu ilk sürüm şu temel özelliklere sahipti:

- **Statik Tipleme:** 
  JavaScript'e statik tip desteği ekledi.
  
- **ES6 Özelliklerinin Desteği:** 
  ES6’da tanıtılan sınıflar, modüller ve ok fonksiyonları gibi özellikleri destekledi ve eski tarayıcılar için bu özellikleri JavaScript’e dönüştürme yeteneği sundu.

- **Geliştirilmiş IDE Desteği:** 
  Visual Studio başta olmak üzere, TypeScript için güçlü araç desteği sağladı. Bu sayede, geliştiriciler yazarken hata ayıklama ve otomatik tamamlama gibi gelişmiş özelliklerden faydalanabildi.

**TypeScript’in Öne Çıkan Yenilikleri:**
- Derleyici (Compiler): TypeScript kodları, JavaScript’e dönüştürülüyordu (transpile).
- JavaScript uyumluluğu: TypeScript, herhangi bir JavaScript kodunun TypeScript kodu olarak çalışmasına olanak tanıyordu.

Bu dönemde TypeScript, JavaScript'in mevcut geliştirici ekosistemine tamamen uyumlu olduğu için dikkat çekti.

---

### **2013-2014: Gelişim ve Yaygınlaşma**

TypeScript’in ilk sürümleri geliştiricilerden olumlu geri dönüşler aldı. Bununla birlikte, dilin özelliklerini ve performansını iyileştirmek için çalışmalar hız kazandı:

#### **TypeScript 0.9 (2013): Performans ve Yeni Özellikler**
- **Generics:** TypeScript 0.9 sürümüyle, jenerikler eklendi. Bu özellik, daha güçlü bir tip kontrolü ve yeniden kullanılabilirlik sağladı.
- Performans iyileştirmeleri ile derleme süresi kısaltıldı.

#### **TypeScript 1.0 (2014): Kararlı Sürüm**
- **Nisan 2014**'te TypeScript 1.0 sürümü yayınlandı. Bu sürüm, daha kararlı ve geniş bir özellik setiyle geldi.
- İlk defa geniş ölçekli projelerde kullanılması için yeterince olgun bir hale geldi.

---

### **2015: TypeScript ve Angular 2 Ortaklığı**

TypeScript'in büyük ölçüde popülerlik kazanması, Google'ın **Angular 2** için TypeScript'i tercih etmesiyle gerçekleşti. Google, Angular 2’nin temelinde TypeScript'i kullanacağını duyurdu. Bu olay, TypeScript’in kaderini değiştiren önemli bir dönüm noktasıydı.

#### **Neden Angular 2, TypeScript'i Seçti?**
1. **Statik Tip Güvenliği:** Angular gibi büyük bir framework, karmaşıklığını yönetmek için statik tip güvenliğinden faydalandı.
2. **Modern Dil Özellikleri:** TypeScript, ES6 (ve üzeri) özelliklerini erkenden destekleyerek modern JavaScript’i daha erişilebilir hale getirdi.
3. **Geliştirici Deneyimi:** Güçlü IDE desteği ve hataların erken tespiti, Angular geliştirme sürecini iyileştirdi.

Angular 2’nin TypeScript kullanımı, birçok geliştiricinin TypeScript’i öğrenmesini ve benimsemesini sağladı.

---

### **2016-2018: Modernizasyon ve Büyük Çapta Benimsenme**

#### **TypeScript 2.0 (2016): Büyük İyileştirmeler**
- **Non-nullable Types:** TypeScript 2.0 ile `null` ve `undefined` gibi değerlerin kontrolü daha sıkı hale getirildi.
- **Readonly Modifier:** Sadece okunabilir özellikler tanımlanabildi.
- **Tagged Union Types:** Karmaşık veri yapılarını daha iyi ifade edebilme imkanı tanındı.

#### **Facebook ve React ile Uyumluluk**
- Facebook’un React ekosistemi, JavaScript odaklı bir framework olmasına rağmen, TypeScript ile uyumluluğunu artırdı. Bu, TypeScript’in JavaScript dünyasında daha geniş bir kabul görmesini sağladı.

#### **TypeScript 2.x Sürümleri:**
- Yeni ES özellikleri (async/await, ES Modules) eklendi.
- Geliştirilmiş jenerikler ve tip çıkarım sistemi.

---

### **2019-2021: Lider Programlama Dili Olarak Yükseliş**

#### **TypeScript 3.0 (2018-2019): Daha Fazla Özellik**
- **Project References:** Büyük projelerde TypeScript’in modülerliğini artırdı.
- **BigInt Desteği:** Çok büyük tamsayılarla çalışmayı sağladı.
- **Optional Chaining:** Karmaşık nesne yapılarında daha temiz kod yazılmasına imkan tanıdı.

#### **TypeScript’in GitHub Üzerinde Yükselişi**
GitHub’ın her yıl yayımladığı "En Popüler Programlama Dilleri" raporlarında, TypeScript sürekli yükselen bir dil olarak öne çıktı. Büyük açık kaynak projelerinde TypeScript kullanılmaya başlandı.

---

### **2022-Günümüz: Endüstri Standardı**

#### **TypeScript 4.x Serisi: Yeni İnovasyonlar**
- **4.0 ve Üzeri:** Modern JavaScript özelliklerinin tamamını destekledi.
- **ESM (ECMAScript Modules) Desteği:** TypeScript projelerinde ES Modules kullanımı daha kolay hale getirildi.
- **Control Flow Analysis:** Daha hassas tip kontrolü sağlandı.

#### **Güncel Popülerlik**
- **Büyük Şirketler:** Microsoft, Google, Facebook, Slack, Asana gibi büyük teknoloji şirketleri, TypeScript’i projelerinde standart olarak kullanıyor.
- **Açık Kaynak:** Angular, Vue.js ve birçok modern framework, TypeScript’i destekliyor veya doğrudan kullanıyor.

---

### **TypeScript’in Geleceği**

TypeScript, JavaScript’in modern gereksinimlere cevap verme hızını artırarak yazılım geliştirme süreçlerini iyileştiren bir araç olmaya devam etmektedir. Özellikle:

- **Daha Fazla Framework Desteği:** React, Vue, Angular gibi framework’lerle daha sıkı entegrasyon.
- **Gelişmiş Derleme ve Optimizasyon:** Daha hızlı derleyiciler ve optimize edilmiş kod çıktıları.
- **Yapay Zeka Entegrasyonu:** TypeScript, AI destekli IDE’ler için güçlü bir altyapı sunmaktadır.

---

### **Sonuç**

TypeScript, başlangıçta JavaScript’in eksikliklerini gidermek için geliştirilen bir dilken, günümüzde büyük projelerin ve ekiplerin tercihi haline gelmiştir. Statik tip güvenliği, modern dil özellikleri ve güçlü araç desteği, TypeScript’i hem bireysel geliştiriciler hem de endüstri devleri için vazgeçilmez bir teknoloji yapmıştır.

# 

### **TypeScript'te Primitif Türler**

TypeScript, JavaScript'in temeli üzerine inşa edildiği için, JavaScript'in tüm **primitif türlerini** destekler. Bu türler, JavaScript'te olduğu gibi temel veri yapılarını ifade eder.

#### **1. string**
`string` türü, metinleri temsil eder. Çift tırnak `"` veya tek tırnak `'` kullanılabilir. Ayrıca, şablon dizgiler (template strings) için backtick (\`\`) kullanılabilir.

**Örnek:**
```typescript
let isim: string = "Ahmet";
let soyad: string = 'Yılmaz';
let tamAd: string = `${isim} ${soyad}`;
console.log(tamAd); // Ahmet Yılmaz
```

#### **2. number**
`number` türü, hem tamsayıları hem de ondalıklı sayıların temsilini içerir. Ayrıca, hex, binary ve octal sayıları da destekler.

**Örnek:**
```typescript
let yas: number = 30;
let maas: number = 2500.50;
let hex: number = 0xAB;
let binary: number = 0b1010;
let octal: number = 0o712;

console.log(yas, maas, hex, binary, octal);
```

#### **3. boolean**
`boolean` türü, sadece `true` veya `false` değerlerini alabilir.

**Örnek:**
```typescript
let aktif: boolean = true;
let emekli: boolean = false;

console.log(aktif, emekli);
```

#### **4. undefined**
`undefined`, değişkenin tanımlandığı ancak bir değer almadığı durumları ifade eder.

**Örnek:**
```typescript
let adres: undefined = undefined;
console.log(adres); // undefined
```

#### **5. null**
`null`, hiçbir değerin olmamasını ifade eder. Genelde referans veri türlerinde kullanılır.

**Örnek:**
```typescript
let evliMi: null = null;
console.log(evliMi); // null
```

---

### **Any Türü**
`any` türü, herhangi bir türü temsil edebilir. Bu, TypeScript’in tip kontrolünü geçici olarak devre dışı bırakır.

**Kullanım Durumları:**
- Dinamik veri yapılarını işlerken.
- Türün önceden belirlenemediği durumlarda.

**Örnek:**
```typescript
let dinamik: any = "Merhaba";
console.log(dinamik); // Merhaba

dinamik = 42;
console.log(dinamik); // 42

dinamik = true;
console.log(dinamik); // true
```

**Dezavantaj:**
- Tür kontrolü yapılmadığı için, hatalara açık hale gelir.

---

### **Unknown Türü**
`unknown`, herhangi bir türü temsil eder ancak `any`'den farklı olarak, tür kontrolünü zorunlu kılar.

**Örnek:**
```typescript
let bilinmeyen: unknown = "Merhaba";
console.log(bilinmeyen); // Merhaba

bilinmeyen = 42;
console.log(bilinmeyen); // 42

// Tür kontrolü yapılmazsa hata alır:
if (typeof bilinmeyen === "string") {
    console.log(bilinmeyen.toUpperCase());
}
```

---

### **Void Türü**
`void`, bir fonksiyonun **herhangi bir değer döndürmediğini** ifade eder.

**Örnek:**
```typescript
function selamla(): void {
    console.log("Merhaba!");
}

selamla(); // Merhaba!
```

- **Void ile Değişkenler:** Genelde anlamsızdır, çünkü yalnızca `undefined` veya `null` atanabilir.

**Örnek:**
```typescript
let bos: void = undefined; 
```

---

### **Never Türü**
`never`, bir değerin asla geri dönmediği durumları temsil eder. Genellikle, sonsuz döngüler veya hata fırlatan (throwing) fonksiyonlarda kullanılır.

**Örnek:**
```typescript
function hataFirlat(mesaj: string): never {
    throw new Error(mesaj);
}

// Sonsuz döngü:
function sonsuzDongu(): never {
    while (true) {
        console.log("Bu döngü bitmeyecek!");
    }
}
```

---

### **Type Inference (Tür Çıkarımı)**

TypeScript, değişkenlerin türlerini açıkça belirtmeden, atanan değere göre **tahmin edebilir**. Buna "Tür Çıkarımı" denir. Tür çıkarımı sayesinde, kod daha kısa ve okunabilir hale gelir.

#### **1. Basit Tür Çıkarımı**
**Örnek:**
```typescript
let mesaj = "Merhaba"; // TypeScript, türü otomatik olarak `string` olarak belirler.
let sayi = 42;         // Tür: number
let dogruMu = true;    // Tür: boolean
```

#### **2. Fonksiyonlarda Tür Çıkarımı**
Fonksiyonun dönüş türü, otomatik olarak belirlenebilir.

**Örnek:**
```typescript
function toplama(a: number, b: number) {
    return a + b; // TypeScript, dönüş türünü `number` olarak tahmin eder.
}

let sonuc = toplama(5, 10);
console.log(sonuc); // 15
```

#### **3. Karmaşık Tür Çıkarımı**
**Örnek:**
```typescript
let dizi = [1, 2, 3]; // Tür: number[]
let karisik = [1, "iki", true]; // Tür: (number | string | boolean)[]
```

---

### **Özet**

| **Tür**       | **Açıklama**                                                                                  | **Örnek**                                          |
|----------------|----------------------------------------------------------------------------------------------|---------------------------------------------------|
| **string**     | Metinleri temsil eder.                                                                       | `let isim: string = "Ahmet";`                     |
| **number**     | Sayıları temsil eder.                                                                        | `let yas: number = 30;`                           |
| **boolean**    | Mantıksal `true` veya `false` değerlerini temsil eder.                                       | `let aktif: boolean = true;`                      |
| **undefined**  | Değeri atanmamış değişkenleri temsil eder.                                                   | `let adres: undefined = undefined;`              |
| **null**       | Boş bir değeri temsil eder.                                                                  | `let evliMi: null = null;`                        |
| **any**        | Herhangi bir türü temsil eder (tip kontrolü yapılmaz).                                       | `let dinamik: any = "Merhaba";`                   |
| **unknown**    | Herhangi bir türü temsil eder ancak tür kontrolü gerektirir.                                 | `let bilinmeyen: unknown = 42;`                   |
| **void**       | Değer döndürmeyen fonksiyonlar için kullanılır.                                              | `function selamla(): void { console.log("Hi"); }` |
| **never**      | Asla geri dönmeyen durumlar (hata fırlatma veya sonsuz döngü).                               | `function hata(): never { throw new Error(); }`   |

TypeScript'in sunduğu bu türler ve tür çıkarımı mekanizması, yazılım geliştirme sürecinde daha güvenli ve okunabilir kod yazmanızı sağlar.

#

### **TypeScript'te Fonksiyon Türleri**

TypeScript, fonksiyonların türlerini belirlerken oldukça esnek ve güçlü bir sistem sunar. Fonksiyon türleri sayesinde, hem giriş parametreleri hem de dönüş değerlerinin türlerini açıkça belirtebiliriz. Bu, yazılım geliştirme sürecinde daha güvenli, okunabilir ve bakım kolaylığı sağlayan kod yazmamızı mümkün kılar.

---

### **Fonksiyon Tanımı**

TypeScript'te fonksiyonlar, parametrelerin ve dönüş değerinin türlerini belirterek tanımlanabilir.

#### **Temel Fonksiyon Tanımı**
Bir fonksiyonun parametre türlerini ve dönüş türünü belirtebiliriz.

**Örnek:**
```typescript
function toplama(a: number, b: number): number {
    return a + b;
}

let sonuc = toplama(10, 20);
console.log(sonuc); // 30
```

- **`a` ve `b` türleri:** `number`
- **Dönüş türü:** `number`

---

### **İsteğe Bağlı (Optional) Parametreler**

Bir parametrenin isteğe bağlı olduğunu belirtmek için `?` operatörü kullanılır.

**Örnek:**
```typescript
function selamla(isim: string, soyisim?: string): string {
    if (soyisim) {
        return `Merhaba, ${isim} ${soyisim}!`;
    }
    return `Merhaba, ${isim}!`;
}

console.log(selamla("Ahmet")); // Merhaba, Ahmet!
console.log(selamla("Ahmet", "Yılmaz")); // Merhaba, Ahmet Yılmaz!
```

- **`soyisim` parametresi isteğe bağlıdır.**
- İsteğe bağlı parametreler, her zaman zorunlu parametrelerden sonra gelir.

---

### **Varsayılan Parametreler**

Bir parametreye varsayılan bir değer atanabilir. Eğer bu parametreye bir değer geçilmezse, varsayılan değer kullanılır.

**Örnek:**
```typescript
function hesaplaFiyat(tutar: number, kdv: number = 0.18): number {
    return tutar + tutar * kdv;
}

console.log(hesaplaFiyat(100)); // 118
console.log(hesaplaFiyat(100, 0.08)); // 108
```

- **`kdv` parametresi varsayılan olarak `0.18` değerine sahiptir.**

---

### **Rest Parametreleri**

Bir fonksiyon, birden fazla parametreyi bir dizi olarak alabilir. Bu, `...` (spread) operatörüyle yapılır.

**Örnek:**
```typescript
function toplama(...sayilar: number[]): number {
    return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplama(1, 2, 3, 4, 5)); // 15
console.log(toplama(10, 20)); // 30
```

- `sayilar` parametresi, bir `number[]` dizisi olarak alınır.

---

### **Fonksiyon Türü Belirtimi**

Bir fonksiyonun hem parametre türleri hem de dönüş türü, bir tür ifadesi olarak belirtilebilir.

#### **Fonksiyon Türü Söz Dizimi**
```typescript
(param1: tür1, param2: tür2, ...) => dönüşTürü
```

**Örnek:**
```typescript
let carpma: (x: number, y: number) => number;

carpma = function (x: number, y: number): number {
    return x * y;
};

console.log(carpma(5, 4)); // 20
```

---

### **Anonim Fonksiyonlar**

TypeScript, anonim fonksiyonlar için de tür çıkarımı yapar.

**Örnek:**
```typescript
let kare = (x: number): number => {
    return x * x;
};

console.log(kare(5)); // 25
```

- **Arrow Functions (Ok Fonksiyonları):** Daha kısa bir sözdizimi sunar.

---

### **Callback Fonksiyonlar**

Bir fonksiyonu başka bir fonksiyona parametre olarak geçirebilirsiniz. Callback fonksiyonların türünü belirtmek önemlidir.

**Örnek:**
```typescript
function islemYap(a: number, b: number, callback: (x: number, y: number) => number): number {
    return callback(a, b);
}

let toplama = (x: number, y: number): number => x + y;
let carpma = (x: number, y: number): number => x * y;

console.log(islemYap(10, 20, toplama)); // 30
console.log(islemYap(10, 20, carpma));  // 200
```

---

### **Void Türünde Fonksiyonlar**

Eğer bir fonksiyon herhangi bir değer döndürmüyorsa, dönüş türü `void` olarak belirtilir.

**Örnek:**
```typescript
function logMesaj(mesaj: string): void {
    console.log(mesaj);
}

logMesaj("Bu bir bilgilendirme mesajıdır.");
```

---

### **Never Türünde Fonksiyonlar**

Bir fonksiyon hiçbir zaman değer döndürmüyorsa (örneğin hata fırlatma veya sonsuz döngü), dönüş türü `never` olarak belirtilir.

**Örnek:**
```typescript
function hataFirlat(mesaj: string): never {
    throw new Error(mesaj);
}

// Sonsuz döngü:
function sonsuzDongu(): never {
    while (true) {
        console.log("Bu döngü bitmeyecek!");
    }
}
```

---

### **Overloading (Fonksiyon Aşırı Yükleme)**

TypeScript, aynı fonksiyonun farklı türde parametrelerle çağrılmasına olanak tanır. Bu, birden fazla fonksiyon imzası (overload signature) tanımlayarak yapılır.

**Örnek:**
```typescript
function birlestir(a: string, b: string): string;
function birlestir(a: number, b: number): number;

function birlestir(a: any, b: any): any {
    return a + b;
}

console.log(birlestir(10, 20)); // 30
console.log(birlestir("Merhaba", " Dünya")); // Merhaba Dünya
```

---

### **Generic Fonksiyonlar**

Generic fonksiyonlar, türü dinamik olarak belirlemek için kullanılır. Bu, fonksiyonların farklı türlerle çalışmasını sağlar.

**Örnek:**
```typescript
function geriDondur<T>(deger: T): T {
    return deger;
}

console.log(geriDondur<number>(42)); // 42
console.log(geriDondur<string>("Merhaba")); // Merhaba
```

---

### **Fonksiyon Parametrelerinde Type Alias ve Interface Kullanımı**

Parametrelerin türlerini daha okunabilir hale getirmek için `type` veya `interface` kullanılabilir.

**Type Alias ile Örnek:**
```typescript
type Hesaplama = (x: number, y: number) => number;

let toplama: Hesaplama = (a, b) => a + b;
let carpma: Hesaplama = (a, b) => a * b;

console.log(toplama(10, 5)); // 15
console.log(carpma(10, 5)); // 50
```

**Interface ile Örnek:**
```typescript
interface Hesaplama {
    (x: number, y: number): number;
}

let cikarma: Hesaplama = (a, b) => a - b;
console.log(cikarma(10, 5)); // 5
```

---

### **Özet**

| **Fonksiyon Türü**              | **Açıklama**                                                                                                                                 |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **Temel Fonksiyon Tanımı**       | Parametre ve dönüş türü belirtilir.                                                                                                         |
| **İsteğe Bağlı Parametreler**    | `?` ile belirtilen parametreler isteğe bağlıdır.                                                                                            |
| **Varsayılan Parametreler**      | Varsayılan bir değer atanır.                                                                                                                |
| **Rest Parametreler**            | `...` ile belirtilir ve bir dizi alır.                                                                                                      |
| **Fonksiyon Türü Belirtimi**     | Fonksiyonun türünü `(param1: tür1, ...) => dönüşTürü` şeklinde tanımlanır.                                                                  |
| **Void Türü**                    | Hiçbir şey döndürmeyen fonksiyonlarda kullanılır.                                                                                           |
| **Never Türü**                   | Asla geri dönmeyen fonksiyonlar için kullanılır.                                                                                            |
| **Overloading**                  | Aynı isimle birden fazla fonksiyonun tanımlanmasına olanak tanır.                                                                           |
| **Generic Fonksiyonlar**         | Türden bağımsız dinamik yapı sağlar.                                                                                                        |
| **Type Alias ve Interface**      | Daha karmaşık türleri tanımlamak için kullanılır.                                                                                            |

TypeScript'in sunduğu bu zengin fonksiyon türleri, yazılım geliştirme sürecinde daha okunabilir, tip güvenliği sağlamış ve hata oranını düşürmüş kod yazmanıza olanak tanır.
#

### **TypeScript'te Fonksiyonlar**

TypeScript, fonksiyonların güçlü bir şekilde tanımlanmasına olanak tanır. Fonksiyonlar, parametre türlerinin, varsayılan değerlerin, rest parametrelerinin ve dönüş türlerinin açıkça belirtildiği, tip güvenliği sağlanmış yapılardır.

---

## **1. Fonksiyon Tanımları**

TypeScript'te bir fonksiyon tanımlarken, parametrelerin ve dönüş türünün belirtilmesi önerilir. Böylece kod daha anlaşılır ve hata oranı düşük olur.

#### **Temel Fonksiyon Tanımı**
Fonksiyon, parametre türlerini ve dönüş türünü açıkça belirtebilir:

**Örnek:**
```typescript
function toplama(a: number, b: number): number {
    return a + b;
}

console.log(toplama(5, 10)); // 15
```

- `a` ve `b`: `number` türünde.
- `: number`: Fonksiyonun dönüş türünü belirtir.

#### **Anonim Fonksiyon Tanımı**
Anonim fonksiyonlar, bir değişkene atanabilir.

**Örnek:**
```typescript
let carpma = function (x: number, y: number): number {
    return x * y;
};

console.log(carpma(4, 5)); // 20
```

#### **Fonksiyon Türü Belirtimi**
Fonksiyonun türü `(param1: tür1, param2: tür2, ...) => dönüşTürü` şeklinde belirtilir.

**Örnek:**
```typescript
let bolme: (x: number, y: number) => number;

bolme = function (x, y) {
    return x / y;
};

console.log(bolme(20, 5)); // 4
```

---

## **2. Parametre Türleri ve Varsayılan Değerler**

#### **Parametre Türleri**
TypeScript'te, her bir parametrenin türü açıkça belirtilir.

**Örnek:**
```typescript
function selamla(isim: string, yas: number): string {
    return `Merhaba, benim adım ${isim} ve ${yas} yaşındayım.`;
}

console.log(selamla("Ahmet", 30)); // Merhaba, benim adım Ahmet ve 30 yaşındayım.
```

#### **İsteğe Bağlı (Optional) Parametreler**
Bir parametre isteğe bağlı yapılmak istenirse, `?` operatörü kullanılır. İsteğe bağlı parametreler, her zaman zorunlu parametrelerden sonra gelir.

**Örnek:**
```typescript
function adresYazdir(il: string, ilce?: string): string {
    if (ilce) {
        return `Adres: ${il}, ${ilce}`;
    }
    return `Adres: ${il}`;
}

console.log(adresYazdir("İstanbul")); // Adres: İstanbul
console.log(adresYazdir("İstanbul", "Kadıköy")); // Adres: İstanbul, Kadıköy
```

#### **Varsayılan Değerler**
Varsayılan değer, bir parametreye atanmış bir başlangıç değeri sağlar.

**Örnek:**
```typescript
function hesaplaKdv(tutar: number, kdvOrani: number = 0.18): number {
    return tutar + tutar * kdvOrani;
}

console.log(hesaplaKdv(100)); // 118
console.log(hesaplaKdv(100, 0.08)); // 108
```

---

## **3. Rest Parametreleri**

Bir fonksiyon, birden fazla parametreyi tek bir dizi içinde alabilir. Bu, `...` (spread/rest operatörü) ile yapılır.

**Örnek:**
```typescript
function toplam(...sayilar: number[]): number {
    return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplam(1, 2, 3, 4, 5)); // 15
console.log(toplam(10, 20)); // 30
```

- `sayilar: number[]`: Bir dizi olarak alınır.
- `reduce`: Dizideki tüm elemanların toplamını hesaplar.

---

## **4. Fonksiyon Dönüş Türleri**

Bir fonksiyonun dönüş türü, `:` sembolü ile belirtilir. TypeScript, dönüş türünü açıkça belirtmezseniz, tür çıkarımı yapar.

#### **Temel Dönüş Türü**
**Örnek:**
```typescript
function kareAl(x: number): number {
    return x * x;
}

console.log(kareAl(5)); // 25
```

#### **Void Türü**
Bir fonksiyon herhangi bir değer döndürmüyorsa, dönüş türü `void` olarak belirtilir.

**Örnek:**
```typescript
function logMesaj(mesaj: string): void {
    console.log(`Mesaj: ${mesaj}`);
}

logMesaj("TypeScript öğreniyorum!"); // Mesaj: TypeScript öğreniyorum!
```

#### **Never Türü**
Bir fonksiyon hiçbir zaman değer döndürmüyorsa (örneğin hata fırlatma veya sonsuz döngü), dönüş türü `never` olarak belirtilir.

**Örnek:**
```typescript
function hataFirlat(mesaj: string): never {
    throw new Error(mesaj);
}
```

---

## **5. Arrow Fonksiyonlar**

Arrow fonksiyonlar (ok fonksiyonları), daha kısa bir sözdizimi sunar ve genellikle anonim fonksiyonlar için kullanılır. Arrow fonksiyonlar, `this` bağlamını da değiştirir.

#### **Sözdizimi**
```typescript
(parametreler) => ifade
```

#### **Örnek 1: Temel Kullanım**
**Normal Fonksiyon:**
```typescript
function toplama(a: number, b: number): number {
    return a + b;
}
```

**Arrow Fonksiyon:**
```typescript
let toplama = (a: number, b: number): number => a + b;

console.log(toplama(5, 10)); // 15
```

#### **Örnek 2: Tek Parametre**
Tek bir parametre varsa, parantezler opsiyoneldir.

**Örnek:**
```typescript
let kare = (x: number): number => x * x;

console.log(kare(5)); // 25
```

#### **Örnek 3: Rest Parametreleri ile Kullanım**
**Örnek:**
```typescript
let toplam = (...sayilar: number[]): number => sayilar.reduce((toplam, sayi) => toplam + sayi, 0);

console.log(toplam(1, 2, 3)); // 6
```

#### **Örnek 4: Arrow Fonksiyonun `this` Bağlamı**
Arrow fonksiyonlar, `this` bağlamını dış fonksiyondan miras alır.

**Normal Fonksiyon ile `this`:**
```typescript
let obje = {
    isim: "TypeScript",
    yazdir: function() {
        console.log(this.isim);
    }
};

obje.yazdir(); // TypeScript
```

**Arrow Fonksiyon ile `this`:**
```typescript
let obje = {
    isim: "TypeScript",
    yazdir: () => {
        console.log(this); // Global bağlam (window veya undefined)
    }
};

obje.yazdir();
```

---

### **Özet**

| **Konu**                  | **Açıklama**                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Fonksiyon Tanımları**    | Parametre türleri ve dönüş türleri açıkça belirtilir.                       |
| **Parametre Türleri**      | Her parametreye uygun tür atanabilir.                                       |
| **Varsayılan Değerler**    | Parametrelerin varsayılan değerleri tanımlanabilir.                        |
| **Rest Parametreleri**     | Birden fazla parametre bir dizi olarak alınabilir.                         |
| **Fonksiyon Dönüş Türleri**| Fonksiyonun dönüş türü `: tür` ile belirtilir (`number`, `void`, `never`). |
| **Arrow Fonksiyonlar**     | Daha kısa sözdizimi ve değişmeyen `this` bağlamı sağlar.                   |

TypeScript’in fonksiyonlarla ilgili sunduğu bu kapsamlı özellikler, tip güvenliği ve esneklik sağlayarak daha güvenilir kod yazmanıza yardımcı olur.

#