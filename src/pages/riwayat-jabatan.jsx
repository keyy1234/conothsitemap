/* ══════════════════════════════════════════════════
   RIWAYAT HUKUM TUA — Desa Tumani  ·  Tema: Navy & Putih
══════════════════════════════════════════════════ */

const RIWAYAT = [
  { no:1, nama:"Max M. Tewal",       jabatan:"Hukum Tua",      periode:"2008 – 2013",    keterangan:"Memimpin pembangunan infrastruktur desa dan pemekaran wilayah Tumani menjadi tiga desa.", status:"demisioner", isPj:false },
  { no:2, nama:"Steven Kumarurung",  jabatan:"Pjb. Hukum Tua", periode:"2013",           keterangan:"Penjabat sementara yang menjaga keberlangsungan pemerintahan pada masa transisi.",         status:"demisioner", isPj:true  },
  { no:3, nama:"Meiby Mangowal",     jabatan:"Hukum Tua",      periode:"2014 – 2019",    keterangan:"Memimpin pengembangan pelayanan publik dan pemberdayaan masyarakat desa.",                  status:"demisioner", isPj:false },
  { no:4, nama:"Sindi Masengi",      jabatan:"Pjb. Hukum Tua", periode:"2019 – 2021",    keterangan:"Penjabat sementara pada masa transisi kepemimpinan sebelum pemilihan resmi.",               status:"demisioner", isPj:true  },
  { no:5, nama:"Fesna F. Y. Assa",   jabatan:"Pjb. Hukum Tua", periode:"2021 – Sekarang",keterangan:"Penjabat Hukum Tua aktif. Fokus pada peningkatan pelayanan warga, pembangunan infrastruktur, dan digitalisasi administrasi desa.", status:"aktif", isPj:true },
];

const aktif = RIWAYAT.find(r => r.status === "aktif");

/* warna berdasarkan tipe ─────────────────────────
   aktif  → emerald  (tetap, universal)
   definitif → navy gradient
   pjb    → slate
───────────────────────────────────────────────── */
const dotBg   = r => r.status === "aktif" ? "linear-gradient(135deg,#059669,#10b981)" : r.isPj ? "linear-gradient(135deg,#64748b,#94a3b8)" : "linear-gradient(135deg,#0f2044,#1a3a6e)";
const topBar  = r => r.status === "aktif" ? "linear-gradient(90deg,#10b981,#34d399)"  : r.isPj ? "#94a3b8"                                 : "linear-gradient(90deg,#0f2044,#c9973a)";
const jabBg   = r => r.isPj ? "#f1f5f9" : "#e8eef8";
const jabClr  = r => r.isPj ? "#475569" : "#0f2044";

