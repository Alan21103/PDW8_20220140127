function showSignIn() {
    document.getElementById('sign-in').classList.remove('hidden');
    document.getElementById('sign-up').classList.add('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    document.getElementById('form-title').innerText = "Welcome to AnimeID";
    document.getElementById('form-subtitle').innerText = "Log in to your account using email and password";
}

function showSignUp() {
    document.getElementById('sign-in').classList.add('hidden');
    document.getElementById('sign-up').classList.remove('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    document.getElementById('form-title').innerText = "Create an Account";
    document.getElementById('form-subtitle').innerText = "Sign up with your details";
}

function showForgotPassword() {
    document.getElementById('sign-in').classList.add('hidden');
    document.getElementById('sign-up').classList.add('hidden');
    document.getElementById('forgot-password').classList.remove('hidden');
    document.getElementById('form-title').innerText = "Forgot Password";
    document.getElementById('form-subtitle').innerText = "Enter your email to reset your password";
}


function SubmitSignUp() {
    Swal.fire({
        title: "Succes!", // Judul notifikasi
        text: "Akun Berhasil Dibuat", // Pesan dalam notifikasi
        icon: "success" // Jenis ikon notifikasi (dalam hal ini, ikon sukses)
  });
  }

        // Simulasi login
        function SubmitLogin() {
            // Ganti ini dengan validasi login yang sesuai
            var isLoggedIn = true;

            if (isLoggedIn) {
                // Login berhasil, tampilkan halaman home
                document.getElementById("loginContainer").innerHTML = `
                    <div class="home-container">
                        <div class="home-content">
                            <h2 class="mb-4">Selamat datang di AnimeID!</h2>
                            <p class="mb-4">Ini adalah halaman utama setelah login berhasil.</p>
                            <a href="#" class="btn btn-primary">Mulai Menonton</a>
                        </div>
                    </div>
                `;
            } else {
                alert("Login gagal. Periksa kembali email dan password Anda.");
            }
        }