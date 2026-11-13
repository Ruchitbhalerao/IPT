import { createFileRoute } from "@tanstack/react-router";

import { ConferenceSite } from "@/components/conference-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPT Meet 2027 | IIT Kharagpur" },
      {
        name: "description",
        content:
          "Join IPT Meet 2027, the international conference on innovation, intellectual property, and technology transfer at IIT Kharagpur, 25–27 February 2027.",
      },
      { property: "og:title", content: "IPT Meet 2027 | IIT Kharagpur" },
      {
        property: "og:description",
        content:
          "Challenges and Opportunities in Emerging Technologies. From Ideas to Impact, 25–27 February 2027 at IIT Kharagpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConferenceSite,
});
