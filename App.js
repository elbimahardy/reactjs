import './style.css';

const App = () => {

  const galeri = [
    { id: 1, src: "Galeri1.png", alt: "Galeri 1" },
    { id: 2, src: "Galeri2.png", alt: "Galeri 2" },
  ];

  const kontak = [
    { id: 1, nama: "Instagram", url: "https://www.instagram.com/hardybimaa/" },
    { id: 2, nama: "YouTube", url: "https://www.youtube.com/@ElbimaHardy" },
    { id: 3, nama: "WhatsApp", url: "https://wa.me/+6285163173275" },
  ];

  return (
    <div>
      <nav>
        <strong>Bima</strong>
        <a href="#Tentang">Tentang Saya</a>
        <a href="#Galeri">Galeri</a>
        <a href="#Kontak">Kontak</a>
      </nav>

      <hr />

      <div className="isi">
        <img src="me myself and i.jpg" alt="Foto Elbima" />
        <h1>Hajimemaste, watashi namaewa Elbima Dwiputra Hardy</h1>
        <p className="keterangan">Mahasiswa Pendidikan Ilmu Komputer</p>

        <h2 id="Tentang">Tentang Saya</h2>
        <p style={{ textAlign: "justify" }}>
          Saya merupakan Mahasiswa Pendidikan Ilmu Komputer Angkatan 2025
          yang saat ini sedang menempuh semester 3 di Universitas Pendidikan
          Indonesia, memiliki skill dalam bidang Komunikasi dan Teknologi,
          dan suka mengulik hal-hal yang berhubungan dengan data science.
        </p>

        <h2 id="Galeri">Galeri</h2>
        <div className="galeri">
          {galeri.map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} />
          ))}
        </div>

        <h2 id="Kontak">Kontak</h2>
        <hr />
        <div className="kontak">
          {kontak.map((item) => (
            <a key={item.id} href={item.url}>
              <i>{item.nama}</i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
