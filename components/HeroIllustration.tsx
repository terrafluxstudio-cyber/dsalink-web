export function HeroIllustration() {
  return (
    <div aria-hidden="true" className="w-full select-none">
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full max-w-[440px] h-auto"
        role="img"
        aria-label="Diagram showing two school admission pathways: PSLE-only route and DSA route"
      >
        {/* ── P6 origin node ── */}
        <rect x="226" y="24" width="148" height="42" rx="10" fill="#0d3f5f" />
        <text x="300" y="43" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">P6 Student</text>
        <text x="300" y="58" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)">Singapore 2026</text>

        {/* Stem to fork */}
        <line x1="300" y1="66" x2="300" y2="96" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* ── Fork node ── */}
        <circle cx="300" cy="103" r="7" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

        {/* ── PSLE-ONLY path (left, dashed slate) ── */}
        <path d="M293 107 Q212 130 130 157" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x="66" y="159" width="128" height="46" rx="9" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="130" y="178" textAnchor="middle" fontSize="12" fontWeight="600" fill="#64748b">PSLE Only</text>
        <text x="130" y="194" textAnchor="middle" fontSize="10" fill="#94a3b8">One exam, Nov 2026</text>

        <line x1="130" y1="205" x2="130" y2="238" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x="62" y="238" width="136" height="40" rx="9" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="130" y="256" textAnchor="middle" fontSize="11" fill="#94a3b8">Score determines</text>
        <text x="130" y="270" textAnchor="middle" fontSize="11" fill="#94a3b8">school options</text>

        {/* ── DSA path (right, gold) ── */}
        <path d="M307 107 Q374 130 440 157" stroke="#c6a24a" strokeWidth="2" />
        <rect x="376" y="159" width="128" height="46" rx="9" fill="#faf5e8" stroke="#c6a24a" strokeWidth="2" />
        <text x="440" y="178" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9a7d38">DSA Application</text>
        <text x="440" y="194" textAnchor="middle" fontSize="10" fill="#c6a24a">Talent pathway, May-Jun</text>

        {/* DSA -> 3 branches */}
        <path d="M400 205 Q360 228 320 250" stroke="#c6a24a" strokeWidth="1.5" />
        <rect x="256" y="250" width="128" height="40" rx="8" fill="#faf5e8" stroke="#d4b86a" strokeWidth="1.5" />
        <text x="320" y="268" textAnchor="middle" fontSize="11" fontWeight="600" fill="#9a7d38">IP Schools</text>
        <text x="320" y="281" textAnchor="middle" fontSize="10" fill="#c6a24a">AL 8-16</text>

        <line x1="440" y1="205" x2="440" y2="250" stroke="#c6a24a" strokeWidth="1.5" />
        <rect x="376" y="250" width="128" height="40" rx="8" fill="#faf5e8" stroke="#d4b86a" strokeWidth="1.5" />
        <text x="440" y="268" textAnchor="middle" fontSize="11" fontWeight="600" fill="#9a7d38">Mainstream</text>
        <text x="440" y="281" textAnchor="middle" fontSize="10" fill="#c6a24a">AL 16-28</text>

        <path d="M480 205 Q510 228 537 250" stroke="#c6a24a" strokeWidth="1.5" />
        <rect x="493" y="250" width="88" height="40" rx="8" fill="#faf5e8" stroke="#d4b86a" strokeWidth="1.5" />
        <text x="537" y="268" textAnchor="middle" fontSize="11" fontWeight="600" fill="#9a7d38">Niche</text>
        <text x="537" y="281" textAnchor="middle" fontSize="10" fill="#c6a24a">Arts / STEM</text>

        {/* ── Legend ── */}
        <line x1="24" y1="330" x2="52" y2="330" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="58" y="334" fontSize="10" fill="#94a3b8">PSLE-only</text>
        <line x1="148" y1="330" x2="176" y2="330" stroke="#c6a24a" strokeWidth="2" />
        <text x="182" y="334" fontSize="10" fill="#c6a24a" fontWeight="600">DSA pathway</text>
      </svg>
    </div>
  );
}
