var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookies = document.getElementById('acceptCookies');

  acceptCookies.addEventListener('click', function() {
      cookieConsent.style.display = 'none';
      // Set cookie or local storage to remember user's consent
      localStorage.setItem('cookiesAccepted', 'true');
  });

  // Check if user already accepted cookies
  if (!localStorage.getItem('cookiesAccepted')) {
      cookieConsent.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackMessageContainer = document.getElementById('feedbackMessageContainer');

  feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      feedbackMessageContainer.textContent = 'Terima kasih atas umpan balik Anda!';
      feedbackForm.reset();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  }

  backToTopBtn.addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});



const quizData = [
  { question: "Apa yang harus dilakukan dengan sampah organik?", choices: ["Buang ke tempat sampah", "Komposkan", "Bakar", "Masukkan ke plastik"], correct: 1, category: "Pengelolaan Sampah Umum" },
  { question: "Apa bahan yang dapat didaur ulang?", choices: ["Botol plastik", "Kantong plastik sekali pakai", "Sisa makanan", "Baterai"], correct: 0, category: "Daur Ulang Bahan" },
  { question: "Mengapa daur ulang penting?", choices: ["Menyelamatkan uang", "Mengurangi limbah", "Meningkatkan konsumsi plastik", "Tidak penting"], correct: 1, category: "Pentingnya Daur Ulang" },
  { question: "Apakah plastik dapat didaur ulang?", choices: ["Ya", "Tidak"], correct: 0, category: "Daur Ulang Bahan" },
  { question: "Apa yang dimaksud dengan sampah plastik non-daur ulang?", choices: ["Plastik bekas makanan", "Botol plastik", "Kantong plastik sekali pakai", "Semua jawaban benar"], correct: 2, category: "Sampah Plastik" },
  { question: "Bagaimana cara mengurangi sampah plastik?", choices: ["Menggunakan plastik lebih banyak", "Menggunakan plastik sekali pakai", "Menggunakan barang sekali pakai", "Menggunakan produk ramah lingkungan"], correct: 3, category: "Pengelolaan Sampah" },
  { question: "Apa yang bisa dilakukan dengan sampah anorganik?", choices: ["Dibuang", "Didaur ulang", "Dikomposkan", "Semua jawaban benar"], correct: 1, category: "Pengelolaan Sampah Umum" },
  { question: "Apakah kertas bisa didaur ulang?", choices: ["Ya", "Tidak"], correct: 0, category: "Daur Ulang Bahan" },
  { question: "Apa manfaat mendaur ulang sampah?", choices: ["Menghemat biaya", "Mengurangi pencemaran", "Meningkatkan konsumsi", "Meningkatkan sampah"], correct: 1, category: "Pentingnya Daur Ulang" },
  { question: "Kapan sebaiknya mendaur ulang barang?", choices: ["Setelah dibuang", "Sebelum digunakan", "Setelah digunakan", "Setelah barang rusak"], correct: 2, category: "Pentingnya Daur Ulang" },
  { question: "Apa itu sampah organik?", choices: ["Sampah yang tidak bisa terurai", "Sampah yang mudah terurai", "Sampah yang berbahaya", "Semua jawaban benar"], correct: 1, category: "Jenis Sampah" },
  { question: "Bagaimana cara mendaur ulang botol plastik?", choices: ["Dibuang sembarangan", "Ditaruh di tempat sampah biasa", "Dibuang ke tempat sampah daur ulang", "Dibakar"], correct: 2, category: "Pengelolaan Sampah" },
  { question: "Apa yang dapat dilakukan dengan sampah elektronik?", choices: ["Didaur ulang", "Dibuang", "Dimasukkan ke sampah biasa", "Semua jawaban salah"], correct: 0, category: "Sampah Elektronik" },
  { question: "Apa dampak negatif dari sampah plastik?", choices: ["Tidak ada dampak", "Mencemari laut dan udara", "Meningkatkan konsumsi", "Meningkatkan daur ulang"], correct: 1, category: "Pencemaran Sampah" },
  { question: "Bagaimana cara mengurangi penggunaan plastik?", choices: ["Menggunakan plastik lebih banyak", "Menggunakan plastik sekali pakai", "Menggunakan barang ramah lingkungan", "Meningkatkan sampah"], correct: 2, category: "Pengelolaan Sampah" },
  { question: "Apa yang dimaksud dengan daur ulang sampah organik?", choices: ["Menjadi kompos", "Dibuang sembarangan", "Dijadikan barang baru", "Semua jawaban benar"], correct: 0, category: "Pengelolaan Sampah Organik" },
  { question: "Apa itu sampah basah?", choices: ["Sampah yang terbuat dari plastik", "Sampah yang mudah terurai", "Sampah yang tidak dapat didaur ulang", "Semua jawaban salah"], correct: 1, category: "Jenis Sampah" },
  { question: "Apa yang dapat didaur ulang selain plastik?", choices: ["Buku", "Kertas", "Baterai", "Semua jawaban benar"], correct: 1, category: "Daur Ulang Bahan" },
  { question: "Mengapa penting untuk memilah sampah?", choices: ["Untuk meningkatkan jumlah sampah", "Agar sampah bisa didaur ulang dengan lebih baik", "Tidak ada manfaat", "Semua jawaban salah"], correct: 1, category: "Pengelolaan Sampah" },
  { question: "Bagaimana cara mengatasi sampah elektronik?", choices: ["Membuangnya sembarangan", "Mendaur ulangnya", "Membakar elektronik", "Menggunakannya lagi"], correct: 1, category: "Sampah Elektronik" },
  { question: "Apa yang harus dilakukan dengan sampah plastik?", choices: ["Dibuang sembarangan", "Didaur ulang", "Dibakar", "Semua jawaban benar"], correct: 1, category: "Sampah Plastik" }
];
  
