import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Info,
  Landmark,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Network,
  Phone,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

import iitJubilee from "@/assets/iit-kharagpur-platinum-jubilee.webp";
import iptLogo from "@/assets/ipt-meet-2027-logo.webp";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ content */

const EMAIL = "iitexecutiveprogramme@gmail.com";
const CONCEPT_NOTE = "/downloads/ipt-meet-2027-concept-note.pdf";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Conference Brochure", href: null, id: null },
  { label: "Call for Papers", href: "#cfp", id: "cfp" },
  { label: "Dates & Registration", href: "#dates-registration", id: "dates-registration" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Contact Us", href: "#contact", id: "contact" },
] as const;

const sectionIds = ["home", "about", "cfp", "dates-registration", "leadership", "contact"];

const journey = [
  { title: "Ideas", note: "Discover", icon: Lightbulb },
  { title: "Protection", note: "Safeguard", icon: ShieldCheck },
  { title: "Innovation", note: "Advance", icon: Sparkles },
  { title: "Impact", note: "Transform", icon: Globe2 },
];

const features = [
  {
    title: "Expert Panels",
    text: "Three high-level expert panels on emerging IP and technology challenges.",
    icon: UsersRound,
  },
  {
    title: "Paper Presentations",
    text: "Research paper presentations across multidisciplinary tracks.",
    icon: FileText,
  },
  {
    title: "Workshops",
    text: "Pre- and post-conference workshops on IP, innovation, policy, and design thinking.",
    icon: Lightbulb,
  },
  {
    title: "Special Sessions",
    text: "Special sessions for patent agents, IP professionals, lawyers, and students.",
    icon: Award,
  },
  {
    title: "Collaboration",
    text: "Opportunities for academic, industry, institutional, and international collaboration.",
    icon: Handshake,
  },
];

const stakeholders = [
  {
    title: "Academia and Research",
    detail: "Academicians, researchers, and scholars working at the frontier of their fields.",
    icon: GraduationCap,
  },
  {
    title: "Professional and Practitioner Experts",
    detail: "Patent agents, IP professionals, lawyers, and industry practitioners.",
    icon: Award,
  },
  {
    title: "Post Graduate Students",
    detail:
      "PG students in law, policy, management, science, engineering, and related disciplines.",
    icon: BookOpen,
  },
  {
    title: "Specialists and Policy Makers",
    detail: "Government, institutional, and innovation-ecosystem leaders shaping policy.",
    icon: Network,
  },
];

const paperFormats = [
  "Original Research Papers",
  "Conceptual Papers",
  "Case Studies",
  "Policy Analyses",
  "Professional Perspectives",
];

const tracks = [
  "Inclusive Innovation, Education and Societal Impact",
  "Artificial Intelligence and Generative AI",
  "DeepTech and Frontier Technologies",
  "Innovation Ecosystems, Startups and Entrepreneurship",
  "Technology Transfer and Commercialisation",
  "IP Policy, Regulation and International Governance",
  "Traditional Knowledge, Cultural Heritage and Community Rights",
  "Copyright, Data, Trade Secrets and Digital Assets",
  "Patent Law, Prosecution & Enforcement",
  "Digital Transformation and Smart Technologies",
  "Robotics, Autonomous Systems and Physical AI",
  "Biotechnology, Healthcare and Life Sciences",
  "Green Technologies and Sustainable Innovation",
  "Standard Essential Patents, FRAND and Technology Standards",
  "AI, Intellectual Property and Digital Governance",
].map((title, index) => ({ id: index + 1, title }));

const milestones = [
  { date: "12th November 2026", label: "First Call for Papers", status: "Active / Live" },
  { date: "20th December 2026", label: "Abstract Submission Deadline" },
  { date: "15th January 2027", label: "Notification of Acceptance" },
  { date: "31st January 2027", label: "Full Paper Submission" },
  { date: "25th to 27th February 2027", label: "Conference Dates" },
];

