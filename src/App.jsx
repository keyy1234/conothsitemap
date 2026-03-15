import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

import Beranda from "./pages/beranda";
import Sejarah from "./pages/sejarah";
import Wilayah from "./pages/wilayah";
import RiwayatJabatan from "./pages/riwayat-jabatan";
import Galeri from "./pages/galeri"
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/wilayah" element={<Wilayah />} />
            <Route path="/riwayat" element={<RiwayatJabatan />} />
            <Route path="/galeri" element={<Galeri />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}