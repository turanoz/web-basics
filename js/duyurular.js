// Popup Al
var modal = document.getElementById('myModal');
let modalBaslik = document.querySelector(".modal-baslik");
let modalIcerik = document.querySelector(".modal-icerik");
var duyuruCard = document.querySelectorAll(".duyuru-card");
var span = document.getElementsByClassName("close")[0];
var duyuruEkle=document.querySelector("#duyuru-ekle");

duyuruEkle.onclick=function (e){
    modalBaslik.innerHTML="";
    modalIcerik.innerHTML="";
    modalBaslik.innerHTML="<h1>Duyuru Ekle</h1>"
    modalIcerik.innerHTML+=`<div class="duyuru-form">
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
    modal.style.display="block";
}

duyuruCard.forEach(function (i) {
    i.onclick = function () {
        modalBaslik.textContent = i.children[0].textContent;
        modalIcerik.textContent = i.children[2].textContent;
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