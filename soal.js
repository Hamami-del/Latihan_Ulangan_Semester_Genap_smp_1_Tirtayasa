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

{t:"Malaikat diciptakan oleh Allah Swt. dari bahan dasar …",o:["Tanah","Api","Cahaya (Nur)","Udara"],b:2},

{t:"Sifat malaikat yang membedakannya dengan manusia adalah …",o:["Memiliki nafsu","Selalu taat dan patuh","Makan dan minum","Berjenis kelamin"],b:1},

{t:"Malaikat yang bertugas menyampaikan wahyu kepada para Nabi dan Rasul adalah …",o:["Malaikat Jibril","Malaikat Mikail","Malaikat Israfil","Malaikat Izrail"],b:0},

{t:"Mencatat amal baik dan amal buruk manusia adalah tugas dari Malaikat …",o:["Munkar dan Nakir","Rakib dan Atid","Malik dan Ridwan","Jibril dan Mikail"],b:1},

{t:"Malaikat yang bertugas menjaga pintu surga adalah …",o:["Malaikat Malik","Malaikat Ridwan","Malaikat Munkar","Malaikat Nakir"],b:1},

{t:"Sikap ikut merasakan apa yang dirasakan oleh orang lain disebut …",o:["Simpati","Empati","Toleransi","Egois"],b:1},

{t:"Perilaku menghormati orang tua dan guru merupakan perintah Allah yang tercantum dalam Al-Qur'an surah …",o:["Al-Baqarah ayat 83","Al-Isra ayat 23","An-Nisa ayat 36","Al-Hujurat ayat 12"],b:1},

{t:"Jika orang tua memerintahkan sesuatu yang bertentangan dengan syariat Islam, sikap kita adalah …",o:["Mematuhinya dengan terpaksa","Menolaknya dengan cara kasar","Menolaknya dengan sopan dan halus","Diam saja dan pura-pura tidak dengar"],b:2},

{t:"Shalat yang digabungkan, yaitu mengerjakan dua shalat fardhu dalam satu waktu disebut shalat …",o:["Qashar","Jamak","Rawatib","Sunnah"],b:1},

{t:"Meringkas jumlah rakaat shalat fardhu dari 4 rakaat menjadi 2 rakaat disebut shalat …",o:["Jamak","Qashar","Munfarid","Masbuq"],b:1},

{t:"Shalat fardhu yang boleh di-qashar adalah shalat yang jumlah rakaatnya …",o:["2 rakaat","3 rakaat","4 rakaat","Semua benar"],b:2},

{t:"Berikut ini adalah shalat yang TIDAK boleh di-qashar, yaitu …",o:["Dzuhur","Ashar","Isya","Maghrib"],b:3},

{t:"Pelaksanaan shalat jamak taqdim dilakukan pada waktu …",o:["Shalat yang pertama","Shalat yang kedua","Kapan saja","Di antara dua waktu shalat"],b:0},

{t:"Jarak minimal perjalanan yang membolehkan seseorang melakukan shalat jamak dan qashar menurut sebagian besar ulama adalah sekitar …",o:["20 km","40 km","80 km","150 km"],b:2},

{t:"Sebab diperbolehkannya shalat jamak bagi seseorang selain karena musafir adalah …",o:["Malas","Sakit atau hujan lebat","Sedang bekerja santai","Lupa waktu"],b:1},

{t:"Nabi Muhammad SAW diutus oleh Allah Swt. sebagai 'Rahmatan Lil Alamin', artinya …",o:["Rahmat bagi umat Islam saja","Rahmat bagi penduduk Mekah","Rahmat bagi seluruh alam semesta","Rahmat bagi kaum Quraisy"],b:2},

{t:"Gelar 'Al-Amin' yang diberikan kepada Nabi Muhammad SAW memiliki arti …",o:["Orang yang cerdas","Orang yang dapat dipercaya","Orang yang penyabar","Orang yang kaya raya"],b:1},

{t:"Khulafaur Rasyidin terdiri dari berapa orang sahabat? …",o:["3 orang","4 orang","5 orang","6 orang"],b:1},

{t:"Sahabat yang menjadi khalifah pertama menggantikan Rasulullah SAW adalah …",o:["Umar bin Khattab","Ali bin Abi Thalib","Abu Bakar Ash-Shiddiq","Utsman bin Affan"],b:2},

{t:"Abu Bakar mendapat gelar 'Ash-Shiddiq' karena …",o:["Selalu berkata benar dan membenarkan peristiwa Isra Mi'raj","Paling kaya di antara sahabat","Paling berani di medan perang","Paling hafal Al-Qur'an"],b:0},

{t:"Khalifah kedua yang terkenal dengan ketegasannya dan dijuluki Al-Faruq adalah …",o:["Abu Bakar Ash-Shiddiq","Umar bin Khattab","Utsman bin Affan","Ali bin Abi Thalib"],b:1},

{t:"Salah satu prestasi besar pada masa Khalifah Utsman bin Affan adalah …",o:["Memperluas masjidil haram","Menumpas nabi palsu","Kodifikasi (pembukuan) Al-Qur'an","Membangun baitul mal"],b:2},

{t:"Khalifah keempat yang juga merupakan menantu Nabi Muhammad SAW adalah …",o:["Zaid bin Tsabit","Bilal bin Rabah","Ali bin Abi Thalib","Muawiyah bin Abu Sufyan"],b:2},

{t:"Ali bin Abi Thalib dikenal sebagai 'Babul Ilmi', yang artinya …",o:["Pintunya rezeki","Pintunya ilmu","Pintunya surga","Pintunya kebaikan"],b:1},

{t:"Sikap menerima dengan lapang dada atas segala keputusan Allah Swt. disebut …",o:["Sabar","Ikhlas","Tawadhu","Qanaah"],b:1},

{t:"Hukum percaya kepada malaikat bagi seorang muslim adalah …",o:["Sunnah","Mubah","Wajib","Makruh"],b:2},

{t:"Contoh perilaku beriman kepada Malaikat Rakib dan Atid adalah …",o:["Selalu berhati-hati dalam berbuat dan berucap","Meminta rezeki kepada malaikat","Takut kepada malaikat maut","Berdoa agar malaikat menjaga tidur kita"],b:0},

{t:"Pasangan shalat yang boleh dijamak adalah …",o:["Subuh dan Dzuhur","Dzuhur dan Ashar","Ashar dan Maghrib","Maghrib dan Subuh"],b:1},

{t:"Niat shalat jamak takhir dzuhur dan ashar dilakukan pada waktu …",o:["Dzuhur","Ashar","Maghrib","Subuh"],b:1},

{t:"Hijrahnya Nabi Muhammad SAW dari Mekah ke Madinah bertujuan untuk …",o:["Menghindari hutang","Mencari kekayaan","Menyelamatkan iman dan menyebarkan Islam","Berwisata"],b:2}

],

