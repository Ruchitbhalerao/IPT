import { createFileRoute } from "@tanstack/react-router";

import { ConferenceSite } from "@/components/conference-site";
import { SOCIAL_LINKS } from "@/lib/social-links";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "IPT Meet 2027",
  description:
    "International Conference on Innovation, Intellectual Property & Technology Transfer",
  startDate: "2027-02-25",
  endDate: "2027-02-27",
  location: {
    "@type": "Place",
    name: "IIT Bombay",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Kharagpur",
    url: "https://www.iitkgp.ac.in/",
  },
  sameAs: SOCIAL_LINKS.map((link) => link.url),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPT Meet 2027 | IIT Kharagpur" },
      {
        name: "description",
        content:
          "Join IPT Meet 2027, the international conference on innovation, intellectual property, and technology transfer at IIT Bombay, 25–27 February 2027.",
      },
      { property: "og:title", content: "IPT Meet 2027 | IIT Kharagpur" },
      {
        property: "og:description",
        content:
          "Challenges and Opportunities in Emerging Technologies. From Ideas to Impact, 25–27 February 2027 at IIT Bombay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { "script:ld+json": structuredData },
    ],
  }),
  component: ConferenceSite,
});
