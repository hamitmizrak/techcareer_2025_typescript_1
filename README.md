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
tsc --version   //5.7.2
```
---


## tsc test
```sh
tsc
```
---


## tsc test
```sh
rm -rf node_modules
npm install

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


## 
```sh
Kodunuzun düzenli ve tutarlı olması için:
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev

Çevresel değişkenleri yönetmek için dotenv kütüphanesini ekleyebilirsiniz:
npm install dotenv
npm install dotenv --save-dev

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
#
### TypeScript Nedir?

TypeScript, **Microsoft** tarafından geliştirilmiş ve **JavaScript’in bir üst kümesi** olarak tasarlanmış, **statik tür denetimi** sağlayan bir programlama dilidir. TypeScript, JavaScript’in güçlü ve esnek yapısını korurken, büyük ölçekli uygulamalar için daha iyi yapılandırma, hataların erken tespiti ve daha iyi geliştirme deneyimi sunmayı hedefler. TypeScript kodu, doğrudan çalıştırılamaz; bir derleyici (TypeScript Compiler - `tsc`) yardımıyla JavaScript’e dönüştürülmesi gerekir.

---

### TypeScript’in Temel Özellikleri

1. **Statik Tip Kontrolü**  
   TypeScript, değişkenlere ve fonksiyonlara tür eklemenize olanak tanır. Bu, kodun yazım aşamasında hataların tespit edilmesine yardımcı olur.  
   Örneğin:
   ```typescript
   let sayi: number = 10; // Sadece sayısal değer alabilir.
   sayi = "merhaba"; // HATA: Type 'string' is not assignable to type 'number'.
   ```

2. **Gelişmiş IDE Desteği**  
   TypeScript, statik tür bilgisi sayesinde geliştirme ortamlarında (IDE) otomatik tamamlama, kod hatırlatma ve hata ayıklama süreçlerini kolaylaştırır.

3. **JavaScript ile Uyumluluk**  
   TypeScript, **JavaScript’in geriye dönük uyumlu bir süper kümesi** olduğundan, mevcut JavaScript kodlarınızı TypeScript projelerine dahil edebilirsiniz.

4. **Tip Tanımları (Type Annotations)**  
   Değişkenlerin, fonksiyonların ve objelerin türlerini açıkça belirtebilirsiniz.  
   Örneğin:
   ```typescript
   function topla(a: number, b: number): number {
       return a + b;
   }
   ```

5. **Interface ve Class Desteği**  
   TypeScript, nesne tabanlı programlama için güçlü araçlar sağlar. **Interface**, **Abstract Class** ve **Inheritance (Kalıtım)** gibi özelliklerle daha okunabilir ve yapılandırılmış kod yazılabilir.

6. **Modüler Yapı**  
   TypeScript, modüllerle çalışmayı destekler. Bu, kodunuzu bölüp düzenli bir yapıya kavuşturmanıza yardımcı olur.  
   Örneğin:
   ```typescript
   export class Kullanici {
       constructor(public isim: string, public yas: number) {}
   }
   ```

7. **Generics**  
   TypeScript, farklı türlerle çalışabilen genel yapılar oluşturmanızı sağlar.  
   Örneğin:
   ```typescript
   function yazdir<T>(deger: T): T {
       console.log(deger);
       return deger;
   }

   yazdir<string>("Merhaba");
   yazdir<number>(123);
   ```

8. **Dekoratörler (Decorators)**  
   TypeScript, sınıflara ve fonksiyonlara meta veriler eklemek için dekoratörler sağlar. Özellikle Angular gibi çerçevelerde yaygın olarak kullanılır.

9. **Enum Desteği**  
   Enum, bir grup sabit değeri temsil eden bir veri yapısıdır.  
   ```typescript
   enum Renk {
       Kirmizi,
       Yesil,
       Mavi
   }

   let renk: Renk = Renk.Kirmizi;
   console.log(renk); // Çıktı: 0
   ```

10. **Async/Await Desteği**  
    TypeScript, JavaScript’teki modern özellikleri destekler ve async/await ile asenkron işlemleri kolaylaştırır.

---

### TypeScript Neden Tercih Edilir?

1. **Büyük Projelerde Daha İyi Yönetim**  
   Statik tip desteği ve modüler yapı sayesinde büyük ekiplerde çalışırken kodun daha anlaşılır ve sürdürülebilir olmasını sağlar.

2. **Daha Az Hata**  
   Kod yazım aşamasında tür kontrolleri yapıldığından, çalışma zamanında karşılaşılan hataları azaltır.

3. **JavaScript’in Geleceğini Kullanma**  
   TypeScript, ES6 ve daha yeni JavaScript özelliklerini destekler. Böylece tarayıcı uyumluluğu sağlanırken modern özelliklerden faydalanılır.

4. **Tip Güvenliği**  
   Değişkenlerin ve fonksiyonların beklenmeyen türlerde kullanılmasını engeller.

---

### TypeScript’in Yapısı

1. **Kurulum ve Derleme**  
   TypeScript’i kullanmak için öncelikle kurulum yapılmalıdır.  
   ```bash
   npm install -g typescript
   ```
   Bir TypeScript dosyasını derlemek:  
   ```bash
   tsc dosya.ts
   ```
   Bu komut, `dosya.ts` dosyasını JavaScript koduna (`dosya.js`) dönüştürür.

2. **Türler (Types)**  
   - **Primitif Türler:** `number`, `string`, `boolean`, `null`, `undefined`
   - **Referans Türler:** `array`, `object`, `tuple`, `enum`

3. **Fonksiyonlar**  
   Fonksiyonlar hem parametrelerin hem de dönüş değerinin türünü belirtebilir:  
   ```typescript
   function carp(x: number, y: number): number {
       return x * y;
   }
   ```

4. **Interface**  
   Interface, bir nesnenin yapısını tanımlamak için kullanılır.  
   ```typescript
   interface Kisi {
       isim: string;
       yas: number;
   }

   const kisi: Kisi = { isim: "Ali", yas: 30 };
   ```

5. **Class ve Inheritance**  
   TypeScript, sınıflar ve kalıtım gibi OOP özelliklerini destekler.  
   ```typescript
   class Hayvan {
       constructor(public isim: string) {}

       sesCikar(): void {
           console.log("Hayvan sesi");
       }
   }

   class Kedi extends Hayvan {
       sesCikar(): void {
           console.log("Miyav");
       }
   }
   ```

---

### TypeScript Kullanım Alanları

1. **Web Uygulamaları:** Angular, React, ve Vue.js gibi modern JavaScript çerçevelerinde kullanılır.
2. **Sunucu Tarafı Uygulamaları:** Node.js ile sunucu tarafında TypeScript kullanımı yaygındır.
3. **Hibrit Mobil Uygulamalar:** Ionic ve NativeScript gibi platformlarda TypeScript tercih edilir.
4. **Büyük Ölçekli Kurumsal Projeler:** Kodun sürdürülebilirliği ve ölçeklenebilirliği için uygundur.

---

### Avantajlar ve Dezavantajlar

#### Avantajlar:
- Kod güvenliği ve hataların erken tespiti.
- Daha iyi IDE desteği ve geliştirme deneyimi.
- Nesne yönelimli programlama (OOP) desteği.
- Mevcut JavaScript projeleriyle uyumluluk.

#### Dezavantajlar:
- JavaScript’e kıyasla biraz daha fazla öğrenme eğrisi gerektirir.
- Derleme adımı, geliştirme sürecini bir miktar yavaşlatabilir.
- TypeScript projeleri için ek yapılandırma gerekebilir.

---

### TypeScript ile JavaScript Arasındaki Farklar

| Özellik            | JavaScript                   | TypeScript                  |
|---------------------|------------------------------|-----------------------------|
| **Tür Denetimi**    | Yok                          | Var                         |
| **Statik Tipler**   | Yok                          | Var                         |
| **OOP Desteği**     | Sınırlı                      | Gelişmiş                    |
| **Enum Desteği**    | Yok                          | Var                         |
| **Modülerlik**      | ES6 ile sınırlı              | Gelişmiş                    |

---

### Özet

TypeScript, modern JavaScript projelerinde **daha güvenli ve sürdürülebilir** kod yazmayı mümkün kılan güçlü bir dildir. Büyük projelerde karmaşıklığı yönetmek ve hataları minimize etmek isteyen ekipler için mükemmel bir çözümdür. Statik tür kontrolü, zengin IDE desteği ve güçlü OOP özellikleri ile TypeScript, yazılım geliştirme dünyasında önemli bir yer edinmiştir.

# 
### **TypeScript’in Tarihsel Gelişimi**

TypeScript’in tarihsel gelişimi, Microsoft’un modern web geliştirme sorunlarını çözmek ve JavaScript'in büyük ölçekli uygulamalardaki eksiklerini gidermek amacıyla başlattığı bir projedir. Bu süreç, Microsoft’un web geliştirme dünyasına olan katkısını ve TypeScript'in bugün geldiği noktayı anlamamıza yardımcı olur.

---

### **Başlangıç ve Motivasyon**

#### **JavaScript’in Yetersizlikleri**  
JavaScript, web dünyasında yaygın olarak kullanılan bir dil olmasına rağmen, özellikle büyük ölçekli projelerde bazı temel eksikliklere sahipti:
- **Statik Tip Eksikliği:** Büyük projelerde, dinamik tür yapısı nedeniyle tür hatalarını önceden tespit etmek zordu.
- **Kod Yönetim Zorlukları:** JavaScript'in esnek ama dağınık yapısı, büyük kod tabanlarının yönetimini zorlaştırıyordu.
- **Nesne Tabanlı Programlama Eksiklikleri:** JavaScript, modern nesne yönelimli programlama (OOP) için sınırlı destek sağlıyordu.
- **Büyük Ekiplerde İşbirliği Zorlukları:** Statik tip desteğinin olmaması, ekiplerin aynı kod üzerinde çalışmasını zorlaştırıyordu.

#### **Microsoft’un Katkısı**  
Microsoft, özellikle **Visual Studio** gibi yazılım geliştirme araçlarıyla tanınıyordu ve JavaScript ekosistemindeki bu eksiklikleri fark etti. Çözüm olarak, **2010 yılında TypeScript’in geliştirilmesine başlandı**. Amaç, JavaScript'in esnekliğini korurken, geliştiricilere daha fazla araç ve özellik sunmaktı.

---

### **TypeScript’in Önemli Dönüm Noktaları**

#### **2012: İlk Yayın**  
- **23 Ekim 2012:** TypeScript’in ilk sürümü, Microsoft tarafından açık kaynaklı bir proje olarak duyuruldu.
- **TypeScript 0.8:** İlk sürüm, temel statik tip desteği ve sınırlı özellikler sunuyordu. JavaScript’e derlenebilen basit bir dil olarak tanıtıldı.
- **Özellikler:** 
  - Statik tip denetimi.
  - Temel sınıf ve modül desteği.
  - TypeScript dosyalarının (`.ts`) JavaScript’e (`.js`) derlenmesi.

Bu sürüm, geliştiriciler tarafından hızla benimsendi ve JavaScript ekosistemine bir alternatif olarak görülmeye başlandı.

#### **2013–2014: Erken Büyüme**  
- **Topluluk Katılımı:** Açık kaynaklı olarak geliştirilmesi, topluluğun dilin gelişimine katkıda bulunmasını sağladı.
- **Daha Fazla Özellik:** Sınıflar ve kalıtım gibi nesne tabanlı programlama (OOP) özellikleri eklendi.
- **IDE Entegrasyonu:** TypeScript, Microsoft Visual Studio ile entegre olarak güçlü bir geliştirme deneyimi sundu.

#### **2015: TypeScript 1.0 ve Angular 2 Desteği**
- **Nisan 2015:** TypeScript 1.0 sürümü yayınlandı ve bu, dilin ilk kararlı sürümüydü.
- **Angular İşbirliği:**
  - Google, Angular 2 framework’ü için TypeScript’i tercih ettiğini duyurdu.
  - Bu işbirliği, TypeScript’in JavaScript dünyasında daha geniş bir kitleye ulaşmasını sağladı.
  - Angular 2’nin TypeScript ile entegre olması, büyük ölçekli projelerde TypeScript’in popülerliğini artırdı.

#### **2016: TypeScript 2.0**
- **Eylül 2016:** TypeScript 2.0 sürümü yayınlandı.
- **Yeni Özellikler:**
  - **Non-Null Types:** Değişkenlerin `null` ve `undefined` değerlerini alıp almayacağı kontrol edilebiliyordu.
  - **Control Flow Analysis:** Kod akışını analiz ederek daha iyi tür çıkarımı sağlandı.
  - **Optional Parameters:** Opsiyonel parametrelerin daha iyi yönetimi.

#### **2017: Büyük Ölçekli Projelerde Benimsenme**
- TypeScript, React ve Vue.js gibi popüler JavaScript framework'leriyle daha yaygın kullanılmaya başlandı.
- Büyük teknoloji şirketleri (ör. Slack, Airbnb, Microsoft) projelerinde TypeScript’e geçiş yapmaya başladı.

#### **2018: TypeScript 3.0**
- **Temmuz 2018:** TypeScript 3.0 sürümü yayınlandı.
- **Önemli Yenilikler:**
  - **Project References:** Büyük projelerin modüler olarak yönetilmesine olanak tanıyan yeni bir özellik.
  - **Tuple Improvements:** Tuple veri tipleri için daha fazla esneklik.
  - **Better Error Messages:** Hata mesajları daha açıklayıcı hale getirildi.

#### **2019: ECMAScript ile Paralellik**
- TypeScript, ECMAScript standardını yakından takip ederek modern JavaScript özelliklerini hızlı bir şekilde desteklemeye başladı.
- **Async/Await** ve **Promise** gibi JavaScript özellikleri TypeScript ile daha da kolaylaştı.

#### **2020: TypeScript 4.0**
- **Ağustos 2020:** TypeScript 4.0 sürümü yayınlandı.
- **Yeni Özellikler:**
  - **Variadic Tuple Types:** Tuple türlerinde daha fazla esneklik.
  - **Editor Improvements:** Visual Studio Code ile daha iyi entegrasyon.
  - **Incremental Compilation:** Büyük projelerde daha hızlı derleme süreleri.

#### **2021–2023: GitHub ve Açık Kaynak Katkıları**
- GitHub istatistiklerine göre TypeScript, en hızlı büyüyen dillerden biri haline geldi.
- **Popüler Frameworkler:** React, Angular, Vue.js ve NestJS gibi framework'lerde TypeScript desteği standart hale geldi.
- Büyük topluluk katkılarıyla TypeScript hızla gelişmeye devam etti.

---

### **TypeScript’in Bugünkü Konumu**

1. **Geniş Kullanım Alanı:**
   - Web geliştirme (React, Angular, Vue.js).
   - Sunucu tarafı programlama (Node.js).
   - Mobil uygulamalar (Ionic, NativeScript).
   - Büyük ölçekli kurumsal projeler.

2. **Topluluk ve Katkı:**
   - GitHub üzerinde milyonlarca kullanıcı ve aktif katkıda bulunan topluluk.
   - TypeScript’in **açık kaynaklı** doğası, dilin hızlı gelişmesini sağladı.

3. **Eğitim ve Yaygınlık:**
   - Çeşitli eğitim platformları (Udemy, Pluralsight, BTK Akademi) ve üniversitelerde TypeScript öğretiliyor.
   - Büyük şirketlerin teknoloji yığınlarında yaygın olarak kullanılıyor.

---

### **Sonuç**

TypeScript, Microsoft’un JavaScript dünyasında yaptığı en önemli katkılardan biridir. 2012’de mütevazı bir başlangıç yapmasına rağmen, bugün modern web geliştirme için bir standart haline gelmiştir. Statik tip desteği, güçlü IDE entegrasyonu ve topluluk katkıları sayesinde TypeScript, büyük ölçekli projelerde tercih edilen bir dil olarak JavaScript ekosisteminde güçlü bir yere sahiptir. 

# 
TypeScript'te Nesne Yönelimli Programlama (Object-Oriented Programming - OOP) ile ilgili ele alınabilecek temel konu başlıkları şunlardır:

### 1. **Giriş ve Temel Kavramlar**
   - OOP nedir?
   - TypeScript’te OOP’nin avantajları
   - ES6 sınıf yapısı ile TypeScript arasındaki farklar

---

### 2. **Class (Sınıflar)**
   - Sınıf tanımı ve kullanımı
   - Constructor (Yapıcı Metotlar)
   - Field (Özellikler)
   - Metotlar (Methods)
   - Getter ve Setter Metotları
   - Sınıf Özelliklerine Erişim Seviyeleri: `public`, `private`, `protected`

---

### 3. **Inheritance (Kalıtım)**
   - Kalıtım (Extends)
   - `super` anahtar kelimesi ve kullanımı
   - Base (Temel) ve Derived (Türemiş) sınıflar

---

### 4. **Polymorphism (Çok Biçimlilik)**
   - Override edilen metotlar
   - Sınıflar arası çok biçimlilik
   - Dinamik ve statik çok biçimlilik

---

### 5. **Abstraction (Soyutlama)**
   - Soyut sınıflar (Abstract Classes)
   - Soyut metotlar ve türetilmiş sınıflarda uygulanması
   - Sadece okunabilir alanlar (`readonly`)

---

### 6. **Encapsulation (Kapsülleme)**
   - Özelliklerin gizlenmesi (`private` ve `protected`)
   - Erişimciler (Getters ve Setters)
   - Modülerlik ve verilerin korunması

---

### 7. **Interfaces (Arayüzler)**
   - Arayüz tanımlama ve kullanımı
   - Sınıflarda arayüzlerin uygulanması
   - Çoklu arayüz uygulaması (Multiple Interfaces)

---

### 8. **Static Members (Statik Üyeler)**
   - Statik metotlar
   - Statik özellikler
   - Statik üyelerin sınıf düzeyinde kullanımı

---

### 9. **Access Modifiers (Erişim Belirleyiciler)**
   - `public`, `private`, `protected`, `readonly` kullanım farkları
   - Erişim belirleyicilerin örneklerle açıklanması

---

### 10. **Generic Classes ve Methods**
   - Generic sınıflar
   - Generic metotlar
   - Generic arayüzler

---

### 11. **Abstract Classes vs Interfaces**
   - Soyut sınıflar ile arayüzler arasındaki farklar
   - Hangi durumlarda hangisinin kullanılacağı

---

### 12. **TypeScript Özel Anahtar Kelimeler**
   - `readonly` anahtar kelimesi
   - `implements` anahtar kelimesi
   - `instanceof` kontrolü
   - `this` anahtar kelimesi

---

### 13. **Design Patterns (Tasarım Kalıpları)**
   - TypeScript’te Singleton Tasarım Kalıbı
   - Factory Method
   - Observer Pattern

---

### 14. **Dependency Injection**
   - Bağımlılıkların Enjeksiyonu
   - Constructor Injection
   - Servisler ve bağımlılık yönetimi

---

### 15. **Modules ve Namespaces**
   - Modüllerin kullanımı (`export`, `import`)
   - Namespace tanımlama ve kullanımı

---

### 16. **Mixins (Karışımlar)**
   - Mixins kavramı
   - Çoklu sınıf kalıtımı için mixins kullanımı

---

# 
Aşağıda, **TypeScript OOP** konularını detaylı bir şekilde ele alarak her bir başlık için geniş çaplı bir açıklama yapılmıştır:

---

### **1. OOP Nedir?**
**Nesne Yönelimli Programlama (Object-Oriented Programming - OOP)**, yazılım geliştirme sürecinde kodun yeniden kullanılabilirliğini, modülerliğini ve anlaşılabilirliğini artırmak için kullanılan bir programlama paradigmasıdır. Temel olarak OOP, yazılım sistemlerini gerçek dünyadaki nesneleri modelleyerek oluşturmayı hedefler. OOP'nin dört temel prensibi şunlardır:

1. **Kapsülleme (Encapsulation):** Verilerin ve davranışların bir sınıf içinde birleştirilmesi.
2. **Kalıtım (Inheritance):** Bir sınıfın başka bir sınıfın özelliklerini ve metotlarını devralması.
3. **Çok Biçimlilik (Polymorphism):** Aynı işlemin farklı biçimlerde uygulanabilmesi.
4. **Soyutlama (Abstraction):** Gereksiz detaylardan arındırarak yalnızca önemli bilgileri sunma.

---

### **2. TypeScript’te OOP’nin Avantajları**
TypeScript, OOP paradigmasını güçlü bir şekilde destekler. TypeScript'te OOP'nin avantajları şunlardır:

1. **Statik Tip Kontrolü:** TypeScript, tip güvenliğini artırarak derleme zamanında hataları tespit eder. Bu, büyük projelerde hata oranını azaltır.
2. **ES6 ve Üzeri Özellikler:** TypeScript, ES6 sınıf yapısına dayalı güçlü bir OOP desteği sunar ve ek olarak interface, abstract class gibi özellikler sağlar.
3. **Kodun Yeniden Kullanılabilirliği:** OOP’nin sağladığı modüler yapı, TypeScript’in interface ve inheritance desteği ile daha verimli hale gelir.
4. **Güçlü Modül Yönetimi:** TypeScript, modüller aracılığıyla kodun daha iyi organize edilmesini sağlar.
5. **Bakımı Kolaylaştırma:** Kodun okunabilirliği ve modüler yapısı, özellikle büyük ölçekli projelerde bakım sürecini kolaylaştırır.

---

### **3. ES6 Sınıf Yapısı ile TypeScript Arasındaki Farklar**
**ES6 sınıfları** ve **TypeScript sınıfları**, benzer yapıda olsalar da TypeScript, OOP uygulamaları için ek özellikler sunar.

| **Özellik**          | **ES6**                                    | **TypeScript**                                                                 |
|-----------------------|--------------------------------------------|--------------------------------------------------------------------------------|
| **Tip Kontrolü**      | Tip kontrolü yoktur.                      | Statik tip kontrolü ile hata oranı düşer.                                       |
| **Erişim Belirleyiciler** | `public`, `private`, `protected` yoktur. | Erişim belirleyiciler kod güvenliğini artırır.                                  |
| **Abstract Sınıflar** | Desteklenmez.                             | TypeScript, soyut sınıflar tanımlayarak OOP tasarımını güçlendirir.             |
| **Interface**         | Yok.                                       | TypeScript, interface desteğiyle katı tip kuralları uygular.                   |
| **Readonly**          | Desteklenmez.                             | `readonly` anahtar kelimesi ile sadece okunabilir özellikler tanımlanabilir.   |
| **Mixins**            | Dolaylı olarak mümkündür.                  | Mixins ile çoklu kalıtım TypeScript’te kolayca uygulanabilir.                   |
| **Enum Desteği**      | Yok.                                       | Enum tipleri ile sabit değerler kolayca yönetilir.                             |

---

### **4. Class (Sınıflar)**
Sınıf, OOP’nin temel yapı taşıdır. TypeScript'te sınıflar, bir nesnenin özelliklerini (fields) ve davranışlarını (methods) tanımlar.

#### Temel Özellikler:
- **Constructor:** Nesne oluşturulurken çağrılan yapıcı metottur.
- **Fields:** Nesneye ait veri tutan özelliklerdir.
- **Methods:** Nesneye ait davranışları tanımlayan fonksiyonlardır.
- **Erişim Belirleyiciler:** `public`, `private`, `protected` gibi belirleyiciler ile özelliklerin erişim düzeyi kontrol edilir.

```typescript
class User {
    private id: number;
    public username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }

    public getId(): number {
        return this.id;
    }
}
```

---

### **5. Inheritance (Kalıtım)**
Kalıtım, bir sınıfın başka bir sınıfın özelliklerini ve metotlarını devralmasına olanak tanır. TypeScript'te `extends` anahtar kelimesi kullanılarak kalıtım uygulanır.

```typescript
class User {
    constructor(public username: string) {}
}