BINDO:[
{t:"Puisi rakyat yang memiliki ciri-ciri bersajak a-b-a-b dan terdiri dari 4 baris adalah …",o:["Syair","Gurindam","Pantun","Mantra"],b:2},

{t:"Baris pertama dan kedua pada pantun disebut …",o:["Isi","Sampiran","Penutup","Ekor"],b:1},

{t:"Puisi lama yang berasal dari Arab, bersajak a-a-a-a, dan semua barisnya adalah isi disebut …",o:["Pantun","Gurindam","Talibun","Syair"],b:3},

{t:"Ciri-ciri gurindam yang paling tepat adalah …",o:["Terdiri dari 4 baris","Bersajak a-b-a-b","Terdiri dari 2 baris dalam satu bait","Baris pertama adalah sampiran"],b:2},

{t:"Cerita fiksi yang tokoh utamanya adalah hewan yang berperilaku seperti manusia disebut …",o:["Legenda","Mite","Sage","Fabel"],b:3},

{t:"Bagian awal cerita fabel yang berisi pengenalan tokoh, latar tempat, dan waktu disebut …",o:["Komplikasi","Resolusi","Orientasi","Koda"],b:2},

{t:"Bagian dalam fabel yang memuat pesan moral atau amanat dari penulis disebut …",o:["Orientasi","Komplikasi","Resolusi","Koda"],b:3},

{t:"Puncak masalah atau konflik yang terjadi dalam sebuah cerita fabel disebut …",o:["Komplikasi","Resolusi","Orientasi","Amanat"],b:0},

{t:"Kata sandang yang sering digunakan dalam cerita fabel adalah …",o:["Di dan Ke","Si dan Sang","Dari dan Pada","Yang dan Untuk"],b:1},

{t:"Surat yang dikirim oleh seseorang kepada orang lain (teman/keluarga) yang bersifat kekeluargaan disebut …",o:["Surat Dinas","Surat Niaga","Surat Pribadi","Surat Resmi"],b:2},

{t:"Salah satu ciri utama surat dinas yang membedakannya dengan surat pribadi adalah adanya …",o:["Tanggal surat","Tanda tangan","Kop surat (Kepala surat)","Nama pengirim"],b:2},

{t:"Bahasa yang digunakan dalam surat dinas haruslah …",o:["Bahasa gaul","Bahasa baku dan resmi","Bahasa daerah","Bahasa santai"],b:1},

{t:"Penulisan alamat surat yang benar menurut kaidah bahasa Indonesia adalah …",o:["Kepada Yth. Bpk. Kepala Sekolah","Yth. Kepala SMP Negeri 1","Kepada Bapak Kepala SMP Negeri 1","Yth. Bpk Kepala SMP Negeri 1"],b:1},

{t:"Salam pembuka yang paling umum digunakan dalam surat dinas adalah …",o:["Hai Sobat,","Salam rindu,","Dengan hormat,","Assalamualaikum wr.wb,"],b:2},

{t:"Buku yang berisi cerita rekaan atau imajinasi penulis disebut buku …",o:["Fiksi","Nonfiksi","Ilmiah","Biografi"],b:0},

{t:"Berikut ini yang merupakan contoh buku nonfiksi adalah …",o:["Novel Laskar Pelangi","Kumpulan Dongeng Kancil","Buku Paket Biologi Kelas 7","Komik Doraemon"],b:2},

{t:"Bagian buku nonfiksi yang berisi daftar kata-kata sulit beserta artinya, biasanya terletak di bagian akhir buku, disebut …",o:["Indeks","Daftar Pustaka","Glosarium","Kata Pengantar"],b:2},

{t:"Daftar istilah penting yang terdapat dalam buku beserta nomor halamannya disebut …",o:["Glosarium","Indeks","Daftar Isi","Sinopsis"],b:1},

{t:"Perhatikan pantun berikut: 'Berakit-rakit ke hulu, berenang-renang ke tepian. Bersakit-sakit dahulu, …' Lanjutan yang tepat adalah …",o:["Mati kemudian","Bersenang-senang kemudian","Kaya raya kemudian","Menangis kemudian"],b:1},

{t:"Hubungan antara baris pertama dan kedua pada Gurindam adalah hubungan …",o:["Sebab-Akibat (Syarat-Jawaban)","Pertanyaan-Jawaban","Sampiran-Isi","Pembuka-Penutup"],b:0},

{t:"Penggunaan kata depan 'di' yang tepat terdapat pada kalimat …",o:["Ayah pergi dikantor","Buku itu disimpan di lemari","Adik bermain dihalaman","Kakak menaruh sepatu dirak"],b:1},

{t:"Tanda baca yang digunakan untuk mengapit kalimat langsung dalam cerita fabel adalah …",o:["Tanda kurung ( )","Tanda petik dua (\"...\")","Tanda seru (!)","Tanda tanya (?)"],b:1},

{t:"Unsur intrinsik cerita yang menyangkut waktu, tempat, dan suasana kejadian disebut …",o:["Tema","Alur","Latar","Tokoh"],b:2},

{t:"Dalam surat pribadi, bagian 'Salam kangen' atau 'Salam manis' termasuk dalam …",o:["Salam pembuka","Salam penutup","Isi surat","Kepala surat"],b:1},

{t:"Singkatan 'Yth.' pada alamat surat merupakan kepanjangan dari …",o:["Yang Terhormat","Yang Tersayang","Yang Tercinta","Yang Terdahulu"],b:0},

{t:"Tujuan membaca sekilas (skimming) adalah untuk …",o:["Menghafal seluruh isi buku","Mendapatkan gambaran umum isi buku","Mencari kesalahan penulisan","Membaca dengan suara nyaring"],b:1},

{t:"Kalimat dalam surat dinas yang berisi inti atau tujuan pengiriman surat terletak pada bagian …",o:["Pembuka","Isi","Penutup","Lampiran"],b:1},

{t:"Struktur teks fabel yang berisi penyelesaian masalah adalah …",o:["Orientasi","Komplikasi","Resolusi","Koda"],b:2},

{t:"Kata 'Lalu', 'Kemudian', dan 'Akhirnya' adalah contoh kata hubung (konjungsi) …",o:["Urutan waktu","Sebab akibat","Pertentangan","Pilihan"],b:0},

{t:"Komentar terhadap buku fiksi maupun nonfiksi dapat bersifat …",o:["Memuji saja","Mengkritik saja","Pujian dan kritikan","Menjelekkan penulis"],b:2}
],