let currentQuiz = 0;
let selectedQuestions = [];
let userAnswers = []; // Menyimpan jawaban pengguna
let timer;
let timeLeft = 15; // Set waktu 15 detik untuk setiap soal
let usedQuestions = []; // Menyimpan ID soal yang sudah digunakan

// Fungsi untuk memilih 3 pertanyaan acak dari quizData yang belum digunakan
function selectRandomQuestions() {
  // Menyaring soal yang belum digunakan
  const availableQuestions = quizData.filter((_, index) => !usedQuestions.includes(index));

  // Mengacak soal yang tersisa
  const shuffled = availableQuestions.sort(() => Math.random() - 0.5);

  // Pilih 3 soal pertama dari soal yang belum digunakan
  selectedQuestions = shuffled.slice(0, 3);

  // Tandai soal yang dipilih sebagai sudah digunakan
  selectedQuestions.forEach(question => {
    const index = quizData.indexOf(question);
    usedQuestions.push(index);
  });
}

// Fungsi untuk menampilkan pertanyaan
function loadQuiz() {
  const currentData = selectedQuestions[currentQuiz];

  // Reset waktu
  timeLeft = 15; // Set ulang waktu ke 15 detik untuk setiap soal baru

  // Menampilkan judul pertanyaan dan kategori
  document.getElementById("question-title").textContent = currentData.question;
  document.getElementById("category").textContent = `Kategori: ${currentData.category}`;

  // Menampilkan pilihan
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ''; // Menghapus pilihan sebelumnya
  currentData.choices.forEach((choice, index) => {
    const input = document.createElement('input');
    input.type = "radio";
    input.id = `option${index}`;
    input.name = "answer";
    input.value = index;

    const label = document.createElement('label');
    label.setAttribute('for', `option${index}`);
    label.textContent = choice;

    quizForm.appendChild(input);
    quizForm.appendChild(label);
  });

  // Menampilkan timer
  const timerContainer = document.getElementById("timer");
  timerContainer.textContent = `Waktu tersisa: ${timeLeft} detik`;

  // Menghentikan timer yang lama jika ada
  clearInterval(timer);

  // Mulai timer baru
  timer = setInterval(() => {
    timeLeft--;
    timerContainer.textContent = `Waktu tersisa: ${timeLeft} detik`;
    if (timeLeft === 0) {
      clearInterval(timer);
      alert("Waktu habis! Beralih ke pertanyaan berikutnya.");
      nextQuestion(); // Pindah ke pertanyaan berikutnya jika waktu habis
    }
  }, 1000);

  // Menampilkan tombol kirim jawaban setelah soal dimuat
  document.getElementById("submit-btn").style.display = "block"; // Menampilkan tombol kirim jawaban
}

// Fungsi untuk menangani pengiriman jawaban
document.getElementById("submit-btn").addEventListener("click", () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    const selectedValue = selectedAnswer.value;
    const currentData = selectedQuestions[currentQuiz];

    // Menyimpan jawaban pengguna
    userAnswers.push({
      question: currentData.question,
      chosenAnswer: currentData.choices[selectedValue],
      correctAnswer: currentData.choices[currentData.correct],
      isCorrect: parseInt(selectedValue) === currentData.correct
    });

    // Mengecek apakah jawaban benar
    if (parseInt(selectedValue) === currentData.correct) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah!");
    }

    // Menampilkan pertanyaan berikutnya
    currentQuiz++;
    if (currentQuiz < selectedQuestions.length) {
      loadQuiz(); // Muat kuis berikutnya
    } else {
      showResults(); // Tampilkan hasil setelah kuis selesai
    }
  } else {
    alert("Pilih jawaban terlebih dahulu!");
  }
});

