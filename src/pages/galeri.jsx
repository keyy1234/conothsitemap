import { useState } from "react";
import foto1  from "../assets/image1.png";  import foto2  from "../assets/image2.png";
import foto3  from "../assets/image3.png";  import foto4  from "../assets/image4.png";
import foto5  from "../assets/image5.png";  import foto6  from "../assets/image6.png";
import foto7  from "../assets/image7.png";  import foto8  from "../assets/image8.png";
import foto9  from "../assets/image9.png";  import foto10 from "../assets/image10.png";
import foto11 from "../assets/image11.png"; import foto12 from "../assets/image12.png";
import foto13 from "../assets/image13.png"; import foto14 from "../assets/image14.png";

const FOTO = [foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8,foto9,foto10,foto11,foto12,foto13,foto14];

export default function Galeri() {
  const [preview, setPreview] = useState(null);

  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif" }} className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative py-16 text-center text-white overflow-hidden"
        style={{ background:"linear-gradient(160deg,#0a1628 0%,#122244 60%,#1a2e5a 100%)" }}>
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
        {/* blue glow */}
        <div className="absolute inset-0 opacity-20"
          style={{ background:"radial-gradient(ellipse 80% 60% at 50% 0%,#3b5bdb 0%,transparent 70%)" }} />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">🖼️ Dokumentasi</p>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,5vw,3rem)" }}
            className="font-bold mb-2">Galeri Kegiatan</h1>
          <p className="text-white/50 text-sm">Dokumentasi kegiatan masyarakat Desa Tumani</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {FOTO.map((src, i) => (
            <div key={i} onClick={() => setPreview(src)}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
              style={{ "--hover-shadow":"0 8px 32px rgba(26,46,90,0.18)" }}>
              <img src={src} alt={`Foto ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {preview && (
        <div onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background:"rgba(10,22,40,0.92)" }}>
          <img src={preview} alt="preview"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
            style={{ border:"1.5px solid rgba(255,255,255,0.08)" }} />
          <button onClick={() => setPreview(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full text-white text-xl flex items-center justify-center transition-colors"
            style={{ background:"rgba(255,255,255,0.12)" }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.12)"}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}