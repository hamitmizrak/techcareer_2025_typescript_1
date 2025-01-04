# Typescript Öğreniyorum 
---

## Node js
```sh

```
---

### **Node.js Nedir?**

Node.js, **Chrome’un V8 JavaScript motoru** üzerine inşa edilmiş, açık kaynaklı, platform bağımsız bir **JavaScript çalışma ortamıdır** (runtime environment). Node.js, JavaScript’in sadece tarayıcıda çalışan bir dil olma sınırlamasını aşarak, sunucu tarafında ve farklı uygulamalarda kullanılmasını sağlar. 

Node.js, **olay tabanlı (event-driven)** ve **bloklanmayan (non-blocking I/O)** mimarisiyle, yüksek verimlilik ve düşük gecikme süreleri gerektiren uygulamalarda tercih edilen bir teknolojidir.

---

### **Node.js’in Amacı ve Yararları**

Node.js’in temel amacı, **ölçeklenebilir**, **hızlı** ve **etkin** web uygulamaları geliştirilmesine olanak sağlamaktır. Özellikle:

- Sunucu tarafında JavaScript kullanarak, istemci ve sunucu tarafı için tek bir dil yazma avantajı sunar.
- **Asenkron I/O** özelliğiyle, birden fazla işlemi aynı anda hızlı bir şekilde gerçekleştirebilir.
- Hafif ve verimli yapısı sayesinde **gerçek zamanlı** uygulamalarda (sohbet uygulamaları, oyunlar, canlı bildirim sistemleri) oldukça etkilidir.

---

### **Node.js Nasıl Çalışır?**

Node.js, tarayıcı dışında JavaScript çalıştırabilmek için Google’ın **V8 JavaScript motorunu** kullanır. Bu motor, JavaScript kodunu doğrudan makine diline çevirerek hızlı çalışmasını sağlar.

#### **Temel Çalışma Mantığı:**
1. Node.js, bir **olay döngüsü (event loop)** üzerinden çalışır. Bu döngü, bir olayın (örneğin, bir istemci isteği) tetiklenmesini ve sonuçların asenkron olarak işlenmesini sağlar.
2. **Asenkron yapı**, I/O işlemleri (dosya okuma, veritabanı sorguları gibi) tamamlanana kadar diğer işlemleri engellemez. Bu, aynı anda binlerce isteğin işlenmesini mümkün kılar.
3. **Tek iş parçacıklı (single-threaded)** bir yapıya sahip olmasına rağmen, arka planda çalışan bir **işçi havuzu (worker pool)** sayesinde daha karmaşık işlemler de kolayca yönetilir.

---

### **Node.js’in Özellikleri**

#### 1. **Asenkron ve Olay Tabanlı Mimari**
- Node.js, asenkron bir yapıya sahiptir. Bu, bir işlemin tamamlanmasını beklemeden diğer işlemlerin çalıştırılabileceği anlamına gelir. Örneğin:

```javascript
const fs = require('fs');

// Dosya okuma işlemi asenkron şekilde yapılır
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('Dosya okunuyor...');
```

Çıktı:
```
Dosya okunuyor...
(dosyanın içeriği)
```

#### 2. **Yüksek Performans**
- Node.js, hızlı bir şekilde makine diline çevrilen V8 motorunu kullanır. Bu, JavaScript’in performansını artırır.

#### 3. **Tek İş Parçacıklı (Single-Threaded)**
- Node.js, tek bir iş parçacığı üzerinde çalışır. Ancak, yoğun işlemleri arka planda işçi havuzlarına yönlendirerek verimliliği artırır.

#### 4. **Non-Blocking I/O (Bloklanmayan Girdi/Çıktı)**
- Girdi ve çıktı işlemleri sırasında bekleme olmaz. Bu, yüksek verimlilik sağlar ve aynı anda çok sayıda işlemi yönetmeye olanak tanır.

#### 5. **Geniş Modül Desteği**
- Node.js, geniş bir modül ekosistemine sahiptir. **NPM (Node Package Manager)**, milyonlarca kütüphaneye erişim sağlar.

---

### **Node.js’in Kullanım Alanları**