// Fungsi untuk menampilkan hasil kuis
function showResults() {
  // Hentikan timer jika kuis selesai
  clearInterval(timer);

  // Menghitung skor
  let score = userAnswers.filter(answer => answer.isCorrect).length;

  

  // Menampilkan hasil dan jawaban yang dipilih
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `<h2>Hasil Kuis</h2><p>Skor Anda: ${score} dari ${selectedQuestions.length}</p>`;

  userAnswers.forEach(answer => {
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = ` 
      <p><strong>Pertanyaan:</strong> ${answer.question}</p>
      <p><strong>Jawaban Anda:</strong> ${answer.chosenAnswer}</p>
      <p><strong>Jawaban yang Benar:</strong> ${answer.correctAnswer}</p>
    `;
    resultContainer.appendChild(resultDiv);
  });

  // Menyembunyikan kuis
  document.getElementById("quiz-container").style.display = "none";

  // Menyembunyikan tombol kirim jawaban
  document.getElementById("submit-btn").style.display = "none";

  // Menampilkan tombol "Mulai Kuis" untuk memulai ulang kuis
  document.getElementById("start-btn").style.display = "block"; // Menampilkan tombol mulai kuis
}



// Fungsi untuk memulai ulang kuis
function restartQuiz() {
  // Reset data
  currentQuiz = 0;
  userAnswers = [];
  document.getElementById("result-container").innerHTML = ''; // Menghapus hasil
  document.getElementById("quiz-container").style.display = "block"; // Menampilkan kembali kuis
  document.getElementById("submit-btn").style.display = "block"; // Menampilkan tombol kirim jawaban
  selectRandomQuestions(); // Memilih pertanyaan acak lagi
  loadQuiz(); // Memulai kuis ulang
}

// Fungsi untuk memulai ulang kuis
function restartQuiz() {
    // Reset data
    currentQuiz = 0;
    userAnswers = [];
    usedQuestions = []; // Reset soal yang sudah digunakan
    document.getElementById("result-container").innerHTML = ''; // Menghapus hasil
    document.getElementById("quiz-container").style.display = "block"; // Menampilkan kembali kuis
    document.getElementById("submit-btn").style.display = "block"; // Menampilkan tombol kirim jawaban
    selectRandomQuestions(); // Memilih pertanyaan acak lagi
    loadQuiz(); // Memulai kuis ulang
  }
  
  // Event listener untuk tombol mulai kuis
  document.getElementById("start-btn").addEventListener("click", () => {
    restartQuiz(); // Memulai ulang kuis ketika tombol mulai ditekan
});

// Menampilkan pertanyaan pertama saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").style.display = "block"; // Tampilkan tombol mulai kuis
  document.getElementById("quiz-container").style.display = "none"; // Sembunyikan kuis saat pertama kali
  document.getElementById("submit-btn").style.display = "none"; // Sembunyikan tombol kirim jawaban sebelum kuis dimulai
});

function showNotification(message) {
    const notificationContainer = document.getElementById("notification-container");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = `Sonia says: ${message}`; // Tambahkan "Sonia says:"
  
    // Menambahkan notifikasi ke dalam container
    notificationContainer.appendChild(notification);
  
    // Menghilangkan notifikasi setelah 5 detik
    setTimeout(() => {
      notificationContainer.removeChild(notification);
    }, 5000);
  }
  

  

  document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen dari DOM
    const sampahType = document.getElementById("sampah-type");
    const jumlahSampah = document.getElementById("jumlah-sampah");
    const hitungDampakBtn = document.getElementById("hitung-dampak-btn");
    const hasilDampak = document.getElementById("hasil-dampak");
    const tombolUjiSampah = document.getElementById("tombol-ujisampah");
    const ujiSampahBtn = document.getElementById("uji-sampah-btn");

    // Validasi elemen
    if (!sampahType || !jumlahSampah || !hitungDampakBtn || !hasilDampak || !tombolUjiSampah || !ujiSampahBtn) {
        console.error("Satu atau lebih elemen tidak ditemukan!");
        return;
    }

    // Data CO2 per jenis sampah
    const co2PerKg = {
        organik: 0.25,
        plastik: 6.0,
        logam: 16.0,
        kertas: 1.7,
        elektronik: 10.0,
        tekstil: 3.0,
        karet: 3.0,
        kaca: 1.0,
    };

    // Fungsi hitung dampak CO2
    function hitungDampak() {
        const typeValue = sampahType.value;
        const jumlahValue = parseFloat(jumlahSampah.value);

        if (isNaN(jumlahValue) || jumlahValue <= 0) {
            alert("Masukkan jumlah sampah yang valid!");
            return;
        }

        const totalCO2 = co2PerKg[typeValue] * jumlahValue;

        hasilDampak.innerHTML = `
            <p>Dengan mendaur ulang <strong>${jumlahValue} kg ${typeValue}</strong>, Anda dapat mengurangi sekitar <strong>${totalCO2.toFixed(2)} kg CO2</strong>.</p>
        `;

        // Tampilkan tombol "Uji Sampah Lain"
        tombolUjiSampah.style.display = "block";
        hitungDampakBtn.style.display = "none";
    }

    // Fungsi reset form
    function resetForm() {
        sampahType.value = "organik";
        jumlahSampah.value = "";
        hasilDampak.innerHTML = `
            <p>Ketahui berapa banyak CO2 yang dapat Anda kurangi dengan mendaur ulang!</p>
        `;

        tombolUjiSampah.style.display = "none";
        hitungDampakBtn.style.display = "inline";
    }

    // Event listener untuk tombol "Hitung Dampak"
    hitungDampakBtn.addEventListener("click", hitungDampak);

    // Event listener untuk tombol "Uji Sampah Lain"
    ujiSampahBtn.addEventListener("click", resetForm);
});

  