MTK:[
{t:"Perbandingan 2 : 5 sama dengan …",o:["4 : 10","6 : 15","8 : 12","10 : 2"],b:1},
{t:"Jika 3 kg beras harganya Rp36.000, maka harga 5 kg adalah …",o:["Rp50.000","Rp55.000","Rp60.000","Rp65.000"],b:2},
{t:"Skala peta 1 : 2000. Jika jarak pada peta 5 cm, jarak sebenarnya adalah …",o:["50 m","100 m","150 m","200 m"],b:1},
{t:"Dalam perbandingan 6 : x = 3 : 5, nilai x adalah …",o:["8","10","12","15"],b:2},
{t:"Toko memberi diskon 20% dari harga Rp150.000. Besar diskonnya adalah …",o:["Rp20.000","Rp25.000","Rp30.000","Rp35.000"],b:2},
{t:"Seseorang membeli barang Rp80.000 dan menjualnya Rp100.000. Keuntungannya adalah …",o:["Rp10.000","Rp15.000","Rp20.000","Rp25.000"],b:2},
{t:"Pada segitiga, jumlah seluruh sudut adalah …",o:["90°","120°","150°","180°"],b:3},
{t:"Jika sudut A = 40° dan sudut B = 60°, maka sudut C adalah …",o:["70°","80°","90°","100°"],b:1},
{t:"Sudut berpelurus memiliki jumlah sebesar …",o:["90°","120°","150°","180°"],b:3},
{t:"Sudut saling bertolak belakang adalah …",o:["Sama besar","Berjumlah 90°","Berjumlah 180°","Tidak sama"],b:0},
{t:"Bangun yang memiliki dua pasang sisi berhadapan sejajar adalah …",o:["Persegi","Persegi panjang","Layang-layang","Trapesium"],b:1},
{t:"Sebuah persegi panjang memiliki p=12 cm dan l=5 cm. Kelilingnya adalah …",o:["30 cm","34 cm","40 cm","45 cm"],b:2},
{t:"Sebuah trapesium memiliki sisi sejajar 8 cm dan 12 cm, serta tinggi 6 cm. Luasnya adalah …",o:["50 cm²","54 cm²","60 cm²","72 cm²"],b:2},
{t:"Sebuah layang-layang memiliki diagonal 8 cm dan 6 cm. Luasnya adalah …",o:["24 cm²","30 cm²","36 cm²","48 cm²"],b:3},
{t:"Data tinggi badan (cm): 140, 142, 145, 145, 147. Modusnya adalah …",o:["140","142","145","147"],b:2},
{t:"Nilai rata-rata dari 6, 8, 10 adalah …",o:["6","7","8","9"],b:2},
{t:"Median dari data 3, 5, 7, 9, 11 adalah …",o:["5","7","9","11"],b:1},
{t:"Peluang muncul angka 3 pada dadu adalah …",o:["1/2","1/3","1/4","1/6"],b:3},
{t:"Dari 40 siswa, 16 siswa suka matematika. Peluang terpilih siswa yang suka matematika adalah …",o:["1/5","2/5","3/5","4/5"],b:1},
{t:"Skala 1:500. Jarak sebenarnya 200 m. Jarak di peta adalah …",o:["2 cm","4 cm","20 cm","40 cm"],b:3},
{t:"Perbandingan uang Ani dan Budi adalah 3:4. Jika uang Ani Rp60.000, uang Budi adalah …",o:["Rp70.000","Rp75.000","Rp80.000","Rp85.000"],b:2},
{t:"Diskon 15% dari Rp200.000 adalah …",o:["Rp20.000","Rp25.000","Rp30.000","Rp35.000"],b:1},
{t:"Jika harga setelah diskon 10% adalah Rp180.000, maka harga sebelum diskon adalah …",o:["Rp190.000","Rp200.000","Rp210.000","Rp220.000"],b:1},
{t:"Segitiga siku-siku memiliki satu sudut sebesar …",o:["30°","45°","60°","90°"],b:3},
{t:"Sudut komplemen berjumlah …",o:["90°","120°","150°","180°"],b:0},
{t:"Keliling persegi dengan sisi 9 cm adalah …",o:["18 cm","27 cm","36 cm","81 cm"],b:2},
{t:"Pada persegi panjang, diagonal-diagonalnya …",o:["Berpotongan tegak lurus","Sama panjang","Berbeda arah","Tidak berpotongan"],b:1},
{t:"Jika panjang sisi-sisi segitiga 6, 7, dan 8, kelilingnya adalah …",o:["19","20","21","22"],b:2},
{t:"Jika peluang suatu kejadian adalah 0, maka kejadian tersebut …",o:["Pasti terjadi","Tidak mungkin terjadi","Mungkin terjadi","Selalu terjadi"],b:1},
{t:"Mean dari data 10, 10, 20, 20, 30 adalah …",o:["14","16","18","20"],b:3},
],

