import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import hukumTua      from "../assets/hukum-tua.jpg";
import sekertaris    from "../assets/sekertaris_desa.jpg";
import keuangan      from "../assets/kaur-keuangan.jpg";
import Perencanaan   from "../assets/kaur-perencanaan.jpg";
import umum          from "../assets/kaur-umum.jpg";
import pemerintahan  from "../assets/kasie-pemerintahan.jpg";
import kesejahteraan from "../assets/kasie-kesejahteraan.jpg";
import pelayanan     from "../assets/kasie-pelayanan.jpg";

import foto1  from "../assets/image1.png";  import foto2  from "../assets/image2.png";
import foto3  from "../assets/image3.png";  import foto4  from "../assets/image4.png";
import foto5  from "../assets/image5.png";  import foto6  from "../assets/image6.png";
import foto7  from "../assets/image7.png";  import foto8  from "../assets/image8.png";
import foto9  from "../assets/image9.png";  import foto10 from "../assets/image10.png";
import foto11 from "../assets/image11.png"; import foto12 from "../assets/image12.png";
import foto13 from "../assets/image13.png"; import foto14 from "../assets/image14.png";

import jagung from "../assets/jagung.png";
import padi   from "../assets/padi.png";
import kelapa from "../assets/kelapa.png";

const PERANGKAT = [
  { jabatan:"Hukum Tua",              nama:"FESNA F. Y. ASSA",         foto:hukumTua,      utama:true },
  { jabatan:"Sekretaris Desa",        nama:"NELDY LAPIAN",             foto:sekertaris     },
  { jabatan:"Kaur Keuangan",          nama:"PINGKAN V. NAYOAN",        foto:keuangan       },
  { jabatan:"Kaur Perencanaan",       nama:"JACKLIEN KOMALING",        foto:Perencanaan    },
  { jabatan:"Kaur Umum & Tata Usaha", nama:"TESALONIKA A. WALALANGI",  foto:umum           },
  { jabatan:"Kasie Pemerintahan",     nama:"DONNY MAMESAH, SE",        foto:pemerintahan   },
  { jabatan:"Kasie Kesejahteraan",    nama:"ELSAFIA TIMBONGOL",        foto:kesejahteraan  },
  { jabatan:"Kasie Pelayanan",        nama:"AFNNY M. D. KIMBAL",       foto:pelayanan      },
];

const GALERI = [
  {id:1,src:foto1},{id:2,src:foto2},{id:3,src:foto3},{id:4,src:foto4},{id:5,src:foto5},
  {id:6,src:foto6},{id:7,src:foto7},{id:8,src:foto8},{id:9,src:foto9},{id:10,src:foto10},
  {id:11,src:foto11},{id:12,src:foto12},{id:13,src:foto13},{id:14,src:foto14},
];

const POTENSI = [
  { label:"Padi",   src:padi,   emoji:"🌾", desc:"Komoditas utama pertanian Desa Tumani yang menjadi sumber penghidupan warga." },
  { label:"Jagung", src:jagung, emoji:"🌽", desc:"Tanaman palawija unggulan dengan hasil panen melimpah setiap musim." },
  { label:"Kelapa", src:kelapa, emoji:"🥥", desc:"Perkebunan kelapa tersebar luas, menjadi komoditas ekspor andalan desa." },
];

const STATS = [
  { icon:"📐", label:"Luas Wilayah",     value:"1,4 km²" },
  { icon:"🗺️", label:"Luas Tumani Raya", value:"2.144 ha" },
  { icon:"📅", label:"Tahun Berdiri",    value:"1895"     },
  { icon:"🏘️", label:"Jaga",             value:"4 Jaga"   },
];

/* ── Scroll Reveal ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); }
    }, { threshold: 0.12, rootMargin:"0px 0px -40px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, variant="up", delay=0, className="" }) {
  const ref = useReveal();
  const v = { up:"op0 ty10", left:"op0 txn10", right:"op0 tx10", fade:"op0", scale:"op0 sc95" };
  return (
    <div ref={ref} className={`rb ${v[variant]} ${className}`} style={{ transitionDelay:`${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Foto helper ── */
function Foto({ src, label, className="", imgClass="", style={} }) {
  if (src) return <img src={src} alt={label} className={`object-cover ${className} ${imgClass}`} style={style} />;
  return (
    <div className={`flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 ${className}`} style={style}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <p className="text-xs mt-1.5 px-2 font-medium text-center">{label}</p>
    </div>
  );
}

