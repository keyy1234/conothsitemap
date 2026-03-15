export default function Footer({ setPage }) {
  const nav = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NAV = [
    { id:"beranda",  label:"Beranda"             },
    { id:"sejarah",  label:"Sejarah Desa"         },
    { id:"wilayah",  label:"Wilayah & Demografi"  },
    { id:"riwayat",  label:"Riwayat Jabatan"      },
    { id:"galeri",   label:"Galeri"               },
  ];

  return (
    <footer style={{ background:"linear-gradient(160deg,#0f2044 0%,#1a3a6e 100%)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>

      {/* dot pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Brand ── */}
          <div>
            <button onClick={() => nav("beranda")} className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#c9973a,#a07530)" }}>
                🏡
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-base leading-tight"
                  style={{ fontFamily:"'Playfair Display',Georgia,serif" }}>
                  Desa Tumani
                </p>
                <p className="text-xs mt-0.5" style={{ color:"rgba(255,255,255,0.55)" }}>
                  Kec. Maesaan · Kab. Minahasa Selatan
                </p>
              </div>
            </button>
            <p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              Website resmi pemerintah Desa Tumani, Sulawesi Utara. Melayani masyarakat dengan sepenuh hati.
            </p>

            {/* sosmed */}
            <div className="flex gap-2 mt-5">
              {["📘","📸","▶️"].map(ic => (
                <div key={ic}
                  className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ background:"rgba(255,255,255,0.10)", border:"1px solid rgba(255,255,255,0.12)" }}>
                  <span className="text-base">{ic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigasi ── */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.18em] mb-5"
              style={{ color:"#c9973a" }}>
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {NAV.map(item => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)}
                    className="text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    style={{ color:"rgba(255,255,255,0.55)" }}
                    onMouseOver={e => e.currentTarget.style.color="#ffffff"}
                    onMouseOut={e => e.currentTarget.style.color="rgba(255,255,255,0.55)"}>
                    <span style={{ color:"#c9973a", fontSize:"10px" }}>▶</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kontak ── */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.18em] mb-5"
              style={{ color:"#c9973a" }}>
              Kontak Kami
            </h4>
            <ul className="space-y-3.5">
              {[
                { icon:"📍", text:"Jl. Amurang–Kotamobagu, Jaga IV, Desa Tumani, Kec. Maesaan, Kab. Minahasa Selatan" },
                { icon:"🕐", text:"Senin–Kamis: 08.00–15.00 WITA" },
              ].map(c => (
                <li key={c.icon} className="flex gap-3 items-start text-sm"
                  style={{ color:"rgba(255,255,255,0.55)" }}>
                  <span className="text-base flex-shrink-0 mt-0.5">{c.icon}</span>
                  <span className="leading-relaxed">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}
        className="text-center py-4 px-6">
        <p className="text-xs" style={{ color:"rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} Desa Tumani · Kec. Maesaan, Kab. Minahasa Selatan, Sulawesi Utara. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}