PANCASILA:[
{t:"Pancasila menjadi dasar negara sejak …",o:["2000","reformasi","proklamasi 1945","1990"],b:2},
{t:"Sila pertama Pancasila berbunyi …",o:["Kemanusiaan","Ketuhanan","Persatuan","Kerakyatan"],b:1},
{t:"Burung pada lambang negara adalah …",o:["Rajawali","Garuda","Elang","Merpati"],b:1},
{t:"Semboyan negara Indonesia adalah …",o:["Bersatu","Pancasila","Bhineka Tunggal Ika","Tanah Air"],b:2},
{t:"Hari lahir Pancasila diperingati pada …",o:["17 Agustus","1 Juni","20 Mei","21 April"],b:1},
{t:"Semboyan 'Bhinneka Tunggal Ika' dapat ditemukan dalam Kitab Sutasoma karangan …",o:["Mpu Prapanca","Mpu Tantular","Mpu Gandring","Mpu Panuluh"],b:1},

{t:"Secara harfiah, arti dari 'Bhinneka Tunggal Ika' adalah …",o:["Berbeda-beda tetapi sama saja","Berbeda-beda tetapi tetap satu jua","Satu kesatuan yang utuh","Persatuan dan kesatuan bangsa"],b:1},

{t:"Salah satu faktor penyebab keberagaman masyarakat Indonesia yang berkaitan dengan posisi wilayah adalah …",o:["Kondisi negara kepulauan","Letak strategis wilayah Indonesia","Perbedaan kondisi alam","Penerimaan masyarakat terhadap perubahan"],b:1},

{t:"Golongan bangsa berdasarkan ciri-ciri fisik dan garis keturunan disebut …",o:["Suku","Budaya","Ras","Agama"],b:2},

{t:"Masyarakat Indonesia bagian barat (Sumatera, Jawa, Kalimantan) umumnya termasuk dalam ras …",o:["Malayan Mongoloid","Melanesoid","Asiatic Mongoloid","Kaukasoid"],b:0},

{t:"Ras yang memiliki ciri fisik kulit hitam, rambut keriting, dan bibir tebal yang banyak mendiami wilayah Papua dan Maluku adalah ras …",o:["Malayan Mongoloid","Melanesoid","Kaukasoid","Weddoid"],b:1},

{t:"Sikap menganggap suku bangsanya sendiri lebih unggul dibandingkan suku bangsa lain disebut …",o:["Nasionalisme","Patriotisme","Etnosentrisme","Individualisme"],b:2},

{t:"Jaminan kebebasan beragama di Indonesia tercantum dalam UUD NRI Tahun 1945 Pasal …",o:["Pasal 27 Ayat 1","Pasal 28","Pasal 29 Ayat 2","Pasal 30 Ayat 1"],b:2},

{t:"Sikap toleransi antarumat beragama dapat ditunjukkan dengan cara …",o:["Mengikuti ibadah agama lain","Mempelajari kitab suci agama lain","Menghormati orang lain yang sedang beribadah","Membandingkan ajaran agama"],b:2},

{t:"Bentuk kerjasama atau gotong royong dalam masyarakat Jawa sering dikenal dengan istilah …",o:["Mapalus","Gugur Gunung","Subak","Sikaroban"],b:1},

{t:"Istilah gotong royong 'Mapalus' berasal dari daerah …",o:["Minahasa (Sulawesi Utara)","Bali","Sumatera Barat","Jawa Tengah"],b:0},

{t:"Lembaga ekonomi yang berasaskan kekeluargaan dan gotong royong sesuai UUD 1945 Pasal 33 Ayat 1 adalah …",o:["BUMN","Perseroan Terbatas (PT)","Koperasi","Firma"],b:2},

{t:"Tokoh bangsa yang dikenal sebagai Bapak Koperasi Indonesia adalah …",o:["Ir. Soekarno","Drs. Moh. Hatta","Ki Hajar Dewantara","Soepomo"],b:1},

{t:"Manfaat utama dari kerjasama dan gotong royong adalah …",o:["Pekerjaan menjadi lebih berat","Menimbulkan perselisihan","Pekerjaan cepat selesai dan terasa ringan","Menambah biaya pengeluaran"],b:2},

{t:"Perbedaan jenis kelamin antara laki-laki dan perempuan yang bersifat kodrati dan pemberian Tuhan disebut …",o:["Gender","Seks (Jenis Kelamin)","Emansipasi","Patriarki"],b:1},

{t:"Pembagian peran antara laki-laki dan perempuan yang dibentuk oleh sosial dan budaya masyarakat disebut …",o:["Gender","Kodrat","Takdir","Biologis"],b:0},

{t:"Berikut ini yang merupakan contoh perilaku pelajar dalam mengisi kemerdekaan adalah …",o:["Bekerja keras mencari uang","Belajar dengan tekun dan disiplin","Ikut berperang angkat senjata","Mendemo kebijakan pemerintah"],b:1},

{t:"Undang-Undang yang mengatur tentang Pemerintahan Daerah adalah …",o:["UU No. 20 Tahun 2003","UU No. 23 Tahun 2014","UU No. 12 Tahun 2011","UU No. 39 Tahun 1999"],b:1},

{t:"Hak, wewenang, dan kewajiban daerah otonom untuk mengatur dan mengurus sendiri urusan pemerintahan disebut …",o:["Sentralisasi","Dekonsentrasi","Otonomi Daerah","Tugas Pembantuan"],b:2},

{t:"Contoh peran serta masyarakat dalam pertahanan dan keamanan di lingkungan tempat tinggal adalah …",o:["Mengikuti upacara bendera","Membayar pajak tepat waktu","Melaksanakan Siskamling (Ronda)","Menjadi anggota TNI"],b:2},

{t:"Sikap cinta tanah air dan rela berkorban bagi bangsa dan negara disebut …",o:["Chauvinisme","Patriotisme","Egoisme","Primordialisme"],b:1},

{t:"Rumah adat dari provinsi Papua adalah …",o:["Gadang","Joglo","Tongkonan","Honai"],b:3},

{t:"Lagu daerah 'Bungong Jeumpa' berasal dari provinsi …",o:["Sumatera Barat","Aceh","Kalimantan Selatan","Sulawesi Selatan"],b:1},

{t:"Sikap yang harus dikembangkan dalam pergaulan masyarakat yang majemuk (beragam) adalah …",o:["Eksklusivisme","Toleransi dan Inklusif","Fanatisme sempit","Apatis"],b:1},

{t:"Sistem pertahanan dan keamanan negara Indonesia bersifat semesta, yang artinya …",o:["Hanya TNI yang berperang","Hanya Polisi yang menjaga keamanan","Melibatkan seluruh rakyat dan sumber daya nasional","Mengandalkan bantuan negara lain"],b:2},

{t:"Keunggulan Negara Kesatuan Republik Indonesia (NKRI) dibanding negara lain adalah …",o:["Memiliki wilayah daratan terluas di dunia","Memiliki keragaman budaya namun tetap satu","Memiliki senjata nuklir","Negara dengan penduduk tersedikit"],b:1},

{t:"Revolusi Mental merupakan gerakan untuk mengubah cara pandang dan perilaku bangsa. Tiga nilai utamanya adalah …",o:["Integritas, Etos Kerja, Gotong Royong","Jujur, Adil, Makmur","Cerdas, Kaya, Kuat","Disiplin, Patuh, Takut"],b:0},

{t:"Sikap menghargai budaya lokal bisa ditunjukkan dengan …",o:["Malu menggunakan bahasa daerah","Lebih menyukai lagu K-Pop dibanding lagu daerah","Mempelajari dan melestarikan tarian tradisional","Menganggap budaya asing lebih modern"],b:2},

{t:"Berikut ini yang BUKAN merupakan alat pemersatu bangsa Indonesia adalah …",o:["Bendera Merah Putih","Bahasa Indonesia","Lagu Indonesia Raya","Mata uang asing"],b:3},

{t:"Peristiwa sejarah yang menjadi tonggak persatuan para pemuda dari berbagai suku adalah …",o:["Proklamasi","Sumpah Pemuda","Kebangkitan Nasional","Dekrit Presiden"],b:1}
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
{t:"Jumlah pemain sepak bola adalah …",o:["9","10","11","12"],b:2},
{t:"Renang gaya bebas menggunakan gerakan …",o:["katak","bebek","kupu-kupu","crawl"],b:3},
{t:"Permainan bulu tangkis memakai alat …",o:["bola","cangkul","raket","tongkat"],b:2},
{t:"Senam lantai dilakukan di atas …",o:["tanah","matras","rumput","ubin"],b:1},
{t:"Push-up melatih kekuatan …",o:["telinga","perut","tangan","kaki"],b:2},
{t:"Gerakan memukul bola untuk mengawali permainan dalam bola voli disebut …",o:["Smash","Passing","Blocking","Servis"],b:3},

{t:"Posisi kedua lengan saat melakukan passing bawah yang benar adalah …",o:["Ditekuk","Diluruskan dan dirapatkan","Direnggangkan","Diangkat ke atas"],b:1},

{t:"Induk organisasi bola basket di Indonesia adalah …",o:["PSSI","PBVSI","PERBASI","PBSI"],b:2},

{t:"Teknik mengoper bola setinggi dada dalam permainan bola basket disebut …",o:["Chest pass","Bounce pass","Overhead pass","Baseball pass"],b:0},

{t:"Jumlah poin untuk memenangkan satu set dalam permainan bulu tangkis adalah …",o:["15 poin","20 poin","21 poin","25 poin"],b:2},

{t:"Pukulan dalam bulu tangkis yang melambung tinggi ke arah belakang daerah lawan disebut …",o:["Smash","Drive","Dropshot","Lob"],b:3},

{t:"Teknik memegang bet tenis meja seperti sedang berjabat tangan disebut …",o:["Penholder grip","Shakehand grip","American grip","Continental grip"],b:1},

{t:"Start yang digunakan oleh pelari jarak pendek (sprint) adalah start …",o:["Berdiri","Melayang","Jongkok","Duduk"],b:2},

{t:"Induk organisasi pencak silat di Indonesia adalah …",o:["IPSI","PASI","PRSI","PELTI"],b:0},

{t:"Sikap dasar kaki untuk memperkokoh posisi tubuh dalam pencak silat disebut …",o:["Sikap pasang","Kuda-kuda","Elakan","Tangkisan"],b:1},

{t:"Upaya pembelaan dengan cara mengadakan kontak langsung dengan serangan lawan (menahan) dalam pencak silat disebut …",o:["Hindaran","Elakan","Tangkisan","Pukulan"],b:2},

{t:"Gerakan menggulingkan badan ke depan dengan bagian tengkuk menyentuh matras terlebih dahulu disebut …",o:["Guling lenting","Guling belakang","Guling depan","Meroda"],b:2},

{t:"Alas yang digunakan untuk melakukan senam lantai adalah …",o:["Karpet","Rumput","Matras","Pasir"],b:2},

{t:"Sikap tidur terlentang kemudian mengangkat kedua kaki lurus ke atas dengan ditopang oleh pinggang disebut …",o:["Kayang","Sikap lilin","Handstand","Headstand"],b:1},

{t:"Senam yang diiringi dengan irama musik atau ketukan disebut …",o:["Senam ketangkasan","Senam lantai","Senam irama (ritmik)","Senam militer"],b:2},

{t:"Latihan push-up bertujuan untuk melatih kekuatan otot …",o:["Perut","Kaki","Lengan dan bahu","Leher"],b:2},

{t:"Latihan sit-up bermanfaat untuk menguatkan otot bagian …",o:["Perut","Punggung","Tangan","Kaki"],b:0},

{t:"Kemampuan tubuh untuk melakukan aktivitas tanpa mengalami kelelahan yang berarti disebut …",o:["Kekuatan","Kelincahan","Kebugaran jasmani","Kecepatan"],b:2},

{t:"Lari santai (jogging) bermanfaat untuk melatih daya tahan organ …",o:["Otot perut","Jantung dan paru-paru","Otot tangan","Otot leher"],b:1},

{t:"Zat gizi yang berfungsi sebagai sumber energi utama bagi tubuh adalah …",o:["Protein","Vitamin","Karbohidrat","Mineral"],b:2},

{t:"Masa peralihan dari anak-anak menuju dewasa yang ditandai dengan perubahan fisik dan psikis disebut masa …",o:["Balita","Manula","Remaja (Pubertas)","Dewasa"],b:2},

{t:"Pukulan keras dan menukik tajam ke area lawan dalam bulu tangkis bertujuan mematikan lawan disebut …",o:["Lob","Smash","Service","Drive"],b:1},

{t:"Tujuan utama melakukan pemanasan (warming up) sebelum berolahraga adalah …",o:["Agar cepat lelah","Mencegah terjadinya cedera","Membuang waktu","Supaya berkeringat saja"],b:1},

{t:"Induk organisasi atletik di Indonesia adalah …",o:["PSSI","PBSI","PASI","PRSI"],b:2},

{t:"Salah satu contoh makanan sehat yang mengandung protein nabati adalah …",o:["Daging sapi","Telur","Tahu dan tempe","Ikan"],b:2},

{t:"Gerakan melentingkan badan ke belakang dengan bertumpu pada kedua tangan dan kaki (seperti busur) disebut …",o:["Sikap lilin","Kayang","Split","Roll depan"],b:1},

{t:"Pola makan sehat adalah makan yang memenuhi kriteria …",o:["Gizi Seimbang (4 Sehat 5 Sempurna)","Mahal dan enak","Cepat saji","Banyak mengandung gula"],b:0},

{t:"Berikut ini yang BUKAN merupakan gaya dalam olahraga renang adalah …",o:["Gaya bebas","Gaya dada","Gaya batu","Gaya punggung"],b:2},

{t:"Posisi badan saat melakukan lari jarak pendek (sprint) adalah …",o:["Tegak lurus","Condong ke depan","Condong ke belakang","Membungkuk"],b:1},

{t:"Tes lari 2,4 km atau lari 12 menit biasanya digunakan untuk mengukur …",o:["Kecepatan","Kelincahan","Daya tahan jantung (Kardiovaskuler)","Kekuatan otot"],b:2},
],