const leadershipGroups = [
  {
    id: "patrons",
    label: "Patrons & Chairpersons",
    icon: Landmark,
    description:
      "The leadership of IIT Kharagpur and invited dignitaries who guide the conference's vision.",
    roles: ["Chief Patron", "Patrons", "Chairperson", "Co-Chairperson"],
  },
  {
    id: "organising",
    label: "Organising Committee",
    icon: UsersRound,
    description:
      "The core team coordinating the programme, publications, logistics, and delegate experience.",
    roles: [
      "Convenor",
      "Organising Secretaries",
      "Technical Programme Chairs",
      "Publication Chairs",
    ],
  },
  {
    id: "advisory",
    label: "Advisory Committee",
    icon: ScrollText,
    description:
      "Academic, industry, policy, and international advisors supporting the conference's direction.",
    roles: [
      "Academic Advisory Board",
      "Industry Advisory Board",
      "Policy Advisory Board",
      "International Advisory Board",
    ],
  },
  {
    id: "collaborators",
    label: "Collaborating Institutions",
    icon: Building2,
    description:
      "Premier academic institutions, government bodies, industry associations, and international organisations.",
    roles: [
      "Academic Institutions",
      "Government & Policy Bodies",
      "Industry Associations",
      "International Organisations",
    ],
  },
  {
    id: "speakers",
    label: "Invited Speakers",
    icon: Microscope,
    description:
      "Distinguished voices from research, industry, and policy joining the plenary and panel sessions.",
    roles: ["Plenary Speakers", "Panel Discussants", "Workshop Leads", "Invited Paper Sessions"],
  },
];

const contactPeople = [
  { name: "Ms. R. Chameli", phone: "+91-9566038945", href: "tel:+919566038945" },
  { name: "Ms. Rishika Seal", phone: "+91-8897719214", href: "tel:+918897719214" },
];

/* ------------------------------------------------------------------- pieces */

const ctaPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/25 transition hover:bg-brand-magenta/90 hover:shadow-xl hover:shadow-brand-magenta/30";

const ctaSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white/85 px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-navy/30 hover:bg-white hover:shadow-sm";

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  titleId?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-3xl">
      <p
        className={cn(
          "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
          dark ? "text-brand-teal-soft/75" : "text-brand-teal",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-brand-slate",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BrandLockup({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img
        src={iptLogo}
        alt="IPT Meet 2027 — From Ideas to Impact"
        className="h-9 w-auto max-w-[8.5rem] object-contain sm:h-10 sm:max-w-[10rem]"
      />
      <span className="h-9 w-px shrink-0 bg-brand-line" aria-hidden="true" />
      <img
        src={iitJubilee}
        alt="IIT Kharagpur Platinum Jubilee emblem, 1951–2027"
        className="h-9 w-auto shrink-0 object-contain sm:h-10"
      />
    </span>
  );
}

/* --------------------------------------------------------------------- page */

