import { useState } from 'react';

// 1. Komponen Anak (Menerima data via props)
function KartuProduk(props) {
  // Setiap kartu memiliki state sendiri untuk menghitung jumlah like
  const [jumlahLike, setJumlahLike] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", width: "200px", textAlign: "center", background: "#f9f9f9" }}>
      <h3>{props.namaProduk}</h3>
      <p>Harga: {props.harga}</p>
      
      {/* Menampilkan state dari komponen ini */}
      <p>❤️ Suka: <strong>{jumlahLike}</strong></p>
      
      {/* Tombol untuk mengubah state */}
      <button 
        onClick={() => setJumlahLike(jumlahLike + 1)}
        style={{ padding: "8px 12px", cursor: "pointer", background: "#61dafb", border: "none", borderRadius: "4px" }}
      >
        Beri Like
      </button>
    </div>
  );
}

// 2. Komponen Utama (App)
function App() {
  // Array data produk
  const daftarProduk = [
    { id: 1, namaProduk: "Modul React Dasar", harga: "Rp 50.000" },
    { id: 2, namaProduk: "E-Book Frontend UI", harga: "Rp 75.000" },
    { id: 3, namaProduk: "Tutorial IoT ESP8266", harga: "Rp 100.000" },
    { id: 3, namaProduk: "Tutorial IoT ESP8266", harga: "Rp 100.000" },
    { id: 3, namaProduk: "Tutorial IoT ESP8266", harga: "Rp 100.000" },
    { id: 3, namaProduk: "Tutorial IoT ESP8266", harga: "Rp 100.000" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "sans-serif" }}>
      <h1>Katalog Produk Digital </h1>
      <p>Silakan berikan like pada produk favoritmu:</p>
      
      {/* Mapping array data dan mengirimkannya lewat props ke KartuProduk */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
        {daftarProduk.map((produk) => (
          <KartuProduk 
            key={produk.id} 
            namaProduk={produk.namaProduk} 
            harga={produk.harga} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;