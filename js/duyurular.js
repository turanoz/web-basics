let duyurularArticle = document.querySelector("#duyurular-article");
let duyuruCardContainer = document.querySelector("#duyuru-card-container");
let duyurular = [
    {
        tarih: "16.11.2021",
        img: "img/1250525329.jpeg",
        baslik: "%72'ye Varan Gerçek Büyük Cuma İndirimleri Başladı! Birçok Üründe Geçerli İndirimleri Kaçırma!",
        icerik: "Büyük Cuma İndirimi Başladı!\n" +
            "\n" +
            "%72'ye Varan Gerçek İndirimleri Yakala!\n" +
            "\n" +
            ".COM Domain - Hosting - Kurumsal E-posta - WordPress Hosting - Hazır Site - VDS Server\n" +
            "\n" +
            "Birçok Üründe Gerçek İndirimler Seni Bekliyor!"
    },
    {
        tarih: "01.11.2021",
        img: "img/1200x628-copy.jpg",
        baslik: "4.99$'a .COM Domain Kayıt Et! Efsane Fiyat Geri Döndü - Acele Et!",
        icerik: "4.99$'a .COM Domain Kaydet!\n" +
            "/n" +
            "Efsane Fiyat Geri Döndü!\n" +
            "/n" +
            "DNS Zone Yönetimi - Domain & E-posta Yönlendirme - Özel NS Oluşturma ÜCRETSİZ!"
    }, {
        tarih: "22.09.2021",
        img: "img/1200x628.jpg",
        baslik: "%30 Gerçek Hosting İndirimi - Efsane İşe Dönüş Başladı!",
        icerik: "%30 Gerçek Hosting İndirim\n" +
            "Ücretsiz SSL & Site Taşıma ile\n" +
            "Efsane İşe Dönüş Başladı!"
    }, {
        tarih: "30.04.2021",
        img: "img/hazir-site-1200x628-1.png",
        baslik: "%72 Gerçek Hazır Site İndirimi - Gerçek İndirimi Sakın Kaçırmayın!",
        icerik: "%72 Gerçek Hazır Site İndirimi!\n" +
            "\n" +
            "Kullanımı kolay hazır site paketleri ile sizin de bir siteniz olsun!\n" +
            "\n" +
            "Ücretsiz +245 Şablon & SSL Güvenlik Sertifikası ile\n" +
            "\n" +
            "Hiçbir Teknik Bilgi Gerektirmez ve 15 Dakikada Sitenizi Yayınlayabilirsiniz."
    }, {
        tarih: "3.10.2019",
        img: "img/facebok_paylasim1.jpg",
        baslik: "Hazır Site Aracı ile Siteni 5 Dakikada Tasarla - Anında Yayınla!",
        icerik: "Hazır site tasarım aracı ile site sahibi olmak için teknik bilgiye sahip olmaya gerek yoktur. 200 farklı şablon arasından dilediğinizi ücretsiz olarak seçin ve düzenleyin. İnternet sitenizi dakikalar içerisinde yayınlayın. Üstelik Domain ve Hosting hediye!\n"
    }, {
        tarih: "29.04.2019",
        img: "img/1200x628-copy.jpg",
        baslik: "Müthiş Fırsat! 4.99$'a .Com ve .Net Domain Kaydet!",
        icerik: "Sayın müşterilerimiz,\n" +
            "\n" +
            "Gelenekselleşen  .COM ve .NET domain kampanyamız şuan aktif! Sınırlı sayıda domaini kapsayan bu kampanyamızda .COM ve .NET domainleri  4.99$ gibi çok ucuz bir fiyat ile tescil edebilirsiniz."
    }, {
        tarih: "26.12.2018",
        img: "img/wordpress.png",
        baslik: "Yeni Yıl Kampanyası %30 Net İndirim!",
        icerik: "Sayın Müşterilerimiz,\n" +
            "\n" +
            "Yeni yıla sayılı günler kala siz müşterilerimizin karşısına Yeni Yıl Kampanyamızın müjdesiyle çıkıyoruz . Kampanya kapsamında bütün web hosting paketlerimizde sepette net %30 indirim ve ücretsiz domain fırsatını kaçırmayın!"
    }, {
        tarih: "30.04.2021",
        img: "img/content-delivery-network-cdn-4-300x225.jpg",
        baslik: "Com.tr Uzantısında %60 İndirimi Duyurusu",
        icerik: "Değerli Müşterilerimiz,\n" +
            "\n" +
            "11 Aralık 2018 tarihinde başlamış olan kampanyamız kapsamında Com.tr uzantısında %60 indirim fırsatını kaçırmayın.  Üstelik ad-soyad.com.tr alan adı alımlarında belge gerektirmez sadece Türkiye Cumhuriyeti kimlik numaranız yeterli. \n"
    },
]
var sayac = 0
duyurular.forEach(function (p) {
    if (window.location.href.indexOf("duyurular") > -1) {
        duyurularArticle.innerHTML += `
    <div class="duyuru-card">
        <h3>${p.baslik}</h3>
        <p style="text-align: right">${p.tarih}</p>
        <img src="${p.img}" alt="">
        <p>${p.icerik}</p>
    </div>
    `;
    } else if (sayac < 6 && window.location.href.indexOf("index") > -1) {
        duyuruCardContainer.innerHTML += `
    <div class="duyuru-card">
        <h3>${p.baslik}</h3>
        <p style="text-align: right">${p.tarih}</p>
        <img src="${p.img}" alt="">
        <p>${p.icerik}</p>
    </div>
    `;
    }
    sayac++;


})
let modal = document.getElementById('myModal');
let modalBaslik = document.querySelector(".modal-baslik");
let modalIcerik = document.querySelector(".modal-icerik");
let duyuruEkle = document.querySelector("#duyuru-ekle");
let span = document.getElementsByClassName("close")[0];
let duyuruCard = document.querySelectorAll(".duyuru-card");

try{
    duyuruEkle.onclick = function (e) {
        modalBaslik.innerHTML = "";
        modalIcerik.innerHTML = "";
        modalBaslik.innerHTML = "<h1>Duyuru Ekle</h1>"
        modalIcerik.innerHTML += `<div class="duyuru-form">
        <table>
            <tr>
                <td>Başlık :</td>
                <td>
                    <input id="baslik" type="text">
                </td>
            </tr>
            <tr>
                <td>İçerik :</td>
                <td>
                    <textarea id="icerik"></textarea>
                </td>
            </tr>
            <tr>
                <td>Ekler:</td>
                <td>
                    <input id="ek" type="file">
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: right">
                    <input type="submit" value="Ekle">
                </td>
            </tr>
        </table>
    </div>`;
        modal.style.display = "block";
    }
}
catch (error){
    console.log(error)
}


duyuruCard.forEach(function (i) {
    i.onclick = function (e) {
        modalBaslik.innerHTML = i.children[0].innerHTML;
        modalIcerik.innerHTML = i.children[3].innerHTML;
        modal.style.display = "block";
    }
})
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}