/* ── Section header ── */
function SH({ title, sub }) {
  return (
    <Reveal variant="up" className="text-center mb-10">
      <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#0f2044", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:700 }}>
        {title}
      </h2>
      {sub && <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">{sub}</p>}
      <div className="mx-auto mt-4 w-14 h-0.5 rounded" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
    </Reveal>
  );
}

/* ── Helper scroll ke atas ── */
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Beranda() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family:'Plus Jakarta Sans',sans-serif; }
        section { scroll-margin-top:64px; }

        .rb { transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); will-change:opacity,transform; }
        .rb.revealed { opacity:1 !important; transform:none !important; }
        .op0 { opacity:0; } .ty10 { transform:translateY(40px); }
        .txn10 { transform:translateX(-40px); } .tx10 { transform:translateX(40px); }
        .sc95 { transform:scale(.95); }

        .cl { transition:transform .2s ease,box-shadow .2s ease; }
        .cl:hover { transform:translateY(-4px); box-shadow:0 14px 32px rgba(15,32,68,.10); }
        .iz { overflow:hidden; }
        .iz img { transition:transform .4s ease; }
        .iz:hover img { transform:scale(1.06); }

        @keyframes hsu { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

        .btn-outline {
          border: 2px solid #0f2044;
          color: #0f2044;
          transition: background .2s, color .2s;
        }
        .btn-outline:hover { background: #0f2044; color: #fff; }
      `}</style>

      <div className="bg-white text-slate-800">

        {/* ── 1. HERO ── */}
        <section className="relative flex items-center justify-center min-h-[85vh] overflow-hidden"
          style={{ background:"linear-gradient(160deg,#0f2044 0%,#1a3a6e 45%,#2d5fa8 100%)" }}>
          <div className="absolute inset-0" style={{ background:"rgba(5,15,40,0.52)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.4rem,6vw,4rem)", textShadow:"0 2px 12px rgba(0,0,0,.4)", animation:"hsu .8s .15s ease both" }}
              className="text-white leading-tight mb-4">
              Selamat Datang di<br /><span style={{ color:"#c9973a" }}>Desa Tumani</span>
            </h1>
            <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-lg mx-auto"
              style={{ animation:"hsu .8s .25s ease both" }}>
              Kecamatan Maesaan · Kabupaten Minahasa Selatan · Provinsi Sulawesi Utara
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8" style={{ animation:"hsu .8s .35s ease both" }}>
              {STATS.map(s => (
                <div key={s.label} className="backdrop-blur border border-white/20 rounded-full px-4 py-2 text-white text-xs font-semibold"
                  style={{ background:"rgba(255,255,255,0.12)" }}>
                  {s.icon} <span style={{ color:"#c9973a" }} className="font-bold">{s.value}</span> {s.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center" style={{ animation:"hsu .8s .45s ease both" }}>
              {/* ── Tombol Hubungi Kami → /kontak ── */}
              {/* <Link to="/kontak" onClick={scrollTop}
                className="px-7 py-3 rounded-full font-bold text-sm shadow-lg transition hover:brightness-110 hover:-translate-y-0.5 inline-flex items-center gap-2"
                style={{ background:"#c9973a", color:"#fff" }}>
                💬 Hubungi Kami
              </Link> */}
              {/* ── Tombol Pelajari Desa → /sejarah ── */}
              <Link to="/sejarah" onClick={scrollTop}
                className="px-7 py-3 rounded-full font-bold text-sm text-white border-2 border-white/50 transition hover:bg-white/10 inline-flex items-center gap-2">
                📖 Pelajari Desa
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display:"block", height:48 }}>
              <path d="M0,32 C480,0 960,48 1440,16 L1440,48 L0,48 Z" fill="#ffffff"/>
            </svg>
          </div>
        </section>

        {/* ── 2. WILAYAH & DEMOGRAFI ── */}
        <section className="py-16" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Wilayah & Demografi" sub="Data wilayah dan kependudukan Desa Tumani" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon:"🗺️", label:"Luas Wilayah",   value:"140 Ha", warna:"#ffffff", bg:"#0f2044",  shadow:"0 8px 24px rgba(15,32,68,.25)" },
                { icon:"👥", label:"Total Penduduk",  value:"1.029",  warna:"#ffffff", bg:"#1a3a6e",  shadow:"0 8px 24px rgba(26,58,110,.25)" },
                { icon:"🏘️", label:"Area Pemukiman",  value:"7,2 Ha", warna:"#92400e", bg:"#fef3c7",  shadow:"0 8px 24px rgba(201,151,58,.15)" },
                { icon:"🌾", label:"Area Pertanian",  value:"25 Ha",  warna:"#065f46", bg:"#d1fae5",  shadow:"0 8px 24px rgba(5,150,105,.15)" },
              ].map((s,i) => (
                <Reveal key={s.label} variant="up" delay={i*80}>
                  <div className="cl rounded-2xl p-6 text-center" style={{ background:s.bg, boxShadow:s.shadow }}>
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <div className="font-black text-2xl md:text-3xl leading-none mb-1"
                      style={{ fontFamily:"'Playfair Display',serif", color:s.warna }}>{s.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wide mt-1"
                      style={{ color: s.bg === "#0f2044" || s.bg === "#1a3a6e" ? "rgba(255,255,255,0.7)" : "#64748b" }}>
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up" delay={100} className="mt-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"#0f2044" }}>🧭 Batas Wilayah</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[["⬆️ Utara","Tumani Utara"],["➡️ Timur","—"],["⬇️ Selatan","Tumani Selatan"],["⬅️ Barat","Lowian"]].map(([a,k]) => (
                    <div key={a} className="rounded-xl p-3 border text-center text-sm"
                      style={{ background:"#f4f6fb", borderColor:"#dce4f0" }}>
                      <p className="text-xs font-semibold" style={{ color:"#64748b" }}>{a}</p>
                      <p className="font-bold mt-0.5" style={{ color:"#0f2044" }}>{k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3. SEJARAH ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Sejarah Desa Tumani" />
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Reveal variant="left">
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>Desa Tumani dibentuk sekitar tahun <strong className="text-slate-800">1895</strong>. Nama <em>"Tumani"</em> berasal dari kata <strong className="text-slate-800">"ditanamkan"</strong> atau <strong className="text-slate-800">"patok"</strong>, mencerminkan sejarah penanaman batas wilayah.</p>
                  <p>Tujuh kepala keluarga dari berbagai suku, termasuk dari Poopo Minahasa dan Poopo Bolaang Mongondow, menjadi cikal bakal desa ini. Mereka merombak hutan menjadi lahan pertanian yang berkembang menjadi kampung seperti <em>Kinamang</em>, <em>Siladang</em>, dan <em>Pinaesaan</em>.</p>
                  <p>Pemekaran desa terjadi pada masa <strong className="text-slate-800">M.M. Tewal</strong>, membagi wilayah menjadi Tumani, Tumani Selatan, dan Tumani Utara. Infrastruktur desa mulai berkembang dengan pengaspalan jalan pada tahun <strong className="text-slate-800">1984</strong>.</p>

                  {/* ── Baca Selengkapnya → /sejarah ── */}
                  <Link
                    to="/sejarah"
                    onClick={scrollTop}
                    className="btn-outline inline-flex items-center gap-2 mt-2 font-semibold text-sm px-5 py-2.5 rounded-lg"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </Reveal>
              <Reveal variant="right">
                <div className="space-y-3">
                  {[
                    { t:"1895",           k:"Desa Tumani dibentuk oleh 7 kepala keluarga pionir" },
                    { t:"Awal 1900",      k:"Pejabat Hukum Tua pertama mulai menjabat" },
                    { t:"1984",           k:"Pengaspalan jalan pertama di desa" },
                    { t:"Era M.M. Tewal", k:"Pemekaran menjadi Tumani, Tumani Selatan & Tumani Utara" },
                    { t:"Kini",           k:"Dipimpin Pjb. Hukum Tua Fesna F. Y. Assa" },
                  ].map(({t,k},i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-28 text-right">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background:"#e8eef8", color:"#0f2044" }}>{t}</span>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center pt-1">
                        <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor:"#0f2044", background:"#fff" }} />
                        {i<4 && <div className="w-0.5 flex-1 mt-1" style={{ background:"#c5d3e8", minHeight:24 }} />}
                      </div>
                      <p className="text-sm text-slate-500 leading-snug pt-0.5">{k}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4. STRUKTUR ── */}
        <section className="py-20" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Struktur Pemerintahan" sub="Susunan Perangkat Desa Tumani Periode 2021–2027" />

            <Reveal variant="up">
              <div className="flex justify-center mb-6">
                <div className="cl bg-white rounded-2xl shadow-sm border overflow-hidden w-52 text-center" style={{ borderColor:"#c9973a" }}>
                  <div className="h-1.5" style={{ background:"linear-gradient(90deg,#0f2044,#c9973a)" }} />
                  <div className="p-5">
                    <Foto src={PERANGKAT[0].foto} label="Foto Hukum Tua"
                      className="w-20 h-20 rounded-full mx-auto mb-3 border-4" style={{ borderColor:"#e8eef8" }}
                      imgClass="w-20 h-20 rounded-full" />
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                      style={{ background:"#e8eef8", color:"#0f2044" }}>{PERANGKAT[0].jabatan}</span>
                    <p className="font-bold text-slate-800 text-sm">{PERANGKAT[0].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="flex justify-center mb-6">
              <div className="w-0.5 h-8" style={{ background:"#c5d3e8" }} />
            </div>

            <Reveal variant="up" delay={80}>
              <div className="flex justify-center mb-8">
                <div className="cl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden w-48 text-center">
                  <div className="p-5">
                    <Foto src={PERANGKAT[1].foto} label="Foto Sekdes"
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-slate-100"
                      imgClass="w-16 h-16 rounded-full" />
                    <p className="text-xs font-semibold" style={{ color:"#0f2044" }}>{PERANGKAT[1].jabatan}</p>
                    <p className="font-bold text-slate-800 text-xs mt-0.5">{PERANGKAT[1].nama}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal variant="left" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#0f2044" }}>Kepala Urusan (Kaur)</p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(2,5).map((p,i) => (
                      <div key={i} className="cl bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2" style={{ borderColor:"#e8eef8" }}
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color:"#0f2044" }}>{p.jabatan}</p>
                          <p className="font-bold text-slate-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="right" delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color:"#1a3a6e" }}>Kepala Seksi (Kasi)</p>
                  <div className="space-y-3">
                    {PERANGKAT.slice(5).map((p,i) => (
                      <div key={i} className="cl bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center gap-4">
                        <Foto src={p.foto} label={`Foto ${p.jabatan}`}
                          className="w-12 h-12 rounded-full flex-shrink-0 border-2" style={{ borderColor:"#dbeafe" }}
                          imgClass="w-12 h-12 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold" style={{ color:"#1a3a6e" }}>{p.jabatan}</p>
                          <p className="font-bold text-slate-800 text-sm">{p.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5. GALERI ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <SH title="Galeri Kegiatan" sub="Dokumentasi kegiatan dan kehidupan masyarakat Desa Tumani" />
            <Reveal variant="up">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {GALERI.slice(0,10).map((g) => (
                  <div key={g.id} className="iz rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio:"1/1" }}>
                    <Foto src={g.src} label={`Foto ${g.id}`} className="w-full h-full" imgClass="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 max-w-2xl mx-auto">
                {GALERI.slice(10).map((g) => (
                  <div key={g.id} className="iz rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio:"1/1" }}>
                    <Foto src={g.src} label={`Foto ${g.id}`} className="w-full h-full" imgClass="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} className="text-center mt-8">
              {/* ── Lihat Semua Galeri → /galeri ── */}
              <Link
                to="/galeri"
                onClick={scrollTop}
                className="btn-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm"
              >
                Lihat Semua Galeri →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── 6. POTENSI ── */}
        <section className="py-20" style={{ background:"#f4f6fb" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Potensi Desa" sub="Komoditas unggulan dan sumber daya alam Desa Tumani" />
            <div className="grid md:grid-cols-3 gap-6">
              {POTENSI.map((p,i) => (
                <Reveal key={p.label} variant="up" delay={i*100}>
                  <div className="cl bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                    <div className="iz" style={{ height:192 }}>
                      <Foto src={p.src} label={`Foto ${p.label}`} className="w-full h-48" imgClass="w-full h-48 object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{p.emoji}</span>
                        <h3 className="font-bold text-slate-800">{p.label}</h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. KONTAK & LOKASI ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <SH title="Kontak & Lokasi" />
            <div className="grid lg:grid-cols-2 gap-10">
              <Reveal variant="left">
                <div className="space-y-5">
                  {[
                    {
                      icon:"📍", title:"Alamat Kantor Desa",
                      content: <p className="text-slate-600 text-sm leading-relaxed">Jl. Amurang – Kotamobagu, Jaga IV,<br/>Desa Tumani, Kecamatan Maesaan,<br/>Kabupaten Minahasa Selatan,<br/>Sulawesi Utara</p>
                    },
                    {
                      icon:"🕐", title:"Jam Pelayanan",
                      content: <div className="text-sm text-slate-600 space-y-1.5">
                        <p>🟢 <strong>Senin–Kamis:</strong> 08.00–15.00 WITA</p>
                        <p>🟡 <strong>Jumat:</strong> 08.00–11.30 WITA</p>
                        <p>🔴 <strong>Sabtu & Minggu:</strong> Libur</p>
                      </div>
                    },
                  ].map(c => (
                    <div key={c.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base" style={{ background:"#e8eef8" }}>{c.icon}</span>
                        {c.title}
                      </h3>
                      {c.content}
                    </div>
                  ))}

          
                </div>
              </Reveal>
              <Reveal variant="right">
                <div className="flex flex-col gap-4 h-full">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-1" style={{ minHeight:360 }}>
                    <iframe
                      title="Lokasi Desa Tumani"
                      src="https://maps.google.com/maps?q=Tumani,+Maesaan,+Minahasa+Selatan,+Sulawesi+Utara&z=15&output=embed"
                      width="100%" height="100%" style={{ border:0, minHeight:360 }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a href="https://www.google.com/maps/place/Tumani,+Maesaan,+South+Minahasa+Regency,+North+Sulawesi/@0.901337,124.471504,15z"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm">
                    🗺️ Buka di Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}