import { useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════
   HALAMAN WILAYAH & DEMOGRAFI — Desa Tumani
   Tema: Navy & Putih
══════════════════════════════════════════════════ */

const DATA_WILAYAH = [
  { icon:"📐", label:"Luas Wilayah",   value:"140 Ha", bg:"#0f2044", warna:"#ffffff" },
  { icon:"🏘️", label:"Area Pemukiman", value:"7,2 Ha", bg:"#1a3a6e", warna:"#ffffff" },
  { icon:"🌾", label:"Area Pertanian", value:"25 Ha",  bg:"#fef3c7", warna:"#92400e" },
  { icon:"📅", label:"Tahun Berdiri",  value:"1895",   bg:"#ede9fe", warna:"#4c1d95" },
];

const BATAS = [
  { arah:"Utara",   icon:"⬆️", ket:"Tumani Utara"   },
  { arah:"Timur",   icon:"➡️", ket:"—"              },
  { arah:"Selatan", icon:"⬇️", ket:"Tumani Selatan" },
  { arah:"Barat",   icon:"⬅️", ket:"Lowian"         },
];

const LAKI       = 528;
const PEREMPUAN  = 501;
const TOTAL      = 1029;
const KK         = 335;
const pLaki      = Math.round((LAKI / TOTAL) * 100);
const pPerempuan = Math.round((PEREMPUAN / TOTAL) * 100);

const LAT        = 0.901337;
const LNG        = 124.471504;
const MAPS_EMBED = `https://maps.google.com/maps?q=Tumani,+Maesaan,+Minahasa+Selatan,+Sulawesi+Utara&z=15&output=embed`;
const MAPS_OPEN  = `https://www.google.com/maps/place/Tumani,+Maesaan,+South+Minahasa+Regency,+North+Sulawesi/@${LAT},${LNG},15z`;

/* ── Scroll Reveal ── */
function useReveal(opts = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); }
    }, { threshold: opts.threshold ?? 0.12, rootMargin:"0px 0px -40px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, variant="up", delay=0, className="" }) {
  const ref = useReveal();
  const v = { up:"op0 ty10", left:"op0 txn10", right:"op0 tx10", fade:"op0", scale:"op0 sc95" };
  return <div ref={ref} className={`rb ${v[variant]} ${className}`} style={{ transitionDelay:`${delay}ms` }}>{children}</div>;
}

/* ── Section header ── */
function SH({ title, sub }) {
  return (
    <Reveal variant="up" className="text-center mb-10">
      <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:700 }}>
        {title}
      </h2>
      {sub && <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">{sub}</p>}
      <div className="mx-auto mt-4 w-12 h-0.5 rounded"
        style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
    </Reveal>
  );
}

/* ── Donut SVG ── */
function DonutChart({ laki, perempuan }) {
  const r = 52, cx = 70, cy = 70;
  const circ = 2 * Math.PI * r;
  const dashL = (laki / 100) * circ;
  const dashP = (perempuan / 100) * circ;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e8eef8" strokeWidth="18" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f9a8d4" strokeWidth="18"
        strokeDasharray={`${dashP} ${circ}`} strokeDashoffset={-dashL}
        style={{ transform:"rotate(-90deg)", transformOrigin:`${cx}px ${cy}px` }} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#6BAED6" strokeWidth="18"
        strokeDasharray={`${dashL} ${circ}`} strokeDashoffset={0}
        style={{ transform:"rotate(-90deg)", transformOrigin:`${cx}px ${cy}px` }} />
      <text x={cx} y={cy-8} textAnchor="middle" fill="#0f2044"
        style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700 }}>
        100%
      </text>
      <text x={cx} y={cy+10} textAnchor="middle" fill="#94a3b8"
        style={{ fontSize:9, fontFamily:"sans-serif" }}>
        terdistribusi
      </text>
    </svg>
  );
}

