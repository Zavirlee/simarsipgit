export const Tambah = () => {

    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3 ">
                <h3>A. Identitas</h3>
                <ul>
                    <li className="mb-3 row">
                        <label for="catalog" class="col-sm-2 col-form-label">Indek Katalog</label>
                        <div class="col-sm-9">
                            <select id="catalog" class="form-select" aria-label="Default select example">
                              <option selected>Pilih no indeks katalog</option>
                              <option value="1">1. Doktrin</option>
                              <option value="2">2. Organisasi dan Prosedur</option>
                              <option value="3">3. Perencanaan </option>
                              <option value="4">4. Sistem</option>
                              <option value="5">5. Inspeksi dan Pengawasan </option>
                              <option value="6">6. Intelejen dan Pengamanan</option>
                              <option value="7">7. Operasi Militer</option>
                              <option value="8">8. Personel SPRIN</option>
                              <option value="9">9. Materiil dan Logistik</option>
                              <option value="10">10. Komunikasi dan Elektronika</option>
                              <option value="11">11. Teritorial</option>
                              <option value="12">12. Pendidikan dan Latihan</option>
                              <option value="13">13. Hukum</option>
                              <option value="14">14. Penerangan</option>
                              <option value="15">15. Kesehatan</option>
                              <option value="16">16. Sejarah</option>
                              <option value="17">17. Administrasi Umum</option>
                              <option value="18">18. Keuangan</option>
                              <option value="19">19. Pembinaan Mental</option>
                              <option value="20">20. Pembinaan Jasmani</option>
                              <option value="21">21. Hubungan Internasional</option>
                              <option value="22">22. Navigasi dan Aeonautika</option>
                              <option value="23">23. Industri</option>
                              <option value="24">24. Psikologi</option>
                              <option value="25">25. Laporan</option>
                              <option value="26">26. Penelitian dan Pengembangan</option>
                              <option value="27">27. Survei dan Pemetaan</option>
                              <option value="28">28. Kumpulan SKEP, KEP KASAU</option>
                              <option value="29">29. CD/DVD</option>
                              <option value="30">30. kerjasama</option>
                              <option value="31">31. Kode Untuk Berkas no 2</option>
                            </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="serial_number" class="col-sm-2 col-form-label">No Buku</label>
                        <div class="col-sm-3 me-5">
                            <input type="text" className="form-control" id="serial_number" placeholder="masukkan no buku"/>
                        </div>
                        <label for="file_number" class="col-sm-2 col-form-label ms-4">No Berkas</label>
                        <div class="col-sm-3">
                            <input type="text" className="form-control" id="file_number " placeholder="masukkan no berkas"/>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="tittle" class="col-sm-2 col-form-label">Judul</label>
                        <div class="col-sm-9">
                            <input type="text" className="form-control" id="tittle" placeholder="masukkan judul"/>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="Release_date" class="col-sm-2 col-form-label">Tanggal Surat</label>
                        <div class="col-sm-3">
                            <input type="date" className="form-control" id="Release_date" placeholder="masukkan judul"/>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="condition_id" class="col-sm-2 col-form-label">Kondisi Arsip</label>
                        <div class="col-sm-9">
                        <select id="condition_id" class="form-select" aria-label="Default select example">
                          <option selected>Pilih Kondisi</option>
                          <option value="1">Baik</option>
                          <option value="2">Sedang</option>
                          <option value="3">Rusak</option>
                        </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="type" class="col-sm-2 col-form-label">Kondisi Arsip</label>
                        <div class="col-sm-9">
                        <select id="type" class="form-select" aria-label="Default select example">
                          <option selected>Pilih jenis arsip</option>
                          <option value="1">Berkas</option>
                          <option value="2">Buku</option>
                          <option value="3">Audio</option>
                          <option value="4">Visual</option>
                          <option value="5">Film/Video</option>
                          <option value="6">Kartografi</option>
                          <option value="7">Elektronik</option>
                        </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="class" class="col-sm-2 col-form-label">Kondisi Arsip</label>
                        <div class="col-sm-9">
                        <select id="class" class="form-select" aria-label="Default select example">
                          <option selected>Pilih jenis arsip</option>
                          <option value="1">Biasa</option>
                          <option value="2">Rahasia</option>
                          <option value="3">Sangat Rahasia</option>
                        </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="agency" class="col-sm-2 col-form-label">Asal Instansi</label>
                        <div class="col-sm-9">
                            <input type="text" className="form-control" id="agency" placeholder="Masukkan Instansi"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row bg-white m-3 rounded p-3 ">
                <h3>B. Lokasi</h3>
                <ul>
                    <li className="mb-3 row">
                        <label for="building" class="col-sm-2 col-form-label">Gedung</label>
                        <div class="col-sm-3 me-5">
                            <select id="Building" class="form-select" aria-label="Default select example">
                              <option selected>Pilih Gedung</option>
                              <option value="1">Gedung 1</option>
                            </select>
                        </div>
                        <label for="room" class="col-sm-2 col-form-label ms-4">Ruang</label>
                        <div class="col-sm-3">
                            <select id="room" class="form-select" aria-label="Default select example">
                              <option selected>Pilih Ruang</option>
                              <option value="1">Ruang 1</option>
                              <option value="2">Ruang 2</option>
                            </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="rollopack" class="col-sm-2 col-form-label">Roll O Pack</label>
                        <div class="col-sm-9">
                            <select id="rollopack" class="form-select" aria-label="Default select example">
                              <option selected>Pilih roll o pack</option>
                              <option value="1">R-1</option>
                              <option value="2">R-2</option>
                              <option value="3">R-3</option>
                              <option value="4">R-4</option>
                              <option value="5">R-5</option>
                              <option value="6">R-6</option>
                              <option value="7">R-7</option>
                              <option value="8">R-8</option>
                              <option value="9">R-9</option>
                              <option value="10">R-10</option>
                              <option value="11">R-11</option>
                              <option value="12">R-12</option>
                              <option value="13">R-13</option>
                              <option value="14">R-14</option>
                              <option value="15">R-15</option>
                              <option value="16">R-16</option>
                              <option value="17">R-17</option>
                              <option value="18">R-18</option>
                              <option value="19">R-19</option>
                              <option value="20">R-20</option>
                              <option value="21">R-21</option>
                              <option value="22">R-22</option>
                              <option value="23">R-23</option>
                              <option value="24">R-24</option>
                              <option value="25">R-25</option>
                              <option value="26">R-26</option>
                              <option value="27">R-27</option>
                              <option value="28">R-28</option>
                              <option value="29">R-29</option>
                              <option value="30">R-30</option>
                              <option value="31">R-31</option>
                            </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="cabinet" class="col-sm-2 col-form-label">Lemari</label>
                        <div class="col-sm-9">
                        <select id="cabinet" class="form-select" aria-label="Default select example">
                          <option selected>Pilih Lemari</option>
                          <option value="1">L1</option>
                          <option value="2">L2</option>
                          <option value="3">L3</option>
                          <option value="4">L4</option>
                          <option value="4">L5</option>
                        </select>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="rack" class="col-sm-2 col-form-label">Rak</label>
                        <div class="col-sm-9">
                            <input type="text" className="form-control" id="rack" placeholder="Masukkan Rak"/>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="box" class="col-sm-2 col-form-label">Box</label>
                        <div class="col-sm-9">
                            <input type="text" className="form-control" id="box" placeholder="Masukkan Box"/>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="scan" class="col-sm-2 col-form-label">File Scan</label>
                        <div class="col-sm-9">
                            <input type="file" className="form-control" id="scan" placeholder="Pilih File"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row d-flex flex-column justify-content-between align-items-end">
                <input class="col-md-1 me-5 mt-2 mb-2 btn btn-primary" type="submit" value="Submit"/>
            </div>
        </div>
    )
}