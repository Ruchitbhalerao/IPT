import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Atom,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Network,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

import iitJubilee from "@/assets/iit-kharagpur-platinum-jubilee.png.asset.json";
import iptLogo from "@/assets/ipt-meet-2027-transparent.webp.asset.json";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Dates & Registration", href: "#dates-registration" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact Us", href: "#contact" },
];

const highlights = [
  { icon: UsersRound, text: "Three high-level expert panels on emerging IP and technology challenges." },
  { icon: FileText, text: "Research paper presentations across multidisciplinary tracks." },
  { icon: Lightbulb, text: "Pre- and post-conference workshops on IP, innovation, policy, and design thinking." },
  { icon: Handshake, text: "Special sessions for patent agents, IP professionals, lawyers, and students." },
  { icon: Globe2, text: "Opportunities for academic, industry, institutional, and international collaboration." },
];

const journey = [
  { title: "Ideas", icon: Lightbulb, note: "Discover" },
  { title: "Protection", icon: ShieldCheck, note: "Safeguard" },
  { title: "Innovation", icon: Sparkles, note: "Advance" },
  { title: "Impact", icon: Globe2, note: "Transform" },
];

const stakeholders = [
  { title: "Academia and Research", detail: "Academicians, researchers, and scholars", icon: GraduationCap },
  { title: "Professional and Practitioner Experts", detail: "Patent agents, IP professionals, lawyers, and industry experts", icon: Award },
  { title: "Post Graduate Students", detail: "PG students in law, policy, management, science, engineering, and related disciplines", icon: BookOpen },
  { title: "Specialists and Policy Makers", detail: "Industry, government, institutions, and innovation ecosystems", icon: Network },
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
];

const milestones = [
  { date: "12 November 2026", label: "First Call for Papers", status: "Call announced" },
  { date: "20 December 2026", label: "Abstract Submission Deadline" },
  { date: "15 January 2027", label: "Notification of Acceptance" },
  { date: "31 January 2027", label: "Full Paper Submission" },
  { date: "25–27 February 2027", label: "Conference Dates" },
];

const leadershipGroups = [
  "Patrons & Chief Patrons",
  "Organising Committee",
  "Advisory Committee",
  "Speakers & Collaborators",
];

const contactPeople = [
  { name: "Ms. R. Chameli", phone: "+91-9566038945", href: "tel:+919566038945" },
  { name: "Ms. Rishika Seal", phone: "+91-8897719214", href: "tel:+918897719214" },
];

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