BING:[
{t:"'Apple' berarti …",o:["jeruk","apel","anggur","mangga"],b:1},
{t:"'Good morning' digunakan pada …",o:["malam","siang","pagi","sore"],b:2},
{t:"'Cat' berarti …",o:["anjing","kucing","burung","kuda"],b:1},
{t:"'Thank you' artinya …",o:["maaf","terima kasih","tolong","permisi"],b:1},
{t:"'Blue' artinya …",o:["merah","kuning","biru","hijau"],b:2},
{t:"Bahasa Inggris dari kata 'Rajin' adalah …",o:["Lazy","Diligent","Stupid","Smart"],b:1},

{t:"Lawan kata (Antonym) dari 'Big' adalah …",o:["Large","Small","Tall","Long"],b:1},

{t:"'My mother cooks in the kitchen.'\nArti kata yang digarisbawahi (Kitchen) adalah …",o:["Kamar tidur","Ruang tamu","Dapur","Garasi"],b:2},

{t:"Rina memiliki rambut yang keriting.\nBahasa Inggris 'Rambut keriting' adalah …",o:["Straight hair","Curly hair","Long hair","Short hair"],b:1},

{t:"Lengkapi kalimat ini dengan kata kerja yang tepat:\n'She ... (minum) milk every morning.'",o:["drink","drinks","drinking","drank"],b:1},

{t:"Kata ganti (Subject Pronoun) untuk 'Ayah saya' (My Father) adalah …",o:["He","She","It","They"],b:0},

{t:"'The cat is UNDER the table.'\nPosisi kucing tersebut berada di … meja.",o:["Atas","Samping","Bawah","Belakang"],b:2},

{t:"Hewan yang memiliki belalai panjang (long trunk) adalah …",o:["Snake","Elephant","Giraffe","Lion"],b:1},

{t:"'I go to school at 6.30 a.m.'\nJam 6.30 dalam bahasa Inggris dibaca …",o:["Half past six","Six past half","Seven o'clock","Half to seven"],b:0},

{t:"Bentuk lampau (Past Tense) dari kata 'Go' (pergi) adalah …",o:["Goes","Gone","Went","Going"],b:2},

{t:"Keterangan waktu (Time Signal) yang digunakan untuk masa lampau (Past Tense) adalah …",o:["Today (Hari ini)","Tomorrow (Besok)","Now (Sekarang)","Yesterday (Kemarin)"],b:3},

{t:"'My father's brother' (Saudara laki-laki ayah) disebut …",o:["Aunt (Bibi)","Uncle (Paman)","Grandfather (Kakek)","Cousin (Sepupu)"],b:1},

{t:"Ruangan di sekolah tempat kita membaca buku disebut …",o:["Canteen","Office","Library","Classroom"],b:2},

{t:"'Please, OPEN the door!'\nMaksud dari kalimat perintah tersebut adalah …",o:["Tutup pintu","Buka pintu","Kunci pintu","Ketuk pintu"],b:1},

{t:"Sifat dari seekor Kura-kura (Turtle) adalah …",o:["Fast (Cepat)","Slow (Lambat)","Fierce (Galak)","Flying (Terbang)"],b:1},

{t:"'How many fingers do you have?' (Berapa jumlah jari tanganmu?)",o:["Five","Ten","Two","One"],b:1},

{t:"Manakah kalimat yang BENAR untuk menyatakan hobi?",o:["I likes swimming","I am swim","I like swimming","I swimming"],b:2},

{t:"Jika hari ini adalah Monday (Senin), maka besok (Tomorrow) adalah …",o:["Sunday","Tuesday","Wednesday","Thursday"],b:1},

{t:"Terjemahkan ke Bahasa Inggris: 'Buku ini mahal.'",o:["This book is cheap","This book is expensive","This book is good","This book is bad"],b:1},

{t:"Benda yang biasa kita gunakan untuk menulis di papan tulis putih (whiteboard) adalah …",o:["Chalk (Kapur)","Pen (Pulpen)","Marker (Spidol)","Pencil (Pensil)"],b:2},

{t:"'Don't be LAZY!'\nKata 'Lazy' artinya …",o:["Rajin","Marah","Malas","Sedih"],b:2},

{t:"'Can you help me?' artinya …",o:["Bisakah kamu menolong saya?","Siapa namamu?","Di mana rumahmu?","Jam berapa sekarang?"],b:0},

{t:"'Giraffe is the tallest animal.'\nArti kata 'Tallest' adalah …",o:["Lebih tinggi","Paling tinggi","Sangat tinggi","Tinggi"],b:1},

{t:"Untuk menanyakan kabar seseorang, kita mengucapkan …",o:["Good bye","How are you?","I am fine","Nice to meet you"],b:1},

{t:"Anggota tubuh yang digunakan untuk melihat (See) adalah …",o:["Ears (Telinga)","Nose (Hidung)","Eyes (Mata)","Mouth (Mulut)"],b:2},

{t:"'We ... students.' (Kami adalah siswa).\nTo be yang tepat adalah …",o:["Am","Is","Are","Was"],b:2},

{t:"Warna bendera Indonesia adalah …",o:["Red and Blue","White and Red","Red and White","Blue and White"],b:2},

{t:"Bahasa Inggris dari 'Sarapan pagi' adalah …",o:["Dinner","Lunch","Breakfast","Supper"],b:2},

{t:"'Where do you live?' menanyakan tentang …",o:["Nama","Umur","Hobi","Tempat tinggal"],b:3},

{t:"Manakah di bawah ini yang merupakan hewan buas (Wild Animal)?",o:["Cat (Kucing)","Tiger (Harimau)","Chicken (Ayam)","Cow (Sapi)"],b:1},
],

