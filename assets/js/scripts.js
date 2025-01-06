document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-content]');
    const contentDisplay = document.getElementById('content-display');

    const contents = {
        'is-guvenligi-uzmani-hizmeti': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İş Güvenliği Uzmanı Hizmeti</h2>
                    <p>İş üvenliği hizmetimiz kapsamında etkin iş güvenliği uzmanlarımızla, iş kazalarını önlemeye yönelik kapsamlı risk analizleri ve güvenlik önlemleri sağlıyoruz. İş yerinizdeki potansiyel tehlike ve riskleri belirleyerek çalışanların güvenli ortamda çalışması için tespit ve öneride bulunuyoruz ve bunu saha raporlarıyla sizlere sunuyoruz. Sahada gösterdiğimiz eforu aynı zamanda mevzuatlara göre İSG evrak ve dökümantasyonu hazırlarken de gösteriyoruz. Acil durum planları ve çalışanlara yönelik eğitimlerle iş güvenliğini en üst seviyeye çıkarıyoruz. İş güvenliği çözümlerimizle iş yerinizi güvenli hale getirmek ve iş kazalarını önlemek için çalışıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-1.png" alt="İş Güvenliği Uzmanı Hizmeti">
                </div>
            </div>
        `,
        'isyeri-hekimligi-hizmeti': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İşyeri Hekimliği Hizmeti</h2>
                    <p>İş sağlığı hizmetimiz kapsamında deneyimli işyeri hekimlerimizle, çalışanların ve çalışma ortamının sağlık gözetimi ile ilgili işverene rehberlik yapıyoruz. İşe giriş sağlık tahlilleri ile çalışanın işyeriniz için uygun olup olmadığına işyeri hekimlerimizle karar veriyoruz. Saha ziyaretlerimizde çalışanlarınız işyeri hekimlerimiz tarafından muayene edilip reçete yazma hizmeti sağlıyoruz.İşyeri  hekimlerimizin diğer hizmetleri arasında ise; İş sağlığı ve güvenliği alanında yapılacak araştırmalara katılmak, ayrıca işin yürütümünde ergonomik ve psikososyal riskler açısından çalışanların fiziksel ve zihinsel kapasitelerini dikkate alarak iş ile çalışanın uyumunun sağlanması ve çalışma ortamındaki stres faktörlerinden korunmaları için araştırmalar yapmak ve bu araştırma sonuçlarını rehberlik faaliyetlerinde dikkate almak. İşyeri bina ve eklentilerinin genel hijyen şartlarını sürekli izleyip denetleyerek, çalışanlara yürütülen işin gerektirdiği beslenme ihtiyacının ve uygun içme suyunun sağlanması konularında tavsiyelerde bulunmak. Kantin, yemekhane, yatakhane, kreş ve emzirme odaları ile soyunma odaları, duş ve tuvaletlerin bakımı ve temizliği konusunda gerekli kontrolleri yaparak tavsiyelerde bulunmak. İşyerinde meydana gelen iş kazası ve meslek hastalıklarının nedenlerinin araştırılması ve tekrarlanmaması için alınacak önlemler konusunda çalışmalar yaparak işverene önerilerde bulunmak gibi hizmetlerimiz de vardır.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-2.png" alt="İşyeri Hekimliği Hizmeti">
                </div>
            </div>
        `,
        'diger-saglik-personeli-hizmeti': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Diğer Sağlık Personeli Hizmeti</h2>
                    <p>Diğer Sağlık Personeli Hizmetimizle işyerimizdeki sağlık tarama ve mobil sağlık taramalarımızda ve diğer görevlerinde işyeri hekimlerimize destek olmasını sağlıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-3.png" alt="Diğer Sağlık Personeli Hizmeti">
                </div>
            </div>
        `,
        'ise-giris-muayene': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İşe Giriş/Periyodik Muayene Sağlık Raporu</h2>
                    <p>İşe giriş sağlık raporu hizmetimizle işe alacağınız çalışanların işyerinde maruz kalacakları sağlık ve güvenlik risklerini dikkate alarak sağlık gözetimine ve tahlillere tabi tutulmalarını sağlıyoruz. İşe uygun olup olmadığı konusunda işverene rehberlik ediyoruz. Periyodik muayene sağlık raporu hizmetimizle kanunda belirtilen yasal periyodik sürelerde mevcut çalışanların sağlık muayenelerini yapıyoruz. Personelin sağlık gidişatı ile ilgili personele ve işverene rehberlik yapıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-4.png" alt="İşe Giriş/Periyodik Muayene Sağlık Raporu">
                </div>
            </div>
        `,
        'isg-egitim': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İş Sağlığı Ve Güvenliği Eğitim Hizmeti</h2>
                    <p>İş sağlığı ve güvenliği eğitim hizmetlerimizle, 6331 sayılı iş sağlığı ve güvenliği kanunu çalışanların eğitimi madde 17 kapsamında çalışanların İSG ile ilgili mevzuatta belirtilen tüm eğitimlerini veriyoruz. Eğitimler işletmelerde sağlıklı ve güvenli ortamlar oluşturmak, iş kazaları ve meslek hastalıklarını azaltmak amacıyla düzenlenmektedir. Bu eğitimlerde çalışanlar yasal hak ve sorumlulukları konusunda ve karşılaşabilecekleri mesleki riskler ve bu riskler için alınması gerekli tedbirler konusunda bilinçlendirilirler. İSG eğitimlerimiz sonunda çalışanlara İSG Eğitim Sertifikaları’nı veriyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-5.png" alt="İş Sağlığı Ve Güvenliği Eğitim Hizmeti">
                </div>
            </div>
        `,
        'risk-analizi': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İşyeri Risk Analizi Ve Acil Durum Eylem Planı Hazırlama Hizmeti</h2>
                    <p>İşyeri risk analizi hizmetimizle işyerinizdeki tehlike ve risklere göre kapsamlı ve interaktif risk değerlendirmeleri hazırlıyoruz. Hizmetimiz sürecinde işyerinizde alacağınız önlemler için mevzuat dayanağında önerilerde bulunuyoruz. Aksiyon planlarımız ile risk değerlendirmenizi güncel ve dinamik tutuyoruz. Acil durum eylem planı hazırlama hizmetimizle işyerinizde karşılaştığınız ya da karşılaşma olasılığı olan tüm acil durumların tespit edilmesi ve alınacak aksiyonlar hakkında eylem planı hazırlıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-6.png" alt="İşyeri Risk Analizi Ve Acil Durum Eylem Planı Hazırlama Hizmeti">
                </div>
            </div>
        `,
        'mobil-saglik': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Mobil Sağlık Tarama Aracı Hizmeti</h2>
                    <p>Mobil sağlık tarama aracı hizmetimizle periyodik sağlık kontrollerinizi işyerinizde yapıp sizin zaman ve enerji kaybınızı en aza indiriyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-7.png" alt="Mobil Sağlık Tarama Aracı Hizmeti">
                </div>
            </div>
        `,
        'yangin-tatbikat': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Acil Durum Ve Yangın Tatbikat Hizmeti</h2>
                    <p>Acil durum ve yangın tatbikat hizmetimizle işyerinde bulunan acil durum planı kapsamında tatbikat öncesi ekipler oluşturuyoruz ve ekiplere uygun eğitimlerini veriyoruz. İşyerinize uygun tatbikatlar yapıp sonuçları hakkında çalışanları ve işverenleri bilgilendiriyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/osgb-8.png" alt="Acil Durum Ve Yangın Tatbikat Hizmeti">
                </div>
            </div>
        `,
        'periyodik-kontrol': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Periyodik Kontrol Ve Ortam Ölçümleri</h2>
                    <p>İş güvenliği uzmanlarımız ve mühendis ekibimizle birlikte işyerinizin mevzuat kapsamında periyodik kontrol yaptırılması gereken makine ve elektrik ekipmanlarını belirliyoruz. Çözüm ortaklarımızla ölçümlerinizin yaptırılmasını sağlıyoruz. Ölçüm sonuçlarına göre işyerinizi risk değerlendirmesini yapıyoruz. Kontrolden geçmeyen ekipmanlarınıza düzeltici, önleyici faaliyet formu hazırlıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/danismanlik-1.png" alt="Periyodik Kontrol Ve Ortam Ölçümleri">
                </div>
            </div>
        `,
        'tehlikeli-madde': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Tehlikeli Madde Güvenlik Danışmanlığı Hizmeti</h2>
                    <p>İşyerinizin ADR kapsamında olup olmadığına karar veriyoruz. ADR / IMDG / RID’e göre, tehlikeli maddelerin lojistiği sürecinde, ulusal ve uluslararası karmaşık mevzuat yapılarına uyulması gerekmektedir. İşyerinizi tehlikeli madde taşımacılığı konusunda tüm ulusal ve uluslararası düzenlemelere uyumlu hale gelmesini sağlıyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/danismanlik-2.jpg" alt="Tehlikeli Madde Güvenlik Danışmanlığı Hizmeti">
                </div>
            </div>
        `,
        'ilkyardim': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>İlkyardım Eğitim Hizmeti [Sağlık Bakanlığı Onaylı]</h2>
                    <p>İlkyardım eğitim hizmetimizle Sağlık Bakanlığı onaylı ilkyardım eğitim merkezimizde ilkyardım yönetmeliği kapsamında temel ilkyardım eğitimi ve ilkyardım güncelleme eğitimlerini veriyoruz. Ülkemiz sınırları içerisinde faaliyet gösteren özel ve resmi tüm işletmelerin, çalışanlarının belirli bir bölümünün 16 saatlik temel ilk yardım eğitimi almasını zorunlu hale getirmiştir. Bu eğitimler her ilin il sağlık müdürlüğünden eğitim verme yetkisini almış kurumumuz tarafından verilmektedir. Toplam 16 saat olan eğitim 2 gün sekizer saat olarak verilebilmektedir. Eğitim sonunda eğitime katılan kişilerin adına sertifika ve kimlik kartları düzenlenmektedir.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/egitim-1.png" alt="İlkyardım Eğitim Hizmeti [Sağlık Bakanlığı Onaylı]">
                </div>
            </div>
        `,
        'yuksekte-calisma': `
            <div class="content-wrapper">
                <div class="text-content">
                    <h2>Yüksekte Çalışma Eğitimi</h2>
                    <p>Yüksekte çalışma eğitimlerimizle, işyerinizde yüksekte yapılan veya yapılabilecek çalışmaların tehlikelerini tespit ediyoruz. Yapılacak çalışmaya yönelik gereken önlemler ve kullanılması gereken koruyucu ekipmanlar hakkında çalışanların bilgilendirilmesini sağlıyoruz. Yüksekte çalışma yapacak personele güvenli çalışma alanlarında uygulamalı eğitim veriyoruz.</p>
                </div>
                <div class="image-content">
                    <img src="../../assets/images/egitim-2.png" alt="Yüksekte Çalışma Eğitimi">
                </div>
            </div>
        `,
        'isg-egitim-2': `
        <div class="content-wrapper">
            <div class="text-content">
                <h2>İş Sağlığı Ve Güvenliği Eğitim Hizmeti</h2>
                <p>İş sağlığı ve güvenliği eğitim hizmetlerimizle, 6331 sayılı iş sağlığı ve güvenliği kanunu çalışanların eğitimi madde 17 kapsamında çalışanların İSG ile ilgili mevzuatta belirtilen tüm eğitimlerini veriyoruz. Eğitimler işletmelerde sağlıklı ve güvenli ortamlar oluşturmak, iş kazaları ve meslek hastalıklarını azaltmak amacıyla düzenlenmektedir. Bu eğitimlerde çalışanlar yasal hak ve sorumlulukları konusunda ve karşılaşabilecekleri mesleki riskler ve bu riskler için alınması gerekli tedbirler konusunda bilinçlendirilirler. İSG eğitimlerimiz sonunda çalışanlara İSG Eğitim Sertifikaları’nı veriyoruz.</p>
            </div>
            <div class="image-content">
                <img src="../../assets/images/egitim-3.png" alt="İş Sağlığı Ve Güvenliği Eğitim Hizmeti">
            </div>
        </div>

        `
    };

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentKey = this.getAttribute('data-content');
            if (contents[contentKey]) {
                contentDisplay.innerHTML = contents[contentKey];
                contentDisplay.style.display = 'block';
            }
        });
    });
});

        // Get the scroll-up button
        const scrollUpButton = document.getElementById('scrollUp');

        // Add a click event listener to the button
        scrollUpButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior

            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const menu = document.querySelector('.menu');
        
            hamburger.addEventListener('click', function() {
                menu.classList.toggle('active');
            });
        });