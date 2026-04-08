const projelistesi = [
    { isim: "E-Ticaret Sitesi", kategori: "web", resim: "ET.JPEG" },
    { isim: "Zindan oynu", kategori: "oyun", resim: "DUNGEON.JPEG" },
    { isim: "Kisisel Blog", kategori: "web", resim: "BLOG.JPEG" },
    { isim: "Adimsayar uygulaması", kategori: "mobil", resim: "ADIM.JPEG" },
    { isim: "Sirket Tanitim Sayfasi", kategori: "web", resim: "ŞİRKET.JPEG" }
];

const projeKutusu = document.getElementById("projeAlani");

function projeleriEkranaBas(liste) {
    projeKutusu.innerHTML = ""; 
    
    liste.map(function(proje) {
        let kartHtml = `
            <div class="proje-kart">
                <img src="${proje.resim}" alt="${proje.isim}">
                <h3>${proje.isim}</h3>
                <p>Kategori: ${proje.kategori.toUpperCase()}</p>
            </div>
        `;
        projeKutusu.innerHTML += kartHtml;
    });
}

function projeleriFiltrele(secilenKategori) {
    if (secilenKategori === 'hepsi') {
        projeleriEkranaBas(projelistesi);
    } else {
        const filtrelenmisprojeler = projelistesi.filter(function(proje) {
            return proje.kategori === secilenKategori;
        });
        projeleriEkranaBas(filtrelenmisprojeler);
    }
}

window.onload = function() {
    projeleriEkranaBas(projelistesi);
    animasyonlariBaslat();
};

const temaButonu = document.getElementById("temaButonu");
temaButonu.addEventListener("click", function() {
    document.body.classList.toggle("karanlik-mod");
});

function animasyonlariBaslat() {
    const yaziAlani = document.getElementById("daktiloMetni");
    const yazi = "Mehmet Salih";
    let harfSirasi = 0;

    function daktilo() {
        if (harfSirasi < yazi.length) {
            yaziAlani.innerHTML += yazi.charAt(harfSirasi);
            harfSirasi++;
            setTimeout(daktilo, 100);
        }
    }
    daktilo();

    setTimeout(function() {
        document.getElementById("bar1").style.width = "90%";
        document.getElementById("bar2").style.width = "55%";
    }, 500);
}