IPS:[
{t:"Ibukota Indonesia adalah …",o:["Surabaya","Bandung","Jakarta","Medan"],b:2},
{t:"Gunung tertinggi di Indonesia adalah …",o:["Semeru","Kerinci","Jaya Wijaya","Slamet"],b:2},
{t:"Sungai terpanjang di Indonesia adalah …",o:["Kapuas","Mahakam","Brantas","Bengawan"],b:0},
{t:"Mata uang Indonesia adalah …",o:["Baht","Rupiah","Ringgit","Dolar"],b:1},
{t:"Benua terbesar di dunia adalah …",o:["Australia","Amerika","Eropa","Asia"],b:3},
{t:"Suatu kondisi dimana kebutuhan manusia tidak terbatas sedangkan alat pemuas kebutuhan jumlahnya terbatas disebut …",o:["Kemakmuran","Kelangkaan","Kesejahteraan","Kebutuhan"],b:1},

{t:"Kebutuhan yang harus dipenuhi untuk menjaga kelangsungan hidup manusia (seperti makan, minum, pakaian) disebut kebutuhan …",o:["Sekunder","Tersier","Primer","Jasmani"],b:2},

{t:"Mobil mewah, perhiasan berlian, dan liburan ke luar negeri termasuk dalam contoh kebutuhan …",o:["Primer","Sekunder","Tersier","Sekarang"],b:2},

{t:"Obat bagi orang yang sedang sakit adalah contoh kebutuhan berdasarkan waktu, yaitu kebutuhan …",o:["Masa depan","Sekarang","Jasmani","Rohani"],b:1},

{t:"Segala kegiatan manusia yang bertujuan untuk memenuhi kebutuhan hidup disebut …",o:["Tindakan ekonomi","Motif ekonomi","Prinsip ekonomi","Hukum ekonomi"],b:0},

{t:"Alasan atau dorongan yang membuat seseorang melakukan tindakan ekonomi disebut …",o:["Prinsip ekonomi","Hukum ekonomi","Motif ekonomi","Politik ekonomi"],b:2},

{t:"'Dengan pengorbanan sekecil-kecilnya untuk mendapatkan hasil yang maksimal' adalah bunyi dari …",o:["Motif ekonomi","Hukum ekonomi","Prinsip ekonomi","Tindakan ekonomi"],b:2},

{t:"Kegiatan menghasilkan barang atau jasa atau menambah nilai guna suatu barang disebut …",o:["Konsumsi","Distribusi","Produksi","Seleksi"],b:2},

{t:"Orang atau lembaga yang melakukan kegiatan menyalurkan barang dari produsen ke konsumen disebut …",o:["Produsen","Distributor","Konsumen","Kreator"],b:1},

{t:"Berikut ini yang merupakan contoh kegiatan konsumsi adalah …",o:["Petani menanam padi","Pabrik membuat sepatu","Sopir mengantar barang","Adik memakan roti"],b:3},

{t:"Tiga faktor utama produksi adalah …",o:["Alam, Tenaga Kerja, Modal","Uang, Bank, Pasar","Pabrik, Toko, Jalan","Mobil, Sopir, Bensin"],b:0},

{t:"Pasar yang memperjualbelikan barang yang tidak terlihat fisiknya secara langsung (contoh: Toko Online) disebut pasar …",o:["Konkret","Abstrak","Harian","Mingguan"],b:1},

{t:"Hukum permintaan menyatakan: Jika harga suatu barang NAIK, maka jumlah barang yang diminta akan …",o:["Naik","Tetap","Turun","Stabil"],b:2},

{t:"Kemampuan seseorang untuk melahirkan sesuatu yang baru (inovasi) disebut …",o:["Kreativitas","Efektivitas","Efisiensi","Konsumtif"],b:0},

{t:"Seseorang yang berani mengambil risiko untuk membuka usaha baru dan mengelola sumber daya disebut …",o:["Karyawan","Wirausaha","Buruh","Manajer"],b:1},

{t:"Masuknya pengaruh Hindu-Buddha ke Indonesia membawa perubahan dalam sistem pemerintahan, yaitu dikenalnya sistem …",o:["Kesukuan","Kerajaan","Republik","Demokrasi"],b:1},

{t:"Prasasti Yupa yang ditemukan di Kalimantan Timur merupakan bukti peninggalan kerajaan tertua di Indonesia, yaitu Kerajaan …",o:["Tarumanegara","Sriwijaya","Kutai","Majapahit"],b:2},

{t:"Kerajaan Hindu di Jawa Barat yang terkenal dengan prasasti telapak kaki (Ciaruteun) rajanya adalah …",o:["Kutai","Tarumanegara","Kediri","Singasari"],b:1},

{t:"Kerajaan Buddha terbesar di Indonesia yang menjadi pusat pendidikan agama Buddha dan maritim adalah …",o:["Majapahit","Sriwijaya","Mataram Kuno","Kalingga"],b:1},

{t:"Candi Borobudur adalah peninggalan wangsa Syailendra yang bercorak agama …",o:["Hindu","Buddha","Islam","Konghucu"],b:1},

{t:"Patih Gajah Mada dari Kerajaan Majapahit terkenal dengan sumpahnya untuk mempersatukan Nusantara, yaitu …",o:["Sumpah Pemuda","Sumpah Palapa","Sumpah Jabatan","Sumpah Setia"],b:1},

{t:"Teori masuknya Islam ke Indonesia yang dibawa oleh pedagang dari India (Gujarat) disebut teori …",o:["Mekah","Persia","Gujarat","China"],b:2},

{t:"Kerajaan Islam pertama di Indonesia (wilayah Sumatera) adalah …",o:["Samudera Pasai","Aceh Darussalam","Demak","Malaka"],b:0},

{t:"Kerajaan Islam pertama di Pulau Jawa adalah …",o:["Banten","Mataram Islam","Demak","Cirebon"],b:2},

{t:"Wali Songo menggunakan media kesenian wayang kulit untuk menyebarkan agama Islam. Cara ini dilakukan oleh …",o:["Sunan Ampel","Sunan Giri","Sunan Kalijaga","Sunan Gresik"],b:2},

{t:"Sultan Hasanuddin adalah raja dari Kerajaan Gowa-Tallo (Makassar) yang dijuluki Belanda sebagai …",o:["Pangeran Sabrang Lor","Ayam Jantan dari Timur","Macan Asia","Singa Padang Pasir"],b:1},

{t:"Salah satu bentuk akulturasi budaya Hindu dan Islam dalam bentuk bangunan adalah …",o:["Candi Prambanan","Menara Masjid Kudus","Patung Buddha","Stupa"],b:1},

{t:"Perayaan Sekaten di Yogyakarta dan Surakarta merupakan tradisi peninggalan kerajaan Islam untuk memperingati …",o:["Tahun Baru Hijriah","Maulid Nabi Muhammad SAW","Hari Raya Idul Fitri","Israk Mikraj"],b:1},

{t:"Berikut ini dampak positif IPTEK dalam kegiatan ekonomi, KECUALI …",o:["Mempercepat distribusi barang","Mempermudah promosi produk","Menambah lapangan kerja","Meningkatkan sifat konsumtif/boros"],b:3},

{t:"Harga kesepakatan antara penjual dan pembeli dalam proses tawar-menawar disebut …",o:["Harga Eceran","Harga Grosir","Harga Keseimbangan (Pasar)","Harga Pabrik"],b:2},
],

