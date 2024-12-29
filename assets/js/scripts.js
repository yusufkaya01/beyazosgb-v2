function toggleSubMenu(id) {
    // Get all elements with the class 'left-hand-menu-sub-menu'
    var subMenus = document.getElementsByClassName('left-hand-menu-sub-menu');

    // Loop through all sub-menus and collapse them
    for (var i = 0; i < subMenus.length; i++) {
        subMenus[i].classList.remove('open');
    }

    // Expand the selected sub-menu
    var subMenu = document.getElementById(id);
    if (subMenu.classList.contains('open')) {
        subMenu.classList.remove('open');
    } else {
        subMenu.classList.add('open');
    }
}

function showContent(id) {
    var content = {
        "left-hand-menu-isg-uzmani": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İş Güvenliği Uzmanı Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">İş güvenliği hizmetimiz kapsamında etkin iş güvenliği uzmanlarımızla, iş kazalarını önlemeye yönelik kapsamlı risk analizleri ve güvenlik önlemleri sağlıyoruz. İş yerinizdeki potansiyel tehlike ve riskleri belirleyerek çalışanların güvenli ortamda çalışması için tespit ve öneride bulunuyoruz, güvenli bir çalışma ortamı oluşturmak için saha raporları sunuyoruz. Sahada gösterdiğimiz eforu aynı zamanda ISG mevzuat prosedürlerine göre ISG dosyasını hazırlarken de gösteriyoruz. Acil durum planları ve çalışanlara yönelik eğitimlerle iş güvenliğini en üst seviyeye çıkarıyoruz. İş güvenliği çözümlerimizle iş yerinizi güvenli hale getirmek ve iş kazalarını önlemek için şimdi bizimle iletişime geçin.</span>
            </div>
        `,
        "left-hand-menu-is-yeri-hekimligi": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İşyeri Hekimliği Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">İş sağlığı hizmetimiz kapsamında deneyimli işyeri hekimlerimizle, çalışanların sağlık gözetimi ve çalışma ortamının sağlık gözetimi ile ilgili işverene rehberlik yapıyoruz. İşe giriş sağlık tahlilleri ile çalışanın işyeriniz için uygun olup olmadığına işyeri hekimlerimizle karar veriyoruz. Saha ziyaretlerimizde çalışanlarınız işyeri hekimlerimiz tarafından muayene edilip reçete yazma hizmeti sağlıyoruz. İş sağlığı ve güvenliği alanında yapılacak araştırmalara katılmak, ayrıca işin yürütümünde ergonomik ve psikososyal riskler açısından çalışanların fiziksel ve zihinsel kapasitelerini dikkate alarak iş ile çalışanın uyumunun sağlanması ve çalışma ortamındaki stres faktörlerinden korunmaları için araştırmalar yapmak ve bu araştırma sonuçlarını rehberlik faaliyetlerinde dikkate almak. İşyeri bina ve eklentilerinin genel hijyen şartlarını sürekli izleyip denetleyerek, çalışanlara yürütülen işin gerektirdiği beslenme ihtiyacının ve uygun içme suyunun sağlanması konularında tavsiyelerde bulunmak. Kantin, yemekhane, yatakhane, kreş ve emzirme odaları ile soyunma odaları, duş ve tuvaletlerin bakımı ve temizliği konusunda gerekli kontrolleri yaparak tavsiyelerde bulunmak. İşyerinde meydana gelen iş kazası ve meslek hastalıklarının nedenlerinin araştırılması ve tekrarlanmaması için alınacak önlemler konusunda çalışmalar yaparak işverene önerilerde bulunmak.</span>
            </div>
        `,
        "left-hand-menu-diger-saglik-personeli": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Diğer Sağlık Personeli Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">Diğer Sağlık Personeli Hizmetimizle İşyerimizdeki Sağlık Tarama Ve Mobil Sağlık Taramalarımızda İşyeri Hekimlerimize Destek Olmasını Sağlıyoruz.</span>
            </div>
        `,
        "left-hand-menu-ise-giris-muayene": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İşe Giriş/Periyodik Muayene Sağlık Raporu</span><br><br>
                <span style="color: black; text-align: justify;">İşe giriş sağlık raporu hizmetimizle işe alacağınız çalışanların işyerinde maruz kalacakları sağlık ve güvenlik risklerini dikkate alarak sağlık gözetimine ve tahlillere tabi tutulmalarını sağlıyoruz. İşe uygun olup olmadığı konusunda işverene rehberlik ediyoruz. Periyodik muayene sağlık raporu hizmetimizle kanunda belirtilen yasal periyodik sürelerde mevcut çalışanların sağlık muayenelerini yapıyoruz personelin sağlık gidişatı ile ilgili personele ve işverene rehberlik yapıyoruz.</span>
            </div>
        `,
        "left-hand-menu-isg-egitim": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İş Sağlığı Ve Güvenliği Eğitim Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">İş sağlığı ve güvenliği eğitim hizmetlerimizle, 6331 sayılı iş sağlığı ve güvenliği kanunu çalışanların eğitimi madde 17 kapsamında çalışanların ISG ile ilgili mevzuatta belirtilen tüm eğitimlerini veriyoruz. Eğitimler işletmelerde sağlıklı ve güvenli ortamlar oluşturmak, iş kazaları ve meslek hastalıklarını azaltmak amacıyla düzenlenmektedir. Bu eğitimlerde çalışanlar yasal hak ve sorumlulukları konusunda ve karşılaşabilecekleri mesleki riskler ve bu riskler için alınması gerekli tedbirler konusunda bilinçlendirilirler. Çalışanlara eğitimler sonunda sertifikalarını veriyoruz.</span>
            </div>
        `,
        "left-hand-menu-risk-analizi": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İşyeri Risk Analizi Ve Acil Durum Eylem Planı Hazırlama Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">İşyeri Risk Analizi Hizmetimizle İşyerinizdeki Tehlike Ve Risklere Göre Kapsamlı Ve İnteraktif Risk Değerlendirmeleri Hazırlıyoruz. Hizmetimiz Sürecinde İşyerinizde Alacağınız Önlemler İçin Mevzuat Dayanağında Önerilerde Bulunuyoruz. Aksiyon Planlarımız İle Risk Değerlendirmenizi Güncel Ve Dinamik Tutuyoruz. Acil Durum Eylem Planı Hazırlama Hizmetimizle İşyerinizde Karşılaştığınız Ya Da Karşılaşma Olasılığı Olan Tüm Acil Durumların Tespit Edilmesi Ve Alınacak Aksiyonlar Hakkında Eylem Planı Hazırlıyoruz.</span>
            </div>
        `,
        "left-hand-menu-mobil-saglik": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Mobil Sağlık Tarama Aracı Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">Mobil sağlık tarama aracı hizmetimizle periyodik sağlık kontrollerinizi işyerinizde yapıp sizin zaman ve enerji kaybınızı en aza indiriyoruz.</span>
            </div>
        `,
        "left-hand-menu-yangin-tatbikat": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Acil Durum Ve Yangın Tatbikat Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">Acil Durum Ve Yangın Tatbikat Hizmetimizle İşyerinde Bulunan Acil Durum Planı Kapsamında Tatbikat Öncesi Ekipler Oluşturuyoruz Ve Ekiplere Uygun Eğitimlerini Veriyoruz. İşyerinize Uygun Tatbikatlar Yapıp Sonuçları Hakkında Çalışanları Ve İşverenleri Bilgilendiriyoruz.</span>
            </div>
        `,
        "left-hand-menu-periyodik-kontrol": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Periyodik Kontrol Ve Ortam Ölçümleri</span><br><br>
                <span style="color: black; text-align: justify;">İş güvenliği uzmanlarımız ve mühendis ekibimizle birlikte işyerinizin mevzuat kapsamında periyodik kontrol yaptırılması gereken makine ve elektrik ekipmanlarını belirliyoruz. Çözüm ortaklarımızla ölçümlerinizin yaptırılmasını sağlıyoruz. Ölçüm sonuçlarına göre işyerinizi risk değerlendirmesini yapıyoruz kontrolden geçmeyen ekipmanlarınıza düzeltici, önleyici faaliyet formu hazırlıyoruz.</span>
            </div>
        `,
        "left-hand-menu-tehlikeli-madde": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Tehlikeli Madde Güvenlik Danışmanlığı Hizmeti</span><br><br>
                <span style="color: black; text-align: justify;">İşyerinizin Adr Kapsamında Olup Olmadığına Karar Veriyoruz. Adr / Imdg / Rıd’e Göre, Tehlikeli Maddelerin Lojistiği Sürecinde, Ulusal Ve Uluslararası Karmaşık Mevzuat Yapılarına Uyulması Gerekmektedir. İşyerinizi Tehlikeli Madde Taşımacılığı Konusunda Tüm Ulusal Ve Uluslararası Düzenlemelere Uyumlu Hale Gelmesini Sağlıyoruz.</span>
            </div>
        `,
        "left-hand-menu-ilkyardim": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">İlkyardım Eğitim Hizmeti [Sağlık Bakanlığı Onaylı]</span><br><br>
                <span style="color: black; text-align: justify;">İlkyardım eğitim hizmetimizle sağlık bakanlığı onaylı ilkyardım eğitim merkezimizde ilkyardım yönetmeliği kapsamında temel ilkyardım eğitimi ve ilkyardım güncelleme eğitimlerini veriyoruz. Ülkemiz sınırları içerisinde faaliyet gösteren özel ve resmi tüm işletmelerin, çalışanlarının belirli bir bölümünün 16 saatlik temel ilk yardım eğitimi almasını zorunlu hale gelmiştir. Bu eğitimler her ilin il sağlık müdürlüğünden eğitim verme yetkisini almış kurumumuz tarafından verilmektedir. Toplam 16 saat olan eğitim 2 gün sekizer saat olarak verilebilmektedir. Eğitim sonunda eğitime katılan kişilerin adına sertifika ve kimlik kartları düzenlenmektedir.</span>
            </div>
        `,
        "left-hand-menu-yuksekte-calisma": `
            <div style="margin-top: 50px; margin-right: 250px;">
                <span style="color: #d83200; font-weight: bold;">Yüksekte Çalışma Eğitimi</span><br><br>
                <span style="color: black; text-align: justify;">Yüksekte çalışma eğitimlerimizle, işyerinizde yüksekte yapılan veya yapılabilecek çalışmaların tehlikelerini tespit ediyoruz. Yapılacak çalışmaya yönelik gereken önlemler ve kullanılması gereken koruyucu ekipmanlar hakkında çalışanların bilgilendirilmesini sağlıyoruz. Yüksekte çalışma yapacak personele güvenli çalışma alanlarında uygulamalı eğitim veriyoruz.</span>
            </div>
        `
    };

    document.getElementById('left-hand-menu-content').innerHTML = content[id] || "Content not found.";
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
