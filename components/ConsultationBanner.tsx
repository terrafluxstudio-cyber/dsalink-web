import { SITE_CONTACT_EMAIL } from "@/lib/seo";

const BULLETS = [
  "Regional transition support",
  "Bilingual talent profiling",
  "PSLE data analytics",
  "Adaptive interview training",
] as const;

const CONSULT_MAILTO = `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(
  "DSALink — strategy session request",
)}&body=${encodeURIComponent(
  "School level / pathway:\nPreferred times (SGT):\nWhat you would like help with:\n",
)}`;

export default function ConsultationBanner() {
  return (
    <div className="mx-auto my-8 flex w-full max-w-6xl flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#0d1b2a] p-10 shadow-2xl md:flex-row md:p-14">
      <div className="flex-1 space-y-6">
        <div className="inline-block rounded-full border border-[#b89152]/30 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#b89152]">
          Global excellence · regional success
        </div>

        <h2 className="text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
          Secure your pathway to prestige
        </h2>

        <p className="max-w-xl text-lg uppercase leading-relaxed text-gray-400">
          Strategic DSA advisory for students navigating cross-border education
          systems. We bridge the gap between talent and elite admissions.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {BULLETS.map((item) => (
            <li
              key={item}
              className="flex items-center text-sm font-medium uppercase tracking-wide text-gray-300"
            >
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#b89152]/20 text-[#b89152]">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:ml-12 md:mt-0 md:w-auto">
        <a
          href={CONSULT_MAILTO}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#b89152] px-8 py-4 text-center text-sm font-bold uppercase tracking-tighter text-[#0d1b2a] transition-all hover:scale-[1.02] hover:bg-[#a68041] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b89152]"
        >
          Book strategy session
        </a>
        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
          First 15-min consultation free
        </p>
      </div>
    </div>
  );
}
