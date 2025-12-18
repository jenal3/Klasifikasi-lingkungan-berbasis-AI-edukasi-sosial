function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Validasi: Username bebas (tidak boleh kosong), Password harus "soshum"
    if (user.trim() !== "" && pass === "soshum") {
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('main-page').classList.add('active');
        window.scrollTo(0, 0);
    } else {
        errorMsg.style.display = "block";
    }
}

function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    // Reset input dan kembali ke halaman login
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('error-msg').style.display = "none";
    
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
    document.getElementById('dropdown').style.display = 'none';
}

// Menutup dropdown jika klik di luar area menu
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        const dropdown = document.getElementById('dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
}
