"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Artikels",
      [
        {
          judul: "Pola Hidup Sehat Dengan Menerapkan Pedoman Gizi Seimbang",
          tanggal: "2022-12-12",
          image: "https://doktersehat.com/wp-content/uploads/2017/07/doktersehat-promkes-depkes-Makanan-Sehat-Gizi-Seimbang.jpg",
          konten: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Gizi seimbang adalah susunan asupan makanan sehari-hari berdasarkan jenis dan jumlah zat gizinya disesuaikan dengan kebutuhan harian tubuh. Kebutuhan gizi dini dipenuhi dengan memperhatikan prinsip keanekaragaman pangan, aktivitas fisik, perilaku hidup bersih, dan mempertahankan berat badan normal. Hal ini dilakukan untuk mencegah gangguan gizi.</span></span></span></span></span></span></p>

          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Gizi seimbang yaitu apabila asupan makanan cukup secara kuantitas, kualitas, dan mengandung berbagai zat gizi yang dibutuhkan tubuh. Tujuannya agar kesehatan tubuh terjaga, pertumbuhan sempurna (pada anak-anak), zat gizi tersimpan, dan aktivitas dan fungsi kehidupan sehari-hari berjalan optimal.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Menurut Kementerian Kesehatan Republik Indonesia, ada sepuluh pedoman gizi seimbang yang perlu dipahami, yaitu:</span></span></span></span></span></span></p>
          
          <ul>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Biasakan mengonsumsi aneka ragam makanan pokok.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Batasi konsumsi panganan manis, asin, dan berlemak.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Lakukan aktivitas fisik yang cukup dan pertahankan berat badan ideal.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Biasakan mengonsumsi lauk pauk yang mengandung protein tinggi.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Cuci tangan pakai sabun dengan air mengalir.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Biasakan sarapan pagi.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Biasakan minum air putih yang cukup dan aman.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Banyak makan buah dan sayur.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Biasakan membaca label pada kemasan pangan.</span></span></span></span></span></span></li>
            <li><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Syukuri dan nikmati aneka ragam makanan.</span></span></span></li>
          </ul>
          `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Kalori Yang Dibutuhkan Saat Diet Perhari",
          tanggal: "2023-06-01",
          image: "https://blog.cove.id/content/images/2023/02/apa-itu-defisit-kalori.webp",
          konten: `<p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Kalori adalah ukuran atau satuan energi yang bersumber dari makanan atau minuman. Ketika membeli makanan atau minuman, biasanya dalam kemasannya tertera berapa jumlah kalori yang terkandung per sajian.</span></span></span></span></p>

          <p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Tubuh kita memerlukan kalori agar punya cukup energi untuk bergerak, berkembang, bekerja, berpikir, dan bermain. Kalori juga membuat tubuh tetap hangat. Sistem pencernaan dan peredaran darah manusia juga membutuhkan energi dari kalori untuk dapat berfungsi sebagaimana mestinya.</span></span></span></span></p>
          
          <p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Jumlah kalori yang dibutuhkan setiap orang berbeda-beda, tergantung beragam faktor. Misalnya jenis kelamin, usia, tinggi badan, dan seberapa aktif kegiatan sehari-hari. Makin aktif seseorang, makin besar kebutuhan kalorinya. Beberapa jenis makanan cenderung mengandung banyak kalori, seperti makanan yang digoreng, berlemak, atau sudah melalui pemrosesan. Tapi ada pula buah dan sayuran yang kaya akan kalori.</span></span></span></span></p>
          
          <p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Saat beraktivitas, tubuh akan membakar kalori sebagai energi. Bila masih ada tersisa, kalori itu akan tersimpan menjadi lemak di dalam tubuh. Karena itulah orang yang mengonsumsi kalori lebih dari kebutuhan hariannya cenderung memiliki berat badan berlebih atau tidak sehat.</span></span></span></span></p>
          
          <h2><strong><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Kebutuhan Kalori per Hari untuk Diet</span></span></span></span></strong></h2>
          
          <p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Salah satu cara efektif untuk menurunkan berat badan lewat program diet adalah dengan membatasi konsumsi kalori harian. Konsumsi mesti disesuaikan dengan seberapa banyak kalori yang dibutuhkan saat diet per hari. Menurut rekomendasi panduan diet dari US Department of Agriculture, berikut ini kebutuhan kalori harian untuk wanita dan pria berdasarkan usia.</span></span></span></span></p>
          
          <h3><strong><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">WANITA </span></span></span></span></span></span></strong></h3>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 19-30 Tahun Kebutuhan Kalori Harian 2.000-2.400 Kalori.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 21-59 Tahun Kebutuhan Kalori Harian 1.800-2.200 Kalori.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 60+ Tahun Kebutuhan Kalori Harian 1.600-2.000 Kalori.</span></span></span></span></span></span></p>
          
          <h3><strong><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">PRIA</span></span></span></span></span></span></strong></h3>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 19-30 Tahun Kebutuhan Kalori Harian 2.400-3.000 Kalori.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 21-59 Tahun Kebutuhan Kalori Harian 2.200-3.000 Kalori.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333">Usia 60+ Tahun Kebutuhan Kalori Harian 2.000-2.600 Kalori.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#333333"><span style="font-size:12.0pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#212529">Angka kebutuhan kalori di atas hanya bersifat kisaran. Harus ditekankan bahwa angka pasti kalori yang dibutuhkan saat diet pada setiap orang berbeda-beda. Selain itu, bagi wanita hamil dan menyusui, panduan kebutuhan kalori harian tersebut tidak berlaku karena ada peningkatan kebutuhan kalori yang signifikan pada masa kehamilan dan menyusui.</span></span></span></span></span></span></span></p>
          `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Cara Menghitung Kebutuhan Kalori",
          tanggal: "2023-03-14",
          image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594730115/attached_image/begini-cara-menghitung-kebutuhan-kalori-per-hari.jpg",
          konten: `<p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Pada dasarnya, kebutuhan kalori per hari bagi setiap orang berbeda-beda, tergantung dari berat dan tinggi badan, jenis kelamin, serta aktivitas fisik yang dilakukannya.</span></span></span></span></p>

          <p><span style="font-size:12pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Maka dari itu, Anda sangat disarankan untuk mengetahui cara menghitung kebutuhan kalori per hari. Nah solusinya, cobalah cara menghitung kebutuhan kalori per hari tubuh dengan memperhatikan BMR dan tingkat aktivitas sehari-hari Anda.</span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Salah satu cara menghitung kebutuhan kalori per hari sesuai BMR yaitu dengan menggunakan rumus Harris - Benedict, seperti :</span></span></span></span></span></span></p>
          
          <ul>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Untuk laki-laki: (88,4 + 13,4 x berat dalam kilogram) + (4,8 x tinggi dalam sentimeter) - (5,68 x usia dalam tahun)</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Untuk wanita: (447,6 + 9,25 x berat dalam kilogram) + (3,10 x tinggi dalam sentimeter) - (4,33 x usia dalam tahun)</span></span></span></span></span></span></li>
          </ul>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Kemudian, seperti yang telah disinggung sebelumnya, cara menghitung kebutuhan kalori tubuh secara utuh juga dipengaruhi oleh tingkat aktivitas setiap orang.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Ini karena semakin tinggi aktivitasnya, maka akan semakin meningkat pula kebutuhan kalori harian.&nbsp;</span></span></span></span></span></span><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Sebaliknya, jika kurang aktif, maka kebutuhan kalori hariannya pun juga akan berkurang.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Oleh karena itu, setelah mengetahui angka BMR Anda, maka langkah selanjutnya adalah menentukan tingkat aktivitas harian dan menyesuaikannya dengan hasil BMR.</span></span></span></span></span></span></p>
          
          <h3><strong><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Selengkapnya, cara menghitung kebutuhan kalori tubuh yaitu :</span></span></span></span></span></span></strong></h3>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Perlu diingat, Anda tetap perlu melakukan pemeriksaan ke ahli gizi atau dokter spesialis gizi untuk mengetahui BMR yang benar-benar akurat.</span></span></span></span></span></span></p>
          
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Simulasi cara menghitung kebutuhan kalori wanita dewasa ini adalah salah satu contoh atau estimasi yang dapat Anda jadikan sebagai gambaran mengenai kebutuhan kalori harian.</span></span></span></span></span></span></p>
          
          <ul>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Kurang aktif</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">. Jika Anda sangat jarang berolahraga atau tidak sama sekali, maka BMR x 1,2.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Aktif ringan</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">. Jika Anda berolahraga ringan selama satu hingga tiga hari dalam seminggu, maka BMR x 1,375.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Cukup aktif</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">. Jika Anda berolahraga dengan intensitas sedang sekitar tiga hingga lima hari dalam seminggu, maka BMR x 1,55.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#444444"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Sangat aktif.</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&nbsp;Jika Anda berolahraga dengan intensitas berat selama enam hingga tujuh hari dalam seminggu, maka BMR x 1,725.</span></span></span></span></span></span></li>
            <li><span style="font-size:11pt"><span style="background-color:white"><span style="color:#333333"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Ekstra aktif.</span></span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">&nbsp;Jika Anda berolahraga dengan intensitas sangat berat sekitar enam hingga tujuh hari dalam seminggu atau melakukan pekerjaan fisik yang ekstra dan membutuhkan stamina serta fisik kuat, maka BMR x 1,9</span></span></span></span></span></span></span>.</li>
          </ul>
          
          <p><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Perlu diingat, Anda tetap perlu melakukan pemeriksaan ke ahli gizi atau dokter spesialis gizi untuk mengetahui BMR yang benar-benar akurat.</span></span></span></p>
          
          <p><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#444444">Simulasi cara menghitung kebutuhan kalori wanita dewasa ini adalah salah satu contoh atau estimasi yang dapat Anda jadikan sebagai gambaran mengenai kebutuhan kalori harian.</span></span></span></p>
          `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Bahan Makanan Rendah Kalori Yang Cocok Untuk Diet",
          tanggal: "2023-03-14",
          image: "https://storage.googleapis.com/finansialku_media/wordpress_media/2021/11/0a150186-20-makanan-diet-rendah-kalori-untuk-dukung-olahraga-kamu-01-finansialku.jpg",
          konten: `<ol>
          <li>Telur</li>
          </ol>
          
          <p style="margin-left:40px">Menurut Fatsecret, kalori sebutir telur adalah sekitar 74 kalori, dengan lemak 4,97 gram, karbohidrat 0,38 gram, dan protein 6,29 gram.</p>
          
          <ol start="2">
            <li>Apel</li>
          </ol>
          
          <p style="margin-left:40px">Satu porsi apel potong (125 gram) mengandung sekitar 57 kalori dan hampir 3 gram serat, sehingga baik untuk kesehatan usus. Apel juga kaya akan vitamin C.</p>
          
          <ol start="3">
            <li>Pepaya</li>
          </ol>
          
          <p style="margin-left:40px">Seperti apel, pepaya juga merupakan sumber vitamin C yang sangat baik. Seporsi pepaya potong (sekitar 100 gram) menyediakan hampir 70 persen dari kebutuhan vitamin C harian orang dewasa.</p>
          
          <ol start="4">
            <li>Brokoli</li>
          </ol>
          
          <p style="margin-left:40px">Tak hanya enak, brokoli juga dikatakan sebagai salah satu sayuran paling bernutrisi di dunia dan yang terpenting rendah kalori. Satu porsi brokoli (91 gram) hanya mengandung sekitar 31 kalori dan mengandung lebih dari 100 persen kebutuhan vitamin C harian rata-rata orang. Sayuran ini juga dikatakan dapat membantu melawan kanker.</p>
          
          <ol start="5">
            <li>Wortel</li>
          </ol>
          
          <p style="margin-left:40px">Wortel adalah sayuran yang sangat populer dan sering dianggap sebagai sayur yang membantu menjaga kesehatan mata kita. Hal itu bukan tanpa alasan karena wortel kaya akan beta-karoten yang dapat diubah menjadi vitamin A. Memang, mendapatkan vitamin A dalam jumlah yang cukup sangatlah penting untuk pengelihatan yang baik. Satu porsi wortel (128 gram) hanya mengandung sekitar 53 kalori, tetapi dapat mencukupi 400 persen kebutuhan harian vitamin A rata-rata orang.</p>
          
          <ol start="6">
            <li>Semangka</li>
          </ol>
          
          <p style="margin-left:40px">Semangka sangat kaya air sehingga menjadi buah yang dapat mengidrasi. Rasanya yang lezat membuat buah ini banyak digemari dan kerap diolah menjadi berbagai menu minuman. Semangka mengandung hampir semua jenis gizi dan tinggi akan vitamin C. Bagi orang-orang yang sedang diet, semangka juga dapat dijadikan alternatif camilan. Seporsi semangka yang dipotong dadu (52 gram) hanya mengandung sekitar 46 kalori.</p>
          
          <ol start="7">
            <li>Oatmeal</li>
          </ol>
          
          <p style="margin-left:40px">Oatmeal adalah makanan tinggi serat. Semangkuk oatmeal dapat menyediakan jumlah protein yang hampir sama dengan sebutir telur. Makanan ini juga bisa dijadikan alternatif sarapan sehat bagi orang-orang yang sedang diet. Menurut para peneliti dalam sebuah studi di Annals of Nutrition and Metabolism, mengonsumsi oatmeal saat sarapan bisa memberikan rasa kenyang lebih, mengurangi rasa lapar, dan berpotensi membuat kita mengonsumsi lebih sedikit kalori di waktu makan berikutnya dibandingkan menu sarapan seperti corn flakes tinggi gula. Meskipun, keduanya sebetulnya memiliki jumlah kalori yang hampir sama. Agar mendapatkan lebih banyak serat, kita bisa menambahkan buah beri atau biji chia di atas oatmeal. Tapi, pastikan untuk tidak menambahkan sirup atau gula, ya.</p>
          
          <ol start="8">
            <li>Ubi Jalar</li>
          </ol>
          
          <p style="margin-left:40px">Ubi jalar mengandugn sekitar 4 gram protein, memenuhi 25 persen kebutuhan serat harian, dan menyediakan 11 kali kebutuhan vitamin A harian. Tak hanya itu, ubi jalar juga bisa menjadi sumber karbohidrat rendah kalori. Menurut Fatsecret, ubi jalar rebus tanpa kulit mengandugn sekitar 115 kalori.</p>
          
          <ol start="9">
            <li>Alpukat</li>
          </ol>
          
          <p style="margin-left:40px">Alpukat mengandung lemak tak jenuh tunggal yang dapat meningkatkan metabolisme tubuh dan terbukti mengurangi rasa lapar. Sebuah studi di Nutrition Journal menemukan bahwa partisipan yang makan setengah porsi alpukat segar dan makan siang melaporkan keinginan makan di waktu-waktu lainnya menurun 40 persen. Alpukat juga sarat dengan lemak tak jenuh, yang diyakini mencegah penyimpanan lemak perut, serta mengandung serat yang mengenyangkan dan antioksidan pembunuh radikal bebas.</p>        
          `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Artikels", null, {});
  },
};
