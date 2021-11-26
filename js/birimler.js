let birimlerArticle = document.querySelector("#birimlerimiz-article");

function banka() {
    let bankalar = [
        {
            birim: "Banka Hesap Bilgileri",
            bankalar: [
                {
                    img: "img/banka_enpara_sirketim-1.png",
                    alici: "YT Bilişim Hizmetleri Sanayi ve Ticaret Limited Şirketi",
                    IBAN: "TR98 0000 0052 0003 2089 02",
                    hesapNo: "67869855",
                    sube: "036352",
                    birim: "Türk Lirası"
                },
                {
                    img: "img/banka_yapikredi.png",
                    alici: "YT Bilişim Hizmetleri Sanayi ve Ticaret Limited Şirketi",
                    IBAN: "TR87 0000 0044 0003 2525 02",
                    hesapNo: "6756895",
                    sube: "036568",
                    birim: "Türk Lirası"
                },
                {
                    img: "img/banka_ziraat.png",
                    alici: "YT Bilişim Hizmetleri Sanayi ve Ticaret Limited Şirketi",
                    IBAN: "TR44 2000 0052 0003 2459 99",
                    hesapNo: "1286999",
                    sube: "012522",
                    birim: "Türk Lirası"
                },
                {
                    img: "img/garanti_bbva.png",
                    alici: "YT Bilişim Hizmetleri Sanayi ve Ticaret Limited Şirketi",
                    IBAN: "TR72 0000 0052 0003 2088 45",
                    hesapNo: "57895525",
                    sube: "369524",
                    birim: "Türk Lirası"
                }
            ]
        }
    ]
    birimlerArticle.innerHTML = `
    <div class="banka">
        <h1>Banka Hesap Bilgileri</h1>
        <p>Lütfen gerçekleştirdiğiniz ödemeleri bize 0216 473 73 25 nolu telefon üzerinden bildiriniz</p>
    </div>
`;

    let banka = document.querySelector(".banka")
    for (let i = 0; i < bankalar[0].bankalar.length; i++) {

        banka.innerHTML += `
    
    <table class="banka-card">
            <tr>
                <td colspan="2">
                    <img src="${bankalar[0].bankalar[i].img}" alt="">
                </td>
            </tr>
            <tr>
                <td>Alıcı</td>
                <td>${bankalar[0].bankalar[i].alici}</td>
            </tr>
            <tr>
                <td>IBAN</td>
                <td>${bankalar[0].bankalar[i].IBAN}</td>
            </tr>
            <tr>
                <td>Hesap No</td>
                <td>${bankalar[0].bankalar[i].hesapNo}</td>
            </tr>
            <tr>
                <td>Şube</td>
                <td>${bankalar[0].bankalar[i].sube}</td>
            </tr>
            <tr>
                <td>Birim</td>
                <td>${bankalar[0].bankalar[i].birim}</td>
            </tr>
        </table>
    
    `;

    }

}

function ik() {
    birimlerArticle.innerHTML = `<div class="ik">
        <h1>İnsan Kaynakları</h1>
        <img src="img/ik.png" alt="">
        <h2>Neden Biz?</h2>
        <ul>
            <li>Dünya lideri teknoloji firmaları ile üst düzeyde iş ortaklığı yaparız.</li>
            <li>İnovatif fikirlere ve ARGE çalışmalarına yatırım yaparak yeni teknolojileri hep bir adım önde sunarız.
            </li>
            <li>Uluslararası geçerliliğe sahip belgelendirmeler ile hizmet kalitesini sürekli güçlendiririz.</li>
            <li>Referans niteliğindeki bulut, danışmanlık, altyapı, yazılım projelerine imza atarız.</li>
            <li>Çalışanlarımızın tüm yasal haklarını korur ve takip ederiz.</li>
        </ul>
        <ul>
            <li>Güvenli ve sağlıklı çalışma ortamı yaratmak için İşçi Sağlığı ve İş Güvenliği uygulamalarına önem
                veririz.
            </li>
            <li>Çalışanlarımıza farklı projelerde görev alma şansı vererek, bireysel gelişimlerine katkı sağlarız.</li>
            <li>Organizasyonel yapılanmayı ihtiyaçlara ve değişime göre şekillendiririz.</li>
            <li>Her zaman çalışanlarımızın yanında olur, değerleriyle hareket ederiz.</li>
            <li>Başarıya ulaşmadaki en önemli etkenin çalışanlarımız olduğunun bilinciyle davranırız</li>
        </ul>

        <h1>Özgeçmişinizi Gönderin</h1>
        <h4>Kariyer fırsatlarımızı değerlendirmek ve YT ailesinin bir parçası olmak için siz de hemen özgeçmişinizi gönderin.</h4>

        <div class="ik-form">
            <form action="">
                <div>
                    <label for="ad">Ad Soyad :</label>
                    <input type="text" id="ad"></div>
                <div>
                    <label for="email">E-Posta :</label>
                    <input type="email" id="email">
                </div>
                <div>
                    <label for="mesaj">Mesajınız :</label>
                    <textarea id="mesaj"></textarea>
                </div>
                <div>
                    <label for="cv">CV'niz :</label>
                    <input type="file" id="cv"></input>
                </div>
                <div>
                    <label for="gonder"></label>
                    <input id="gonder" type="submit" value="Gönder">
                </div>
            </form>
        </div>

    </div>`;

}

function teknikdestek() {
    birimlerArticle.innerHTML = `    
    <div class="teknikdestek">
        <h1>Teknik Destek</h1>

        <h3>Bizi arayabilir veya aşağıdaki form üzerinden hızlı bir şekilde destek alabilirsiniz.</h3>

        <div class="ik-form">
            <form action="">
                <div>
                    <label for="adt">Ad Soyad :</label>
                    <input type="text" id="adt"></div>
                <div>
                    <label for="emailt">E-Posta :</label>
                    <input type="email" id="emailt">
                </div>
                <div>
                    <label for="mesajt">Mesajınız :</label>
                    <textarea id="mesajt"></textarea>
                </div>
                <div>
                    <label for="gondert"></label>
                    <input id="gondert" type="submit" value="Gönder">
                </div>
            </form>
        </div>

        <p>İyiye değil en iyiye doğru</p>

    </div>
`;
}

var url = new URL(window.location.href);
var b = url.searchParams.get("b");

switch (b){
    case "bankahesap":
        banka();
        break;
    case "teknik":
        teknikdestek();
        break;
    case "ik":
        ik();
        break;
    default:
        banka();

}