class Admin extends User {
    constructor(username: string, public privileges: string[]) {
        super(username);
    }
}
```

---

### **6. Polymorphism (Çok Biçimlilik)**
Çok biçimlilik, aynı metot veya özelliğin farklı şekillerde davranmasını sağlar.

```typescript
class Shape {
    area(): number {
        throw new Error("Method not implemented.");
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
```

---

### **7. Abstraction (Soyutlama)**
Soyutlama, gereksiz detayları gizleyerek yalnızca önemli bilgilerin kullanılmasını sağlar. TypeScript'te soyutlama `abstract` sınıflar ve metotlar ile sağlanır.

```typescript
abstract class Vehicle {
    abstract startEngine(): void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started.");
    }
}
```

---

### **8. Encapsulation (Kapsülleme)**
Kapsülleme, verilerin gizlenmesi ve yalnızca kontrollü bir şekilde erişilmesini sağlar. TypeScript'te `private` ve `protected` erişim belirleyicileri kullanılarak uygulanır.

```typescript
class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}
```

---

### **9. Interfaces (Arayüzler)**
Interface, sınıfların uygulaması gereken bir sözleşmeyi tanımlar. TypeScript’te güçlü bir tip güvenliği sağlar.

```typescript
interface Drivable {
    start(): void;
    stop(): void;
}

