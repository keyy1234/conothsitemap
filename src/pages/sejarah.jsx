export default function Sejarah() {
  const MILESTONES = [
    {
      tahun: "1895",
      judul: "Berdirinya Desa Tumani",
      isi: "Desa Tumani dibentuk sekitar tahun 1895. Nama \"Tumani\" berasal dari kata \"ditanamkan\" atau \"patok\", mencerminkan tradisi penanaman batas wilayah sebagai penanda kedaulatan tanah.",
      icon: "🪵",
    },
    {
      tahun: "Awal Berdiri",
      judul: "Tujuh Kepala Keluarga Perintis",
      isi: "Tujuh kepala keluarga dari berbagai suku menjadi cikal bakal desa ini, termasuk dari Poopo Minahasa dan Poopo Bolaang Mongondow. Mereka memulai perburuan hewan liar dan merombak hutan menjadi lahan pertanian.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      tahun: "Masa Pembukaan",
      judul: "Kampung-Kampung Pertama",
      isi: "Dari hasil pembukaan hutan, berkembanglah kampung-kampung dengan nama-nama bersejarah: Kinamang, Siladang, dan Pinaesaan — masing-masing menjadi bagian dari identitas awal Desa Tumani.",
      icon: "🌿",
    },
    {
      tahun: "Awal Abad XX",
      judul: "Kepemimpinan Hukum Tua",
      isi: "Sejak awal abad ke-20, desa ini memiliki pejabat Hukum Tua yang berganti-ganti memimpin, mulai dari Menajang, Sumangkut, hingga pejabat masa kini seperti Fesna Assa.",
      icon: "👑",
    },
    {
      tahun: "1984",
      judul: "Pengaspalan Jalan Desa",
      isi: "Infrastruktur desa mulai berkembang dengan dimulainya pengaspalan jalan pada tahun 1984, menandai babak baru konektivitas dan kemajuan Desa Tumani.",
      icon: "🛣️",
    },
    {
      tahun: "Era Modern",
      judul: "Pemekaran Menjadi Tiga Desa",
      isi: "Pada masa kepemimpinan M.M. Tewal terjadi pemekaran desa. Wilayah Tumani Raya dibagi menjadi Tumani, Tumani Selatan, dan Tumani Utara. Total luas Tumani Raya mencapai 2.144 hektar, dengan luas Desa Tumani sendiri 1,4 km².",
      icon: "🗺️",
    },
  ];

  const SUKU = ["Remboken", "Tondano", "Jawa", "Sumatera", "Poopo Minahasa", "Bolaang Mongondow"];

  const STATISTIK = [
    { angka: "1895", label: "Tahun Berdiri" },
    { angka: "2.144", label: "Hektar Tumani Raya" },
    { angka: "1,4", label: "km² Luas Desa" },
    { angka: "6+", label: "Suku yang Bersatu" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .fade-up   { animation: fadeUp 0.65s ease both; }
        .fade-in   { animation: fadeIn 0.8s ease both; }

        .timeline-line {
          position: absolute;
          left: 28px;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #1a2e5a 0%, #3b5bdb 50%, #93c5fd 100%);
        }
        .timeline-dot {
          position: absolute;
          left: 20px;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #1a2e5a;
          box-shadow: 0 0 0 4px rgba(26,46,90,0.12);
          z-index: 2;
        }
        .milestone-card {
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .milestone-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(26,46,90,.10);
        }
        .suku-badge {
          transition: transform .18s, box-shadow .18s;
        }
        .suku-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(26,46,90,.13);
        }

        .stat-card {
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 20px 16px;
          text-align: center;
        }

        .quote-block {
          border-left: 4px solid #1a2e5a;
          background: linear-gradient(90deg, #e8edf8 0%, #f7f9fd 100%);
          border-radius: 0 16px 16px 0;
          padding: 20px 24px;
        }
      `}</style>

      <div className="font-body bg-white text-slate-800 min-h-screen">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden"
          style={{ background: "linear-gradient(150deg,#0a1628 0%,#122244 55%,#1a2e5a 100%)", minHeight: 420 }}>

          {/* dot pattern */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
          {/* top glow */}
          <div className="absolute inset-0 opacity-20"
            style={{ background:"radial-gradient(ellipse 70% 50% at 50% 0%,#3b5bdb 0%,transparent 70%)" }} />
          {/* bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background:"linear-gradient(to bottom,transparent,#0a1628)" }} />

          {/* year watermark */}
          <div className="absolute right-8 top-8 font-display font-black opacity-[0.06] text-white select-none"
            style={{ fontSize:"clamp(5rem,15vw,11rem)", lineHeight:1 }}>1895</div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20 fade-up">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              📜 Sejarah Desa
            </span>
            <h1 className="font-display text-white mb-5 leading-tight"
              style={{ fontSize:"clamp(2.4rem,6vw,4rem)" }}>
              Sejarah<br />
              <span style={{ color:"#93c5fd", fontStyle:"italic" }}>Desa Tumani</span>
            </h1>
            <p className="text-white/55 max-w-xl leading-relaxed" style={{ fontSize:"0.95rem" }}>
              Dari tujuh kepala keluarga perintis hingga desa yang berkembang — perjalanan panjang Tumani sejak 1895 mewariskan nilai gotong royong dan keberagaman yang terus hidup hingga kini.
            </p>
          </div>
        </section>

        {/* ── STATISTIK ── */}
        <section style={{ background:"linear-gradient(180deg,#0a1628 0%,#122244 100%)" }}
          className="py-8 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATISTIK.map((s, i) => (
              <div key={i} className="stat-card fade-up" style={{ animationDelay:`${i*0.1}s` }}>
                <p className="font-display text-white font-bold"
                  style={{ fontSize:"clamp(1.6rem,4vw,2.4rem)" }}>{s.angka}</p>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── KONTEN UTAMA ── */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

          {/* Asal Nama */}
          <section className="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background:"#e8edf8" }}>🏷️</div>
              <span className="font-bold text-xs uppercase tracking-widest" style={{ color:"#1a2e5a" }}>Asal Usul Nama</span>
              <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#1a2e5a40,transparent)" }} />
            </div>

            <div className="quote-block">
              <p className="font-display text-2xl font-bold mb-2" style={{ color:"#0a1628", fontStyle:"italic" }}>
                "Tumani"
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nama <strong>Tumani</strong> berasal dari kata <strong>"ditanamkan"</strong> atau <strong>"patok"</strong> —
                mencerminkan tradisi leluhur yang menanam batas wilayah sebagai penanda kedaulatan tanah dan identitas kampung halaman.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background:"#e8edf8" }}>🕰️</div>
              <span className="font-bold text-xs uppercase tracking-widest" style={{ color:"#1a2e5a" }}>Linimasa Sejarah</span>
              <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#1a2e5a40,transparent)" }} />
            </div>

            <div className="relative pl-14">
              <div className="timeline-line" />

              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="relative fade-up milestone-card"
                    style={{ animationDelay:`${i*0.12}s` }}>
                    {/* dot */}
                    <div className="timeline-dot" style={{ top: 14 }} />

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 overflow-hidden">
                      {/* navy left accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                        style={{ background:"linear-gradient(180deg,#1a2e5a,#3b5bdb)" }} />
                      <div className="pl-2">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl">{m.icon}</span>
                          <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white"
                            style={{ background:"linear-gradient(90deg,#0a1628,#1a2e5a)" }}>
                            {m.tahun}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg mb-2" style={{ color:"#0a1628" }}>
                          {m.judul}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{m.isi}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Keberagaman Suku */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background:"#e8edf8" }}>🌏</div>
              <span className="font-bold text-xs uppercase tracking-widest" style={{ color:"#1a2e5a" }}>Keberagaman Suku</span>
              <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#1a2e5a40,transparent)" }} />
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              {/* header card */}
              <div className="px-7 py-8 text-white relative overflow-hidden"
                style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a2e5a 60%,#2d4a8a 100%)" }}>
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"20px 20px" }} />
                <p className="font-display italic text-white/60 text-sm mb-1 relative">Kebanggaan Tumani</p>
                <h3 className="font-display font-bold text-2xl relative">Bhinneka dalam Satu Desa</h3>
                <p className="text-white/50 text-sm mt-2 relative max-w-lg">
                  Desa Tumani adalah cerminan Indonesia kecil — campuran berbagai suku yang hidup berdampingan dan saling menghormati sejak generasi pertama.
                </p>
              </div>

              <div className="p-7 bg-white">
                <div className="flex flex-wrap gap-3">
                  {SUKU.map((s, i) => (
                    <div key={i} className="suku-badge flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm cursor-default">
                      <span className="w-2 h-2 rounded-full"
                        style={{ background:`hsl(${220 + i*15},60%,${40 + i*5}%)` }} />
                      <span className="font-semibold text-sm" style={{ color:"#0a1628" }}>{s}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-slate-400 text-xs leading-relaxed">
                  Suku-suku ini membawa tradisi, bahasa, dan kearifan lokal masing-masing yang memperkaya budaya dan kehidupan sosial Desa Tumani dari generasi ke generasi.
                </p>
              </div>
            </div>
          </section>

          {/* Wilayah */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background:"#e8edf8" }}>🗺️</div>
              <span className="font-bold text-xs uppercase tracking-widest" style={{ color:"#1a2e5a" }}>Wilayah & Pemekaran</span>
              <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#1a2e5a40,transparent)" }} />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { nama:"Tumani", status:"Desa Induk", luas:"1,4 km²", color:"#0a1628", note:"Luas wilayah utama desa" },
                { nama:"Tumani Selatan", status:"Hasil Pemekaran", luas:"—", color:"#1a2e5a", note:"Dimekarkan masa M.M. Tewal" },
                { nama:"Tumani Utara", status:"Hasil Pemekaran", luas:"—", color:"#2d4a8a", note:"Dimekarkan masa M.M. Tewal" },
              ].map((w, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm milestone-card">
                  <div className="h-2" style={{ background:w.color }} />
                  <div className="p-5">
                    <p className="font-display font-bold text-lg" style={{ color:w.color }}>{w.nama}</p>
                    <span className="inline-block mt-1 mb-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                      style={{ background:w.color }}>{w.status}</span>
                    {w.luas !== "—" && (
                      <p className="text-2xl font-display font-black" style={{ color:w.color }}>{w.luas}</p>
                    )}
                    <p className="text-slate-400 text-xs mt-1">{w.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl p-5 border border-blue-100 flex items-center gap-4"
              style={{ background:"#f0f4ff" }}>
              <span className="text-3xl">📐</span>
              <div>
                <p className="font-bold text-sm" style={{ color:"#0a1628" }}>Total Tumani Raya</p>
                <p className="text-slate-500 text-sm">Luas keseluruhan wilayah Tumani Raya mencapai <strong>2.144 hektar</strong>, dengan sebagian besar lahan digunakan untuk ladang dan sawah.</p>
              </div>
            </div>
          </section>

          {/* Penutup */}
          <section>
            <div className="rounded-3xl px-8 py-10 text-center text-white relative overflow-hidden"
              style={{ background:"linear-gradient(135deg,#0a1628 0%,#1a2e5a 60%,#2d4a8a 100%)" }}>
              <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"22px 22px" }} />
              <div className="absolute inset-0 opacity-20"
                style={{ background:"radial-gradient(ellipse 60% 50% at 50% 100%,#3b5bdb,transparent)" }} />
              <div className="relative">
                <p className="font-display italic text-white/50 text-sm mb-2">Warisan untuk Generasi</p>
                <h3 className="font-display font-bold text-2xl mb-3">Dari Hutan ke Peradaban</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl mx-auto">
                  Lebih dari satu abad berdiri, Desa Tumani terus tumbuh — mempertahankan nilai-nilai kebersamaan yang ditanamkan oleh tujuh kepala keluarga pertama, sambil terus berkembang menyongsong masa depan.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}