1. **Web Sunucuları ve API’ler**
   - Node.js, web sunucuları ve RESTful API’ler oluşturmak için idealdir.

2. **Gerçek Zamanlı Uygulamalar**
   - Canlı sohbet uygulamaları, çevrimiçi oyunlar ve canlı bildirim sistemleri gibi gerçek zamanlı uygulamalar.

3. **Dosya İşleme**
   - Büyük dosyaları asenkron olarak işlemek için Node.js kullanılabilir.

4. **Mikroservis Mimarisinde**
   - Node.js, mikroservis tabanlı uygulamalar oluşturmak için tercih edilir.

5. **Hibrit Mobil ve Masaüstü Uygulamalar**
   - Electron gibi platformlarla birlikte Node.js, masaüstü uygulamaları geliştirmek için kullanılabilir.

6. **IoT (Nesnelerin İnterneti)**
   - Hafif yapısı sayesinde IoT cihazlarıyla kolayca entegre olabilir.

---

### **Node.js Avantajları**

1. **Hızlı Performans**
   - V8 motoru ve asenkron yapı, Node.js’in hızlı olmasını sağlar.

2. **Tek Dil Kullanımı**
   - Hem istemci (frontend) hem de sunucu (backend) tarafında JavaScript kullanılır.

3. **Büyük Topluluk ve Geniş Ekosistem**
   - Geniş bir topluluğa sahip olduğu için birçok açık kaynaklı kütüphane ve modül bulunur.

4. **Gerçek Zamanlı Uygulamalara Uygunluk**
   - Olay tabanlı yapısı, gerçek zamanlı uygulamalar için idealdir.

5. **Kolay Ölçeklenebilirlik**
   - Tek iş parçacığı ile binlerce isteği aynı anda işleyebilir.

---

### **Node.js Dezavantajları**

1. **CPU Yoğun İşlemler için İdeal Değil**
   - Node.js, yüksek CPU kullanımı gerektiren işlemler için uygun değildir.

2. **Callback Hell (Geri Çağırma Cehennemi)**
   - Asenkron yapı, iç içe geçmiş geri çağırmalar nedeniyle karmaşık hale gelebilir. Ancak modern JavaScript özellikleri (Promises ve `async/await`) bu sorunu çözmüştür.

3. **Tek İş Parçacıklı Olmanın Sınırlamaları**
   - Bazı durumlarda, özellikle büyük paralel işlemler gerektiğinde, performans düşebilir.

---

### **Node.js ile Basit Bir Web Sunucusu**

Aşağıdaki örnek, Node.js ile basit bir web sunucusunun nasıl oluşturulacağını gösterir:

```javascript
const http = require('http');

// Sunucu oluşturma
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Merhaba, Node.js!');
});

// Sunucuyu başlatma
server.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});
```

- **Çalıştırma:**
  Bu kodu bir `server.js` dosyasına kaydedin ve terminalde şu komutla çalıştırın:
  ```bash
  node server.js
  ```

- **Sonuç:**
  Tarayıcınızda `http://localhost:3000` adresine giderek "Merhaba, Node.js!" mesajını görebilirsiniz.

---

### **Node.js Nasıl Kurulur?**

1. **Node.js İndir:**
   [Node.js resmi web sitesinden](https://nodejs.org) işletim sisteminize uygun sürümü indirin.

2. **Kurulum:**
   İndirdiğiniz dosyayı çalıştırarak Node.js'i yükleyin.

3. **Doğrulama:**
   Kurulumun doğru yapıldığını kontrol etmek için terminalde şu komutları çalıştırın:
   ```bash
   node -v
   npm -v
   ```

---

### **Sonuç**

Node.js, modern web ve sunucu tarafı geliştirmede devrim niteliğinde bir araçtır. Asenkron yapısı, olay tabanlı mimarisi ve geniş ekosistemi sayesinde Node.js, gerçek zamanlı uygulamalardan API geliştirmeye kadar birçok alanda tercih edilmektedir. Özellikle JavaScript’in hem istemci hem de sunucu tarafında kullanılması, öğrenme sürecini kolaylaştırır ve geliştiricilere güçlü bir araç sunar.