let limitsizLinuxHosting = [
    {
        name: 'Başlangıç',
        properties: ["2 Site Barındırma ", "5 GB SSD Disk Alanı", "Limitsiz Trafik", "25 E-posta Adresi", "1 Core CPU / 1 GB RAM", "5 MySQL Veritabanı"],
        price: '15 ₺ / Ay'
    },
    {
        name: 'Plus',
        properties: ["4 Site Barındırma ", "10 GB SSD Disk Alanı", "Limitsiz Trafik", "50 E-posta Adresi", "2 Core CPU / 2 GB RAM", "10 MySQL Veritabanı"],
        price: '15 ₺ / Ay'
    },
    {
        name: 'Avantaj',
        properties: ["Limitsiz Site Barındırma ", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "Limitsiz E-posta Adresi", "2 Core CPU / 2 GB RAM", "Limitsiz MySQL Veritabanı"],
        price: '25 ₺ / Ay'
    },
    {
        name: 'Limitsiz',
        properties: ["<b>Ücretsiz .COM Domain</b>", "Limitsiz Site Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "Limitsiz E-posta Adresi", "4 Core CPU / 4 GB RAM", "Limitsiz MySQL Veritabanı"],
        price: '35 ₺ / Ay'
    }

];
let limitsizWindowsHosting = [
    {
        name: 'Başlangıç',
        properties: ["2 Site Barındırma ", "5 GB SSD Disk Alanı", "Limitsiz Trafik", "25 E-posta Adresi", "1 Core CPU / 1 GB RAM", "5 MSSQL/MySQL Veritabanı"],
        price: '15 ₺ / Ay'
    },
    {
        name: 'Plus',
        properties: ["4 Site Barındırma ", "10 GB SSD Disk Alanı", "Limitsiz Trafik", "50 E-posta Adresi", "2 Core CPU / 2 GB RAM", "10 MSSQL/MySQL Veritabanı"],
        price: '15 ₺ / Ay'
    },
    {
        name: 'Avantaj',
        properties: ["Limitsiz Site Barındırma ", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "Limitsiz E-posta Adresi", "2 Core CPU / 2 GB RAM", "20 MSSQL/MySQL Veritabanı"],
        price: '25 ₺ / Ay'
    },
    {
        name: 'Limitsiz',
        properties: ["<b>Ücretsiz .COM Domain</b>", "Limitsiz Site Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "Limitsiz E-posta Adresi", "4 Core CPU / 4 GB RAM", "25 MSSQL/MySQL Veritabanı"],
        price: '35 ₺ / Ay'
    }
];
let ekonomikLinuxHosting = [
    {
        name: 'Mini 1',
        properties: ["1 Site Barındırma ", "256 MB SSD Disk Alanı", "5 GB Aylık Trafik", "1 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "1 MySQL Veritabanı"],
        price: '2 ₺ / Ay'
    },
    {
        name: 'Mini 2',
        properties: ["1 Site Barındırma ", "512 MB SSD Disk Alanı", "15 GB Aylık Trafik", "5 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "1 MySQL Veritabanı"],
        price: '3 ₺ / Ay'
    },
    {
        name: 'Mini 3',
        properties: ["1 Site Barındırma ", "1024 MB SSD Disk Alanı", "25 GB Aylık Trafik", "10 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "3 MySQL Veritabanı"],
        price: '5 ₺ / Ay'
    }, {
        name: 'Mini 4',
        properties: ["1 Site Barındırma ", "2048 MB SSD Disk Alanı", "50 GB Aylık Trafik", "15 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "6 MySQL Veritabanı"],
        price: '9 ₺ / Ay'
    }];
let ekonomikWindowsHosting = [
    {
        name: 'Mini 1',
        properties: ["1 Site Barındırma ", "256 MB SSD Disk Alanı", "5 GB Aylık Trafik", "1 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "1 MSSQL/MySQL Veritabanı"],
        price: '2 ₺ / Ay'
    },
    {
        name: 'Mini 2',
        properties: ["1 Site Barındırma ", "512 MB SSD Disk Alanı", "15 GB Aylık Trafik", "5 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "1 MSSQL/MySQL Veritabanı"],
        price: '3 ₺ / Ay'
    },
    {
        name: 'Mini 3',
        properties: ["1 Site Barındırma ", "1024 MB SSD Disk Alanı", "25 GB Aylık Trafik", "10 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "3 MSSQL/MySQL Veritabanı"],
        price: '5 ₺ / Ay'
    },
    {
        name: 'Mini 4',
        properties: ["1 Site Barındırma ", "2048 MB SSD Disk Alanı", "50 GB Aylık Trafik", "15 E-posta Adresi", "1/2 Core CPU / 512 MB RAM", "6 MSSQL/MySQL Veritabanı"],
        price: '9 ₺ / Ay'
    }];
let bayi = [
    {
        name: 'cPanel Reseller 5',
        properties: ["5 Hesap Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "2 Core CPU / 2 GB RAM", "Disk I/O 25MB/s", "Limitsiz MySQL Veritabanı", "Limitsiz E-posta Adresi",],
        price: '25 ₺ / Ay'
    }, {
        name: 'cPanel Reseller 10',
        properties: ["10 Hesap Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "2 Core CPU / 2 GB RAM", "Disk I/O 25MB/s", "Limitsiz MySQL Veritabanı", "Limitsiz E-posta Adresi",],
        price: '35 ₺ / Ay'
    }, {
        name: 'cPanel Reseller 15',
        properties: ["15 Hesap Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "2 Core CPU / 2 GB RAM", "Disk I/O 25MB/s", "Limitsiz MySQL Veritabanı", "Limitsiz E-posta Adresi",],
        price: '50 ₺ / Ay'
    }, {
        name: 'cPanel Reseller 20',
        properties: ["20 Hesap Barındırma", "Limitsiz SSD Disk Alanı", "Limitsiz Trafik", "2 Core CPU / 2 GB RAM", "Disk I/O 25MB/s", "Limitsiz MySQL Veritabanı", "Limitsiz E-posta Adresi",],
        price: '75 ₺ / Ay'
    },
]

let hostingArticle = document.querySelector(".hosting-card-container");
let hostingBaslik = document.querySelector(".hosting-baslik");
let linuxButton = document.querySelector("#linux-button");
let windowsButton = document.querySelector("#windows-button");


function getir(hosting) {

    hostingArticle.innerHTML = "";
    hosting.forEach(function (c) {
        var ozellikler = "";
        c.properties.forEach(function (f) {
            ozellikler += `<li>${f}</li>`
        })
        let card = `
    <div class="hosting-card">
        <h3>${c.name}</h3>
        <ul>
            <li>${c.price}</li>
            ${ozellikler}
        </ul>
        <a href="">İncele</a>
    </div>`
        hostingArticle.innerHTML += card;
    })

}

function linux() {
    linuxButton.style.backgroundColor = "#4cd070";
    windowsButton.style.backgroundColor = "#23353d";
}

function windows() {
    linuxButton.style.backgroundColor = "#23353d";
    windowsButton.style.backgroundColor = "#4cd070";
}

var url = new URL(window.location.href);
var c = url.searchParams.get("h");

if (c == "limitsiz") {
    hostingBaslik.innerHTML = `
            <h1>Limitsiz Web Hosting</h1>
            <p>SINIRLARI ORTADAN KALDIRIN, PERFORMANSI SONUNA KADAR YAŞAYIN!</p>
            <p>Lokasyon: İstanbul-TR</p>`
    getir(limitsizLinuxHosting);
    linux();
    linuxButton.onclick = function (e) {
        linux();
        getir(limitsizLinuxHosting);
    }
    windowsButton.onclick = function (e) {
        windows();
        getir(limitsizWindowsHosting);
    }
} else if (c == "ekonomik") {
    hostingBaslik.innerHTML = `
            <h1>Ekonomik Hosting</h1>
            <p>EN İYİ BAŞLANGIÇ PAKETLERİ</p>
            <p>Lokasyon: İstanbul-TR</p>`
    getir(ekonomikLinuxHosting);
    linux();
    linuxButton.onclick = function (e) {
        linux();
        getir(ekonomikLinuxHosting);
    }
    windowsButton.onclick = function (e) {
        windows();
        getir(ekonomikWindowsHosting);
    }
} else if (c == "bayi") {
    linuxButton.style.display = "none";
    windowsButton.style.display = "none";
    hostingBaslik.innerHTML = `
            <h1>Reseller (Bayi) Hosting</h1>
            <p>İŞİNİ ŞANSA BIRAKMAYAN WEBMASTER'LAR İÇİN</p>
            <p>Lokasyon: İstanbul-TR</p>`
    getir(bayi);
} else {
    linuxButton.style.display = "none";
    windowsButton.style.display = "none";
}



