var models = [
    {
        image: 'img/1.png',
        link: 'domain.html',
        icerik:"Domain Hizmetlerimiz için tıklayınız.."
    },
    {
        image: 'img/2.png',
        link: 'hosting.html',
        icerik:"Hosting Hizmetlerimiz için tıklayınız.."
    },
    {
        image: 'img/3.jpg',
        link: 'birimlerimiz.html?p=bankahesap',
        icerik:"Banka Hesaplarımız için tıklayınız..",
    }
];

var index = 0;
var slideCount = models.length;
var interval;
var settings = {
    duration: '3000',
    random: false
};

init(settings);

document.querySelectorAll(".slider-img").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        clearInterval(interval);
    })
})

document.querySelectorAll(".slider-img").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
        init(settings);
    })
})

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev)
            prev = index;
        } else {
            // artan index
            if (slideCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.slider p').textContent = models[index].icerik;
    document.querySelector('.slider-img').setAttribute('src', models[index].image);
    document.querySelector('.slider-link').setAttribute('href', models[index].link);
}

document.querySelector('.arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
document.querySelector('.arrow-right').addEventListener('click', function () {
    index++
    showSlide(index);
});