class Car implements Drivable {
    start(): void {
        console.log("Car started.");
    }

    stop(): void {
        console.log("Car stopped.");
    }
}
```

---

### **10. Static Members (Statik Üyeler)**
Statik üyeler, sınıf seviyesinde tanımlanır ve nesne oluşturulmadan erişilebilir.

```typescript
class MathUtils {
    static PI: number = 3.14;

    static calculateCircleArea(radius: number): number {
        return MathUtils.PI * radius ** 2;
    }
}
```

---

### **11. Access Modifiers (Erişim Belirleyiciler)**
TypeScript'te `public`, `private`, `protected`, ve `readonly` erişim belirleyicileri kullanılır. Bunlar özelliklere erişim kontrolü sağlar.

```typescript
class User {
    private id: number;
    public username: string;
    protected email: string;

    constructor(id: number, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
}
```

---

### **12. Generic Classes ve Methods**
TypeScript'te generic yapılar, kodun daha esnek ve yeniden kullanılabilir olmasını sağlar.

```typescript
class DataStorage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}
```

---

### **13. Abstract Classes vs Interfaces**
- **Abstract Classes:** Hem metotların hem de özelliklerin somut veya soyut bir şekilde tanımlanmasına izin verir.
- **Interfaces:** Sadece metotların veya özelliklerin imzasını tanımlar.

---

### **14. TypeScript Özel Anahtar Kelimeler**
- **`readonly`:** Sadece okunabilir özellikler.
- **`implements`:** Bir sınıfın bir arayüzü uyguladığını belirtir.
- **`instanceof`:** Nesnenin bir sınıfa ait olup olmadığını kontrol eder.

---

### **15. Modules ve Namespaces**
- **Modules:** Kodun dışa aktarılması ve içe aktarılması için kullanılır.
- **Namespaces:** Kodun gruplandırılması ve isim çakışmalarının önlenmesi için kullanılır.

---

### **16. Mixins (Karışımlar)**
Mixins, bir sınıfa çoklu kalıtım benzeri davranışlar eklemek için kullanılır.

```typescript
type Constructor = new (...args: any[]) => {};

function Timestamped<T extends Constructor>(Base: T) {
    return class extends Base {
        timestamp = new Date();
    };
}

class User {
    constructor(public name: string) {}
}

const TimestampedUser = Timestamped(User);
const user = new TimestampedUser("Hamit");
console.log(user.timestamp);
```

---