export default function RiwayatJabatan() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family:'Plus Jakarta Sans',sans-serif; }
        .rh { transition:background .15s; }
        .rh:hover { background:#f4f6fb; }
        @keyframes hsu { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className="bg-white min-h-screen text-slate-800">

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden"
          style={{ background:"linear-gradient(160deg,#0f2044 0%,#1a3a6e 55%,#2d5fa8 100%)" }}>
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full opacity-10 bg-white" />

          <div className="relative max-w-5xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* kiri */}
              <div style={{ animation:"hsu 0.7s 0.1s ease both" }}>
                <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
                  📜 Riwayat Jabatan
                </div>
                <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,5vw,3.2rem)" }}
                  className="text-white leading-tight mb-4">
                  Riwayat Hukum Tua<br />
                  <span style={{ color:"#c9973a" }}>Desa Tumani</span>
                </h1>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                  Daftar pejabat Hukum Tua (Kepala Desa) yang pernah memimpin Desa Tumani, Kec. Maesaan, Kab. Minahasa Selatan.
                </p>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-xs text-white/60 max-w-md">
                  💡 <span className="text-white/80 font-semibold">Hukum Tua</span> adalah istilah khas Minahasa untuk Kepala Desa — bermakna pemimpin yang dituakan dan dihormati oleh seluruh warga.
                </div>
              </div>

              {/* kartu aktif */}
              {aktif && (
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ animation:"hsu 0.7s 0.25s ease both" }}>
                  <div className="h-1.5 w-full" style={{ background:"linear-gradient(90deg,#10b981,#34d399)" }} />
                  <div className="p-7 text-center">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Pejabat Aktif Saat Ini
                    </span>
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl border-4 bg-slate-50 shadow-inner" style={{ borderColor:"#e8eef8" }}>
                      👩‍💼
                    </div>
                    <h2 style={{ fontFamily:"'Playfair Display',serif" }} className="font-bold text-slate-900 text-xl">{aktif.nama}</h2>
                    <p className="text-emerald-600 font-semibold text-sm mt-1">{aktif.jabatan}</p>
                    <p className="text-slate-400 text-xs mt-0.5">📅 {aktif.periode}</p>
                    <p className="text-slate-500 text-xs mt-4 leading-relaxed border-t pt-4" style={{ borderColor:"#e8eef8" }}>{aktif.keterangan}</p>
                  </div>
                </div>
              )}
            </div>

            {/* stat strip */}
            <div className="grid grid-cols-3 gap-4 mt-10" style={{ animation:"hsu 0.7s 0.4s ease both" }}>
              {[
                { icon:"👥", v:RIWAYAT.length,                            l:"Total Pejabat"       },
                { icon:"✅", v:RIWAYAT.filter(r=>r.status==="aktif").length, l:"Pejabat Aktif"    },
                { icon:"🏛️", v:RIWAYAT.filter(r=>!r.isPj).length,          l:"Hukum Tua Definitif" },
              ].map(s => (
                <div key={s.l} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center backdrop-blur">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif" }} className="font-black text-white text-2xl">{s.v}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══ */}
        <section className="py-20" style={{ background:"#f4f6fb" }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:700 }}>
                Linimasa Kepemimpinan
              </h2>
              <p className="text-slate-400 text-sm mt-2">Urutan pejabat dari waktu ke waktu</p>
              <div className="mx-auto mt-4 w-12 h-0.5 rounded" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background:"#dce4f0" }} />
              <div className="space-y-6">
                {RIWAYAT.map((r) => (
                  <div key={r.no} className="relative flex gap-6 items-start">
                    {/* dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-md border-4 border-white text-white font-black text-sm"
                        style={{ background: dotBg(r) }}>
                        <span className="text-xs opacity-70 font-medium">No.</span>
                        <span className="text-xl leading-none">{r.no}</span>
                      </div>
                    </div>
                    {/* card */}
                    <div className={`flex-1 bg-white rounded-2xl border shadow-sm overflow-hidden ${r.status === "aktif" ? "border-emerald-200" : "border-slate-100"}`}>
                      <div className="h-1" style={{ background: topBar(r) }} />
                      <div className="p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-slate-900 text-base">{r.nama}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5">
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                style={{ background:jabBg(r), color:jabClr(r) }}>
                                {r.jabatan}
                              </span>
                              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${r.status === "aktif" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                {r.status === "aktif" ? "🟢 Aktif" : "⚫ Demisioner"}
                              </span>
                            </div>
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl flex-shrink-0"
                            style={{ background:"#e8eef8", color:"#0f2044" }}>
                            📅 {r.periode}
                          </div>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mt-3 border-t pt-3" style={{ borderColor:"#f4f6fb" }}>
                          {r.keterangan}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ TABEL ══ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:700 }}>
                Tabel Riwayat Jabatan
              </h2>
              <p className="text-slate-400 text-sm mt-2">Data resmi arsip Desa Tumani</p>
              <div className="mx-auto mt-4 w-12 h-0.5 rounded" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
            </div>

            {/* desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background:"linear-gradient(135deg,#0f2044,#1a3a6e)" }}>
                    {["No","Nama Penjabat","Jabatan","Tahun Menjabat","Status"].map(h => (
                      <th key={h} className="px-6 py-4 text-left text-white font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RIWAYAT.map((r, i) => (
                    <tr key={r.no} className={`rh border-b border-slate-50 ${r.status === "aktif" ? "bg-emerald-50/40" : i%2===0 ? "bg-white" : "bg-slate-50/40"}`}>
                      <td className="px-6 py-4 text-slate-400 font-mono text-xs font-bold">{r.no}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                            style={{ background: r.status === "aktif" ? "#d1fae5" : "#e8eef8" }}>
                            {r.status === "aktif" ? "👩‍💼" : "👤"}
                          </div>
                          <span className="font-semibold text-slate-800">{r.nama}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background:jabBg(r), color:jabClr(r) }}>
                          {r.jabatan}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-xs px-3 py-1.5 rounded-xl"
                          style={{ background:"#e8eef8", color:"#0f2044" }}>
                          {r.periode}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${r.status === "aktif" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${r.status === "aktif" ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`} />
                          {r.status === "aktif" ? "Aktif" : "Demisioner"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* mobile */}
            <div className="md:hidden space-y-3">
              {RIWAYAT.map(r => (
                <div key={r.no} className={`rounded-2xl border overflow-hidden shadow-sm ${r.status === "aktif" ? "border-emerald-200" : "border-slate-100"}`}>
                  <div className="h-1" style={{ background: topBar(r) }} />
                  <div className="bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                          style={{ background: r.status === "aktif" ? "#d1fae5" : "#e8eef8" }}>
                          {r.status === "aktif" ? "👩‍💼" : "👤"}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{r.nama}</p>
                          <p className="text-xs" style={{ color:jabClr(r) }}>{r.jabatan}</p>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${r.status === "aktif" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                        {r.status === "aktif" ? "🟢 Aktif" : "Demisioner"}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-xl inline-block mb-2" style={{ background:"#e8eef8", color:"#0f2044" }}>
                      📅 {r.periode}
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">{r.keterangan}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-400 text-xs mt-8">
              📋 Sumber: Arsip Resmi Desa Tumani · Kec. Maesaan, Kab. Minahasa Selatan
            </p>
          </div>
        </section>

      </div>
    </>
  );
}