export function ConferenceSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openBrochure = useCallback(() => {
    setMenuOpen(false);
    setBrochureOpen(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const normalisedQuery = query.trim().toLowerCase();
  const filteredTracks = useMemo(() => {
    if (!normalisedQuery) return tracks;
    return tracks.filter(
      (track) =>
        track.title.toLowerCase().includes(normalisedQuery) ||
        String(track.id).padStart(2, "0").includes(normalisedQuery),
    );
  }, [normalisedQuery]);

  const showMoreCard =
    !normalisedQuery ||
    "much more cross-disciplinary submissions welcome".includes(normalisedQuery);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const field = document.createElement("textarea");
        field.value = EMAIL;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main className="min-h-dvh bg-white">
      {/* ------------------------------------------------------------ header */}
      <header className="sticky top-0 z-50 border-b border-brand-line/80 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
        <div className="shell flex h-16 items-center justify-between gap-4 lg:h-20">
          <a
            href="#home"
            onClick={() => setActiveId("home")}
            className="flex shrink-0 items-center rounded-lg py-1"
            aria-label="IPT Meet 2027 home"
          >
            <BrandLockup />
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    activeId === item.id
                      ? "bg-brand-surface text-brand-navy"
                      : "text-brand-navy/70 hover:bg-brand-surface hover:text-brand-navy",
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={openBrochure}
                  className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-magenta px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-magenta/90"
                >
                  <FileText size={15} aria-hidden="true" />
                  {item.label}
                </button>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={openBrochure}
              className="hidden items-center gap-2 rounded-full bg-brand-magenta px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-magenta/90 sm:inline-flex"
            >
              <FileText size={14} aria-hidden="true" />
              Brochure
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-line bg-white text-brand-navy transition hover:bg-brand-surface"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-x-0 top-16 bottom-0 z-40 bg-brand-navy/20 xl:hidden"
              onClick={closeMenu}
            />
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-brand-line bg-white px-5 pt-3 pb-6 shadow-xl xl:hidden"
            >
              <ul className="flex flex-col divide-y divide-brand-line">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveId(item.id);
                          closeMenu();
                        }}
                        className="flex items-center justify-between py-3.5 text-base font-medium text-brand-navy"
                      >
                        {item.label}
                        <ArrowRight size={16} className="text-brand-teal" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={openBrochure}
                        className="my-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-magenta px-5 py-3 text-sm font-semibold text-white"
                      >
                        <FileText size={16} aria-hidden="true" />
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </>
        ) : null}
      </header>

      {/* -------------------------------------------------------------- hero */}
      <section id="home" className="relative overflow-hidden scroll-mt-24 bg-white">
        <div className="pointer-events-none absolute inset-0 hero-aura" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 blueprint-grid" aria-hidden="true" />

        <div className="shell relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-24">
          <div>
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-brand-teal/20 bg-brand-teal-soft px-4 py-2 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-brand-teal">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta"
                aria-hidden="true"
              />
              Indian Institute of Technology Kharagpur
              <span aria-hidden="true" className="text-brand-teal/50">
                •
              </span>
              Celebrating Platinum Jubilee (August 18, 2025 – August 18, 2027)
            </p>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-brand-navy sm:text-6xl lg:text-7xl">
              IPT Meet <span className="text-brand-magenta">2027</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-brand-navy/85 sm:text-xl">
              International Conference on Innovation, Intellectual Property &amp; Technology
              Transfer
            </p>

            <div className="mt-6 flex items-center gap-2" aria-hidden="true">
              <span className="h-0.5 w-12 bg-brand-teal" />
              <span className="h-0.5 w-4 bg-brand-magenta" />
            </div>

            <p className="mt-4 text-2xl font-semibold text-brand-navy sm:text-3xl">
              Challenges and Opportunities in Emerging Technologies
            </p>
            <p className="mt-2 text-xl font-semibold text-brand-magenta sm:text-2xl">
              From Ideas to Impact
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-slate">
              Empowering Pioneers to Drive Deep Tech Innovation &amp; Technology Transfer.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
                <CalendarDays size={16} className="text-brand-teal" aria-hidden="true" />
                25th to 27th February 2027
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
                <MapPin size={16} className="text-brand-teal" aria-hidden="true" />
                IIT Kharagpur, West Bengal, India
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#cfp" className={ctaPrimary}>
                Explore Call for Papers
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#dates-registration" className={ctaSecondary}>
                <CalendarDays size={16} aria-hidden="true" />
                Important Dates
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2.25rem] border border-brand-line/70"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-navy/[0.04]"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] border border-brand-line bg-white p-7 shadow-[0_30px_80px_-40px_rgba(15,23,74,0.45)] sm:p-9">
              <img
                src={iptLogo}
                alt="IPT Meet 2027 logo"
                className="mx-auto h-auto w-full max-w-[21rem] object-contain"
              />
              <div className="mt-7 h-px w-full bg-brand-line" aria-hidden="true" />
              <div className="mt-6 flex items-center justify-between gap-5">
                <img
                  src={iitJubilee}
                  alt="IIT Kharagpur Platinum Jubilee emblem"
                  className="h-20 w-auto object-contain sm:h-24"
                />
                <div className="text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    Platinum Jubilee
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-brand-navy">
                    1951 – 2027
                  </p>
                  <p className="mt-1 text-xs text-brand-slate">75 years of excellence</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden h-24 w-24 flex-col items-center justify-center rounded-full border border-brand-magenta/25 bg-white text-brand-navy shadow-xl sm:flex">
              <span className="text-lg font-extrabold">25–27</span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-brand-teal">
                Feb 2027
              </span>
            </div>
          </div>
        </div>

        {/* core journey strip */}
        <div className="relative border-y border-white/10 bg-brand-navy text-white">
          <div className="shell grid gap-8 py-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                The conference journey
              </p>
              <p className="mt-2 text-2xl font-semibold leading-snug text-white">
                From possibility
                <br className="hidden lg:block" /> to progress.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="relative flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-teal/40 bg-brand-teal/10 text-brand-teal-soft">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        0{index + 1}
                      </span>
                      <span className="block text-sm font-semibold text-white">{step.title}</span>
                      <span className="block text-xs text-white/60">{step.note}</span>
                    </span>
                    {index < journey.length - 1 ? (
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-teal/50 lg:block"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- highlights */}
      <section aria-labelledby="highlights-title" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Conference highlights"
              title="A meeting of minds, built for outcomes."
              description="Five days of rigorous dialogue, publication, and partnership around the ideas that will define the next decade of innovation."
              titleId="highlights-title"
            />
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-brand-slate">
              01 <span className="mx-2 inline-block h-px w-8 align-middle bg-brand-magenta" />{" "}
              Highlights
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-brand-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-navy/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-brand-line">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- about */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-24 border-y border-brand-line bg-brand-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="About"
            title="A legacy of ideas. A future in motion."
            description="IPT Meet 2027 pairs the intellectual heritage of India's first IIT with an uncompromising focus on the technologies redefining the global economy."
            titleId="about-title"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-brand-line bg-white p-7 sm:p-9">
              <span className="w-fit rounded-full bg-brand-magenta-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-magenta">
                About IPT Meet 2027
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-brand-navy">
                A multidisciplinary platform for the innovation economy
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                IPT Meet 2027 unites researchers, academicians, industry leaders, policymakers,
                patent agents, legal practitioners, entrepreneurs, and students to deliberate on
                emerging technologies, intellectual property, innovation, and technology transfer.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                The conference creates a shared space to exchange ideas, present research, examine
                policy challenges, and build meaningful collaboration across academia, industry,
                government, and innovation ecosystems.
              </p>
              <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-brand-line pt-6 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                    Dates
                  </dt>
                  <dd className="mt-1 font-semibold text-brand-navy">25–27 Feb 2027</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                    Venue
                  </dt>
                  <dd className="mt-1 font-semibold text-brand-navy">IIT Kharagpur</dd>
                </div>
              </dl>
            </article>

            <article className="flex flex-col rounded-3xl border border-brand-line bg-white p-7 sm:p-9">
              <span className="w-fit rounded-full bg-brand-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                About IIT Kharagpur
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-brand-navy">
                India&apos;s first IIT. An Institute of National Importance.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                Established in 1951, the Indian Institute of Technology Kharagpur is the first and
                one of the most prestigious IITs in India. Recognised as an Institute of National
                Importance, it has pioneered education and research across science, engineering,
                technology, management, and the social sciences.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                Its world-class laboratories, research centres, and facilities drive advances from
                artificial intelligence, energy, and space technology to sustainable deep tech.
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-brand-line pt-6">
                <img
                  src={iitJubilee}
                  alt="IIT Kharagpur Platinum Jubilee emblem, 1951–2027"
                  className="h-16 w-auto object-contain"
                />
                <a
                  href="https://www.iitkgp.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-magenta transition hover:gap-3"
                >
                  Discover IIT Kharagpur
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          <div className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" aria-hidden="true" />
                  Stakeholder composition
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                  Who will be in the room
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-brand-slate">
                Four communities, one agenda: turning research into protected, transferable, and
                scalable impact.
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stakeholders.map(({ icon: Icon, title, detail }, index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-brand-line bg-white p-6 transition hover:border-brand-teal/40 hover:shadow-md hover:shadow-brand-navy/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-surface text-brand-teal">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold text-brand-line">0{index + 1}</span>
                  </div>
                  <h4 className="mt-5 text-base font-semibold leading-snug text-brand-navy">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- cfp */}
      <section
        id="cfp"
        aria-labelledby="cfp-title"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Call for papers"
              title="Bring your research into the conversation."
              description="IPT Meet 2027 invites original contributions on innovation, intellectual property, emerging technologies, and technology transfer."
              titleId="cfp-title"
            />
            <div className="flex w-full flex-col gap-2 lg:w-80">
              <label
                htmlFor="track-search"
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate"
              >
                Search the 15 tracks
              </label>
              <div className="flex items-center gap-2 rounded-full border border-brand-line bg-brand-surface px-4 py-2.5 transition focus-within:border-brand-teal focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-teal/10">
                <Search size={17} className="shrink-0 text-brand-teal" aria-hidden="true" />
                <input
                  id="track-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try “AI”, “patents”, “green”…"
                  className="w-full bg-transparent text-sm text-brand-navy outline-none placeholder:text-brand-slate/70"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear track search"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-brand-slate transition hover:bg-brand-line/60 hover:text-brand-navy"
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2.5 rounded-2xl border border-brand-line bg-brand-surface px-5 py-4">
            <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
              Accepted formats
            </span>
            {paperFormats.map((format) => (
              <span
                key={format}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy"
              >
                <Check size={13} className="text-brand-teal" aria-hidden="true" />
                {format}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Research areas
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                Conference tracks
              </h3>
            </div>
            <p aria-live="polite" className="text-sm text-brand-slate">
              Showing <span className="font-semibold text-brand-navy">{filteredTracks.length}</span>{" "}
              of {tracks.length} tracks
            </p>
          </div>
          <p className="mt-1.5 text-sm text-brand-slate">
            The list is indicative, not exhaustive. Related contributions are welcome.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTracks.map((track) => (
              <article
                key={track.id}
                className="group flex items-start gap-4 rounded-2xl border border-brand-line bg-white p-5 transition hover:border-brand-teal/40 hover:shadow-md hover:shadow-brand-navy/5"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-teal-soft text-xs font-bold text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white">
                  {String(track.id).padStart(2, "0")}
                </span>
                <h3 className="flex-1 text-sm font-semibold leading-snug text-brand-navy">
                  {track.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand-line transition group-hover:text-brand-magenta"
                />
              </article>
            ))}

            {showMoreCard ? (
              <article className="flex items-start gap-4 rounded-2xl border border-dashed border-brand-magenta/40 bg-brand-magenta-soft p-5">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-magenta text-sm font-bold text-white">
                  +
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-brand-magenta">
                    &amp; much more…
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">
                    Cross-disciplinary submissions welcome.
                  </p>
                </div>
              </article>
            ) : null}

            {filteredTracks.length === 0 && !showMoreCard ? (
              <div className="col-span-full rounded-2xl border border-dashed border-brand-line bg-brand-surface px-6 py-10 text-center">
                <p className="text-base font-semibold text-brand-navy">
                  No tracks match “{query.trim()}”.
                </p>
                <p className="mt-1 text-sm text-brand-slate">
                  Try a broader keyword, or explore the full list.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-navy/30"
                >
                  Reset search
                </button>
              </div>
            ) : null}
          </div>

          <div className="mt-10 grid gap-5 rounded-3xl bg-brand-navy p-7 text-white sm:grid-cols-[auto_1fr] sm:items-center sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5 text-brand-teal-soft">
              <FileText size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-teal-soft/80">
                Submission guidelines
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                Detailed submission guidelines, formatting templates, and abstract submission portal
                links will be announced in the forthcoming conference brochure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- dates & registration */}
      <section
        id="dates-registration"
        aria-labelledby="dates-title"
        className="relative scroll-mt-24 overflow-hidden bg-brand-navy py-16 text-white sm:py-20 lg:py-24"
      >
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-52 -left-32 h-[28rem] w-[28rem] rounded-full border border-white/5"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Mark your calendar"
              title="Important dates"
              description="Five milestones from the first call to the conference itself. Plan ahead for IPT Meet 2027."
              tone="dark"
              titleId="dates-title"
            />
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              2026 <span className="mx-2 inline-block h-px w-8 align-middle bg-brand-magenta" />{" "}
              2027
            </p>
          </div>

          <div className="relative mt-12">
            <span
              className="absolute top-2 bottom-2 left-1 w-px bg-white/15 lg:top-1 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
              aria-hidden="true"
            />
            <ol className="grid gap-9 lg:grid-cols-5 lg:gap-6">
              {milestones.map((milestone, index) => {
                const isLive = index === 0;
                return (
                  <li key={milestone.label} className="relative pl-8 lg:pl-0 lg:pr-5">
                    <span
                      className={cn(
                        "absolute left-0 top-1 grid h-2 w-2 place-items-center rounded-full border bg-brand-navy lg:static lg:mb-6",
                        isLive
                          ? "border-brand-magenta ring-4 ring-brand-magenta/25"
                          : "border-white/40",
                      )}
                      aria-hidden="true"
                    >
                      {isLive ? <span className="h-1 w-1 rounded-full bg-brand-magenta" /> : null}
                    </span>

                    {milestone.status ? (
                      <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-magenta/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-magenta-soft">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-brand-magenta"
                          aria-hidden="true"
                        />
                        {milestone.status}
                      </p>
                    ) : null}

                    <time className="block text-xs font-semibold uppercase tracking-[0.1em] text-brand-teal-soft">
                      {milestone.date}
                    </time>
                    <h3 className="mt-1.5 text-base font-semibold leading-snug text-white">
                      {milestone.label}
                    </h3>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal-soft/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" aria-hidden="true" />
                Join the dialogue
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join Us! Be part of a multidisciplinary dialogue shaping the future of innovation,
                intellectual property, and technology transfer.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                Registration fee tiers and the online registration link will be announced in the
                forthcoming conference brochure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-brand-navy-deep/60 p-6">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-teal-soft/80">
                  Registration
                </p>
                <Clock3 size={20} className="text-brand-teal-soft/70" aria-hidden="true" />
              </div>
              <h4 className="mt-5 text-xl font-semibold text-white">Details forthcoming</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Fee tiers, categories, and the registration portal will open alongside the
                conference brochure.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
                Registration opening soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- leadership */}
      <section
        id="leadership"
        aria-labelledby="leadership-title"
        className="scroll-mt-24 border-b border-brand-line bg-brand-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading
              eyebrow="People & partnerships"
              title="A collective endeavour."
              description="IPT Meet 2027 is built with premier academic institutions, government bodies, industry associations, professional bodies, and international organisations — a collaborative platform for a shared agenda."
              titleId="leadership-title"
            />
            <span className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-brand-line bg-white text-brand-magenta lg:grid">
              <Handshake size={32} aria-hidden="true" strokeWidth={1.4} />
            </span>
          </div>

          <Tabs defaultValue="patrons" className="mt-10">
            <TabsList
              aria-label="Leadership categories"
              className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0"
            >
              {leadershipGroups.map((group) => (
                <TabsTrigger
                  key={group.id}
                  value={group.id}
                  className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-slate shadow-none transition hover:border-brand-teal/40 hover:text-brand-navy data-[state=active]:border-brand-magenta data-[state=active]:bg-brand-magenta data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {leadershipGroups.map((group) => {
              const Icon = group.icon;
              return (
                <TabsContent key={group.id} value={group.id} className="mt-6">
                  <div className="rounded-3xl border border-brand-line bg-white p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-brand-line pb-6">
                      <div className="flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-navy">{group.label}</h3>
                          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-brand-slate">
                            {group.description}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-brand-surface px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-teal">
                        To be announced
                      </span>
                    </div>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {group.roles.map((role) => (
                        <li
                          key={role}
                          className="rounded-xl border border-dashed border-brand-line bg-brand-surface/70 p-4"
                        >
                          <p className="text-sm font-semibold text-brand-navy">{role}</p>
                          <p className="mt-1 text-xs text-brand-slate">
                            Details in the forthcoming brochure
                          </p>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-brand-slate">
                      <Info
                        size={15}
                        className="mt-0.5 shrink-0 text-brand-teal"
                        aria-hidden="true"
                      />
                      Details to be announced in the forthcoming conference brochure. No names are
                      published until they are confirmed.
                    </p>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* ------------------------------------------------------------ contact */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" aria-hidden="true" />
                Get in touch
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
              >
                Let&apos;s continue the conversation.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-slate">
                For conference enquiries, submissions, and collaboration proposals, reach the
                organising team directly.
              </p>

              <div className="mt-8 rounded-2xl border border-brand-line bg-brand-surface p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                  Official email
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2.5 break-all text-base font-semibold text-brand-navy transition hover:text-brand-magenta"
                  >
                    <Mail size={18} className="shrink-0 text-brand-teal" aria-hidden="true" />
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={cn(
                      "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition",
                      copied
                        ? "border-brand-teal bg-brand-teal text-white"
                        : "border-brand-line bg-white text-brand-navy hover:border-brand-teal/50 hover:text-brand-teal",
                    )}
                  >
                    {copied ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                  <span aria-live="polite" className="sr-only">
                    {copied ? "Email address copied to clipboard" : ""}
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contactPeople.map((person) => (
                  <a
                    key={person.name}
                    href={person.href}
                    className="group flex items-center gap-3 rounded-2xl border border-brand-line bg-white p-4 transition hover:border-brand-teal/50 hover:bg-brand-teal-soft/50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-teal-soft text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white">
                      <Phone size={16} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-brand-navy">
                        {person.name}
                      </span>
                      <span className="block text-sm text-brand-slate">{person.phone}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-brand-line bg-white p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                  Host institute
                </p>
                <p className="mt-3 flex gap-3 text-sm leading-relaxed text-brand-navy">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-teal"
                    aria-hidden="true"
                  />
                  <span>
                    Indian Institute of Technology Kharagpur
                    <br />
                    Kharagpur, West Bengal, India — 721302
                  </span>
                </p>
                <a
                  href="https://www.iitkgp.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-magenta transition hover:gap-2.5"
                >
                  www.iitkgp.ac.in
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-brand-line bg-brand-surface shadow-sm">
              <div className="flex items-center justify-between gap-3 border-b border-brand-line bg-white px-5 py-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <MapPin size={16} className="text-brand-magenta" aria-hidden="true" />
                  IIT Kharagpur campus
                </p>
                <a
                  href="https://maps.google.com/?q=Indian+Institute+of+Technology+Kharagpur"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:underline"
                >
                  Open in Maps
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
              <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
                <iframe
                  title="Google Map of IIT Kharagpur campus"
                  src="https://maps.google.com/maps?q=Indian%20Institute%20of%20Technology%20Kharagpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- footer */}
      <footer className="border-t border-white/10 bg-brand-navy text-white">
        <div className="shell grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.9fr] lg:gap-16 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-4 py-3">
              <img
                src={iptLogo}
                alt="IPT Meet 2027"
                className="h-9 w-auto max-w-[8rem] object-contain"
              />
              <span className="h-8 w-px bg-brand-line" aria-hidden="true" />
              <img
                src={iitJubilee}
                alt="IIT Kharagpur Platinum Jubilee emblem"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              IPT Meet 2027 — From Ideas to Impact. Hosted by IIT Kharagpur, celebrating its
              Platinum Jubilee (August 18, 2025 – August 18, 2027).
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal-soft/80">
              <CalendarDays size={13} aria-hidden="true" />
              25–27 February 2027 · Kharagpur, India
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems
                .filter((item) => item.href)
                .map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href ?? "#home"}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href={CONCEPT_NOTE}
                  download
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
                >
                  Concept Note (PDF)
                  <Download size={13} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-2 break-all transition hover:text-white"
                >
                  <Mail
                    size={15}
                    className="mt-1 shrink-0 text-brand-teal-soft"
                    aria-hidden="true"
                  />
                  {EMAIL}
                </a>
              </li>
              {contactPeople.map((person) => (
                <li key={person.name}>
                  <a
                    href={person.href}
                    className="inline-flex items-start gap-2 transition hover:text-white"
                  >
                    <Phone
                      size={15}
                      className="mt-1 shrink-0 text-brand-teal-soft"
                      aria-hidden="true"
                    />
                    <span>
                      {person.name} · {person.phone}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Globe2
                  size={15}
                  className="mt-1 shrink-0 text-brand-teal-soft"
                  aria-hidden="true"
                />
                <a
                  href="https://www.iitkgp.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  www.iitkgp.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © 2026–2027 IPT Meet · Indian Institute of Technology Kharagpur. All rights reserved.
            </p>
            <a
              href="#home"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      {/* ---------------------------------------------------- brochure dialog */}
      <Dialog open={brochureOpen} onOpenChange={setBrochureOpen}>
        <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl gap-0 overflow-y-auto rounded-3xl border-brand-line p-0 text-white sm:rounded-3xl">
          <div className="bg-brand-navy px-6 py-7 sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal-soft/75">
              Conference brochure
            </p>
            <DialogHeader className="mt-2 space-y-2 text-left">
              <DialogTitle className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Two documents, one conference
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-white/70">
                The Concept Note is ready for immediate download. The full Official Conference
                Brochure — with paper templates and registration links — is forthcoming.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 px-6 py-6 sm:px-8">
            <div className="rounded-2xl border border-brand-line bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-brand-teal-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-teal">
                  Available now
                </span>
                <ScrollText size={18} className="text-brand-line" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">
                IPT Meet 2027 Concept Note
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                Conference concept, themes, tracks, and contact details in one document.
              </p>
              <a href={CONCEPT_NOTE} download className={cn(ctaPrimary, "mt-4 w-full sm:w-auto")}>
                <Download size={16} aria-hidden="true" />
                Download Concept Note
              </a>
            </div>

            <div className="rounded-2xl border border-dashed border-brand-line bg-brand-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-brand-magenta-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-magenta">
                  Forthcoming
                </span>
                <Clock3 size={18} className="text-brand-line" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">
                Official Conference Brochure
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-slate">
                Paper templates, submission guidelines, registration fee tiers, and the submission
                portal will be published here as soon as they are released.
              </p>
            </div>
          </div>

          <div className="flex justify-end border-t border-brand-line px-6 py-4 sm:px-8">
            <DialogClose className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-surface">
              Close
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