let dailyChallenge = [
  "Pilih sampah yang bisa didaur ulang!",
  "Kurangi penggunaan plastik dalam 24 jam.",
  "Bawa tas belanja sendiri ke pasar.",
  "Mulai komposkan sampah organik di rumah.",
  "Gunakan botol minum yang dapat dipakai ulang selama sehari.",
  "Hindari membeli makanan dengan kemasan plastik.",
  "Coba menggunakan barang bekas atau barang yang dapat digunakan kembali.",
  "Matikan lampu saat tidak digunakan untuk menghemat energi.",
  "Jangan buang sampah sembarangan, pastikan sampah dibuang pada tempatnya.",
  "Kurangi penggunaan kendaraan pribadi dan coba naik transportasi umum.",
  "Bawa wadah makan sendiri saat membeli makanan.",
  "Cobalah berbelanja produk tanpa kemasan atau kemasan minimal.",
  "Pisahkan sampah berdasarkan jenis (organik, plastik, kertas, logam).",
  "Jangan gunakan sedotan plastik, coba gunakan sedotan metal atau bambu.",
  "Kurangi makanan cepat saji untuk mengurangi sampah kemasan.",
  "Setorkan sampah elektronik ke tempat daur ulang yang terpercaya.",
  "Bergabunglah dengan komunitas lokal untuk kampanye pengurangan sampah.",
  "Ganti tas plastik dengan tas kain dalam kehidupan sehari-hari.",
  "Mulai mendaur ulang kertas bekas di rumah.",
  "Perbaiki barang yang rusak daripada membuangnya.",
  "Cobalah menggunakan produk ramah lingkungan dan bebas plastik."
];

function tampilkanTantangan() {
  let challenge = dailyChallenge[Math.floor(Math.random() * dailyChallenge.length)];
  document.getElementById("daily-challenge").innerHTML = "Tantangan Hari Ini: " + challenge;
}








// Menyembunyikan tombol ketika berada di atas halaman
window.onscroll = function() {
    let topButton = document.getElementById("top-button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Menangani pengiriman formulir umpan balik
document.getElementById("form-feedback").onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;

    // Simulasi pengiriman umpan balik
    alert("Terima kasih atas umpan balik Anda, " + name + "!\nEmail: " + email + "\nKomentar: " + comment);

    // Reset formulir setelah pengiriman
    document.getElementById("form-feedback").reset();
};





document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display feedback message
    const feedbackMessageContainer = document.getElementById('feedbackMessageContainer');
    feedbackMessageContainer.innerHTML = `<p>Thank you for your feedback, ${name}! We will get back to you at ${email}.</p>`;
    
    // Optionally, send this data to the server or store it for further processing.
    console.log('Feedback submitted:', { name, email, message });
    
    // Clear the form after submission
    document.getElementById('feedbackForm').reset();
  });
  

  function calculateCarbonFootprint() {
    // Mengambil nilai dari input
    const energy = document.getElementById("energy").value;
    const transportation = document.getElementById("transportation").value;
    const consumption = document.getElementById("consumption").value;

    // Validasi input
    if (energy === "" || transportation === "" || consumption === "") {
        alert("Harap masukkan semua data.");
        return;
    }

    // Menghitung jejak karbon (asumsi sederhana)
    const energyCarbon = energy * 0.233;  // 1 kWh = 0.233 kg CO2
    const transportationCarbon = transportation * 0.21; // 1 km mobil = 0.21 kg CO2
    const consumptionCarbon = consumption * 2.5; // 1 kg makanan = 2.5 kg CO2 (perkiraan)

    // Total jejak karbon
    const totalCarbon = energyCarbon + transportationCarbon + consumptionCarbon;

    // Menampilkan hasil
    document.getElementById("result").innerText = totalCarbon.toFixed(2);
    document.getElementById("carbon-result").style.display = "block";
}