export function ConferenceSite() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredTracks = useMemo(
    () => tracks.filter((track) => track.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="IPT Meet 2027 home" onClick={closeMenu}>
          <img className="brand-ipt-logo" src={iptLogo.url} alt="IPT Meet 2027" />
          <span className="brand-divider" />
          <img className="brand-iit-logo" src={iitJubilee.url} alt="IIT Kharagpur Platinum Jubilee" />
        </a>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-download" href="/downloads/ipt-meet-2027-concept-note.pdf" download>
            <Download size={15} /> Conference Brochure
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> IIT Kharagpur · Platinum Jubilee 2025–2027</div>
            <h1>IPT Meet <span>2027</span></h1>
            <p className="hero-category">International Conference on Innovation, Intellectual Property &amp; Technology Transfer</p>
            <div className="hero-rule"><span /></div>
            <p className="hero-theme">Challenges and Opportunities in<br className="desktop-break" /> Emerging Technologies</p>
            <p className="hero-tagline">From Ideas to Impact</p>
            <p className="hero-support">Empowering pioneers to drive deep-tech innovation and technology transfer.</p>
            <div className="hero-facts">
              <span><CalendarDays size={17} /> 25–27 February 2027</span>
              <i aria-hidden="true" />
              <span><MapPin size={17} /> IIT Kharagpur, West Bengal, India</span>
            </div>
            <div className="hero-actions">
              <Button variant="conference" size="lg" asChild><a href="#cfp">Explore call for papers <ArrowRight size={17} /></a></Button>
              <Button variant="conferenceOutline" size="lg" asChild><a href="#dates-registration">Important dates <ArrowDown size={16} /></a></Button>
            </div>
          </div>
          <div className="hero-mark-wrap">
            <img src={iptLogo.url} alt="IPT Meet 2027 — From Ideas to Impact" className="hero-mark" />
            <div className="hero-date-stamp"><span>25</span><span>—</span><span>27</span><small>FEB<br />2027</small></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-side-note">Kharagpur<br />India</div>
          </div>
        </div>
        <a className="scroll-cue" href="#journey"><span /> Scroll to explore</a>
        <div className="hero-bottomline"><span>01 / 06</span><div /><span>Innovation · IP · Technology Transfer</span></div>
      </section>

      <section className="journey-section" id="journey" aria-label="From ideas to impact">
        <div className="journey-intro"><span>THE CONFERENCE JOURNEY</span><strong>From possibility<br />to progress.</strong></div>
        <div className="journey-track">
          {journey.map((step, index) => {
            const Icon = step.icon;
            return <div className="journey-step" key={step.title}>
              <span className="journey-index">0{index + 1}</span>
              <span className="journey-icon"><Icon size={21} /></span>
              <span className="journey-name">{step.title}</span>
              <span className="journey-note">{step.note}</span>
              {index < journey.length - 1 ? <ArrowRight className="journey-arrow" size={20} /> : null}
            </div>;
          })}
        </div>
      </section>

      <section className="highlights-section section-pad">
        <div className="highlights-heading">
          <SectionHeading eyebrow="A MEETING OF MINDS" title="Where ideas move forward." />
          <span className="section-index">01 <i /> CONFERENCE HIGHLIGHTS</span>
        </div>
        <div className="highlights-grid">
          {highlights.map(({ icon: Icon, text }, index) => (
            <article className="highlight-item" key={text}>
              <span className="highlight-index">0{index + 1}</span>
              <Icon className="highlight-icon" size={24} strokeWidth={1.5} />
              <p>{text}</p>
              <span className="highlight-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-top section-pad">
          <div className="about-image-wrap">
            <img src={iitJubilee.url} alt="IIT Kharagpur Platinum Jubilee emblem" />
            <div className="image-caption"><span>75 YEARS OF EXCELLENCE</span><span>1951 — 2027</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="THE INSTITUTE" title="A legacy of ideas. A future in motion." />
            <p>Established in 1951, the Indian Institute of Technology Kharagpur (IIT KGP) is the first and one of the most prestigious IITs in India. Recognized as an Institute of National Importance, it has pioneered education and research in science, engineering, technology, management, and social sciences.</p>
            <p>Its world-class laboratories, research centres, and facilities drive advances from sustainable energy and climate science to artificial intelligence and space technology.</p>
            <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noreferrer" className="text-link">Discover IIT Kharagpur <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="about-meet section-pad">
          <div className="meet-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> THE CONFERENCE</span>
            <h2>Know IPT Meet <span>2027</span></h2>
          </div>
          <div className="meet-copy">
            <p>IPT Meet 2027 brings together researchers, academicians, industry leaders, policymakers, patent agents, legal practitioners, entrepreneurs, and students to deliberate on emerging technologies, intellectual property, innovation, and technology transfer.</p>
            <p>The conference creates a multidisciplinary platform to exchange ideas, present research, explore policy challenges, and foster meaningful collaboration across academia, industry, government, and innovation ecosystems.</p>
          </div>
          <div className="composition">
            <div className="composition-head"><span>WHO WILL BE THERE</span><span>01 — 04</span></div>
            <div className="composition-grid">
              {stakeholders.map(({ title, detail, icon: Icon }, index) => (
                <article className="composition-item" key={title}>
                  <span className="composition-number">0{index + 1}</span>
                  <Icon size={22} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cfp-section section-pad" id="cfp">
        <div className="cfp-heading-row">
          <SectionHeading eyebrow="CALL FOR PAPERS" title="Bring your research into the conversation." note="IPT Meet 2027 invites contributions on innovation, intellectual property, emerging technologies, and technology transfer." />
          <div className="cfp-mark"><Microscope size={33} strokeWidth={1.25} /><span>RESEARCH<br />MEETS IMPACT</span></div>
        </div>
        <div className="format-row"><span className="format-label">ACCEPTED FORMATS</span>{paperFormats.map((format) => <span className="format-chip" key={format}><Check size={13} />{format}</span>)}</div>
        <div className="tracks-head">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> RESEARCH AREAS</span><h3>Conference tracks</h3></div>
          <label className="track-search"><Search size={17} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tracks" aria-label="Search conference tracks" />{query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={15} /></button> : null}</label>
        </div>
        <p className="tracks-note">The list is indicative, not exhaustive. Related contributions are welcome.</p>
        <div className="tracks-grid">
          {filteredTracks.map((track, index) => <article className="track-item" key={track}><span>{String(tracks.indexOf(track) + 1).padStart(2, "0")}</span><p>{track}</p><ArrowRight size={15} /></article>)}
          {"much more".includes(query.trim().toLowerCase()) || query.trim() === "" ? <article className="track-item track-more"><span>+</span><p>&amp; much more<br /><small>Cross-disciplinary submissions welcome</small></p><ArrowRight size={15} /></article> : null}
          {filteredTracks.length === 0 && !"much more".includes(query.trim().toLowerCase()) ? <p className="no-tracks">No tracks found. Try a broader keyword.</p> : null}
        </div>
        <div className="submission-note"><div className="submission-icon"><FileText size={22} /></div><div><span>SUBMISSION GUIDELINES</span><p>Detailed submission guidelines, formatting templates, and abstract submission portal links will be announced in the forthcoming conference brochure.</p></div><ChevronDown size={18} /></div>
      </section>

      <section className="dates-section" id="dates-registration">
        <div className="dates-inner section-pad">
          <div className="dates-top">
            <SectionHeading eyebrow="MARK YOUR CALENDAR" title="Important dates" note="Plan ahead for IPT Meet 2027 at IIT Kharagpur." />
            <span className="dates-year">2026 <i /> 2027</span>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            {milestones.map((item, index) => <article className={`milestone${index === 0 ? " milestone-live" : ""}`} key={item.label}>
              <span className="milestone-node">{index === 0 ? <span /> : <span>{String(index + 1).padStart(2, "0")}</span>}</span>
              {item.status ? <span className="milestone-status"><span className="live-dot" />{item.status}</span> : null}
              <time>{item.date}</time>
              <h3>{item.label}</h3>
            </article>)}
          </div>
          <div className="registration-band">
            <div className="registration-invite"><span className="eyebrow"><span className="eyebrow-dot" /> JOIN THE DIALOGUE</span><h3>Join us.<br /><em>Be part of what’s next.</em></h3><p>Be part of a multidisciplinary dialogue shaping the future of innovation, intellectual property, and technology transfer.</p></div>
            <div className="registration-status"><span className="status-icon"><Clock3 size={22} /></span><span className="status-label">REGISTRATION</span><h4>Details forthcoming</h4><p>Registration fee tiers and the registration link will be announced in the forthcoming conference brochure.</p><span className="status-coming"><span /> Registration opening soon</span></div>
          </div>
        </div>
      </section>

      <section className="leadership-section section-pad" id="leadership">
        <div className="leadership-head">
          <SectionHeading eyebrow="PEOPLE & PARTNERSHIPS" title="A collective endeavour." note="The conference brings together leading academic and research institutions, government and policy organisations, industry associations, professional bodies, and international collaborators." />
          <div className="leadership-icon"><Handshake size={37} strokeWidth={1.2} /></div>
        </div>
        <div className="leadership-grid">
          {leadershipGroups.map((group, index) => <article className="leadership-item" key={group}><span>0{index + 1}</span><h3>{group}</h3><p>Details will be announced in the forthcoming conference brochure.</p><span className="leadership-pending">TO BE ANNOUNCED</span></article>)}
        </div>
        <div className="leadership-footer"><Atom size={18} /><p>Invited speakers, organising committee, and collaborating institutions will be shared as details are confirmed.</p></div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-top section-pad">
          <div className="contact-title"><span className="eyebrow"><span className="eyebrow-dot" /> GET IN TOUCH</span><h2>Let’s continue<br /><em>the conversation.</em></h2></div>
          <div className="contact-detail">
            <span className="contact-label">CONFERENCE ENQUIRIES</span>
            <a className="contact-email" href="mailto:iitexecutiveprogramme@gmail.com"><Mail size={18} /> iitexecutiveprogramme@gmail.com</a>
            {contactPeople.map((person) => <a className="contact-phone" key={person.name} href={person.href}><Phone size={15} /><span>{person.name}</span><span>{person.phone}</span></a>)}
          </div>
          <div className="contact-detail address-detail">
            <span className="contact-label">HOST INSTITUTE</span>
            <p><MapPin size={18} /> Indian Institute of Technology Kharagpur<br />Kharagpur, West Bengal, India<br />Pincode: 721302</p>
            <a href="https://www.iitkgp.ac.in/" target="_blank" rel="noreferrer" className="contact-website">www.iitkgp.ac.in <ArrowRight size={15} /></a>
          </div>
        </div>
        <div className="footer-bottom section-pad">
          <a className="footer-brand" href="#home"><img src={iptLogo.url} alt="IPT Meet 2027" /></a>
          <span>25–27 February 2027 · IIT Kharagpur</span>
          <a className="back-top" href="#home">Back to top <ArrowDown size={15} /></a>
        </div>
      </footer>

      <a className="floating-brochure" href="/downloads/ipt-meet-2027-concept-note.pdf" download aria-label="Download conference concept note"><Download size={18} /><span>Concept note</span></a>
    </main>
  );
}