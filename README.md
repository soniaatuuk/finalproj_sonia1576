# finalproj_sonia1576
Projek akhir Python Pro. membuat website menggunakan Ai untuk mendeteksi jenis sampah dari gambar pengguna,lalu memberikan saran tentang cara mendaur ulang atau membuang sampah tersebut dengan benar

### Bahan Projek WEB + AI
- Dasar-dasar desain web
- HTML + CSS
- Flask sebagai framework backend
- Jinja untuk templat dinamis
- Perutean web dengan Flask
- GitHub untuk kontrol versi
- Integrasi AI (IMAGEAI) untuk deteksi sampah

### Fitur Utama
- **Deteksi Sampah**: Menggunakan AI untuk mengklasifikasikan gambar sampah menjadi beberapa kategori (misalnya: plastik, logam, kertas).
- **Panduan Daur Ulang**: Menyediakan informasi tentang cara mendaur ulang atau membuang sampah dengan benar berdasarkan jenisnya.
- **Edukasi Lingkungan**: Menyediakan informasi tentang dampak sampah terhadap lingkungan dan cara mengurangi jejak ekologis.

### Teknologi yang Digunakan
- **IMAGEAI**: Digunakan untuk klasifikasi gambar sampah
- **Flask**: Framework web untuk backend
- **HTML & CSS**: Untuk desain antarmuka
- **Jinja**: Template engine untuk halaman dinamis

### Langkah Instalasi
1. Clone repository ini.
2. Install dependensi menggunakan `pip install -r requirements.txt`.
3. Unduh model pre-trained untuk IMAGEAI jika diperlukan dan pastikan TensorFlow terinstal.
4. Jalankan server Flask dengan perintah `python app.py`.
5. Buka browser dan akses `http://localhost:5000` untuk melihat aplikasi.

### Cara Penggunaan
- Upload gambar sampah di halaman utama.
- AI akan memproses gambar dan menampilkan hasil klasifikasi.
- Lihat informasi tentang cara pengelolaan sampah berdasarkan jenisnya.
- Gunakan kalkulator untuk mengetahui dampak lingkungan berdasarkan jenis dan jumlah sampah yang diunggah.