export default function Wilayah() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family:'Plus Jakarta Sans',sans-serif; }

        /* reveal */
        .rb { transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); will-change:opacity,transform; }
        .rb.revealed { opacity:1 !important; transform:none !important; }
        .op0{opacity:0} .ty10{transform:translateY(40px)}
        .txn10{transform:translateX(-40px)} .tx10{transform:translateX(40px)} .sc95{transform:scale(.95)}

        /* hover */
        .cl { transition:transform .2s ease,box-shadow .2s ease; }
        .cl:hover { transform:translateY(-4px); box-shadow:0 14px 32px rgba(15,32,68,.10); }
        .rh { transition:background .15s; }
        .rh:hover { background:#f4f6fb; }

        @keyframes hsu { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
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
                  🗺️ Wilayah & Demografi
                </div>
                <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,5vw,3.2rem)" }}
                  className="text-white leading-tight mb-4">
                  Wilayah & Demografi<br />
                  <span style={{ color:"#c9973a" }}>Desa Tumani</span>
                </h1>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                  Gambaran geografis, batas wilayah, dan data kependudukan resmi Desa Tumani, Kec. Maesaan, Kab. Minahasa Selatan.
                </p>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-xs text-white/60 max-w-md">
                  📍 <span className="text-white/80 font-semibold">Koordinat:</span> {LAT}° LU, {LNG}° BT
                  &nbsp;·&nbsp; Jl. Amurang–Kotamobagu, Jaga IV
                </div>
              </div>

              {/* kanan: kartu stat */}
              <div className="grid grid-cols-2 gap-3" style={{ animation:"hsu 0.7s 0.25s ease both" }}>
                {DATA_WILAYAH.map(d => (
                  <div key={d.label} className="cl bg-white rounded-2xl p-5 text-center shadow-lg">
                    <div className="text-2xl mb-2">{d.icon}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif", color:d.warna === "#ffffff" ? d.bg : d.warna, fontSize:"1.4rem", fontWeight:900 }}>
                      {d.value}
                    </div>
                    <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-1.5">{d.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* batas strip */}
            <div className="grid grid-cols-4 gap-3 mt-10" style={{ animation:"hsu 0.7s 0.4s ease both" }}>
              {BATAS.map(b => (
                <div key={b.arah} className="bg-white/10 border border-white/15 rounded-2xl p-3.5 text-center backdrop-blur">
                  <div className="text-xl mb-1">{b.icon}</div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-wider">{b.arah}</div>
                  <div className="text-white font-bold text-xs mt-0.5">{b.ket}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PETA ══ */}
        <section className="py-20" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Peta Lokasi Desa" sub="Desa Tumani, Kecamatan Maesaan, Kabupaten Minahasa Selatan" />

            <Reveal variant="up" delay={50}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background:"#e8eef8" }}>📍</div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Desa Tumani</p>
                    <p className="text-xs text-slate-400 mt-0.5">Kec. Maesaan, Kab. Minahasa Selatan · {LAT}° LU, {LNG}° BT</p>
                  </div>
                </div>
                <a href={MAPS_OPEN} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition hover:brightness-110"
                  style={{ background:"linear-gradient(135deg,#0f2044,#1a3a6e)" }}>
                  🗺️ Buka di Google Maps
                </a>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md" style={{ height:420 }}>
                <iframe title="Peta Desa Tumani" src={MAPS_EMBED} width="100%" height="100%"
                  style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>

            <Reveal variant="up" delay={150}>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["📐","Lintang",`${LAT}° LU`],["📐","Bujur",`${LNG}° BT`],["🏔️","Ketinggian","± 400 mdpl"],["🌦️","Iklim","Tropis Lembab"],["🛣️","Jalan Utama","Jl. Amurang–Kotamobagu"]].map(([ic,lbl,val]) => (
                  <div key={lbl} className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs shadow-sm">
                    <span>{ic}</span><span className="text-slate-400">{lbl}:</span>
                    <span className="font-semibold text-slate-700">{val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ DEMOGRAFI ══ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Demografi Penduduk" sub="Data kependudukan resmi Desa Tumani" />

            {/* top 3 stat */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {[
                { icon:"👥", label:"Total Penduduk",  value:TOTAL.toLocaleString("id-ID"), bg:"#0f2044", warna:"#ffffff" },
                { icon:"🏠", label:"Kepala Keluarga", value:KK.toLocaleString("id-ID"),    bg:"#1a3a6e", warna:"#ffffff" },
                { icon:"📊", label:"Rasio L/P",       value:`${pLaki}/${pPerempuan}`,       bg:"#e8eef8", warna:"#0f2044" },
              ].map((s,i) => (
                <Reveal key={s.label} variant="up" delay={i*80}>
                  <div className="cl rounded-2xl shadow-md p-6 text-center h-full" style={{ background:s.bg }}>
                    <div className="text-4xl mb-3">{s.icon}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif", color:s.warna, fontSize:"1.8rem", fontWeight:900, lineHeight:1 }}>
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest mt-2"
                      style={{ color: s.warna === "#ffffff" ? "rgba(255,255,255,0.7)" : "#64748b" }}>
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* chart 2 kolom */}
            <Reveal variant="up">
              <div className="grid md:grid-cols-2 gap-6 mb-6 items-stretch">

                {/* bar chart */}
                <div className="cl bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col">
                  <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm">
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center text-base" style={{ background:"#e8eef8" }}>👤</span>
                    Komposisi Jenis Kelamin
                  </h3>
                  <div className="flex-1 space-y-6">
                    {[
                      { label:"Laki-laki", value:LAKI,      persen:pLaki,      warna:"#6BAED6", bg:"#EFF6FF", icon:"👨" },
                      { label:"Perempuan", value:PEREMPUAN, persen:pPerempuan, warna:"#f472b6", bg:"#FDF2F8", icon:"👩" },
                    ].map(d => (
                      <div key={d.label}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" style={{ background:d.bg }}>{d.icon}</div>
                            <span className="font-semibold text-slate-700 text-sm">{d.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-base" style={{ color:d.warna }}>{d.value.toLocaleString("id-ID")}</span>
                            <span className="text-slate-400 text-xs">jiwa</span>
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background:d.warna+"18", color:d.warna }}>{d.persen}%</span>
                          </div>
                        </div>
                        <div className="h-3.5 rounded-full overflow-hidden" style={{ background:"#e8eef8" }}>
                          <div className="h-full rounded-full" style={{ width:`${d.persen}%`, background:d.warna }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-500">Total Penduduk</span>
                    <span style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"1.4rem", fontWeight:900 }}>
                      {TOTAL.toLocaleString("id-ID")} <span className="text-sm font-normal text-slate-400 ml-1">jiwa</span>
                    </span>
                  </div>
                </div>

                {/* donut */}
                <div className="cl bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col">
                  <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-sm">
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center text-base" style={{ background:"#e8eef8" }}>🥧</span>
                    Proporsi Penduduk
                  </h3>
                  <div className="flex-1 flex items-center justify-around gap-6">
                    <DonutChart laki={pLaki} perempuan={pPerempuan} />
                    <div className="space-y-5">
                      {[
                        { label:"Laki-laki", value:LAKI,      persen:pLaki,      warna:"#6BAED6", bg:"#EFF6FF", icon:"👨" },
                        { label:"Perempuan", value:PEREMPUAN, persen:pPerempuan, warna:"#f472b6", bg:"#FDF2F8", icon:"👩" },
                      ].map(d => (
                        <div key={d.label} className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background:d.bg }}>{d.icon}</div>
                          <div>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{d.label}</p>
                            <p style={{ fontFamily:"'Playfair Display',serif", color:d.warna, fontSize:"1.2rem", fontWeight:900, lineHeight:1.2 }}>
                              {d.value.toLocaleString("id-ID")} <span className="text-xs font-normal text-slate-400">jiwa</span>
                            </p>
                            <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mt-0.5" style={{ background:d.warna+"18", color:d.warna }}>{d.persen}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="rounded-xl px-5 py-4 flex items-center justify-between" style={{ background:"#e8eef8" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏠</span>
                        <div>
                          <p className="text-sm font-bold text-slate-700">Kepala Keluarga</p>
                          <p className="text-xs text-slate-400">Rata-rata 3 jiwa per KK</p>
                        </div>
                      </div>
                      <span style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"1.8rem", fontWeight:900 }}>{KK}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* tabel */}
            <Reveal variant="up" delay={80}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background:"linear-gradient(135deg,#0f2044,#1a3a6e)" }}>
                      {["Kategori","Jumlah","Persentase","Keterangan"].map(h => (
                        <th key={h} className="px-6 py-4 text-left text-white font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { kat:"Laki-laki",      jml:LAKI,      persen:`${pLaki}%`,      ket:"Penduduk berjenis kelamin laki-laki",  dot:"#6BAED6" },
                      { kat:"Perempuan",       jml:PEREMPUAN, persen:`${pPerempuan}%`, ket:"Penduduk berjenis kelamin perempuan",  dot:"#f472b6" },
                      { kat:"Total Penduduk",  jml:TOTAL,     persen:"100%",           ket:"Seluruh warga terdaftar",             dot:"#0f2044" },
                      { kat:"Kepala Keluarga", jml:KK,        persen:"—",             ket:"Jumlah kepala keluarga aktif",        dot:"#c9973a" },
                    ].map((r,i) => (
                      <tr key={r.kat} className={`rh border-b border-slate-50 ${i%2===0?"bg-white":"bg-slate-50/40"}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:r.dot }} />
                            <span className="font-semibold text-slate-800">{r.kat}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-black text-slate-800" style={{ fontFamily:"'Playfair Display',serif" }}>
                          {r.jml.toLocaleString("id-ID")}
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-xs px-2.5 py-1 rounded-full" style={{ background:r.dot+"18", color:r.dot }}>{r.persen}</span>
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-xs">{r.ket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={100}>
              <p className="text-center text-slate-400 text-xs mt-6">
                📋 Sumber: Arsip Resmi Desa Tumani · Kec. Maesaan, Kab. Minahasa Selatan
              </p>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}