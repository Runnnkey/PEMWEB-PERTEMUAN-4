//bagian tombol order now
const orderBtn = document.querySelector(".home .btn");

orderBtn.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Pesanan anda akan diproses!");
});

//tombol submit pesan di kontak dan form validation
const form = document.querySelector("form");

const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const phoneInput = form.querySelector('input[type="number"]');
const subjectInput = form.querySelectorAll('input[type="text"]')[1];
const messageInput = form.querySelector("textarea");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // ambil value
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // validasi
    if (name === "") {
        alert("Nama tidak boleh kosong");
        return;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid");
        return;
    }

    if (phone.length < 10) {
        alert("Nomor terlalu pendek");
        return;
    }

    if (subject === "") {
        alert("Subject harus diisi");
        return;
    }

    if (message === "") {
        alert("Pesan tidak boleh kosong");
        return;
    }

    // kalau lolos semua
    alert( `Halooo ${name} pesan anda berhasil dikirim!`);
});


//bagian navbar bagian yg aktif sama ngga
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");




