import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo_minahasa_selatan.png";

const navItems = [
  { path: "/",        label: "Beranda",         icon: "🏠" },
  { path: "/sejarah", label: "Sejarah",          icon: "📖" },
  { path: "/wilayah", label: "Wilayah",          icon: "🗺️" },
  { path: "/riwayat", label: "Riwayat Jabatan",  icon: "📋" },
  { path: "/galeri",  label: "Galeri",           icon: "🖼️" },
];

function Logo() {
  return (
    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
      style={{ background: "linear-gradient(135deg,#1a2e5a,#3b5bdb)" }}>
      <img src={logoImg} alt="Logo Desa Tumani" className="w-8 h-8 object-contain" />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (path) => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Playfair+Display:wght@700&display=swap');
        .nav-font  { font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-brand { font-family: 'Playfair Display', Georgia, serif; }

        .nav-item-active {
          background: rgba(59,91,219,0.10) !important;
          color: #1a2e5a !important;
          border-color: rgba(59,91,219,0.25) !important;
        }
        .nav-item-idle {
          color: #475569;
          border-color: transparent;
        }
        .nav-item-idle:hover {
          background: #e8edf8;
          color: #1a2e5a;
        }

        .mobile-overlay {
          animation: slideDown 0.25s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #1a2e5a;
          border-radius: 99px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
      `}</style>

      <nav
        className="nav-font sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "#ffffff",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: "1px solid #dde3f0",
          boxShadow: scrolled ? "0 4px 24px rgba(26,46,90,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <Logo />
            <div className="text-left leading-tight">
              <p className="nav-brand font-bold text-base leading-none" style={{ color: "#0a1628" }}>
                Desa Tumani
              </p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: "#3b5bdb" }}>
                Kec. Maesaan · Kab. Minahasa Selatan
              </p>
            </div>
          </button>

          {/* ── Desktop Menu ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 inline-block
                    ${isActive ? "nav-item-active" : "nav-item-idle border-transparent"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                          style={{ background: "#1a2e5a" }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-colors"
            style={{ background: menuOpen ? "#e8edf8" : "transparent" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"
              style={menuOpen ? { transform: "rotate(45deg) translate(3px,3px)" } : {}} />
            <span className="hamburger-line"
              style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}} />
            <span className="hamburger-line"
              style={menuOpen ? { transform: "rotate(-45deg) translate(3px,-3px)" } : {}} />
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        {menuOpen && (
          <div
            className="mobile-overlay lg:hidden px-4 pb-5 pt-2"
            style={{
              background: "#ffffff",
              borderTop: "1px solid #dde3f0",
              boxShadow: "0 12px 40px rgba(26,46,90,0.10)",
            }}
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-semibold text-left border transition-all duration-200
                    ${isActive ? "nav-item-active" : "nav-item-idle border-transparent bg-slate-50"}`
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}