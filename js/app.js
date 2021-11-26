var models = [
    {
        image: 'img/1.png',
        link: 'domain.html'
    },
    {
        image: 'img/2.png',
        link: 'hosting.html'
    },
    {
        image: 'img/3.jpg',
        link: 'hakkimizda.html'
    }
];

var index = 0;
var slideCount = models.length;
var interval;
var settings = {
    duration: '2000',
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

    // document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.slider-img').setAttribute('src', models[index].image);
    // document.querySelector('.card-link').setAttribute('href', models[index].link);
}

document.querySelector('.arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
document.querySelector('.arrow-right').addEventListener('click', function () {
    index++
    showSlide(index);
});


// Popup Al
var modal = document.getElementById('myModal');
let modalBaslik = document.querySelector(".modal-baslik");
let modalIcerik = document.querySelector(".modal-icerik");

// Kipi açan düğmeyi al
var duyuruCard = document.querySelectorAll(".duyuru-card");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];
duyuruCard.forEach(function (i) {
    i.onclick = function () {
        modalBaslik.textContent = i.children[0].textContent;
        modalIcerik.textContent = i.children[2].textContent;
        modal.style.display = "block";
    }
})


// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function () {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}