// =========================
//   SUARA BENAR / SALAH
// =========================
function playCorrect(){
    let a = new Audio();
    // Pastikan file mp3 ada di folder yang sama, jika tidak ada, error ditangkap agar tidak macet
    try{ a.src="correct.mp3"; a.play(); } catch(e){ console.log("Audio file missing"); }
}
function playWrong(){
    let a = new Audio();
    try{ a.src="wrong.mp3"; a.play(); } catch(e){ console.log("Audio file missing"); }
}

// =========================
//   BANK SOAL (11 MAPEL)
// =========================
const bank = {

PABP:[

{
      "t": "Perhatikan Q.S. Al-Baqarah ayat 285. Hukum bacaan Alif Lam Syamsiyah terjadi apabila Alif Lam bertemu dengan huruf syamsiyah. Contoh bacaan tersebut terdapat pada kata ....",
      "o": [
        "Al-Mu'minun",
        "Ar-Rasul",
        "Al-Kitab",
        "Wal-Malaikatu"
      ],
      "b": 2
    },
    {
      "t": "Allah Swt. mengetahui segala sesuatu yang tersembunyi maupun yang nyata secara mendalam dan teliti. Sifat ini menunjukkan makna dari Asmaul Husna ....",
      "o": [
        "Al-'Alim",
        "Al-Khabir",
        "As-Sami'",
        "Al-Bashir"
      ],
      "b": 2
    },
    {
      "t": "Seseorang melakukan amal kebaikan semata-mata hanya mengharap ridha Allah Swt. tanpa ingin dipuji manusia. Sikap ini adalah pengertian dari ....",
      "o": [
        "Sabar",
        "Tawakal",
        "Ikhlas",
        "Qanaah"
      ],
      "b": 3
    },
    {
      "t": "Ketika seseorang lupa jumlah rakaat dalam shalat atau lupa melakukan tasyahud awal, maka ia disunnahkan melakukan sujud ....",
      "o": [
        "Sujud Syukur",
        "Sujud Tilawah",
        "Sujud Sahwi",
        "Sujud Wajib"
      ],
      "b": 3
    },
    {
      "t": "Sujud yang dilakukan ketika seseorang membaca atau mendengar ayat-ayat Sajdah dalam Al-Qur'an disebut sujud ....",
      "o": [
        "Sujud Tilawah",
        "Sujud Sahwi",
        "Sujud Syukur",
        "Sujud Rukun"
      ],
      "b": 1
    },
    {
      "t": "Masa pemerintahan Khulafaur Rasyidin berakhir dengan wafatnya Khalifah ....",
      "o": [
        "Abu Bakar Ash-Shiddiq",
        "Umar bin Khattab",
        "Utsman bin Affan",
        "Ali bin Abi Thalib"
      ],
      "b": 4
    },
    {
      "t": "Salah satu kemajuan peradaban Islam pada masa Bani Umayah adalah munculnya tokoh-tokoh ilmuwan. Tokoh yang terkenal dalam bidang kedokteran pada masa tersebut adalah ....",
      "o": [
        "Al-Khawarizmi",
        "Ibnu Sina (Avicenna)",
        "Abu al-Qasim al-Zahrawi",
        "Ibnu Rushd"
      ],
      "b": 3
    },
	{
      "t": "Perhatikan narasi berikut! 'Aisyah selalu belajar dengan sungguh-sungguh meskipun orang tuanya tidak melihatnya. Ia yakin bahwa Allah Swt. selalu melihat usahanya sekecil apa pun.' Perilaku Aisyah meneladani Asmaul Husna ....",
      "o": [
        "Al-'Alim",
        "Al-Khabir",
        "As-Sami'",
        "Al-Bashir"
      ],
      "b": 4
    },
    {
      "t": "Secara bahasa, ikhlas artinya murni atau bersih. Secara istilah, ikhlas berarti ....",
      "o": [
        "Melakukan sesuatu karena ingin dipuji orang lain",
        "Melakukan amal kebaikan semata-mata mengharap ridha Allah Swt",
        "Melakukan ibadah agar mendapatkan imbalan materi",
        "Melakukan kebaikan karena takut dimarahi guru"
      ],
      "b": 2
    },
    {
      "t": "Perhatikan Q.S. Al-Bayyinah ayat 5! Ayat tersebut menegaskan bahwa kita diperintahkan untuk menyembah Allah dengan ....",
      "o": [
        "Memurnikan ketaatan (ikhlas) kepada-Nya",
        "Suara yang lantang dan keras",
        "Pakaian yang sangat mahal",
        "Mengharap balasan dari manusia"
      ],
      "b": 1
    },
    {
      "t": "Pak Budi baru saja selamat dari kecelakaan maut tanpa luka sedikitpun. Sebagai wujud terima kasih kepada Allah, Pak Budi sebaiknya melakukan sujud ....",
      "o": [
        "Sujud Sahwi",
        "Sujud Tilawah",
        "Sujud Syukur",
        "Sujud Rukun"
      ],
      "b": 3
    },
    {
      "t": "Penyebab seseorang disunnahkan melakukan sujud sahwi dalam shalat adalah ....",
      "o": [
        "Mendengar ayat sajdah",
        "Mendapat nikmat besar",
        "Lupa kelebihan atau kekurangan rakaat",
        "Terhindar dari musibah"
      ],
      "b": 3
    },
    {
      "t": "Bacaan yang dibaca ketika melakukan sujud sahwi adalah ....",
      "o": [
        "Subhana rabbiyal a'la wa bihamdih",
        "Subhana man laa yanaamu wa laa yashu",
        "Sami'allahu liman hamidah",
        "Sajada wajhiya lilladzi khalaqahu"
      ],
      "b": 2
    },
    {
      "t": "Sujud tilawah dilakukan sebanyak ... kali sujud.",
      "o": [
        "Satu",
        "Dua",
        "Tiga",
        "Empat"
      ],
      "b": 1
    },
    {
      "t": "Berikut ini yang termasuk ayat-ayat Sajdah dalam Al-Qur'an adalah ....",
      "o": [
        "Q.S. Al-Fatihah ayat 1",
        "Q.S. Al-Ikhlas ayat 1",
        "Q.S. Al-A'raf ayat 206",
        "Q.S. Al-Baqarah ayat 255"
      ],
      "b": 3
    },
    {
      "t": "Daulah Bani Umayah berdiri setelah berakhirnya masa Khulafaur Rasyidin. Pendiri Daulah Bani Umayah adalah ....",
      "o": [
        "Yazid bin Muawiyah",
        "Muawiyah bin Abu Sufyan",
        "Marwan bin Hakam",
        "Umar bin Abdul Aziz"
      ],
      "b": 2
    },
    {
      "t": "Pusat pemerintahan (ibu kota) Daulah Bani Umayah pada masa awal di Damaskus terletak di negara ....",
      "o": [
        "Irak",
        "Palestina",
        "Suriah (Syria)",
        "Mesir"
      ],
      "b": 3
    },
    {
      "t": "Masa Bani Umayah dikenal dengan kemajuan pesat dalam ilmu pengetahuan. Ilmuwan muslim yang ahli dalam bidang kedokteran dan dikenal sebagai bapak bedah modern (Al-Zahrawi) muncul pada masa Bani Umayah di ....",
      "o": [
        "Damaskus",
        "Andalusia (Spanyol)",
        "Baghdad",
        "Mekah"
      ],
      "b": 2
    },
    {
      "t": "Contoh perilaku ikhlas dalam kehidupan sehari-hari di sekolah adalah ....",
      "o": [
        "Membersihkan kelas karena jadwal piket diawasi guru",
        "Membantu teman yang kesulitan belajar tanpa mengharap imbalan",
        "Menyontek saat ujian agar mendapat nilai bagus",
        "Bersedekah di depan teman-teman agar disebut dermawan"
      ],
      "b": 2
    },
    {
      "t": "Seseorang yang beriman kepada Allah akan selalu merasa diawasi. Sikap merasa diawasi oleh Allah disebut ....",
      "o": [
        "Muraqabah",
        "Muhasabah",
        "Musyawarah",
        "Mujahadah"
      ],
      "b": 1
    },
    {
      "t": "Cendekiawan muslim pada masa Bani Umayah yang menemukan astrolabe (alat astronomi) adalah ....",
      "o": [
        "Ibnu Sina",
        "Al-Khawarizmi",
        "Ibrahim Al-Fazari",
        "Al-Kindi"
      ],
      "b": 3
    },
    {
      "t": "Salah satu hikmah melaksanakan sujud tilawah ketika mendengar ayat Sajdah adalah ....",
      "o": [
        "Agar ditakuti oleh setan",
        "Mendekatkan diri kepada Allah dan merendahkan diri dihadapan-Nya",
        "Menunjukkan kepandaian membaca Al-Qur'an",
        "Supaya dipuji oleh imam masjid"
      ],
      "b": 2
    },

],

BINDO:[
    {
      "t": "Bacalah teks berikut! 'Pantai Parangtritis memanjang dari ujung timur yang dibatasi oleh tebing pegunungan ke arah barat hingga pantai-pantai selanjutnya. Pasirnya berwarna hitam namun sangat halus.' Informasi utama yang digambarkan dalam teks tersebut adalah ....",
      "o": [
        "Sejarah Pantai Parangtritis",
        "Keindahan fisik Pantai Parangtritis",
        "Cara menuju Pantai Parangtritis",
        "Tiket masuk Pantai Parangtritis"
      ],
      "b": 2
    },
    {
      "t": "Kalimat berikut yang menggunakan majas personifikasi adalah ....",
      "o": [
        "Pasir pantai itu terasa lembut di kaki.",
        "Batu karang itu berdiri kokoh menahan ombak.",
        "Angin laut mengelus wajahku dengan lembut.",
        "Langit berwarna jingga saat sore hari."
      ],
      "b": 3
    },
    {
      "t": "Teks 1: 'Kucingku, Snowy, bulunya putih bersih seperti salju.' Teks 2: 'Hamsterku, Mochi, bulunya cokelat kemerahan dan sangat lembut.' Perbedaan isi kedua teks deskripsi tersebut terletak pada ....",
      "o": [
        "Objek yang dideskripsikan",
        "Sudut pandang penulis",
        "Majas yang digunakan",
        "Tujuan penulisan"
      ],
      "b": 1
    },
    {
      "t": "Jika dalam sebuah pamflet wisata tertulis 'Nikmati keindahan bawah laut dengan snorkeling sepuasnya hanya Rp50.000', maka tujuan pamflet tersebut adalah ....",
      "o": [
        "Menjelaskan sejarah laut",
        "Melarang orang berenang",
        "Mempromosikan layanan wisata air",
        "Memberitakan kecelakaan air"
      ],
      "b": 3
    },
    {
      "t": "Teks A menjelaskan tentang Kelinci yang lincah dan suka wortel. Teks B menjelaskan tentang Gajah yang besar dan memiliki belalai. Perbedaan ciri fisik objek pada kedua teks adalah ....",
      "o": [
        "Teks A hewan buas, Teks B hewan jinak",
        "Teks A bertubuh kecil, Teks B bertubuh raksasa",
        "Teks A hidup di air, Teks B hidup di darat",
        "Teks A hewan ternak, Teks B hewan melata"
      ],
      "b": 2
    },
    {
      "t": "Penulisan kata depan yang SALAH pada kalimat berikut adalah ....",
      "o": [
        "Ayah pergi ke kantor.",
        "Buku itu disimpan di laci.",
        "Kami makan di restoran.",
        "Kucing itu tidur dikebun belakang."
      ],
      "b": 4
    },
    {
      "t": "'Benda ini berbentuk bulat, terbuat dari kulit sintetis, dan digunakan dengan cara ditendang oleh 22 pemain di lapangan.' Benda yang dideskripsikan adalah ....",
      "o": [
        "Bola basket",
        "Bola voli",
        "Bola sepak",
        "Bola kasti"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan teks berikut! 'Berakit-rakit ke hulu, berenang-renang ke tepian. Bersakit-sakit dahulu, bersenang-senang kemudian.' Teks tersebut termasuk jenis puisi rakyat ....",
      "o": [
        "Gurindam",
        "Syair",
        "Pantun",
        "Mantra"
      ],
      "b": 3
    },
    {
      "t": "Salah satu ciri utama dari Gurindam adalah ....",
      "o": [
        "Terdiri dari 4 baris bersajak a-b-a-b",
        "Terdiri dari 2 baris yang memiliki hubungan sebab-akibat",
        "Semua baris adalah isi dan bersajak a-a-a-a",
        "Baris pertama dan kedua adalah sampiran"
      ],
      "b": 2
    },
    {
      "t": "Tujuan utama dari pantun nasihat adalah ....",
      "o": [
        "Menghibur pembaca dengan lelucon",
        "Menyampaikan pesan moral atau ajaran baik",
        "Menyindir seseorang secara kasar",
        "Menceritakan kisah sejarah"
      ],
      "b": 2
    },
    {
      "t": "Perhatikan gurindam berikut! 'Jika hendak mengenal orang mulia, lihatlah kepada kelakuan dia.' Tujuan gurindam tersebut adalah ....",
      "o": [
        "Mengajak orang untuk menjadi pejabat",
        "Memberitahu cara menilai kemuliaan seseorang",
        "Menjelaskan ciri-ciri fisik orang mulia",
        "Melarang kita berteman dengan orang jahat"
      ],
      "b": 2
    },
    {
      "t": "Syair biasanya digunakan untuk menyampaikan ....",
      "o": [
        "Cerita, nasihat, atau filosofi hidup yang panjang",
        "Sindiran jenaka yang singkat",
        "Teka-teki untuk permainan",
        "Ajakan untuk membeli sesuatu"
      ],
      "b": 1
    },
    {
      "t": "Dalam puisi rakyat, kata 'hulu' pada kalimat 'Berakit-rakit ke hulu' memiliki makna yang berlawanan dengan kata ....",
      "o": [
        "Atas",
        "Hilir",
        "Tengah",
        "Pinggir"
      ],
      "b": 2
    },
    {
      "t": "Perhatikan larik pantun acak berikut! (1) Kalau tuan bijak bestari (2) Apa binatang tanduk di kaki (3) Beras ladang suling padi (4) Makan nasi rasa berduri. Urutan yang tepat agar menjadi pantun yang padu adalah ....",
      "o": [
        "3 - 4 - 1 - 2",
        "1 - 2 - 3 - 4",
        "3 - 1 - 4 - 2",
        "4 - 2 - 1 - 3"
      ],
      "b": 1
    },
    {
      "t": "Struktur alur dalam cerita fantasi biasanya dimulai dengan ....",
      "o": [
        "Klimaks",
        "Resolusi",
        "Orientasi (Pengenalan)",
        "Komplikasi"
      ],
      "b": 3
    },
    {
      "t": "Bagian cerita fantasi yang berisi puncak masalah atau konflik disebut ....",
      "o": [
        "Orientasi",
        "Klimaks",
        "Resolusi",
        "Koda"
      ],
      "b": 2
    },
    {
      "t": "Dalam cerita fantasi 'Harry Potter', tokoh Harry digambarkan sebagai anak yang pemberani dan pantang menyerah. Cara penulis menggambarkan watak tokoh tersebut disebut ....",
      "o": [
        "Latar",
        "Alur",
        "Penokohan",
        "Sudut pandang"
      ],
      "b": 3
    },
    {
      "t": "Kalimat berikut yang mengandung majas sarkasme adalah ....",
      "o": [
        "Suaramu merdu sekali seperti kaset kusut.",
        "Tulisanmu sangat rapi, saking rapinya sampai tidak bisa dibaca.",
        "Dasar otak udang! Soal semudah ini saja kau tidak bisa mengerjakannya.",
        "Wajahmu bersinar seperti bulan purnama."
      ],
      "b": 3
    },
    {
      "t": "Jika Tokoh A digambarkan sombong dan Tokoh B digambarkan rendah hati, maka perbandingan kedua tokoh tersebut adalah berdasarkan ....",
      "o": [
        "Latar tempat",
        "Watak/Karakter",
        "Kekuatan sihir",
        "Asal usul"
      ],
      "b": 2
    },
    {
      "t": "Ibu berkata, 'Jangan lupa makan siang!' Jika diubah menjadi kalimat tidak langsung adalah ....",
      "o": [
        "Ibu berkata jangan lupa makan siang.",
        "Ibu mengingatkan agar aku tidak lupa makan siang.",
        "Ibu berkata, makan siang jangan lupa.",
        "Kata Ibu, 'Makan siang itu penting.'"
      ],
      "b": 2
    },
    {
      "t": "Sebuah infografik menampilkan gambar langkah mencuci tangan dengan sabun. Tujuan utama infografik tersebut adalah ....",
      "o": [
        "Menghibur pembaca",
        "Menjelaskan prosedur kesehatan",
        "Menjual sabun",
        "Menceritakan sejarah sabun"
      ],
      "b": 2
    },
    {
      "t": "Pesan yang disampaikan dalam poster 'Buanglah sampah pada tempatnya' adalah ....",
      "o": [
        "Ajakan untuk menjaga kebersihan",
        "Larangan membeli sampah",
        "Perintah menanam pohon",
        "Pemberitahuan jadwal sampah"
      ],
      "b": 1
    },
    {
      "t": "Kata fokus 'Rebus' paling tepat digunakan dalam kalimat ....",
      "o": [
        "Rebus adonan kue ke dalam oven.",
        "Rebus air hingga mendidih sebelum memasukkan mie.",
        "Rebus nasi goreng di wajan panas.",
        "Rebus buah mangga agar segar."
      ],
      "b": 2
    },
    {
      "t": "Teks prosedur bertujuan untuk ....",
      "o": [
        "Menggambarkan suatu objek",
        "Menceritakan kisah masa lalu",
        "Memberikan petunjuk melakukan sesuatu",
        "Menghibur dengan cerita rekaan"
      ],
      "b": 3
    },
    {
      "t": "Kalimat larangan dalam teks prosedur biasanya ditandai dengan kata ....",
      "o": [
        "Silakan",
        "Sebaiknya",
        "Jangan",
        "Lakukan"
      ],
      "b": 3
    },
    {
      "t": "Dalam teks deskripsi di media sosial, kalimat sapaan yang tepat dan akrab untuk pembaca remaja adalah ....",
      "o": [
        "Halo Teman-teman semua, apa kabar?",
        "Kepada Yth. Bapak/Ibu pembaca sekalian.",
        "Perhatian bagi seluruh penduduk bumi.",
        "Hadirin yang saya hormati."
      ],
      "b": 1
    },
    {
      "t": "Kalimat perinci bertujuan untuk membuat deskripsi lebih konkret. Contoh kalimat perinci untuk 'Ibuku orang yang sangat baik' adalah ....",
      "o": [
        "Dia berusaha menolong semua orang, ramah tutur katanya.",
        "Dia adalah wanita terhebat di dunia.",
        "Ibuku bernama Siti dan bekerja sebagai guru.",
        "Semua orang menyukai ibuku."
      ],
      "b": 1
    },
    {
      "t": "Penulisan kata depan 'di' yang harus dipisah terdapat pada kata ....",
      "o": [
        "dimakan",
        "dijual",
        "disamping",
        "di rumah"
      ],
      "b": 4
    },
    {
      "t": "Jika kamu menyukai kucing karena bulunya, kalimat deskripsi yang tepat adalah ....",
      "o": [
        "Kucing adalah hewan mamalia berkaki empat.",
        "Saya suka kucing karena bulunya yang lembut dan tebal.",
        "Kucing suka memakan ikan asin.",
        "Banyak orang memelihara kucing di rumah."
      ],
      "b": 2
    },
    {
      "t": "Bacalah pantun: 'Pisang emas dibawa berlayar, masak sebiji di atas peti. Hutang emas boleh dibayar, hutang budi dibawa mati.' Isi pantun tersebut mengajarkan tentang ....",
      "o": [
        "Cara membayar hutang",
        "Jenis-jenis pisang",
        "Pentingnya membalas budi baik",
        "Bahaya berlayar membawa emas"
      ],
      "b": 3
    },
],

MTK:[
    {
      "t": "Perhatikan pernyataan berikut!\n(1) -5 + 4 = -1\n(2) -2 - (-5) = -7\n(3) 10 : (-2) = -5\n(4) -3 x (-4) = -12\nPernyataan yang benar adalah ....",
      "o": [
        "(1) dan (2)",
        "(1) dan (3)",
        "(2) dan (3)",
        "(3) dan (4)"
      ],
      "b": 2
    },
    {
      "t": "Suhu di kota Tokyo -4°C, sedangkan suhu di kota Jakarta 30°C. Selisih suhu kedua kota tersebut adalah ....",
      "o": [
        "26°C",
        "34°C",
        "-26°C",
        "-34°C"
      ],
      "b": 2
    },
    {
      "t": "Dalam suatu kompetisi, aturan penilaian adalah sebagai berikut: menang mendapat nilai 4, kalah mendapat nilai -2, dan seri mendapat nilai 1. Dari 10 kali bertanding, regu A menang 5 kali, kalah 3 kali, dan sisanya seri. Total nilai yang diperoleh regu A adalah ....",
      "o": [
        "14",
        "16",
        "22",
        "26"
      ],
      "b": 1
    },
    {
      "t": "Perhatikan operasi berikut: 25 x (14 - 4) = (25 x 14) - (25 x 4). Sifat operasi hitung yang digunakan adalah ....",
      "o": [
        "Komutatif",
        "Asosiatif",
        "Distributif",
        "Identitas"
      ],
      "b": 3
    },
    {
      "t": "Urutan pecahan 1/2, 0.75, 2/5, dan 60% dari yang terkecil ke yang terbesar adalah ....",
      "o": [
        "2/5, 1/2, 60%, 0.75",
        "2/5, 60%, 1/2, 0.75",
        "1/2, 2/5, 60%, 0.75",
        "0.75, 60%, 1/2, 2/5"
      ],
      "b": 1
    },
    {
      "t": "Perhatikan pernyataan berikut!\n(i) 1/3 > 2/5\n(ii) 3/4 > 5/8\n(iii) 2/3 < 4/7\n(iv) 5/6 < 7/8\nPernyataan yang benar ditunjukkan oleh nomor ....",
      "o": [
        "(i) dan (ii)",
        "(i) dan (iii)",
        "(ii) dan (iv)",
        "(iii) dan (iv)"
      ],
      "b": 3
    },
    {
      "t": "Dalam pemilihan ketua kelas, kandidat A memperoleh 2/5 bagian suara, kandidat B memperoleh 1/3 bagian suara, dan sisanya memilih kandidat C. Jika jumlah siswa 45 orang, banyak suara yang diperoleh kandidat C adalah ....",
      "o": [
        "12 siswa",
        "15 siswa",
        "18 siswa",
        "20 siswa"
      ],
      "b": 1
    },
    {
      "t": "Sebuah sekolah menerima 200 pelamar. Jika yang diterima hanya 45% dari total pelamar, maka banyaknya siswa yang DITOLAK adalah ....",
      "o": [
        "90 orang",
        "100 orang",
        "110 orang",
        "120 orang"
      ],
      "b": 3
    },
    {
      "t": "Harga 1 lusin pulpen adalah Rp48.000,00. Harga 5 buah pulpen tersebut adalah ....",
      "o": [
        "Rp15.000,00",
        "Rp18.000,00",
        "Rp20.000,00",
        "Rp24.000,00"
      ],
      "b": 3
    },
    {
      "t": "Jarak dua kota pada peta dengan skala 1 : 1.500.000 adalah 6 cm. Jarak sebenarnya kedua kota tersebut adalah ....",
      "o": [
        "9 km",
        "90 km",
        "900 km",
        "9.000 km"
      ],
      "b": 2
    },
    {
      "t": "Manakah pasangan ukuran foto berikut yang memiliki rasio sama (sebangun)?",
      "o": [
        "3 cm x 4 cm dan 6 cm x 10 cm",
        "4 cm x 6 cm dan 6 cm x 9 cm",
        "5 cm x 7 cm dan 10 cm x 12 cm",
        "2 cm x 3 cm dan 4 cm x 5 cm"
      ],
      "b": 2
    },
    {
      "t": "Tabel berikut menunjukkan campuran cat dan air.\nCampuran A: 2 liter cat, 3 liter air\nCampuran B: 3 liter cat, 5 liter air\nCampuran C: 1 liter cat, 2 liter air\nCampuran yang paling kental (rasio cat terhadap air paling besar) adalah ....",
      "o": [
        "Campuran A",
        "Campuran B",
        "Campuran C",
        "Semua sama"
      ],
      "b": 1
    },
    {
      "t": "Suatu pekerjaan dapat diselesaikan oleh 12 orang dalam waktu 20 hari. Agar pekerjaan tersebut selesai dalam waktu 15 hari, banyak pekerja TAMBAHAN yang diperlukan adalah ....",
      "o": [
        "4 orang",
        "6 orang",
        "10 orang",
        "16 orang"
      ],
      "b": 1
    },
    {
      "t": "Bu Rina membeli 3 karung beras dan 5 kg beras. Jika berat satu karung beras dinyatakan dengan x, maka bentuk aljabar dari total berat beras yang dibeli Bu Rina adalah ....",
      "o": [
        "3x + 5",
        "3x - 5",
        "5x + 3",
        "8x"
      ],
      "b": 1
    },
    {
      "t": "Hasil dari (5x - 4) + (3x + 6) adalah ....",
      "o": [
        "8x - 10",
        "8x - 2",
        "8x + 2",
        "2x + 2"
      ],
      "b": 3
    },
    {
      "t": "Hasil perkalian dari (2x - 3)(x + 4) adalah ....",
      "o": [
        "2x\u00b2 + 5x - 12",
        "2x\u00b2 + 5x + 12",
        "2x\u00b2 - 11x - 12",
        "2x\u00b2 + 8x - 12"
      ],
      "b": 1
    },
    {
      "t": "Bentuk sederhana dari 12x\u00b3y\u00b2 : 3xy adalah ....",
      "o": [
        "4x\u00b2y",
        "4xy",
        "4x\u00b3y",
        "4xy\u00b2"
      ],
      "b": 1
    },
    {
      "t": "Di antara kalimat terbuka berikut, yang merupakan Persamaan Linear Satu Variabel (PLSV) adalah ....",
      "o": [
        "x + 5 > 10",
        "2x - 3 = 7",
        "x + y = 10",
        "x\u00b2 + 2 = 6"
      ],
      "b": 2
    },
    {
      "t": "Himpunan penyelesaian dari 3x - 2 < 13 untuk x bilangan bulat positif adalah ....",
      "o": [
        "{1, 2, 3, 4}",
        "{0, 1, 2, 3, 4}",
        "{1, 2, 3, 4, 5}",
        "{x | x < 5}"
      ],
      "b": 1
    },
    {
      "t": "Sebuah taman berbentuk persegi panjang dengan panjang (2x + 5) meter dan lebar (x + 2) meter. Jika keliling taman tidak lebih dari 50 meter, maka nilai maksimum x adalah ....",
      "o": [
        "5",
        "6",
        "7",
        "8"
      ],
      "b": 2
    },
    {
      "t": "Seorang penyelam mula-mula berada pada kedalaman 3 meter di bawah permukaan laut. Kemudian ia menyelam lagi sejauh 4 meter. Posisi penyelam sekarang dinyatakan dengan bilangan bulat adalah ....",
      "o": [
        "-1 meter",
        "-4 meter",
        "-7 meter",
        "7 meter"
      ],
      "b": 3
    },
    {
      "t": "Pada garis bilangan, posisi bilangan -5 terletak di sebelah kiri bilangan 2. Pernyataan yang tepat mengenai hubungan kedua bilangan tersebut adalah ....",
      "o": [
        "-5 > 2",
        "-5 < 2",
        "-5 = 2",
        "-5 \u2265 2"
      ],
      "b": 2
    },
    {
      "t": "Ibu membutuhkan 2 \u00bd kg tepung untuk membuat kue A dan 1 \u00be kg untuk kue B. Total tepung yang dibutuhkan Ibu adalah ....",
      "o": [
        "3 \u00bc kg",
        "4 \u00bc kg",
        "4 \u00bd kg",
        "3 \u00be kg"
      ],
      "b": 2
    },
    {
      "t": "Toko A memberikan diskon 1/4 harga, sedangkan Toko B memberikan diskon 20%. Toko manakah yang memberikan potongan harga lebih besar?",
      "o": [
        "Toko A",
        "Toko B",
        "Keduanya sama",
        "Tidak dapat ditentukan"
      ],
      "b": 1
    },
    {
      "t": "Bentuk desimal dari 3/8 adalah ....",
      "o": [
        "0,300",
        "0,325",
        "0,375",
        "0,830"
      ],
      "b": 3
    },
    {
      "t": "Pada denah rumah, tinggi pintu digambar 4 cm. Jika skala denah 1 : 50, tinggi pintu sebenarnya adalah ....",
      "o": [
        "2 meter",
        "20 meter",
        "200 meter",
        "0,2 meter"
      ],
      "b": 1
    },
    {
      "t": "Ayah mengendarai mobil dengan kecepatan 60 km/jam dan tiba di tujuan dalam waktu 4 jam. Jika Ayah ingin tiba dalam waktu 3 jam, kecepatan mobil harus ....",
      "o": [
        "50 km/jam",
        "70 km/jam",
        "80 km/jam",
        "90 km/jam"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan bentuk aljabar: x\u00b2 - 2x + 5. Koefisien dari x adalah ....",
      "o": [
        "1",
        "2",
        "-2",
        "5"
      ],
      "b": 3
    },
    {
      "t": "Sebuah persegi panjang memiliki panjang x cm dan lebar 5 cm. Luas persegi panjang tersebut dalam bentuk aljabar adalah ....",
      "o": [
        "(x + 5) cm\u00b2",
        "5x cm\u00b2",
        "(x - 5) cm\u00b2",
        "5/x cm\u00b2"
      ],
      "b": 2
    },
    {
      "t": "Jika nilai x = -2, maka nilai dari 3x + 5 adalah ....",
      "o": [
        "-1",
        "1",
        "11",
        "-11"
      ],
      "b": 1
    },
],

PANCASILA:[
    {
      "t": "BPUPK adalah badan yang dibentuk oleh Jepang untuk menyelidiki usaha-usaha persiapan kemerdekaan. Salah satu tokoh yang menjabat sebagai ketua BPUPK adalah ....",
      "o": [
        "Ir. Soekarno",
        "Drs. Moh. Hatta",
        "dr. K.R.T. Radjiman Wedyodiningrat",
        "Mr. Muhammad Yamin"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan usulan dasar negara berikut!\n(1) Peri Kebangsaan\n(2) Peri Kemanusiaan\n(3) Peri Ketuhanan\n(4) Peri Kerakyatan\n(5) Kesejahteraan Rakyat\nUsulan dasar negara tersebut dikemukakan dalam sidang BPUPK oleh ....",
      "o": [
        "Ir. Soekarno",
        "Mr. Soepomo",
        "Mr. Muhammad Yamin",
        "Drs. Moh. Hatta"
      ],
      "b": 3
    },
    {
      "t": "Pada sidang BPUPK pertama tanggal 1 Juni 1945, Ir. Soekarno menyampaikan pidato tentang dasar negara Indonesia merdeka yang diberi nama ....",
      "o": [
        "Piagam Jakarta",
        "Pancasila",
        "Eka Sila",
        "Trisila"
      ],
      "b": 2
    },
    {
      "t": "Sidang pertama BPUPK dilaksanakan pada tanggal 29 Mei sampai dengan 1 Juni 1945. Agenda utama sidang tersebut adalah ....",
      "o": [
        "Membahas bentuk negara",
        "Merumuskan dasar negara",
        "Memilih presiden dan wakil presiden",
        "Membentuk kementerian"
      ],
      "b": 2
    },
    {
      "t": "Setelah sidang pertama selesai, BPUPK memasuki masa reses. Untuk menampung usulan-usulan yang masuk, dibentuklah panitia kecil yang beranggotakan ....",
      "o": [
        "Sembilan orang",
        "Delapan orang",
        "Tujuh orang",
        "Sembilan belas orang"
      ],
      "b": 2
    },
    {
      "t": "Panitia Sembilan berhasil merumuskan naskah mukadimah hukum dasar yang dikenal dengan nama ....",
      "o": [
        "Piagam Jakarta (Jakarta Charter)",
        "Perjanjian Linggarjati",
        "Konstitusi RIS",
        "Dekrit Presiden"
      ],
      "b": 1
    },
    {
      "t": "Berikut ini yang BUKAN merupakan anggota Panitia Sembilan adalah ....",
      "o": [
        "Abikoesno Tjokrosoejoso",
        "A.A. Maramis",
        "Abdul Kahar Muzakir",
        "Radjiman Wedyodiningrat"
      ],
      "b": 4
    },
    {
      "t": "Terdapat perubahan sila pertama pada Piagam Jakarta sebelum disahkan menjadi Pembukaan UUD 1945. Kalimat 'Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya' diganti menjadi ....",
      "o": [
        "Ketuhanan Yang Berkebudayaan",
        "Ketuhanan Yang Maha Esa",
        "Kemanusiaan yang adil dan beradab",
        "Persatuan Indonesia"
      ],
      "b": 2
    },
    {
      "t": "Tokoh Panitia Sembilan yang juga merupakan tokoh dari golongan Islam (Nahdlatul Ulama) adalah ....",
      "o": [
        "K.H. Wahid Hasyim",
        "Mr. A.A. Maramis",
        "Mr. Achmad Soebardjo",
        "Drs. Moh. Hatta"
      ],
      "b": 1
    },
    {
      "t": "Kesepakatan perubahan sila pertama Piagam Jakarta dilakukan demi menjaga ....",
      "o": [
        "Kepentingan golongan mayoritas",
        "Persatuan dan kesatuan bangsa",
        "Hubungan baik dengan Jepang",
        "Stabilitas ekonomi"
      ],
      "b": 2
    },
    {
      "t": "Setelah BPUPK dibubarkan pada tanggal 7 Agustus 1945, Jepang membentuk PPKI. Nama Jepang dari PPKI adalah ....",
      "o": [
        "Dokuritsu Junbi Cosakai",
        "Dokuritsu Junbi Inkai",
        "Kaigun",
        "Rikugun"
      ],
      "b": 2
    },
    {
      "t": "PPKI diketuai oleh ....",
      "o": [
        "Radjiman Wedyodiningrat",
        "Ir. Soekarno",
        "Drs. Moh. Hatta",
        "Mr. Soepomo"
      ],
      "b": 2
    },
    {
      "t": "Salah satu hasil sidang PPKI pada tanggal 18 Agustus 1945 adalah ....",
      "o": [
        "Membentuk Tentara Keamanan Rakyat",
        "Mengesahkan UUD 1945",
        "Menetapkan Piagam Jakarta",
        "Membubarkan BPUPK"
      ],
      "b": 2
    },
    {
      "t": "Sila 'Kemanusiaan yang adil dan beradab' mengandung makna bahwa bangsa Indonesia ....",
      "o": [
        "Mengutamakan kepentingan pribadi",
        "Menghargai harkat dan martabat manusia",
        "Mementingkan persatuan golongan",
        "Menyerahkan nasib kepada takdir"
      ],
      "b": 2
    },
    {
      "t": "Mengembangkan sikap tenggang rasa dan tidak semena-mena terhadap orang lain merupakan pengamalan Pancasila sila ke ....",
      "o": [
        "Pertama",
        "Kedua",
        "Ketiga",
        "Keempat"
      ],
      "b": 2
    },
    {
      "t": "Gotong royong membersihkan lingkungan sekolah merupakan cerminan dari pengamalan Pancasila, khususnya sila ....",
      "o": [
        "Ketuhanan Yang Maha Esa",
        "Kemanusiaan yang adil dan beradab",
        "Persatuan Indonesia",
        "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan"
      ],
      "b": 3
    },
    {
      "t": "Lambang dari sila ke-4 Pancasila 'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan' adalah ....",
      "o": [
        "Bintang",
        "Pohon Beringin",
        "Kepala Banteng",
        "Padi dan Kapas"
      ],
      "b": 3
    },
    {
      "t": "Padi dan kapas merupakan lambang sila ke-5 Pancasila yang melambangkan ....",
      "o": [
        "Kekuatan dan keberanian",
        "Kehidupan yang rukun",
        "Kebutuhan dasar sandang dan pangan",
        "Kesucian dan cahaya"
      ],
      "b": 3
    },
    {
      "t": "Perilaku berikut yang TIDAK sesuai dengan nilai sila Ketuhanan Yang Maha Esa adalah ....",
      "o": [
        "Menghormati teman yang sedang beribadah",
        "Tidak memaksakan agama kepada orang lain",
        "Mengganggu teman yang berbeda agama",
        "Meyakini adanya Tuhan Yang Maha Esa"
      ],
      "b": 3
    },
    {
      "t": "Musyawarah untuk mufakat merupakan ciri khas demokrasi Indonesia yang sesuai dengan sila ke ....",
      "o": [
        "2",
        "3",
        "4",
        "5"
      ],
      "b": 3
    },
    {
      "t": "Manusia tidak bisa hidup sendiri dan selalu membutuhkan bantuan orang lain. Hal ini menunjukkan kedudukan manusia sebagai ....",
      "o": [
        "Makhluk Individu",
        "Makhluk Sosial",
        "Makhluk Ekonomi",
        "Makhluk Politik"
      ],
      "b": 2
    },
    {
      "t": "Sebagai makhluk individu, setiap manusia memiliki ....",
      "o": [
        "Ketergantungan mutlak pada orang lain",
        "Kehendak, perasaan, dan hak dasar yang unik",
        "Kewajiban untuk hidup menyendiri",
        "Kesamaan fisik yang identik"
      ],
      "b": 2
    },
    {
      "t": "Aturan atau kaidah yang mengatur tingkah laku manusia dalam kehidupan bermasyarakat disebut ....",
      "o": [
        "Hukum",
        "Adat",
        "Norma",
        "Kebiasaan"
      ],
      "b": 3
    },
    {
      "t": "Norma yang bersumber dari hati nurani manusia dan jika dilanggar akan menimbulkan rasa penyesalan atau bersalah adalah norma ....",
      "o": [
        "Agama",
        "Kesusilaan",
        "Kesopanan",
        "Hukum"
      ],
      "b": 2
    },
    {
      "t": "Contoh perilaku yang sesuai dengan norma kesopanan adalah ....",
      "o": [
        "Beribadah tepat waktu",
        "Menggunakan helm saat berkendara",
        "Berkata jujur dalam ujian",
        "Mencium tangan orang tua saat berpamitan"
      ],
      "b": 4
    },
    {
      "t": "Sanksi bagi pelanggar norma hukum bersifat tegas dan nyata, yaitu berupa ....",
      "o": [
        "Dosa dan siksa neraka",
        "Cemoohan atau dikucilkan masyarakat",
        "Penjara atau denda",
        "Rasa bersalah dan menyesal"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan pernyataan berikut! 'Seorang pengendara motor berhenti di belakang garis marka saat lampu merah menyala.' Perilaku tersebut menunjukkan kepatuhan terhadap norma ....",
      "o": [
        "Agama",
        "Kesusilaan",
        "Hukum",
        "Adat"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan narasi! 'Di kelas 7A, siswa sedang berdiskusi menentukan ketua kelas. Setiap siswa diberi kesempatan menyampaikan pendapatnya dengan tertib.' Kegiatan tersebut mencerminkan nilai Pancasila, yaitu sila dengan lambang ....",
      "o": [
        "Bintang",
        "Rantai Emas",
        "Pohon Beringin",
        "Kepala Banteng"
      ],
      "b": 4
    },
    {
      "t": "Menghormati orang yang lebih tua dan menyayangi yang lebih muda merupakan penerapan norma .... dalam lingkungan keluarga.",
      "o": [
        "Hukum",
        "Kesopanan",
        "Agama",
        "Kesusilaan"
      ],
      "b": 2
    },
    {
      "t": "Aristoteles menyebut manusia sebagai 'Zoon Politicon', yang artinya ....",
      "o": [
        "Makhluk yang suka berperang",
        "Makhluk yang hidup menyendiri",
        "Makhluk sosial yang hidup berkelompok",
        "Makhluk yang paling sempurna"
      ],
      "b": 3
    },
],

MULOK:[
{t:"Batik berasal dari …",o:["Malaysia","China","Indonesia","Thailand"],b:2},
{t:"Rumah adat Sunda disebut …",o:["Joglo","Limas","Badui","Sunda"],b:2},
{t:"Kuda lumping berasal dari …",o:["Sumatra","Jawa","Bali","NTT"],b:1},
{t:"Angklung terbuat dari …",o:["Logam","Besi","Bambu","Kayu"],b:2},
{t:"Tari Piring berasal dari …",o:["Aceh","Jawa","Sumatra Barat","Bali"],b:2},
{ "t": "Muatan Lokal bertujuan untuk mengenalkan peserta didik pada …", "o": ["Bahasa asing", "Kearifan lokal daerah", "Teknologi luar negeri", "Seni internasional"], "b": 1 },
  { "t": "Contoh kearifan lokal adalah …", "o": ["Gotong royong", "Individualisme", "Berkompetisi keras", "Egoisme"], "b": 0 },
  { "t": "Bahasa daerah yang dipelajari pada Mulok termasuk dalam …", "o": ["Warisan budaya", "Teknologi modern", "Iklan lokal", "Budaya asing"], "b": 0 },
  { "t": "Tarian tradisional biasanya digunakan untuk …", "o": ["Berperang", "Upacara adat", "Menghapus data", "Memasak"], "b": 1 },
  { "t": "Makanan khas daerah disebut dengan …", "o": ["Fast food", "Kuliner tradisional", "Makanan impor", "Makanan instan"], "b": 1 },

  { "t": "Salah satu manfaat mempelajari Mulok adalah …", "o": ["Lupa budaya sendiri", "Sikap tidak peduli lingkungan", "Mengenal jati diri daerah", "Menghapus tradisi"], "b": 2 },
  { "t": "Contoh alat musik tradisional adalah …", "o": ["Gitar listrik", "Piano", "Angklung", "Drum elektrik"], "b": 2 },
  { "t": "Bahasa daerah dipertahankan agar …", "o": ["Tidak digunakan lagi", "Tergerus budaya asing", "Tetap lestari", "Diganti bahasa lain"], "b": 2 },
  { "t": "Motif batik biasanya terinspirasi dari …", "o": ["Pemandangan luar negeri", "Bentang alam dan budaya lokal", "Teknologi modern", "Iklan televisi"], "b": 1 },
  { "t": "Kegiatan bersih desa merupakan contoh …", "o": ["Budaya luar", "Budaya lokal", "Teknologi baru", "Iklan digital"], "b": 1 },

  { "t": "Upacara adat dilakukan untuk …", "o": ["Menjaga tradisi", "Menghapus budaya", "Mengikuti tren", "Mengurangi identitas daerah"], "b": 0 },
  { "t": "Kerajinan khas daerah biasanya dibuat dari …", "o": ["Bahan lokal", "Bahan impor", "Bahan plastik modern", "Bahan elektronik"], "b": 0 },
  { "t": "Contoh kerajinan khas daerah adalah …", "o": ["Rajutan logam", "Anyaman bambu", "Cetakan plastik", "Kaleng alumunium"], "b": 1 },
  { "t": "Tujuan mempelajari kuliner lokal adalah …", "o": ["Mengenalkan budaya daerah", "Menghilangkan resep", "Mengganti masakan internasional", "Menjual produk asing"], "b": 0 },
  { "t": "Bahasa daerah memiliki fungsi sebagai …", "o": ["Identitas lokal", "Bahasa teknologi", "Kode rahasia", "Bahasa internasional"], "b": 0 },

  { "t": "Kesenian daerah harus dilestarikan karena …", "o": ["Tidak penting", "Merupakan warisan leluhur", "Membuat rugi masyarakat", "Membosankan"], "b": 1 },
  { "t": "Contoh kuliner daerah yang digoreng adalah …", "o": ["Sushi", "Pizza", "Bakwan", "Burger"], "b": 2 },
  { "t": "Salah satu contoh permainan tradisional adalah …", "o": ["Sepak bola robot", "PlayStation", "Congklak", "Mobile gaming"], "b": 2 },
  { "t": "Tujuan mempelajari mulok kewirausahaan adalah …", "o": ["Melatih kreativitas", "Mengurangi pengetahuan", "Membuat siswa pasif", "Menghindari usaha"], "b": 0 },
  { "t": "Siswa yang membuat kerajinan kemudian menjualnya termasuk dalam …", "o": ["Perdagangan internasional", "Kewirausahaan kecil", "Ekspor besar", "Impor barang"], "b": 1 },

  { "t": "Batik termasuk dalam jenis …", "o": ["Lukisan digital", "Tekstil tradisional", "Teknologi baru", "Aplikasi digital"], "b": 1 },
  { "t": "Contoh budaya yang harus dihargai adalah …", "o": ["Upacara adat", "Hoax", "Bullying", "Vandalisme"], "b": 0 },
  { "t": "Makanan khas daerah biasanya memiliki rasa yang …", "o": ["Sama dengan makanan internasional", "Khas dan berbeda tiap daerah", "Selalu pedas", "Selalu manis"], "b": 1 },
  { "t": "Kegiatan gotong royong biasanya dilakukan untuk …", "o": ["Kepentingan bersama", "Kepentingan pribadi", "Tujuan merugikan", "Menghapus kerja sama"], "b": 0 },
  { "t": "Salah satu manfaat melestarikan budaya daerah adalah …", "o": ["Menghilangkan identitas bangsa", "Mengangkat nilai daerah", "Mengurangi pariwisata", "Menutup diri dari dunia"], "b": 1 },

  { "t": "Upacara adat biasanya dipimpin oleh …", "o": ["Pemimpin adat", "Youtuber", "Robot", "Guru informatika"], "b": 0 },
  { "t": "Kesenian daerah dapat dipelajari melalui …", "o": ["Buku dan praktik langsung", "Game online", "Video hoax", "Iklan"], "b": 0 },
  { "t": "Makanan khas daerah umumnya berbahan …", "o": ["Bahan impor", "Bahan lokal", "Bahan elektronik", "Bahan kimia industri"], "b": 1 },
  { "t": "Menampilkan tarian daerah saat acara sekolah termasuk kegiatan …", "o": ["Pelanggaran", "Pelestarian budaya", "Membahayakan budaya", "Menghapus tradisi"], "b": 1 },
  { "t": "Salah satu cara menjaga bahasa daerah adalah …", "o": ["Tidak pernah digunakan", "Dipakai dan diajarkan pada generasi muda", "Dihapus dari sekolah", "Dilarang berbicara"], "b": 1 },
],

PJOK:[
    {
      "t": "Induk organisasi sepak bola dunia adalah FIFA. Kepanjangan dari FIFA adalah ....",
      "o": [
        "Federation International de Football Association",
        "Federation International Football Association",
        "Federation of International Football Agency",
        "Federation International Football Agency"
      ],
      "b": 1
    },
    {
      "t": "Perhatikan gerak spesifik berikut! (1) Kaki tumpu diletakkan di samping bola. (2) Pergelangan kaki yang akan digunakan menendang diputar ke luar dan dikunci. (3) Perkenaan bola tepat pada tengah-tengah bola. Gerakan tersebut merupakan teknik menendang bola dengan menggunakan ....",
      "o": [
        "Kaki bagian luar",
        "Kaki bagian dalam",
        "Punggung kaki",
        "Telapak kaki"
      ],
      "b": 2
    },
    {
      "t": "Saat bola datang melambung tinggi di udara, seorang pemain sepak bola mencondongkan badan ke belakang dan membusungkan dada untuk meredam laju bola. Teknik ini disebut menghentikan bola dengan ....",
      "o": [
        "Kepala",
        "Paha",
        "Dada",
        "Kaki bagian dalam"
      ],
      "b": 3
    },
    {
      "t": "Gerakan membawa bola dengan cara menendang-nendang bola secara terputus-putus dan perlahan ke segala arah disebut ....",
      "o": [
        "Shooting",
        "Passing",
        "Heading",
        "Dribbling"
      ],
      "b": 4
    },
    {
      "t": "Posisi badan yang benar saat akan melakukan gerakan menyundul bola (heading) adalah ....",
      "o": [
        "Membungkuk ke depan",
        "Tegak dan kaku",
        "Melenting ke belakang",
        "Miring ke samping"
      ],
      "b": 3
    },
    {
      "t": "Dalam permainan bola voli, posisi kedua lengan saat melakukan passing bawah yang benar adalah ....",
      "o": [
        "Ditekuk dan rapat",
        "Lurus dan rapat",
        "Lurus dan terbuka",
        "Ditekuk dan terbuka"
      ],
      "b": 2
    },
    {
      "t": "Perkenaan bola yang tepat pada lengan saat melakukan passing bawah dalam permainan bola voli adalah ....",
      "o": [
        "Pada kepalan tangan",
        "Pada siku",
        "Di atas pergelangan tangan",
        "Pada lengan atas"
      ],
      "b": 3
    },
    {
      "t": "Gerakan ayunan lengan yang benar saat melakukan servis bawah dalam bola voli adalah ....",
      "o": [
        "Diayun dari atas ke bawah",
        "Diayun dari belakang bawah ke depan atas",
        "Diayun dari samping ke depan",
        "Diayun mendatar setinggi dada"
      ],
      "b": 2
    },
    {
      "t": "Permainan bola basket diciptakan oleh seorang guru olahraga asal Kanada yang bernama ....",
      "o": [
        "William G. Morgan",
        "James Naismith",
        "George Hancock",
        "Jules Rimet"
      ],
      "b": 2
    },
    {
      "t": "Teknik mengoper bola dengan cara memantulkan bola ke lantai terlebih dahulu dalam permainan bola basket disebut ....",
      "o": [
        "Chest pass",
        "Overhead pass",
        "Bounce pass",
        "Baseball pass"
      ],
      "b": 3
    },
    {
      "t": "Posisi bola saat melakukan operan dada (chest pass) dalam permainan bola basket adalah di depan ....",
      "o": [
        "Wajah",
        "Dada",
        "Perut",
        "Lutut"
      ],
      "b": 2
    },
    {
      "t": "Operan jarak jauh yang dilakukan dari atas kepala untuk melewati lawan yang berpostur tinggi dalam bola basket disebut ....",
      "o": [
        "Chest pass",
        "Bounce pass",
        "Overhead pass",
        "Side pass"
      ],
      "b": 3
    },
    {
      "t": "Salah satu gerak spesifik dalam permainan kasti adalah ....",
      "o": [
        "Menendang bola",
        "Menyundul bola",
        "Memukul bola",
        "Melakukan smash"
      ],
      "b": 3
    },
    {
      "t": "Cara menangkap bola yang datangnya melambung dari atas dalam permainan kasti adalah dengan posisi kedua telapak tangan membentuk ....",
      "o": [
        "Kepalan tinju",
        "Corong atau keranjang",
        "Bidang datar",
        "Silang di depan dada"
      ],
      "b": 2
    },
    {
      "t": "Lama permainan kasti ditentukan oleh waktu, yaitu ....",
      "o": [
        "2 x 20 menit atau 2 x 30 menit",
        "2 x 45 menit",
        "4 x 10 menit",
        "2 x 15 menit"
      ],
      "b": 1
    },
    {
      "t": "Induk organisasi bulu tangkis dunia pada masa lalu dikenal dengan nama IBF. Sekarang organisasi tersebut berganti nama menjadi ....",
      "o": [
        "FIFA",
        "FIBA",
        "BWF",
        "IVBF"
      ],
      "b": 3
    },
    {
      "t": "Cara memegang raket yang dilakukan seperti sedang memegang pemukul kasur (gebug kasur) disebut pegangan ....",
      "o": [
        "English grip",
        "Backhand grip",
        "American grip",
        "Combination grip"
      ],
      "b": 3
    },
    {
      "t": "Cara memegang raket dengan memutar raket seperempat lingkaran ke kiri dari pegangan forehand (seperti berjabat tangan) disebut pegangan ....",
      "o": [
        "American grip",
        "Backhand grip",
        "Forehand grip",
        "English grip"
      ],
      "b": 2
    },
    {
      "t": "Pukulan dalam bulu tangkis yang bertujuan menerbangkan shuttlecock setinggi mungkin mengarah jauh ke garis belakang lapangan lawan disebut ....",
      "o": [
        "Smash",
        "Drive",
        "Lob",
        "Dropshot"
      ],
      "b": 3
    },
    {
      "t": "Pukulan yang dilakukan dengan keras dan menukik tajam ke area lapangan lawan untuk mematikan permainan disebut ....",
      "o": [
        "Lob",
        "Servis",
        "Smash",
        "Netting"
      ],
      "b": 3
    },
    {
      "t": "Bagian kaki yang paling tepat digunakan untuk menghentikan bola yang bergulir menyusur tanah adalah ....",
      "o": [
        "Punggung kaki",
        "Tumit",
        "Telapak kaki",
        "Ujung kaki"
      ],
      "b": 3
    },
    {
      "t": "Posisi lutut saat melakukan passing bawah dalam bola voli sebaiknya ....",
      "o": [
        "Diluruskan kaku",
        "Ditekuk sedikit (mengeper)",
        "Ditekuk sampai jongkok",
        "Diangkat satu"
      ],
      "b": 2
    },
    {
      "t": "Dalam permainan bola basket, gerakan memutar badan dengan salah satu kaki sebagai poros untuk melindungi bola dari lawan disebut ....",
      "o": [
        "Lay-up",
        "Pivot",
        "Rebound",
        "Shooting"
      ],
      "b": 2
    },
    {
      "t": "Gerakan melempar bola mendatar dalam permainan kasti bertujuan untuk ....",
      "o": [
        "Mengoper teman yang jauh",
        "Mematikan lawan (melempar ke tubuh)",
        "Melambungkan bola ke pemukul",
        "Memulai permainan"
      ],
      "b": 2
    },
    {
      "t": "Pukulan permulaan untuk memainkan bola dalam bulu tangkis disebut ....",
      "o": [
        "Smash",
        "Lob",
        "Servis",
        "Drive"
      ],
      "b": 3
    },
    {
      "t": "Sikap awal kaki yang benar pada saat akan melakukan gerakan menendang bola dengan kaki bagian dalam adalah ....",
      "o": [
        "Kaki tumpu di belakang bola",
        "Kaki tumpu di samping bola",
        "Kaki tumpu di depan bola",
        "Kaki tumpu disilangkan"
      ],
      "b": 2
    },
    {
      "t": "Induk organisasi bola voli di Indonesia adalah ....",
      "o": [
        "PERBASI",
        "PBVSI",
        "PSSI",
        "PBSI"
      ],
      "b": 2
    },
    {
      "t": "Kesalahan yang sering terjadi saat melakukan passing bawah bola voli adalah ....",
      "o": [
        "Lengan lurus dan rapat",
        "Lutut mengeper",
        "Siku ditekuk saat perkenaan bola",
        "Pandangan ke arah bola"
      ],
      "b": 3
    },
    {
      "t": "Dalam permainan kasti, seorang pemukul dinyatakan gagal atau mati jika ....",
      "o": [
        "Pukulan mengenai bola dan lari ke tiang hinggap",
        "Pukulan tidak mengenai bola sebanyak 3 kali",
        "Bola hasil pukulan melambung jauh",
        "Berhasil lari sampai ruang bebas"
      ],
      "b": 2
    },
    {
      "t": "Teknik memegang raket 'Shakehand Grip' dalam bulu tangkis sama dengan cara memegang raket ....",
      "o": [
        "Forehand",
        "Backhand",
        "American",
        "Campuran"
      ],
      "b": 1
    },
],

BING:[
    {
      "t": "Teacher: 'Good morning, students.'\nStudents: 'Good morning, Sir.'\nTeacher: 'How are you today?'\nStudents: 'We are fine. And you?'\nTeacher: '..., thank you.'",
      "o": [
        "I am fine too",
        "Nice to meet you",
        "Good bye",
        "See you later"
      ],
      "b": 1
    },
    {
      "t": "Radit: 'I am Radit. ...?'\nSinta: 'My name is Sinta.'",
      "o": [
        "How are you",
        "Where do you live",
        "What is your name",
        "What is your hobby"
      ],
      "b": 3
    },
    {
      "t": "Arrange the jumbled sentences into a good dialogue!\n(1) Rina: 'I am Rina. Nice to meet you.'\n(2) Doni: 'Hi, I am Doni. What is your name?'\n(3) Doni: 'Nice to meet you too.'\n(4) Rina: 'Hi, Doni.'\nThe correct arrangement is ....",
      "o": [
        "2 - 4 - 1 - 3",
        "2 - 1 - 4 - 3",
        "4 - 2 - 3 - 1",
        "1 - 3 - 2 - 4"
      ],
      "b": 1
    },
    {
      "t": "Look at the picture! (Imagine a picture of a boy holding a fishing rod by the river).\nThe correct sentence for the picture is ....",
      "o": [
        "He likes playing football",
        "He likes fishing",
        "He likes reading books",
        "He likes cooking"
      ],
      "b": 2
    },
    {
      "t": "Read the text for questions 5-6!\n'Hello, my name is Galang. I am from Kalimantan. I live on Jalan Sumatera. I am thirteen years old. I like playing video games with my friends.'\n\nWhere does Galang come from?",
      "o": [
        "Jalan Sumatera",
        "Kalimantan",
        "Sulawesi",
        "Thirteen years old"
      ],
      "b": 2
    },
    {
      "t": "From the text, we know that Galang is ... years old.",
      "o": [
        "11",
        "12",
        "13",
        "14"
      ],
      "b": 3
    },
    {
      "t": "Sinta and Ara like dancing. ... practice dancing every Sunday.",
      "o": [
        "She",
        "We",
        "They",
        "He"
      ],
      "b": 3
    },
    {
      "t": "I have a brother named Rio. ... likes playing guitar.",
      "o": [
        "She",
        "He",
        "They",
        "We"
      ],
      "b": 2
    },
    {
      "t": "Read the text for questions 9-11!\n'Hi, I am Monita. I love reading. I usually read novels and comic books. I read them in the library during break time. Reading makes me happy and smart.'\n\nWhat is Monita's hobby?",
      "o": [
        "Writing",
        "Reading",
        "Singing",
        "Cooking"
      ],
      "b": 2
    },
    {
      "t": "Where does Monita usually read books?",
      "o": [
        "In the canteen",
        "In the classroom",
        "In the library",
        "In the laboratory"
      ],
      "b": 3
    },
    {
      "t": "'Reading makes me happy and smart.'\nThe underlined word has the same meaning as ....",
      "o": [
        "Clever",
        "Lazy",
        "Sad",
        "Busy"
      ],
      "b": 1
    },
    {
      "t": "Look at the clock! (The clock shows 07:30).\nWhat time is it?",
      "o": [
        "It is seven o'clock",
        "It is half past seven",
        "It is half past eight",
        "It is seven thirty-five"
      ],
      "b": 2
    },
    {
      "t": "Today is Monday. Tomorrow is ....",
      "o": [
        "Sunday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "b": 2
    },
    {
      "t": "We have a Flag Ceremony on ....",
      "o": [
        "Monday",
        "Sunday",
        "Friday",
        "Saturday"
      ],
      "b": 1
    },
    {
      "t": "The day after Friday is ....",
      "o": [
        "Thursday",
        "Sunday",
        "Saturday",
        "Wednesday"
      ],
      "b": 3
    },
    {
      "t": "Read the text for questions 16-18!\n'My favorite snack is cassava chips. It is crispy and savory. The color is yellow. It is made from cassava. It tastes very delicious.'\n\nWhat is the text about?",
      "o": [
        "My favorite drink",
        "My favorite snack",
        "My favorite hobby",
        "My favorite fruit"
      ],
      "b": 2
    },
    {
      "t": "How does the cassava chips taste?",
      "o": [
        "Sweet and sour",
        "Crispy and savory",
        "Bitter and hot",
        "Soft and plain"
      ],
      "b": 2
    },
    {
      "t": "'It tastes very delicious.'\nThe synonym of the word 'delicious' is ....",
      "o": [
        "Bad",
        "Tasty",
        "Bitter",
        "Salty"
      ],
      "b": 2
    },
    {
      "t": "Read the text for questions 19-21!\n'How to Make Sweet Tea'\nIngredients: Tea bag, sugar, hot water.\nSteps:\n1. Put the tea bag into a cup.\n2. Pour hot water into the cup.\n3. Add two spoons of sugar.\n4. Stir it well. The tea is ready.\n\nWhat is the goal of the text?",
      "o": [
        "How to make coffee",
        "How to make sweet tea",
        "How to drink water",
        "How to buy sugar"
      ],
      "b": 2
    },
    {
      "t": "What ingredients do we need?",
      "o": [
        "Coffee, sugar, water",
        "Tea bag, salt, hot water",
        "Tea bag, sugar, hot water",
        "Milk, sugar, ice"
      ],
      "b": 3
    },
    {
      "t": "What do we do after pouring hot water?",
      "o": [
        "Put the tea bag",
        "Add two spoons of sugar",
        "Drink the tea",
        "Throw away the cup"
      ],
      "b": 2
    },
    {
      "t": "Read the text for questions 22-24!\n'This is my living room. It is big and clean. There is a sofa, a table, and a TV. The sofa is soft. The table is brown. I watch TV there with my family.'\n\nWhat room is described in the text?",
      "o": [
        "Bedroom",
        "Kitchen",
        "Bathroom",
        "Living room"
      ],
      "b": 4
    },
    {
      "t": "What objects are in the living room?",
      "o": [
        "Bed, pillow, bolster",
        "Stove, pan, knife",
        "Sofa, table, TV",
        "Soap, towel, water"
      ],
      "b": 3
    },
    {
      "t": "How is the sofa?",
      "o": [
        "Hard",
        "Soft",
        "Dirty",
        "Small"
      ],
      "b": 2
    },
    {
      "t": "Andi: 'I like ice tea. It is cold.'\nBudi: 'I like hot coffee.'\nThe antonym of 'cold' is ....",
      "o": [
        "Sweet",
        "Hot",
        "Fresh",
        "Warm"
      ],
      "b": 2
    },
    {
      "t": "Andre: 'What is your father?'\nPipin: 'He is a teacher. He works in a ....'",
      "o": [
        "Hospital",
        "School",
        "Police station",
        "Market"
      ],
      "b": 2
    },
    {
      "t": "Mother cooks food in the ....",
      "o": [
        "Bedroom",
        "Living room",
        "Kitchen",
        "Garage"
      ],
      "b": 3
    },
    {
      "t": "'The texture of the cake is very soft.'\nThe word 'soft' is an adjective that describes ....",
      "o": [
        "Taste",
        "Texture",
        "Color",
        "Size"
      ],
      "b": 2
    },
    {
      "t": "In a procedure text, 'Stir the tea' means ....",
      "o": [
        "Minum teh",
        "Aduk teh",
        "Tuang teh",
        "Masak teh"
      ],
      "b": 2
    },
    {
      "t": "Before we eat, we usually say '...' to our parents.",
      "o": [
        "Good night",
        "Let's eat",
        "Excuse me",
        "I am sorry"
      ],
      "b": 2
    },
],

IPS:[
    {
      "t": "Secara geografis, Indonesia terletak di antara dua benua dan dua samudera. Dampak positif dari letak geografis tersebut bagi Indonesia dalam bidang ekonomi adalah ....",
      "o": [
        "Memiliki banyak gunung berapi aktif",
        "Menjadi jalur lalu lintas perdagangan dunia",
        "Memiliki iklim tropis yang hangat",
        "Sering terjadi gempa bumi tektonik"
      ],
      "b": 2
    },
    {
      "t": "Harga tanah di pinggir jalan raya biasanya lebih mahal daripada tanah yang letaknya jauh di pedalaman. Konsep lokasi yang sesuai dengan pernyataan tersebut adalah ....",
      "o": [
        "Lokasi Absolut",
        "Lokasi Relatif",
        "Lokasi Tetap",
        "Lokasi Astronomis"
      ],
      "b": 2
    },
    {
      "t": "Berdasarkan letak astronomisnya, Indonesia berada pada koordinat ....",
      "o": [
        "6°LU - 11°LS dan 95°BB - 141°BT",
        "6°LU - 11°LS dan 95°BT - 141°BT",
        "6°LS - 11°LU dan 95°BT - 141°BT",
        "6°LU - 11°LS dan 95°BT - 141°BB"
      ],
      "b": 2
    },
    {
      "t": "Jika di Jakarta (WIB) menunjukkan pukul 08.00 pagi, maka waktu di Bali (WITA) menunjukkan pukul ....",
      "o": [
        "07.00",
        "08.00",
        "09.00",
        "10.00"
      ],
      "b": 3
    },
    {
      "t": "Indonesia merupakan pertemuan tiga lempeng tektonik besar, yaitu Indo-Australia, Eurasia, dan Pasifik. Dampak kondisi geologis tersebut adalah ....",
      "o": [
        "Indonesia memiliki banyak gunung api dan rawan gempa",
        "Indonesia memiliki iklim tropis",
        "Indonesia menjadi negara maritim",
        "Indonesia memiliki hutan hujan tropis yang luas"
      ],
      "b": 1
    },
    {
      "t": "Wilayah pegunungan menghasilkan sayuran, sedangkan wilayah pantai menghasilkan ikan. Kedua wilayah tersebut saling berinteraksi melalui perdagangan. Bentuk interaksi antarruang ini terjadi karena ....",
      "o": [
        "Kemudahan transfer",
        "Kesempatan antara",
        "Saling melengkapi (Complementarity)",
        "Keadaan alam yang sama"
      ],
      "b": 3
    },
    {
      "t": "Salah satu faktor penyebab terjadinya bencana alam banjir di daerah perkotaan adalah ....",
      "o": [
        "Curah hujan yang sangat rendah",
        "Banyaknya lahan hijau terbuka",
        "Sistem drainase yang buruk dan membuang sampah sembarangan",
        "Adanya waduk buatan"
      ],
      "b": 3
    },
    {
      "t": "Jarak antara kota A dan kota B pada peta adalah 5 cm. Jarak sebenarnya kedua kota tersebut adalah 10 km. Skala peta tersebut adalah ....",
      "o": [
        "1 : 2.000",
        "1 : 20.000",
        "1 : 200.000",
        "1 : 2.000.000"
      ],
      "b": 3
    },
    {
      "t": "Kegiatan menghasilkan barang atau jasa untuk memenuhi kebutuhan manusia disebut ....",
      "o": [
        "Konsumsi",
        "Distribusi",
        "Produksi",
        "Retribusi"
      ],
      "b": 3
    },
    {
      "t": "Air di sungai bagi penduduk sekitar yang jumlahnya melimpah adalah barang bebas. Namun, air mineral dalam kemasan di toko adalah barang ekonomis. Pengelompokan ini berdasarkan ....",
      "o": [
        "Tujuan penggunaannya",
        "Cara memperolehnya",
        "Hubungannya dengan barang lain",
        "Proses pembuatannya"
      ],
      "b": 2
    },
    {
      "t": "Berikut ini yang termasuk contoh kebutuhan primer adalah ....",
      "o": [
        "Mobil mewah dan perhiasan",
        "Makanan, pakaian, dan tempat tinggal",
        "Rekreasi dan olahraga",
        "Handphone dan laptop"
      ],
      "b": 2
    },
    {
      "t": "Perubahan iklim global berdampak besar pada sektor pertanian, salah satunya adalah ....",
      "o": [
        "Meningkatnya hasil panen sepanjang tahun",
        "Pola musim tanam menjadi tidak menentu",
        "Tanah menjadi semakin subur secara alami",
        "Hama tanaman berkurang drastis"
      ],
      "b": 2
    },
    {
      "t": "Fenomena alam yang disebabkan oleh pergeseran lempeng bumi secara tiba-tiba disebut ....",
      "o": [
        "Gempa bumi tektonik",
        "Gempa bumi vulkanik",
        "Tanah longsor",
        "Erosi tanah"
      ],
      "b": 1
    },
    {
      "t": "Agen sosialisasi pertama dan utama bagi seorang anak untuk membentuk kepribadian dasar adalah ....",
      "o": [
        "Sekolah",
        "Teman sebaya",
        "Media massa",
        "Keluarga"
      ],
      "b": 4
    },
    {
      "t": "Bentuk interaksi sosial yang mengarah pada perpecahan atau konflik disebut interaksi ....",
      "o": [
        "Asosiatif",
        "Disosiatif",
        "Akulturasi",
        "Asimilasi"
      ],
      "b": 2
    },
    {
      "t": "Berdasarkan ilmu geologi, zaman tertua di mana bumi masih panas dan belum ada tanda-tanda kehidupan disebut zaman ....",
      "o": [
        "Arkaekum",
        "Paleozoikum",
        "Mesozoikum",
        "Neozoikum"
      ],
      "b": 1
    },
    {
      "t": "Alat-alat kehidupan yang digunakan manusia pada zaman Paleolitikum (Batu Tua) umumnya ....",
      "o": [
        "Sudah halus dan diasah",
        "Terbuat dari logam perunggu",
        "Masih kasar dan sederhana",
        "Terbuat dari tulang binatang yang diukir indah"
      ],
      "b": 3
    },
    {
      "t": "Bukti bahwa masyarakat praaksara hidup bergantung pada alam adalah ....",
      "o": [
        "Mereka sudah mampu bercocok tanam dengan irigasi",
        "Mereka hidup menetap di rumah permanen",
        "Mereka memenuhi kebutuhan dengan berburu dan meramu",
        "Mereka melakukan perdagangan antar pulau"
      ],
      "b": 3
    },
    {
      "t": "Peninggalan zaman Megalitikum berupa tiang batu besar yang berfungsi untuk memuja roh nenek moyang disebut ....",
      "o": [
        "Dolmen",
        "Menhir",
        "Sarkofagus",
        "Waruga"
      ],
      "b": 2
    },
    {
      "t": "Prinsip utama dari pembangunan berkelanjutan adalah ....",
      "o": [
        "Mengeksploitasi sumber daya alam sebanyak-banyaknya untuk saat ini",
        "Memenuhi kebutuhan saat ini tanpa mengorbankan kebutuhan generasi mendatang",
        "Menghentikan seluruh pembangunan agar alam tetap lestari",
        "Hanya fokus pada keuntungan ekonomi semata"
      ],
      "b": 2
    },
    {
      "t": "Contoh penerapan pembangunan berkelanjutan dalam kehidupan sehari-hari adalah ....",
      "o": [
        "Menggunakan kantong plastik sekali pakai saat belanja",
        "Membiarkan lampu menyala di siang hari",
        "Menghemat penggunaan air dan listrik",
        "Membuang sampah di sungai agar terbawa arus"
      ],
      "b": 3
    },
    {
      "t": "Dampak negatif dari tindakan manusia yang tidak memperhatikan prinsip keberlanjutan adalah ....",
      "o": [
        "Terjaganya keanekaragaman hayati",
        "Ketersediaan sumber daya alam melimpah",
        "Terjadinya kerusakan lingkungan dan pencemaran",
        "Meningkatnya kualitas udara bersih"
      ],
      "b": 3
    },
    {
      "t": "Tindakan yang tepat untuk mencegah dampak negatif dari eksploitasi hutan yang berlebihan adalah ....",
      "o": [
        "Melakukan reboisasi atau penanaman kembali",
        "Membakar hutan untuk lahan pertanian",
        "Menebang semua pohon tua dan muda",
        "Membangun pemukiman di tengah hutan lindung"
      ],
      "b": 1
    },
    {
      "t": "Kelangkaan terjadi ketika kebutuhan manusia tidak terbatas sedangkan alat pemuas kebutuhan terbatas. Tindakan yang tepat untuk mengatasi kelangkaan adalah ....",
      "o": [
        "Membeli semua barang yang diinginkan",
        "Menyusun skala prioritas kebutuhan",
        "Menggunakan sumber daya secara boros",
        "Menimbun barang kebutuhan pokok"
      ],
      "b": 2
    },
    {
      "t": "Salah satu upaya pemerintah untuk mengatasi kelangkaan Bahan Bakar Minyak (BBM) adalah ....",
      "o": [
        "Mendorong penggunaan transportasi umum dan energi alternatif",
        "Menurunkan harga BBM serendah mungkin",
        "Membagikan mobil gratis kepada masyarakat",
        "Menutup semua stasiun pengisian bahan bakar"
      ],
      "b": 1
    },
    {
      "t": "Komponen peta yang berfungsi untuk menjelaskan arti simbol-simbol yang terdapat pada peta disebut ....",
      "o": [
        "Orientasi",
        "Skala",
        "Legenda",
        "Inset"
      ],
      "b": 3
    },
    {
      "t": "Berikut ini adalah gas rumah kaca yang menjadi penyebab utama pemanasan global, KECUALI ....",
      "o": [
        "Karbon dioksida (CO2)",
        "Metana (CH4)",
        "Oksigen (O2)",
        "CFC"
      ],
      "b": 3
    },
    {
      "t": "Seorang remaja meniru gaya berpakaian artis idola secara berlebihan hingga melanggar norma kesopanan. Perilaku ini disebut ....",
      "o": [
        "Imitasi positif",
        "Imitasi negatif",
        "Sugesti",
        "Simpati"
      ],
      "b": 2
    },
    {
      "t": "Corak kehidupan manusia praaksara pada masa bercocok tanam ditandai dengan ....",
      "o": [
        "Hidup berpindah-pindah (nomaden)",
        "Bergantung sepenuhnya pada alam",
        "Hidup menetap (sedenter) dan menghasilkan makanan",
        "Menggunakan alat batu yang masih kasar"
      ],
      "b": 3
    },
    {
      "t": "Salah satu nilai budaya masa praaksara yang masih relevan dan dilestarikan hingga saat ini adalah ....",
      "o": [
        "Sistem kasta",
        "Gotong royong",
        "Hidup menyendiri",
        "Berburu hewan liar"
      ],
      "b": 2
    },
],

IPA:[
    {
      "t": "Perhatikan cabang-cabang ilmu sains berikut! (1) Botani, (2) Zoologi, (3) Mikrobiologi. Cabang-cabang ilmu tersebut merupakan bagian dari ilmu ....",
      "o": [
        "Fisika",
        "Kimia",
        "Biologi",
        "Astronomi"
      ],
      "b": 3
    },
    {
      "t": "Ilmu sains bersifat tentatif, artinya ....",
      "o": [
        "Kebenarannya bersifat mutlak dan tidak bisa diubah",
        "Didasarkan pada keyakinan pribadi ilmuwan",
        "Selalu berubah seiring ditemukannya bukti-bukti baru",
        "Tidak memerlukan pembuktian melalui eksperimen"
      ],
      "b": 3
    },
    {
      "t": "Saat melakukan percobaan di laboratorium, jika kulit terkena bahan kimia korosif, tindakan pertama yang paling tepat dilakukan adalah ....",
      "o": [
        "Mengoleskan pasta gigi pada kulit yang terkena",
        "Membasuh dengan air mengalir sebanyak-banyaknya",
        "Menutup rapat dengan perban",
        "Meniup bagian yang sakit"
      ],
      "b": 2
    },
    {
      "t": "Urutan tahapan metode ilmiah yang benar adalah ....",
      "o": [
        "Observasi - Hipotesis - Eksperimen - Kesimpulan",
        "Hipotesis - Eksperimen - Observasi - Kesimpulan",
        "Eksperimen - Hipotesis - Observasi - Kesimpulan",
        "Observasi - Eksperimen - Hipotesis - Kesimpulan"
      ],
      "b": 1
    },
    {
      "t": "Alat ukur yang paling tepat digunakan untuk mengukur diameter dalam sebuah cincin adalah ....",
      "o": [
        "Mistarmeter",
        "Mikrometer sekrup",
        "Jangka sorong",
        "Meteran pita"
      ],
      "b": 3
    },
    {
      "t": "Perhatikan gambar pengukuran panjang balok dengan mistar! Jika ujung kiri balok berada di angka 2 cm dan ujung kanan di angka 7,5 cm, maka panjang balok tersebut adalah ....",
      "o": [
        "7,5 cm",
        "5,5 cm",
        "9,5 cm",
        "5,0 cm"
      ],
      "b": 2
    },
    {
      "t": "Zat padat memiliki bentuk dan volume yang tetap karena ....",
      "o": [
        "Jarak antar partikel sangat berjauhan dan gaya tarik lemah",
        "Jarak antar partikel sangat rapat dan gaya tarik sangat kuat",
        "Partikel-partikelnya bergerak bebas dan cepat",
        "Gaya tarik antar partikelnya sangat lemah"
      ],
      "b": 2
    },
    {
      "t": "Data titik leleh dan titik didih zat X adalah -5°C dan 80°C. Pada suhu 25°C, wujud zat X adalah ....",
      "o": [
        "Padat",
        "Cair",
        "Gas",
        "Padat dan Gas"
      ],
      "b": 2
    },
    {
      "t": "Berikut ini yang merupakan contoh perubahan kimia adalah ....",
      "o": [
        "Es mencair menjadi air",
        "Lilin meleleh saat dipanaskan",
        "Kertas dibakar menjadi abu",
        "Air menguap saat dimasak"
      ],
      "b": 3
    },
    {
      "t": "Sebuah benda akan mengapung di dalam air jika ....",
      "o": [
        "Massa jenis benda lebih besar dari massa jenis air",
        "Massa jenis benda sama dengan massa jenis air",
        "Massa jenis benda lebih kecil dari massa jenis air",
        "Massa benda sama dengan massa air"
      ],
      "b": 3
    },
    {
      "t": "Suhu suatu benda diukur dengan termometer Celcius menunjukkan angka 40°C. Jika diukur dengan termometer Reamur, suhunya adalah ....",
      "o": [
        "32°R",
        "40°R",
        "50°R",
        "60°R"
      ],
      "b": 1
    },
    {
      "t": "Pemasangan kabel listrik di pinggir jalan sengaja dibuat agak kendor. Hal ini bertujuan agar ....",
      "o": [
        "Tidak putus saat memuai di siang hari yang panas",
        "Tidak putus saat menyusut di malam hari yang dingin",
        "Lebih indah dipandang mata",
        "Arus listrik dapat mengalir lebih lancar"
      ],
      "b": 2
    },
    {
      "t": "Alat yang menggunakan prinsip pemuaian bimetal adalah ....",
      "o": [
        "Termometer badan",
        "Setrika otomatis",
        "Panci presto",
        "Balon udara"
      ],
      "b": 2
    },
    {
      "t": "Perpindahan kalor yang disertai dengan perpindahan partikel zat perantaranya disebut ....",
      "o": [
        "Konduksi",
        "Konveksi",
        "Radiasi",
        "Isolasi"
      ],
      "b": 2
    },
    {
      "t": "Saat kita berada di dekat api unggun, badan kita terasa hangat. Perpindahan kalor yang terjadi adalah secara ....",
      "o": [
        "Konduksi",
        "Konveksi",
        "Radiasi",
        "Evaporasi"
      ],
      "b": 3
    },
    {
      "t": "Budi berjalan ke timur sejauh 10 meter, kemudian berbalik arah ke barat sejauh 4 meter. Perpindahan yang dilakukan Budi adalah ....",
      "o": [
        "14 meter ke timur",
        "6 meter ke timur",
        "14 meter ke barat",
        "6 meter ke barat"
      ],
      "b": 2
    },
    {
      "t": "Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Kelajuan rata-rata mobil tersebut adalah ....",
      "o": [
        "50 km/jam",
        "60 km/jam",
        "120 km/jam",
        "240 km/jam"
      ],
      "b": 2
    },
    {
      "t": "Saat kita naik bus yang sedang melaju kencang dan tiba-tiba direm, tubuh kita akan terdorong ke depan. Peristiwa ini sesuai dengan ....",
      "o": [
        "Hukum I Newton",
        "Hukum II Newton",
        "Hukum III Newton",
        "Hukum Gravitasi"
      ],
      "b": 1
    },
    {
      "t": "Gaya yang bekerja menghambat gerak benda dan arahnya berlawanan dengan arah gerak benda disebut ....",
      "o": [
        "Gaya otot",
        "Gaya pegas",
        "Gaya gesek",
        "Gaya gravitasi"
      ],
      "b": 3
    },
    {
      "t": "Penerapan Hukum III Newton (Aksi-Reaksi) terdapat pada peristiwa ....",
      "o": [
        "Dua badak bermusuhan saling mendorong",
        "Bola menggelinding di lantai datar",
        "Buah kelapa jatuh dari pohonnya",
        "Peluncuran roket ke angkasa"
      ],
      "b": 4
    },
    {
      "t": "Besaran pokok yang memiliki satuan Internasional (SI) 'Kilogram' adalah ....",
      "o": [
        "Panjang",
        "Massa",
        "Waktu",
        "Suhu"
      ],
      "b": 2
    },
    {
      "t": "Perhatikan data berikut! (1) Volume, (2) Panjang, (3) Luas, (4) Waktu. Yang termasuk kelompok besaran turunan adalah ....",
      "o": [
        "(1) dan (3)",
        "(1) dan (4)",
        "(2) dan (3)",
        "(2) dan (4)"
      ],
      "b": 1
    },
    {
      "t": "Benda A massanya 2 kg bergerak dengan percepatan 2 m/s². Gaya yang bekerja pada benda A adalah .... (F = m x a)",
      "o": [
        "1 Newton",
        "2 Newton",
        "4 Newton",
        "0 Newton"
      ],
      "b": 3
    },
    {
      "t": "Fasilitas laboratorium yang tidak boleh disimpan sembarangan karena mudah terbakar atau beracun biasanya disimpan dalam ....",
      "o": [
        "Lemari es",
        "Lemari asam/kimia",
        "Rak buku",
        "Meja praktikum"
      ],
      "b": 2
    },
    {
      "t": "Sebuah balok kayu memiliki massa 120 gram dan volume 60 cm³. Massa jenis balok kayu tersebut adalah ....",
      "o": [
        "0,5 g/cm³",
        "2 g/cm³",
        "720 g/cm³",
        "60 g/cm³"
      ],
      "b": 2
    },
    {
      "t": "Air sebanyak 2 kg dipanaskan sehingga suhunya naik sebesar 10°C. Jika kalor jenis air 4200 J/kg°C, maka kalor yang dibutuhkan adalah ....",
      "o": [
        "8400 Joule",
        "42000 Joule",
        "84000 Joule",
        "840000 Joule"
      ],
      "b": 3
    },
    {
      "t": "Benda dikatakan bergerak lurus beraturan (GLB) jika ....",
      "o": [
        "Kecepatannya berubah-ubah",
        "Percepatannya konstan",
        "Kecepatannya konstan/tetap",
        "Lintasannya melingkar"
      ],
      "b": 3
    },
    {
      "t": "Sebuah benda ditarik oleh dua gaya searah masing-masing 10 N dan 15 N. Resultan gaya yang bekerja pada benda tersebut adalah ....",
      "o": [
        "5 N",
        "10 N",
        "25 N",
        "150 N"
      ],
      "b": 3
    },
    {
      "t": "Pada termometer Fahrenheit, titik didih air adalah pada skala ....",
      "o": [
        "100°F",
        "80°F",
        "212°F",
        "273°F"
      ],
      "b": 3
    },
    {
      "t": "Salah satu contoh peristiwa kapilaritas dalam kehidupan sehari-hari adalah ....",
      "o": [
        "Naiknya minyak tanah pada sumbu kompor",
        "Air hujan jatuh ke bumi",
        "Air mengalir dari tempat tinggi ke rendah",
        "Terapungnya kapal di laut"
      ],
      "b": 1
    },
],

PRAKARYA:[
    {
      "t": "Bahan serat adalah suatu jenis bahan berupa potongan-potongan komponen yang membentuk jaringan memanjang yang utuh. Berdasarkan asalnya, serat dibagi menjadi dua, yaitu ....",
      "o": [
        "Serat halus dan serat kasar",
        "Serat alam dan serat buatan",
        "Serat organik dan serat anorganik",
        "Serat tekstil dan serat non-tekstil"
      ],
      "b": 2
    },
    {
      "t": "Berikut ini yang termasuk jenis serat alam yang berasal dari tumbuhan adalah ....",
      "o": [
        "Sutra dan wol",
        "Kapas dan kapuk",
        "Nilon dan polyester",
        "Asbes dan fiberglass"
      ],
      "b": 2
    },
    {
      "t": "Karakteristik serat kapas yang paling menonjol adalah ....",
      "o": [
        "Mengkilap dan licin",
        "Menghangatkan dan tebal",
        "Menyerap keringat dan nyaman dipakai",
        "Kuat dan tahan api"
      ],
      "b": 3
    },
    {
      "t": "Teknik pewarnaan kain dengan cara mengikat sebagian kain kemudian dicelupkan ke dalam pewarna disebut teknik ....",
      "o": [
        "Batik tulis",
        "Batik cap",
        "Tie Dye (Ikat Celup)",
        "Sulam"
      ],
      "b": 3
    },
    {
      "t": "Dalam pembuatan produk kerajinan, faktor ergonomis sangat penting. Salah satu syarat ergonomis adalah 'Utility', yang artinya ....",
      "o": [
        "Keamanan",
        "Kenyamanan",
        "Kegunaan",
        "Keluwesan"
      ],
      "b": 3
    },
    {
      "t": "Fungsi utama dari kemasan produk kerajinan adalah ....",
      "o": [
        "Menambah berat produk",
        "Melindungi produk dari kerusakan",
        "Menutupi cacat produk",
        "Membuat produk lebih mahal"
      ],
      "b": 2
    },
    {
      "t": "Langkah pertama dalam perancangan karya kerajinan adalah ....",
      "o": [
        "Menyiapkan alat dan bahan",
        "Membuat sketsa desain",
        "Mencari ide atau gagasan",
        "Finishing produk"
      ],
      "b": 3
    },
    {
      "t": "Salah satu prinsip utama dalam pembuatan konstruksi rumah tahan gempa adalah ....",
      "o": [
        "Menggunakan bahan yang sangat berat",
        "Struktur bangunan yang kaku dan tidak fleksibel",
        "Beban bangunan yang ringan dan struktur yang terikat kuat",
        "Pondasi yang dangkal"
      ],
      "b": 3
    },
    {
      "t": "Bahan yang umum digunakan untuk membuat kerangka miniatur rumah adalah ....",
      "o": [
        "Batu bata",
        "Stik es krim",
        "Besi beton",
        "Semen"
      ],
      "b": 2
    },
    {
      "t": "Alat pemotong yang tepat digunakan untuk memotong bahan kardus atau styrofoam dalam pembuatan miniatur rumah adalah ....",
      "o": [
        "Gergaji besi",
        "Cutter",
        "Gunting kuku",
        "Tang"
      ],
      "b": 2
    },
    {
      "t": "Teknik penyambungan bagian-bagian miniatur rumah dari bahan stik es krim biasanya menggunakan ....",
      "o": [
        "Paku",
        "Baut dan Mur",
        "Lem tembak (Glue Gun)",
        "Las"
      ],
      "b": 3
    },
    {
      "t": "Ciri khas rumah tradisional yang tahan gempa biasanya memiliki struktur ....",
      "o": [
        "Beton bertulang tebal",
        "Sistem sambungan pasak yang fleksibel",
        "Atap dari genteng tanah liat berat",
        "Dinding batu tanpa perekat"
      ],
      "b": 2
    },
    {
      "t": "Budidaya tanaman dengan memanfaatkan air sebagai media tanam utama tanpa menggunakan tanah disebut ....",
      "o": [
        "Aeroponik",
        "Hidroponik",
        "Vertikultur",
        "Tabulampot"
      ],
      "b": 2
    },
    {
      "t": "Berikut ini yang termasuk jenis tanaman sayuran buah yang cocok ditanam secara hidroponik adalah ....",
      "o": [
        "Bayam",
        "Kangkung",
        "Tomat",
        "Sawi"
      ],
      "b": 3
    },
    {
      "t": "Media tanam anorganik yang sering digunakan dalam hidroponik sebagai tempat menancapkan akar adalah ....",
      "o": [
        "Tanah liat",
        "Rockwool",
        "Kompos",
        "Pupuk kandang"
      ],
      "b": 2
    },
    {
      "t": "Langkah awal dalam budidaya tanaman hidroponik sebelum penanaman di sistem adalah ....",
      "o": [
        "Pemanenan",
        "Penyemaian benih",
        "Pemberian nutrisi",
        "Perawatan hama"
      ],
      "b": 2
    },
    {
      "t": "Cairan nutrisi yang digunakan untuk menyuburkan tanaman hidroponik dikenal dengan nama ....",
      "o": [
        "Pupuk Urea",
        "Nutrisi AB Mix",
        "Pupuk NPK",
        "Kompos Cair"
      ],
      "b": 2
    },
    {
      "t": "Metode hidroponik yang paling sederhana menggunakan sumbu kompor/kain flanel untuk menyerap air nutrisi ke akar disebut sistem ....",
      "o": [
        "NFT (Nutrient Film Technique)",
        "Drip System (Tetes)",
        "Wick System (Sumbu)",
        "Aeroponik"
      ],
      "b": 3
    },
    {
      "t": "Daerah di Indonesia yang terkenal sebagai penghasil komoditas buah Apel adalah ....",
      "o": [
        "Lembang, Bandung",
        "Batu, Malang",
        "Berastagi, Medan",
        "Puncak, Bogor"
      ],
      "b": 2
    },
    {
      "t": "Minuman segar yang dibuat dari buah-buahan yang dihancurkan atau diperas sarinya disebut ....",
      "o": [
        "Manisan buah",
        "Keripik buah",
        "Sari buah (Juice)",
        "Asinan buah"
      ],
      "b": 3
    },
    {
      "t": "Salah satu produk olahan pangan dari buah apel yang populer sebagai oleh-oleh khas Malang adalah ....",
      "o": [
        "Keripik Apel",
        "Dodol Garut",
        "Lempok Durian",
        "Sale Pisang"
      ],
      "b": 1
    },
    {
      "t": "Alat yang digunakan untuk menghaluskan buah dalam pembuatan jus adalah ....",
      "o": [
        "Mixer",
        "Blender",
        "Oven",
        "Toaster"
      ],
      "b": 2
    },
    {
      "t": "Langkah pertama dalam pengolahan minuman sari buah apel adalah ....",
      "o": [
        "Merebus air gula",
        "Mencuci dan mengupas buah",
        "Mengemas ke dalam botol",
        "Menyaring ampas"
      ],
      "b": 2
    },
    {
      "t": "Kandungan nutrisi utama dalam buah apel yang baik untuk pencernaan adalah ....",
      "o": [
        "Lemak",
        "Protein",
        "Serat",
        "Kalsium"
      ],
      "b": 3
    },
    {
      "t": "Kemasan yang paling tepat dan higienis untuk produk minuman sari buah adalah ....",
      "o": [
        "Daun pisang",
        "Kertas koran",
        "Botol plastik atau kaca tertutup",
        "Besek bambu"
      ],
      "b": 3
    },
    {
      "t": "Informasi penting yang harus dicantumkan pada label kemasan produk olahan pangan adalah ....",
      "o": [
        "Nama pemilik perusahaan",
        "Tanggal kadaluarsa (Expired Date)",
        "Foto karyawan",
        "Riwayat hidup pembuat"
      ],
      "b": 2
    },
    {
      "t": "Teknik pengolahan makanan dengan cara merebus bahan makanan dalam cairan yang sudah mendidih disebut ....",
      "o": [
        "Boiling",
        "Steaming",
        "Frying",
        "Baking"
      ],
      "b": 1
    },
    {
      "t": "Keuntungan menggunakan teknik hidroponik dibandingkan pertanian konvensional adalah ....",
      "o": [
        "Membutuhkan lahan tanah yang luas",
        "Lebih hemat air dan bersih",
        "Memerlukan banyak pestisida",
        "Tergantung pada musim hujan"
      ],
      "b": 2
    },
    {
      "t": "Dalam pembuatan kerajinan tekstil Tie Dye, bahan yang digunakan untuk mengikat kain agar motif terbentuk adalah ....",
      "o": [
        "Kawat besi",
        "Lem",
        "Karet gelang atau tali rafia",
        "Selotip"
      ],
      "b": 3
    },
    {
      "t": "Evaluasi produk kerajinan dilakukan untuk ....",
      "o": [
        "Mengetahui kekurangan dan kelemahan produk",
        "Menambah biaya produksi",
        "Mempersulit proses pembuatan",
        "Mengurangi nilai jual"
      ],
      "b": 1
    },
],

INFORMATIKA:[
{t:"Komputer terdiri dari CPU, monitor, dan …",o:["kompor","keyboard","kursi","meja"],b:1},
{t:"Perangkat lunak disebut …",o:["software","hardware","firmware","wetware"],b:0},
{t:"Shortcut copy adalah …",o:["Ctrl+X","Ctrl+C","Ctrl+V","Ctrl+S"],b:1},
{t:"Bagian komputer untuk mengetik adalah …",o:["mouse","keyboard","CPU","monitor"],b:1},
{t:"Internet berarti …",o:["jaringan komputer dunia","komputer rumah","game online","modem"],b:0},
{ "t": "Perangkat keras yang digunakan untuk memasukkan data ke komputer disebut …", "o": ["Output device", "Input device", "Storage", "Processor"], "b": 1 },
  { "t": "Keyboard termasuk perangkat …", "o": ["Input", "Output", "Processing", "Storage"], "b": 0 },
  { "t": "Contoh perangkat output adalah …", "o": ["Mouse", "Monitor", "Keyboard", "Scanner"], "b": 1 },
  { "t": "Sistem operasi yang bersifat open source adalah …", "o": ["Windows", "Linux", "macOS", "iOS"], "b": 1 },
  { "t": "Bagian komputer yang berfungsi memproses data adalah …", "o": ["RAM", "CPU", "Harddisk", "Keyboard"], "b": 1 },

  { "t": "RAM berfungsi untuk menyimpan data secara …", "o": ["Permanen", "Sementara", "Cloud", "Visual"], "b": 1 },
  { "t": "Perangkat keras yang berfungsi menyimpan data secara permanen adalah …", "o": ["Monitor", "RAM", "Harddisk", "CPU"], "b": 2 },
  { "t": "Ekstensi file .docx digunakan untuk …", "o": ["Gambar", "Audio", "Dokumen teks", "Video"], "b": 2 },
  { "t": "Shortcut ‘Ctrl + C’ digunakan untuk …", "o": ["Copy", "Paste", "Cut", "Save"], "b": 0 },
  { "t": "Shortcut ‘Ctrl + S’ berfungsi untuk …", "o": ["Menyimpan", "Menghapus", "Menutup", "Memindahkan"], "b": 0 },

  { "t": "Microsoft Excel digunakan untuk mengolah …", "o": ["Gambar", "Spreadsheet", "Video", "Audio"], "b": 1 },
  { "t": "Untuk menyisipkan gambar pada dokumen, kita memilih menu …", "o": ["Home", "Insert", "Layout", "Format"], "b": 1 },
  { "t": "Jaringan komputer yang mencakup satu gedung disebut …", "o": ["LAN", "WAN", "MAN", "PAN"], "b": 0 },
  { "t": "Jaringan yang cakupannya antarnegara disebut …", "o": ["LAN", "WAN", "MAN", "PAN"], "b": 1 },
  { "t": "Internet merupakan singkatan dari …", "o": ["International Network", "Interconnected Network", "Internal Network", "Interface Network"], "b": 1 },

  { "t": "Browser digunakan untuk …", "o": ["Mengetik", "Mengakses internet", "Menggambar", "Mendengar musik"], "b": 1 },
  { "t": "Contoh browser adalah …", "o": ["Word", "Chrome", "Excel", "PowerPoint"], "b": 1 },
  { "t": "Email digunakan untuk …", "o": ["Mengirim surat elektronik", "Mengedit foto", "Mendesain poster", "Menggambar"], "b": 0 },
  { "t": "File gambar biasanya memiliki ekstensi …", "o": ["MP3", "JPG", "DOCX", "XLSX"], "b": 1 },
  { "t": "Perangkat yang digunakan untuk menangkap sinyal Wi-Fi adalah …", "o": ["Router", "Monitor", "Printer", "Scanner"], "b": 0 },

  { "t": "Bahasa pemrograman yang mudah dipelajari untuk pemula adalah …", "o": ["Java", "C++", "Python", "Assembly"], "b": 2 },
  { "t": "Algoritma adalah …", "o": ["Perintah acak", "Urutan langkah yang logis", "Hasil program", "Aplikasi"], "b": 1 },
  { "t": "Flowchart digunakan untuk …", "o": ["Menyimpan data", "Menjelaskan alur program", "Menggambar objek 3D", "Mengedit video"], "b": 1 },
  { "t": "Simbol flowchart untuk keputusan berbentuk …", "o": ["Lingkaran", "Persegi", "Belah ketupat", "Segitiga"], "b": 2 },
  { "t": "Simbol terminator pada flowchart biasanya berbentuk …", "o": ["Oval", "Kotak", "Segitiga", "Panah"], "b": 0 },

  { "t": "Keamanan digital diperlukan untuk …", "o": ["Menghapus data", "Mengamankan informasi", "Membuat virus", "Menurunkan kecepatan internet"], "b": 1 },
  { "t": "Kata sandi yang kuat harus terdiri dari …", "o": ["Huruf saja", "Angka saja", "Kombinasi huruf, angka, simbol", "Nama sendiri"], "b": 2 },
  { "t": "Phishing adalah usaha untuk …", "o": ["Mengirim file besar", "Mencuri data dengan menyamar", "Mempercepat jaringan", "Menghapus virus"], "b": 1 },
  { "t": "Virus komputer dapat menyebar melalui …", "o": ["File bersih", "Email mencurigakan", "Keyboard", "Monitor"], "b": 1 },
  { "t": "Backup data dilakukan dengan tujuan …", "o": ["Menghilangkan data", "Menyimpan salinan data", "Membuat komputer lambat", "Memperbesar file"], "b": 1 },
{
      "t": "Kemampuan untuk mengenali kesamaan dan perbedaan pola, tren, dan keteraturan dalam data disebut ....",
      "o": [
        "Dekomposisi",
        "Abstraksi",
        "Pengenalan Pola",
        "Algoritma"
      ],
      "b": 3
    },
    {
      "t": "Seorang siswa mengelompokkan hewan berdasarkan jenis makanannya (herbivora, karnivora, omnivora). Kegiatan ini merupakan contoh penerapan ....",
      "o": [
        "Algoritma",
        "Pengenalan Pola",
        "Dekomposisi",
        "Debugging"
      ],
      "b": 2
    },
    {
      "t": "Memecah masalah yang besar dan kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola adalah pengertian dari ....",
      "o": [
        "Dekomposisi",
        "Abstraksi",
        "Pengenalan Pola",
        "Algoritma"
      ],
      "b": 1
    },
    {
      "t": "Ketika akan membuat nasi goreng, Ibu membagi tugas: Kakak memotong sayur, Adik mengocok telur, dan Ibu menyiapkan bumbu. Hal ini adalah contoh penerapan ....",
      "o": [
        "Abstraksi",
        "Algoritma",
        "Pengenalan Pola",
        "Dekomposisi"
      ],
      "b": 4
    },
    {
      "t": "Proses menyaring bagian-bagian yang tidak penting dan hanya berfokus pada informasi yang relevan/penting disebut ....",
      "o": [
        "Dekomposisi",
        "Algoritma",
        "Abstraksi",
        "Pattern Recognition"
      ],
      "b": 3
    },
    {
      "t": "Saat menggambar peta perjalanan dari rumah ke sekolah, Budi hanya menggambar jalan-jalan utama dan gedung-gedung besar sebagai penanda, tanpa menggambar setiap pohon di pinggir jalan. Tindakan Budi disebut ....",
      "o": [
        "Abstraksi",
        "Dekomposisi",
        "Asosiasi",
        "Komputasi"
      ],
      "b": 1
    },
    {
      "t": "Urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah disebut ....",
      "o": [
        "Program",
        "Algoritma",
        "Aplikasi",
        "Sistem Operasi"
      ],
      "b": 2
    },
    {
      "t": "Resep masakan yang berisi langkah-langkah memasak dari awal hingga siap saji merupakan contoh sederhana dari ....",
      "o": [
        "Hardware",
        "Software",
        "Algoritma",
        "Abstraksi"
      ],
      "b": 3
    },
    {
      "t": "Aplikasi Microsoft Word termasuk dalam kategori perangkat lunak ....",
      "o": [
        "Pengolah Angka",
        "Pengolah Kata",
        "Presentasi",
        "Desain Grafis"
      ],
      "b": 2
    },
    {
      "t": "Ikon 'Bold' (B) pada Microsoft Word berfungsi untuk ....",
      "o": [
        "Memiringkan huruf",
        "Menggarisbawahi huruf",
        "Menebalkan huruf",
        "Mewarnai huruf"
      ],
      "b": 3
    },
    {
      "t": "Tempat untuk menyimpan dan mengorganisir file dalam komputer agar rapi disebut ....",
      "o": [
        "File",
        "Folder",
        "Drive",
        "Flashdisk"
      ],
      "b": 2
    },
    {
      "t": "Ekstensi file yang dihasilkan oleh aplikasi Microsoft Word adalah ....",
      "o": [
        ".xlsx",
        ".pptx",
        ".docx",
        ".jpg"
      ],
      "b": 3
    },
    {
      "t": "Perintah 'Cut' dan 'Paste' dalam manajemen file digunakan untuk ....",
      "o": [
        "Menyalin file",
        "Menghapus file",
        "Memindahkan file",
        "Mengganti nama file"
      ],
      "b": 3
    },
    {
      "t": "Perangkat keras komputer yang berfungsi sebagai otak pemroses data adalah ....",
      "o": [
        "Monitor",
        "Keyboard",
        "CPU (Processor)",
        "Printer"
      ],
      "b": 3
    },
    {
      "t": "Berikut ini yang termasuk perangkat keras masukan (Input Device) adalah ....",
      "o": [
        "Monitor dan Speaker",
        "Keyboard dan Mouse",
        "Printer dan Proyektor",
        "CPU dan RAM"
      ],
      "b": 2
    },
    {
      "t": "Perangkat lunak yang berfungsi menjembatani pengguna dengan perangkat keras dan mengelola sumber daya komputer adalah ....",
      "o": [
        "Sistem Operasi",
        "Aplikasi Perkantoran",
        "Antivirus",
        "Browser"
      ],
      "b": 1
    },
    {
      "t": "Contoh dari Sistem Operasi adalah ....",
      "o": [
        "Google Chrome",
        "Microsoft Windows",
        "Adobe Photoshop",
        "Microsoft Excel"
      ],
      "b": 2
    },
    {
      "t": "Jaringan komputer yang cakupannya mendunia dan menghubungkan komputer di seluruh dunia disebut ....",
      "o": [
        "LAN (Local Area Network)",
        "MAN (Metropolitan Area Network)",
        "Internet",
        "Intranet"
      ],
      "b": 3
    },
    {
      "t": "Teknologi jaringan nirkabel (tanpa kabel) yang populer digunakan untuk menghubungkan perangkat ke internet adalah ....",
      "o": [
        "Fiber Optik",
        "Wi-Fi",
        "Kabel LAN",
        "Bluetooth"
      ],
      "b": 2
    },
    {
      "t": "Berikut ini adalah manfaat internet bagi pelajar, KECUALI ....",
      "o": [
        "Mencari materi pelajaran",
        "Berkomunikasi dengan guru dan teman",
        "Bermain game online tanpa kenal waktu",
        "Mengirim tugas melalui email"
      ],
      "b": 3
    },
    {
      "t": "Proses mengubah sinyal digital menjadi sinyal analog dan sebaliknya agar komputer dapat terhubung ke internet melalui saluran telepon dilakukan oleh ....",
      "o": [
        "Router",
        "Modem",
        "Switch",
        "Hub"
      ],
      "b": 2
    },
    {
      "t": "Aktivitas berbagi koneksi internet dari smartphone ke perangkat lain disebut ....",
      "o": [
        "Download",
        "Upload",
        "Tethering",
        "Browsing"
      ],
      "b": 3
    },
    {
      "t": "Aplikasi yang digunakan untuk menjelajahi halaman web di internet disebut ....",
      "o": [
        "Search Engine",
        "Web Browser",
        "Social Media",
        "Email Client"
      ],
      "b": 2
    },
    {
      "t": "Contoh Web Browser yang populer adalah ....",
      "o": [
        "Google",
        "Yahoo",
        "Google Chrome",
        "Bing"
      ],
      "b": 3
    },
    {
      "t": "Mesin pencari (Search Engine) berfungsi untuk ....",
      "o": [
        "Membuat dokumen",
        "Mencari informasi berdasarkan kata kunci",
        "Mengedit foto",
        "Memutar video"
      ],
      "b": 2
    },
    {
      "t": "Dalam proyek data kantin, siswa mengelompokkan jenis makanan dan menghitung jumlah penjualannya. Langkah ini menggunakan konsep ....",
      "o": [
        "Algoritma",
        "Pengenalan Pola",
        "Dekomposisi",
        "Abstraksi"
      ],
      "b": 2
    },
    {
      "t": "Untuk merawat kinerja laptop agar tidak lemot, salah satu tindakan pemeliharaan sistem yang disarankan adalah ....",
      "o": [
        "Menghapus file sampah (Temporary files)",
        "Menginstal banyak game berat",
        "Tidak pernah mematikan laptop",
        "Menjemur laptop di bawah matahari"
      ],
      "b": 1
    },
    {
      "t": "Kecerdasan Buatan (Artificial Intelligence) yang mampu mengenali suara pengguna dan merespons perintah suara disebut ....",
      "o": [
        "Image Recognition",
        "Voice Assistant",
        "Face Unlock",
        "Fingerprint Scanner"
      ],
      "b": 2
    },
    {
      "t": "Contoh penerapan AI (Artificial Intelligence) dalam kehidupan sehari-hari adalah ....",
      "o": [
        "Lampu bohlam biasa",
        "Kipas angin manual",
        "Rekomendasi video di YouTube",
        "Mesin ketik manual"
      ],
      "b": 3
    },
    {
      "t": "Robot medis di rumah sakit yang membantu dokter melakukan operasi dengan presisi tinggi merupakan contoh penerapan teknologi ....",
      "o": [
        "Jaringan Komputer",
        "Kecerdasan Buatan (AI) dan Robotika",
        "Manajemen File",
        "Pengolah Kata"
      ],
      "b": 2
    },
],
};

// =========================
//   VARIABEL GLOBAL
// =========================

let soal = [];
let mapel = "";
let idx = 0;
let score = 0;
let timer;
let detik = 15;
let nama = "";

// Cek Dark Mode saat loading
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    document.querySelector(".container").classList.add("dark-mode");
    document.getElementById("modeBtn").innerText = "☀️";
}

// =========================
//   LOGIKA DARK MODE
// =========================
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    
    // Simpan pilihan user
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        document.getElementById("modeBtn").innerText = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById("modeBtn").innerText = "🌙";
    }
}

// =========================
//   FUNGSI ACAK (SHUFFLE)
// =========================
function acak(arr){
    for(let i = arr.length-1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}

// =========================
//   MULAI KUIS
// =========================
function mulai(m){
    nama = document.getElementById("namaInput").value.trim();
    if(nama === ""){ alert("Isi nama dulu dong!"); return; }

    mapel = m;
    
    // UI Handling
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("kuis").classList.remove("hidden");
    document.getElementById("hasil").classList.add("hidden");

    document.getElementById("judulMapel").innerText = m;
    document.getElementById("namaSiswa").innerText = "Siswa: " + nama;

    // Ambil soal dan ACAK
    soal = [...bank[m]]; 
    acak(soal); // Ini mengacak urutan soal

    idx = 0;
    score = 0;

    tampil();
}

// =========================
//   TAMPIL SOAL
// =========================
function tampil(){
    resetTimer();

    let s = soal[idx];
    let html = `<h3>${idx+1}. ${s.t}</h3>`;

    // Render Pilihan Jawaban
    s.o.forEach((opsi, i) => {
        html += `<div class="choice" onclick="pilih(${i})">
                    <b>${String.fromCharCode(65+i)}.</b> ${opsi}
                 </div>`;
    });

    document.getElementById("soalArea").innerHTML = html;
}

// =========================
//   PILIH JAWABAN
// =========================
function pilih(i){
    clearInterval(timer); // Stop waktu
    let benar = soal[idx].b;

    let pilihan = document.getElementsByClassName("choice");

    for(let x=0; x<pilihan.length; x++){
        pilihan[x].style.pointerEvents = "none"; // Kunci klik
        if(x === benar) pilihan[x].classList.add("correct");
        if(x === i && i !== benar) pilihan[x].classList.add("wrong");
    }

    if(i === benar){ 
        score++; 
        playCorrect(); 
    } else { 
        playWrong(); 
    }

    // Lanjut otomatis setelah 1 detik
    setTimeout(() => next(), 1200);
}

// =========================
//   NEXT & SKIP
// =========================
function next(){
    idx++;
    if(idx >= soal.length){ 
        selesai(); 
    } else {
        tampil(); 
    }
}

function skip(){
    next();
}

// =========================
//   TIMER LOGIC
// =========================
function resetTimer(){
    detik = 15;
    document.getElementById("timer").innerText = detik + "s";
    clearInterval(timer);
    
    timer = setInterval(() => {
        detik--;
        document.getElementById("timer").innerText = detik + "s";
        if(detik <= 0){
            clearInterval(timer);
            playWrong(); // Waktu habis dianggap salah
            next();
        }
    }, 1000);
}

// =========================
//   SELESAI & SIMPAN RANKING
// =========================
function selesai(){
    clearInterval(timer);
    document.getElementById("kuis").classList.add("hidden");
    document.getElementById("hasil").classList.remove("hidden");

    // Hitung Nilai (Skala 0-100)
    let nilai = Math.round((score / soal.length) * 100);
    
    // Tampilkan Hasil
    document.getElementById("nilaiAkhir").innerHTML = `
        <h1 style="font-size:3em; margin:0;">${nilai}</h1>
        <p>Benar: ${score} / ${soal.length}</p>
        <p>Mapel: ${mapel}</p>
    `;

    // === FITUR BARU: SIMPAN RANKING ===
    simpanRanking(nama, mapel, nilai);
}

// =========================
//   KEMBALI KE MENU
// =========================
function kembaliMenu(){
    clearInterval(timer);
    document.getElementById("kuis").classList.add("hidden");
    document.getElementById("hasil").classList.add("hidden");
    document.getElementById("rankingArea").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("namaInput").value = ""; // Reset nama
}

// =========================
//   FITUR RANKING (LOCAL STORAGE)
// =========================

function simpanRanking(namaSiswa, mapelUjian, nilaiAkhir){
    // Ambil data lama
    let dataRanking = JSON.parse(localStorage.getItem("quizRanking")) || [];

    // Tambah data baru
    dataRanking.push({
        nama: namaSiswa,
        mapel: mapelUjian,
        nilai: nilaiAkhir
    });

    // Urutkan dari nilai terbesar ke terkecil
    dataRanking.sort((a, b) => b.nilai - a.nilai);

    // Potong hanya simpan 50 data terakhir agar memori tidak penuh
    if(dataRanking.length > 50) dataRanking = dataRanking.slice(0, 50);

    // Simpan kembali
    localStorage.setItem("quizRanking", JSON.stringify(dataRanking));
}

function bukaRanking(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("hasil").classList.add("hidden");
    document.getElementById("rankingArea").classList.remove("hidden");

    let dataRanking = JSON.parse(localStorage.getItem("quizRanking")) || [];
    let tbody = document.getElementById("isiRanking");
    tbody.innerHTML = "";

    if(dataRanking.length === 0){
        tbody.innerHTML = "<tr><td colspan='4'>Belum ada data nilai</td></tr>";
        return;
    }

    // Tampilkan Max 10 Besar
    dataRanking.slice(0, 10).forEach((data, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${data.nama}</td>
            <td>${data.mapel}</td>
            <td style="font-weight:bold;">${data.nilai}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function tutupRanking(){
    document.getElementById("rankingArea").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}
// =========================
//   PENGATURAN MUSIK
// =========================
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    // Jika musik sedang pause (mati), maka nyalakan
    if (music.paused) {
        music.play().then(() => {
            // Ubah ikon jadi speaker nyala
            btn.innerText = "🔊"; 
        }).catch(error => {
            console.log("Autoplay dicegah browser, perlu interaksi user.");
        });
    } else {
        // Jika musik sedang nyala, maka matikan (pause)
        music.pause();
        // Ubah ikon jadi speaker mati
        btn.innerText = "🔇";
    }
}