IPA:[
{t:"Air berubah menjadi uap disebut …",o:["mencair","menguap","membeku","mengendap"],b:1},
{t:"Matahari termasuk …",o:["planet","bintang","komet","asteroid"],b:1},
{t:"Bagian tumbuhan tempat fotosintesis adalah …",o:["akar","batang","daun","bunga"],b:2},
{t:"Sumber energi utama bumi adalah …",o:["angin","Matahari","air","listrik"],b:1},
{t:"Hewan pemakan tumbuhan disebut …",o:["karnivora","omnivora","herbivora","insek"],b:2},
{t:"Alat untuk mengukur suhu adalah …",o:["Termometer","Higrometer","Barometer","Anemometer"],b:0},
  {t:"Suhu 0°C sama dengan … dalam skala Kelvin.",o:["100 K","273 K","273°C","0 K"],b:1},
  {t:"Perubahan wujud dari padat menjadi cair disebut …",o:["Membeku","Menguap","Mencair","Menyublim"],b:2},
  {t:"Perpindahan panas melalui rambatan zat padat disebut …",o:["Konduksi","Konveksi","Radiasi","Evaporasi"],b:0},
  {t:"Contoh perpindahan panas secara konveksi adalah …",o:["Sendok logam panas saat diaduk","Panas matahari sampai ke bumi","Air mendidih bergerak naik turun","Api menyala membakar kayu"],b:2},
  {t:"Energi yang tersimpan dalam makanan disebut …",o:["Energi bunyi","Energi kimia","Energi listrik","Energi cahaya"],b:1},
  {t:"Makhluk hidup yang dapat membuat makanannya sendiri disebut …",o:["Konsumen","Herbivora","Autotrof","Omnivora"],b:2},
  {t:"Tumbuhan memperoleh energi dari …",o:["Air","Tanah","Cahaya matahari","Angin"],b:2},
  {t:"Rantai makanan selalu dimulai dari …",o:["Karnivor","Herbivor","Pengurai","Produsen"],b:3},
  {t:"Hubungan saling memengaruhi antara makhluk hidup dan lingkungannya disebut …",o:["Ekosistem","Populasi","Habitat","Komunitas"],b:0},
  {t:"Kumpulan individu sejenis yang hidup pada satu tempat dan waktu tertentu disebut …",o:["Komunitas","Ekosistem","Populasi","Habitat"],b:2},
  {t:"Peran hewan pemakan tumbuhan dalam ekosistem adalah …",o:["Produsen","Konsumen tingkat I","Konsumen tingkat II","Pengurai"],b:1},
  {t:"Pencemaran udara banyak disebabkan oleh …",o:["Penggunaan pupuk","Asap kendaraan","Sampah organik","Air sungai"],b:1},
  {t:"Contoh energi alternatif ramah lingkungan adalah …",o:["Bensin","Batu bara","Energi surya","Minyak bumi"],b:2},
  {t:"Organisme yang menguraikan sisa makhluk hidup adalah …",o:["Karnivor","Pengurai","Produsen","Omnivor"],b:1},
  {t:"Proses fotosintesis menghasilkan …",o:["Oksigen","Karbon monoksida","Nitrogen","Metana"],b:0},
  {t:"Bagian tumbuhan yang berfungsi menyerap air adalah …",o:["Daun","Akar","Batang","Bunga"],b:1},
  {t:"Dalam ekosistem sungai, ikan merupakan contoh …",o:["Produsen","Konsumen","Pengurai","Kompos"],b:1},
  {t:"Energi panas matahari sampai ke bumi melalui proses …",o:["Konduksi","Evaporasi","Radiasi","Konveksi"],b:2},
  {t:"Hewan yang memakan tumbuhan dan hewan disebut …",o:["Karnivora","Omnivora","Herbivora","Detritivor"],b:1},
  {t:"Perubahan wujud dari cair menjadi gas disebut …",o:["Menguap","Menyublim","Mengembun","Membeku"],b:0},
  {t:"Contoh peristiwa mengembun adalah …",o:["Es mencair","Uap air menjadi titik air","Air mendidih","Kap camphor habis"],b:1},
  {t:"Lapisan ozon berfungsi untuk …",o:["Menahan panas bumi","Melindungi dari sinar UV","Menyerap CO2","Menghasilkan oksigen"],b:1},
  {t:"Pemanasan global menyebabkan …",o:["Bumi semakin dingin","Es kutub mencair","Hujan asam berkurang","Udara makin bersih"],b:1},
  {t:"Bagian sel yang berfungsi sebagai pusat pengendali adalah …",o:["Mitokondria","Nukleus","Sitoplasma","Dinding sel"],b:1},
  {t:"Makhluk hidup bernapas menggunakan paru-paru adalah …",o:["Ikan","Cacing","Katak dewasa","Belalang"],b:2},
  {t:"Contoh interaksi kompetisi adalah …",o:["Singa memburu rusa","Pohon saling berebut cahaya","Kupu-kupu mengisap nektar","Burung makan ulat"],b:1},
  {t:"Air tanah merupakan contoh sumber daya alam …",o:["Tidak dapat diperbarui","Dapat diperbarui","Langka","Buatan"],b:1},
  {t:"Alat untuk mengukur massa suatu benda adalah …",o:["Termometer","Mistar","Neraca","Barometer"],b:2},
  {t:"Bagian ekosistem yang terdiri dari makhluk hidup saja disebut …",o:["Komponen biotik","Komponen abiotik","Lingkungan fisik","Zat organik"],b:0},
],

PRAKARYA:[
{t:"Contoh bahan alam adalah …",o:["plastik","kaca","kayu","besi"],b:2},
{t:"Menjahit menggunakan alat …",o:["obeng","palu","gunting","jarum"],b:3},
{t:"Kerajinan tanah liat disebut …",o:["tembikar","patung kayu","anyaman","batik"],b:0},
{t:"Bahan logam contohnya …",o:["besi","kertas","bambu","daun"],b:0},
{t:"Anyaman berasal dari …",o:["kain","daun","kaca","plastik"],b:1},
{ "t": "Kerajinan yang dibuat berdasarkan potensi daerah disebut kerajinan …", "o": ["Modern", "Tradisional", "Daerah", "Digital"], "b": 1 },
  { "t": "Bahan utama kerajinan serat alam umumnya berasal dari …", "o": ["Plastik", "Tumbuhan", "Logam", "Karet"], "b": 1 },
  { "t": "Salah satu contoh serat tumbuhan adalah …", "o": ["Wol", "Sutera", "Rami", "Nilon"], "b": 2 },
  { "t": "Sifat serat alam yang tidak dimiliki serat buatan adalah …", "o": ["Mudah terbakar", "Ramah lingkungan", "Tahan air", "Elastis"], "b": 1 },
  { "t": "Proses pemintalan serat menjadi benang disebut …", "o": ["Menenun", "Memintal", "Menganyam", "Mengecat"], "b": 1 },

  { "t": "Kerajinan anyaman umumnya dibuat menggunakan teknik …", "o": ["Pukul", "Susun silang", "Tempel", "Cetak"], "b": 1 },
  { "t": "Bahan seperti rotan, bambu, dan pandan dapat dibuat menjadi …", "o": ["Keramik", "Anyaman", "Logam", "Kaca"], "b": 1 },
  { "t": "Produk kerajinan dari tanah liat disebut …", "o": ["Keramik", "Tenun", "Rajut", "Anyaman"], "b": 0 },
  { "t": "Proses membentuk tanah liat menggunakan roda putar disebut teknik …", "o": ["Putar", "Pilinan", "Lilit", "Pijit"], "b": 0 },
  { "t": "Kerajinan dari limbah anorganik bertujuan untuk …", "o": ["Menambah sampah", "Mengurangi sampah", "Membuang limbah", "Mencemari lingkungan"], "b": 1 },

  { "t": "Yang termasuk limbah organik adalah …", "o": ["Botol plastik", "Daun kering", "Kaleng bekas", "Kaca"], "b": 1 },
  { "t": "Botol plastik dapat diolah menjadi kerajinan berupa …", "o": ["Pigura kayu", "Pot bunga", "Rajutan wol", "Gerabah"], "b": 1 },
  { "t": "Kaleng bekas dapat dimanfaatkan untuk membuat …", "o": ["Tas kain", "Tempat pensil", "Keranjang rotan", "Topeng kertas"], "b": 1 },
  { "t": "Teknik menyusun potongan bahan limbah menjadi pola tertentu disebut …", "o": ["Kolase", "Ukiran", "Mordanting", "Pencetakan"], "b": 0 },
  { "t": "Kerajinan yang mempertimbangkan fungsi dan keindahan disebut …", "o": ["Estetika", "Fungsional", "Dekoratif", "Kombinasi"], "b": 3 },

  { "t": "Salah satu ciri produk kerajinan yang baik adalah …", "o": ["Tidak rapi", "Bentuk tidak jelas", "Finishing halus", "Cepat rusak"], "b": 2 },
  { "t": "Kemasan produk kerajinan bertujuan untuk …", "o": ["Merusak produk", "Melindungi produk", "Meningkatkan limbah", "Mengurangi nilai jual"], "b": 1 },
  { "t": "Contoh produk kerajinan untuk hiasan adalah …", "o": ["Vas bunga", "Sapu ijuk", "Tas rotan", "Keranjang baju"], "b": 0 },
  { "t": "Produk kerajinan yang digunakan sehari-hari disebut …", "o": ["Hias", "Fungsional", "Mewah", "Sekali pakai"], "b": 1 },
  { "t": "Kerajinan yang dibuat dari sabut kelapa biasanya berupa …", "o": ["Boneka plastik", "Keset", "Kalung emas", "Toples"], "b": 1 },

  { "t": "Tanah liat yang siap dipakai harus melalui proses …", "o": ["Penyaringan", "Pembakaran", "Pembersihan", "Pewarnaan"], "b": 1 },
  { "t": "Teknik tempel dalam kerajinan disebut juga …", "o": ["Makrame", "Mozaik", "Butsir", "Pilinan"], "b": 1 },
  { "t": "Gunakan cat akrilik untuk mewarnai kerajinan yang berbahan …", "o": ["Kain", "Tanah liat", "Logam", "Kaca"], "b": 1 },
  { "t": "Proses akhir sebelum produk kerajinan dijual disebut …", "o": ["Finishing", "Treatment", "Pewarnaan", "Perancangan"], "b": 0 },
  { "t": "Limbah kertas dapat diolah menjadi …", "o": ["Gerabah", "Batu alam", "Bubur kertas", "Logam cair"], "b": 2 },

  { "t": "Bahan lunak buatan yang sering digunakan untuk kerajinan adalah …", "o": ["Clay", "Kayu jati", "Bambu", "Besi"], "b": 0 },
  { "t": "Kerajinan dengan teknik meronce biasanya menggunakan bahan …", "o": ["Batu bata", "Manik-manik", "Bambu", "Kain"], "b": 1 },
  { "t": "Produk kerajinan harus memiliki nilai …", "o": ["Ekonomi", "Kebetulan", "Kesalahan", "Kerusakan"], "b": 0 },
  { "t": "Salah satu tujuan pembuatan kerajinan adalah …", "o": ["Meningkatkan limbah", "Mengembangkan kreativitas", "Merusak lingkungan", "Membuat konflik"], "b": 1 },
  { "t": "Produk kerajinan daerah biasanya terinspirasi dari …", "o": ["Teknologi modern", "Budaya lokal", "Iklim luar negeri", "Gadget"], "b": 1 },
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
